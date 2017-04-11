/**
 * Created by zhongyuqiang on 16/5/9.
 */
'use strict';

angular.module('mainMdl', [])
  .controller('mainCtl', mainCtl);

mainCtl.$inject = ['$scope', '$location', '$state', 'accountSrv'];
function mainCtl($scope, $location, $state, accountSrv) {
  var mainVm = this;
  mainVm.asideArr = [
    //{title: '客户管理', subTitle:'Customer Management', icon: 'fa-users', sref: 'customer.manage', path: 'customer', isActive: true},
    //{title: '订单管理', subTitle:'Orders Management', icon: 'fa-copy', sref: 'order.receipt', path: 'order', isActive: false},
    //{title: '售后服务', subTitle:'After-sales Service', icon: 'fa-headphones', sref: 'service.setup', path: 'service', isActive: false},
    //{title: '配置管理', subTitle:'Configure Management', icon: 'fa-cogs', sref: 'config.banner', path: 'config', isActive: false},
    //{title: '用户反馈', subTitle:'User Feedback', icon: '', sref: '', isActive: false},
    //{title: '图片上传', subTitle:'Picture Upload', icon: '', sref: '', isActive: false},
    //{title: '登陆日志', subTitle:'Login log', icon: 'fa-file-text-o', sref: 'log.record', path: 'log', isActive: false},
    //{title: '账号管理', subTitle:'Account Management', icon: 'fa-user', sref: 'account.update', path: 'account', isActive: false},
    {title: '物业管理', subTitle:'Property Management', icon: 'fa-home', sref: 'property.village', path: 'property', isActive: false},
    {title: '设备管理', subTitle:'Device Management', icon: 'fa-key', sref: 'device.info', path: 'device', isActive: false}
  ];
  mainVm.currentNav = {title: '客户管理', subTitle:'Customer Management', icon: 'user', sref: '', path: 'customer', isActive: true};
  mainVm.asideCollapse = false;
  mainVm.wekerOperateUsername = localStorage.wekerOperateUsername;
  mainVm.switchNavItem = switchNavItem;
  mainVm.login = login;
  mainVm.logout = logout;
  // $locationChangeSuccess: 监听路由变化事件
  $scope.$on("$locationChangeSuccess", function () {
    checkUrl();
    mainVm.wekerUsername = localStorage.wekerUsername;
  });

  function checkUrl(){
    var pathArr = $location.path().split('/');
    var path = pathArr[1];
    console.log(localStorage.wekerOperateToken);
    if(path == 'login'){
      mainVm.isLogin = false;
    }else{
      mainVm.isLogin = true;
      if(!localStorage.wekerOperateToken) $location.path('/login');
    }
    var arr = mainVm.asideArr;
    for(var i=0;i<arr.length;i++){
      mainVm.asideArr[i].isActive = false;
      if(path === arr[i].path){
        mainVm.asideArr[i].isActive = true;
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

  function login(obj){
    if(localStorage.wekerOperateToken){
      localStorage.removeItem('wekerOperateToken');
    }
    console.log(obj);
    accountSrv.login(obj).then(function(res){
      console.log(res);
      localStorage.wekerOperateToken = res.data.token;
      localStorage.wekerOperateUsername = res.data.userName;
      $location.path('/property/village');
    }, function(err){
      console.log(err);
    });
  }

  function logout(){
    accountSrv.logout().then(function(res){
      console.log(res);
      localStorage.removeItem('wekerOperateToken');
      localStorage.removeItem('wekerOperateUsername');
      $location.path('/login');
    },function(err){
      console.log(err);
    })
  }
}