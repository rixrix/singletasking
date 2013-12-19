var taskApp = angular.module('taskApp.services',[]);

/**
 * The PouchDB factory
 */
taskApp.factory('db', [function(){
    PouchDB.enableAllDbs = true;
    return new PouchDB('singleTaskingDB');
}]);