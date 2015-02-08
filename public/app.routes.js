app
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controllerAs: 'main',
            controller: 'HomeCtrl'
        })
        .when('/projects', {
            templateUrl: 'components/projects/projectsView.html',
            controllerAs: 'projects',
            controller: 'ProjectsCtrl'
        })
        // .when('/spcn', {
        //     templateUrl: 'components/spcn/spcnView.html',
        //     controllerAs: 'spcn',
        //     controller: 'spcnController'
        // })
        // .when('/likes', {
        //     templateUrl: 'components/likes/likesView.html',
        //     controllerAs: 'likes',
        //     controller: 'likesController'
        // })
        .when('/connect', {
            templateUrl: 'components/connect/connectView.html',
            controllerAs: 'connect',
            controller: 'ConnectCtrl'
        })
        .otherwise({ redirectTo: '/' });;

    $locationProvider.html5Mode(true);

}]);