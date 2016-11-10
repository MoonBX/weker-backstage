/**
 * Created by zhongyuqiang on 16/5/9.
 */
'use strict';

angular.module('mainMdl', [])
  .controller('mainCtl', mainCtl);

mainCtl.$inject = ['$scope', '$location', '$state'];
function mainCtl($scope, $location, $state) {
  var mainVm = this;
  mainVm.asideArr = [
    {title: '客户管理', subTitle:'Customer Management', icon: 'fa-users', sref: 'customer.manage', path: 'customer', isActive: true},
    {title: '订单管理', subTitle:'Orders Management', icon: 'fa-copy', sref: 'order.receipt', path: 'order', isActive: false},
    {title: '售后服务', subTitle:'After-sales Service', icon: 'fa-headphones', sref: 'service.setup', path: 'service', isActive: false},
    {title: '配置管理', subTitle:'Configure Management', icon: 'fa-cogs', sref: 'config.banner', path: 'config', isActive: false},
    //{title: '用户反馈', subTitle:'User Feedback', icon: '', sref: '', isActive: false},
    //{title: '图片上传', subTitle:'Picture Upload', icon: '', sref: '', isActive: false},
    {title: '登陆日志', subTitle:'Login log', icon: 'fa-file-text-o', sref: 'log.record', path: 'log', isActive: false},
    {title: '账号管理', subTitle:'Account Management', icon: 'fa-user', sref: 'account.update', path: 'account', isActive: false},
  ];
  mainVm.currentNav = {title: '客户管理', subTitle:'Customer Management', icon: 'user', sref: '', path: 'customer', isActive: true};
  mainVm.asideCollapse = false;
  mainVm.switchNavItem = switchNavItem;
  // $locationChangeSuccess: 监听路由变化事件
  $scope.$on("$locationChangeSuccess", function () {
    checkUrl();
  })

  function checkUrl(){
    var pathArr = $location.path().split('/');
    var path = pathArr[1]
    var arr = mainVm.asideArr;
    for(var i=0;i<arr.length;i++){
      mainVm.asideArr[i].isActive = false;
      if(path === arr[i].path){
        mainVm.asideArr[i].isActive = true
        mainVm.currentNav = mainVm.asideArr[i]
      }
    }
  }
  function switchNavItem(index){
    mainVm.currentNav = mainVm.asideArr[index];
    $state.go(mainVm.currentNav.sref)
    for(var i=0;i<mainVm.asideArr.length;i++){
      if(index != i)
        mainVm.asideArr[i].isActive = false;
      mainVm.currentNav.isActive = true;
    }
  }
}