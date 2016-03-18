angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.contactUs', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController.selectWebsite', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/selectWebsite.html',
        controller: 'selectWebsiteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.form', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/form.html',
        controller: 'formCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')

  

});