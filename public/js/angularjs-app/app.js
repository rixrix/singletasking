
var taskApp = angular.module('taskApp', [
    'taskApp.controllers',
    'taskApp.taskFactory',
    'xeditable',
    'ngSanitize'
]);

taskApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});