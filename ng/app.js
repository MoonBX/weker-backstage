/**
 * Created by zhongyuqiang on 16/5/9.
 */

'use strict';

angular.module('app', [
  'ui.router',
  'smart-table',
  'mainMdl',
  'customerMdl'
]);

angular.module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/customer/manage');

  $stateProvider
    .state('customer', {
      url: "/customer",
      templateUrl: "views/customer/home.html",
      controller: "customerCtrl",
      controllerAs: "customerVm"
    })
    .state('customer.manage', {
      url: "/manage",
      templateUrl: 'views/customer/manage.html',
      controller: "customerCtrl",
      controllerAs: "customerVm"
    })
    .state('customer.verify', {
      url: "/verify",
      templateUrl: 'views/customer/verify.html',
      controller: "customerCtrl",
      controllerAs: "customerVm"
    })

  //$sceDelegateProvider.resourceUrlWhitelist([
  //  // Allow same origin resource loads.
  //  'self',
  //  // Allow loading from our assets domain.  Notice the difference between * and **.
  //  'http://dreamtown.huicye.com:3001/**',
  //  'http://115.159.110.95:3002/**'
  //]);
}