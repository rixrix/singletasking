var taskApp = angular.module('taskApp.taskFactory', []);

taskApp.factory('taskFactory', function(){
    var tasknames = [],
        tasknameService = {};

    /**
     * Adds a new item
     *
     * @param string    taskname
     * @returns int     new task id
     */
    tasknameService.addItem = function(task) {
        if (task) {
            var _date = new Date(),
                month = _date.getMonth() + 1;
            var _task = {
                id: _date.getTime(),
                name: task,
                start_date: _date.getDate() + '/' + month + '/' + _date.getFullYear() + ' ' + _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds(),
                end_date: "",
                total: 0
            };
            tasknames.push(_task);

            return _task.id;
        }
    }

    /**
     * Removes an item from the list.
     *
     * @param string    taskname
     */
    tasknameService.removeItem = function(taskId) {
        if (tasknames.length > 0) {
            angular.forEach(tasknames, function(task, key){
                if (taskId == task.id) tasknames.splice(key, 1);
            });
        }
    }

    /**
     * Returns the list of tasknames added by the user.
     *
     * @returns {Array} tasks
     */
    tasknameService.list = function() {
        return tasknames;
    }


    /**
     * Updates a task time end and its total
     * @param int   taskId
     */
    tasknameService.update = function(taskId) {
        try {
            angular.forEach(tasknames, function(task, key){
                if (taskId == task.id) {
                    var _date = new Date(),
                        start_date = new Date(task.id),
                        month = _date.getMonth() + 1,
                        total;

                    var timediff = new Date(_date.getTime() - start_date.getTime());
                    var seconds = Math.floor(timediff / 1000);
                    var secondsPart = seconds % 60;
                    var minutes = Math.floor(seconds / 60);
                    var minutesPart = minutes % 60;
                    var hours = Math.floor(minutes / 60);

                    task.total = hours + 'h ' + minutesPart + 'm ' + secondsPart + 's';
                    task.end_date = _date.getDate() + '/' + month + '/' + _date.getFullYear() + ' ' + _date.getHours() + ':' + _date.getMinutes() + ':' + _date.getSeconds();

                    throw "hackity exception to break loop";
                }
            });
        } catch (e) {
        }
    }

    return tasknameService;
});