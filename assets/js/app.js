angular.module('jsjedi', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/components/home/homeView.html'
            })
            $urlRouterProvider.otherwise("/")
    });
