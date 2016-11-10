/**
 * Created by zhongyuqiang on 16/5/9.
 */

'use strict';

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ui.select2',
  'smart-table',
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

function initConfig($rootScope, $location, uiSelect2Config){
  uiSelect2Config.minimumResultsForSearch = -1;
  $rootScope.asideArr = [
    {title: '客户管理', subTitle:'Customer Management', icon: 'user', sref: 'customer.manage', path: '/customer/manage', isActive: true},
    {title: '订单管理', subTitle:'Orders Management', icon: '', sref: 'order.receipt', path: '/customer/receipt', isActive: false},
    {title: '售后服务', subTitle:'After-sales Service', icon: '', sref: 'service.setup', path: '/customer/setup', isActive: false},
    {title: '配置管理', subTitle:'Configure Management', icon: '', sref: 'config.banner', path: '/customer/banner', isActive: false},
    //{title: '用户反馈', subTitle:'User Feedback', icon: '', sref: '', isActive: false},
    //{title: '图片上传', subTitle:'Picture Upload', icon: '', sref: '', isActive: false},
    {title: '登陆日志', subTitle:'Login log', icon: '', sref: 'log.record', path: '/customer/record', isActive: false},
    {title: '账号管理', subTitle:'Account Management', icon: '', sref: 'account.update', path: '/customer/update', isActive: false},
  ];
  //$rootScope.$on("$locationChangeSuccess", function () {
  //  console.log('aa')
  //  checkUrl()
  //})
  function checkUrl(){
    var path = $location.path();
    var arr = $rootScope.asideArr;
    for(var i=0;i<arr.length;i++){
      $rootScope.asideArr[i].isActive = false;
      if(path === arr[i].path){
        console.log($rootScope.asideArr[i])
        $rootScope.asideArr[i].isActive = true
      }
    }
  }
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