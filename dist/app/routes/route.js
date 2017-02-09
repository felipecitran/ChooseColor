app.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
        templateUrl : 'app/views/about.html',
        controller  : 'AboutCtrl',
    })

    .when('/contact', {
        templateUrl : 'app/views/contact.html',
        controller  : 'ContactCtrl',
    })
      .when('/blue', {
        templateUrl : 'app/views/blue.html',
        controller  : 'BlueCtrl',
    })
  .when('/green', {
        templateUrl : 'app/views/green.html',
        controller  : 'GreenCtrl',
    })
     .when('/red', {
        templateUrl : 'app/views/red.html',
        controller  : 'Redtrl',
    })
     .when('/yellow', {
        templateUrl : 'app/views/yellow.html',
        controller  : 'yellowCtrl',
    })
    .otherwise ({ redirectTo: '/' });
});