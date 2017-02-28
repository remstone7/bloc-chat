(function() {
    //configure paths
     function config($stateProvider, $locationProvider) {
          
         // Configure the app's path
         $locationProvider
            .html5Mode({
                // Disables #! routes
                enabled: true,
                // helps avoids $location error
                requireBase: false
         });
         
         // Setup the template routes
         $stateProvider
             .state('home', {
                 url: '/',
                 // alias the contorller name 
                 controller: 'HomeCtrl',
                 templateUrl: '/templates/home.html'
             });
     }
    
    // set up Module
     angular
         .module('blocChat', ["ui.router", "firebase", "ui.bootstrap"])
         .config(config);
 })();