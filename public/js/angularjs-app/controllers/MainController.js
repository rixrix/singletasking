var taskApp = angular.module('taskApp.controllers', []);

taskApp.controller('MainController', ['$scope', '$http', '$timeout', 'taskFactory',function($scope, $http, $timeout, taskFactory){
    /* ID of in-progress task */
    $scope.currentTaskId = null;

    /* tasks container from factory */
    $scope.tasksContainer = taskFactory;

    /* temporary container for task for deletion */
    $scope.tmpTaskContainer = [];

    /**
     * Removes the selected task from the list. It's also advisable to cleanup tmpTaskCo[ntainer to avoid
     * keeping of stale data
     */
    $scope.removeTasks = function() {
        if ($scope.tmpTaskContainer.length > 0) {
            var tmpTasks = [];

            angular.forEach($scope.tmpTaskContainer, function(taskId, key){
                $scope.tasksContainer.removeItem(taskId);
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

    $scope.addTask = function(task) {
        if (task) {
            var newTaskId = $scope.tasksContainer.addItem(task);

            if ($scope.currentTaskId) {
                $scope.tasksContainer.update($scope.currentTaskId);
            }
            $scope.currentTaskId = newTaskId;
        }
    }
}]);