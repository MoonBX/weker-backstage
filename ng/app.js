/**
 * Created by zhongyuqiang on 16/5/9.
 */

'use strict';

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'mgcrea.ngStrap.datepicker',
  'ui.select2',
  'ngAnimate',
  //'smart-table',
  'ngTable',
  'mainMdl',
  'customerMdl',
  'orderMdl',
  'serviceMdl',
  'configMdl',
  'logMdl',
  'accountMdl',
  'customerApi'
]);

angular.module('app')
  .config(config)
  .run(initConfig);

function initConfig( uiSelect2Config){
  uiSelect2Config.minimumResultsForSearch = -1;
}



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
    .state('order', {
      url: "/order",
      templateUrl: "views/order/home.html",
      controller: "orderCtrl",
      controllerAs: "orderVm"
    })
    .state('order.receipt', {
      url: '/receipt',
      templateUrl: "views/order/receipt.html",
      controller: "orderCtrl",
      controllerAs: "orderVm"
    })
    .state('order.validate', {
      url: '/validate',
      templateUrl: 'views/order/validate.html',
      controller: "orderCtrl",
      controllerAs: "orderVm"
    })
    .state('service', {
      url: '/service',
      templateUrl: 'views/service/home.html',
      controller: "serviceCtrl",
      controllerAs: "serviceVm"
    })
    .state('service.setup', {
      url: '/setup',
      templateUrl: 'views/service/setup.html',
      controller: "serviceCtrl",
      controllerAs: "serviceVm"
    })
    .state('config', {
      url: '/config',
      templateUrl: 'views/config/home.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.banner', {
      url: '/banner',
      templateUrl: 'views/config/banner.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.carousel', {
      url: '/carousel',
      templateUrl: 'views/config/carousel.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.proto', {
      url: '/proto',
      templateUrl: 'views/config/proto.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.active', {
      url: '/activity',
      templateUrl: 'views/config/activity.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.push', {
      url: '/push',
      templateUrl: 'views/config/push.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.appLaunch', {
      url: '/appLaunch',
      templateUrl: 'views/config/appLaunch.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('config.upgrade', {
      url: '/upgrade',
      templateUrl: 'views/config/upgrade.html',
      controller: "configCtrl",
      controllerAs: "configVm"
    })
    .state('log', {
      url: '/log',
      templateUrl: 'views/log/home.html',
      controller: "logCtrl",
      controllerAs: "logVm"
    })
    .state('log.record', {
      url: '/record',
      templateUrl: 'views/log/record.html',
      controller: "logCtrl",
      controllerAs: "logVm"
    })
    .state('account', {
      url: '/account',
      templateUrl: 'views/account/home.html',
      controller: "accountCtrl",
      controllerAs: "accountVm"
    })
    .state('account.update', {
      url: '/update',
      templateUrl: 'views/account/update.html',
      controller: "accountCtrl",
      controllerAs: "accountVm"
    })


  //$sceDelegateProvider.resourceUrlWhitelist([
  //  // Allow same origin resource loads.
  //  'self',
  //  // Allow loading from our assets domain.  Notice the difference between * and **.
  //  'http://dreamtown.huicye.com:3001/**',
  //  'http://115.159.110.95:3002/**'
  //]);
}