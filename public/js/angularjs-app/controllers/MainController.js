var taskApp = angular.module('taskApp.controllers', []);

taskApp.controller('MainController', ['$scope', '$http', '$timeout', 'db', function($scope, $http, $timeout, db){
    $scope.list = [];
    $scope.tmpTaskContainer = [];
    $scope.inProgressId = null;

    $scope.tasks = function() {
        db.allDocs({include_docs:true}, function(error, doc){
            $scope.$apply(function(){
                angular.forEach(doc.rows, function(task, key){
                   $scope.list.push(task.doc);
                });
            });
        });
    }
    $scope.tasks();

    /**
     * Adds a new task
     *
     * @param string    task name
     */
    $scope.add = function(task) {
        var _doc = {
            name: task,
            start_date: new Date().getTime(),
            end_date: null,
            duration: null
        };

        db.post(_doc, function(err, doc){
            db.get(doc.id, function(err, doc){
                $scope.$apply(function(){
                    if ($scope.inProgressId) {
                        $scope.update($scope.inProgressId);
                    }
                    $scope.list.push(doc);
                    $scope.inProgressId = doc._id;
                });
            });
        });
    }

    /**
     * Removes the selected task from the list. It's also advisable to cleanup tmpTaskContainer to avoid
     * keeping of stale data
     */
    $scope.removeTasks = function() {
        if ($scope.tmpTaskContainer.length > 0) {
            var tmpTasks = [];

            angular.forEach($scope.tmpTaskContainer, function(taskId, key){
                db.get(taskId, function(err, doc){
                    db.remove(doc, function(err, doc){});
                    $scope.$apply(function(){
                        $scope.list.splice($scope.list.map(function(e){ return e._id;}).indexOf(taskId), 1);
                    });
                });
                tmpTasks.push(taskId);
            });

            // cleanup temporary task container
            angular.forEach(tmpTasks, function(taskId, key){
                if ($scope.tmpTaskContainer.indexOf(taskId) != -1) {
                    $scope.tmpTaskContainer.splice($scope.tmpTaskContainer.indexOf(taskId));
                }
            });
        }
    }

    /**
     * Updates the temp container with the selected task ready to be removed from the list.
     *
     * @param string    task id
     */
    $scope.updateSelection = function(taskId) {
        if($scope.tmpTaskContainer.indexOf(taskId) == -1) {
            $scope.tmpTaskContainer.push(taskId);
        } else {
            $scope.tmpTaskContainer.splice($scope.tmpTaskContainer.indexOf(taskId),1);
        }
    }

    $scope.computeDuration = function(start_date, end_date) {
        var timediff = new Date(end_date - start_date);
        var seconds = Math.floor(timediff / 1000);
        var secondsPart = seconds % 60;
        var minutes = Math.floor(seconds / 60);
        var minutesPart = minutes % 60;
        var hours = Math.floor(minutes / 60);

        return hours + 'h ' + minutesPart + 'm ' + secondsPart + 's';
    }

    $scope.update = function(taskId) {
        db.get(taskId, function(err, doc){
            var start_date = new Date(doc.start_date),
                end_date = new Date().getTime();

            doc.end_date = end_date;
            doc.duration = $scope.computeDuration(doc.start_date, doc.end_date);

            db.post(doc, function(err, res){});
        });
    }

}]);

taskApp.directive('stNewtask', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            scope.$watch(attr.stNewtask, function(n, o){
                if (n != 0 && n) {
                    element[0].focus();
                }
            });

            element.bind('keydown', function(e){
                if(e.keyCode == 13) {
                    scope.$apply('add(newTask)');
                    scope.$apply('newTask=""');
                }
            });
        }
    };
});
