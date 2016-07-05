angular.module('nhs')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/users');

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: 'templates/login.html'
        })
        .state('users', {
            url: "/users",
            templateUrl: "templates/users.html",
            controller: "userController"
        })
        .state('userCreate', {
            url: "/users/create",
            templateUrl: "templates/user-create.html",
            controller: "userCreate"
        })
        .state('userEdit', {
            url: "/users/:userID",
            templateUrl: "templates/user-create.html",
            controller: "userEdit"
        })
        .state('events', {
            url: "/events",
            templateUrl: "templates/events.html",
            controller: "eventsController"
        })
        .state('addEvent', {
            url: "/add/event",
            templateUrl: "templates/add-event.html",
            controller: "addEvent"
        })
        .state('eventEdit', {
            url: "/edit/event/:eventID",
            templateUrl: "templates/add-event.html",
            controller: "editEvent"
        })
        ;
}])


;