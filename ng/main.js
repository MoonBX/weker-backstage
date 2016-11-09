/**
 * Created by zhongyuqiang on 16/5/9.
 */
'use strict';

angular.module('mainMdl', [])
  .controller('mainCtl', mainCtl);

mainCtl.$inject = ['$scope', '$state'];
function mainCtl($scope, $state) {
  var mainVm = this;
  mainVm.asideArr = [
    {title: '客户管理', subTitle:'Customer Management', icon: 'user', sref: 'customer.manage', path: '/customer/manage', isActive: true},
    {title: '订单管理', subTitle:'Orders Management', icon: '', sref: 'order.receipt', path: '/customer/receipt', isActive: false},
    {title: '售后服务', subTitle:'After-sales Service', icon: '', sref: 'service.setup', path: '/customer/setup', isActive: false},
    {title: '配置管理', subTitle:'Configure Management', icon: '', sref: 'config.banner', path: '/customer/banner', isActive: false},
    //{title: '用户反馈', subTitle:'User Feedback', icon: '', sref: '', isActive: false},
    //{title: '图片上传', subTitle:'Picture Upload', icon: '', sref: '', isActive: false},
    {title: '登陆日志', subTitle:'Login log', icon: '', sref: 'log.record', path: '/customer/record', isActive: false},
    {title: '账号管理', subTitle:'Account Management', icon: '', sref: 'account.update', path: '/customer/update', isActive: false},
  ];
  mainVm.currentNav = {title: '客户管理', subTitle:'Customer Management', icon: 'user', sref: '', path: '/customer/manage', isActive: true};
  mainVm.asideCollapse = false;

  mainVm.switchNavItem = switchNavItem;

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