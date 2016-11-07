/**
 * Created by zhongyuqiang on 16/5/9.
 */
'use strict';

angular.module('mainMdl', [])
  .controller('mainCtl', mainCtl);

mainCtl.$inject = ['$scope'];
function mainCtl($scope) {
  var mainVm = this;
  mainVm.asideArr = [
    {title: '客户管理', subTitle:'Customer Management', icon: 'user', path: '', isActive: true},
    {title: '订单管理', subTitle:'Orders Management', icon: '', path: '', isActive: false},
    {title: '售后服务', subTitle:'After-sales Service', icon: '', path: '', isActive: false},
    {title: '配置管理', subTitle:'Configure Management', icon: '', path: '', isActive: false},
    {title: '用户反馈', subTitle:'User Feedback', icon: '', path: '', isActive: false},
    {title: '图片上传', subTitle:'Picture Upload', icon: '', path: '', isActive: false},
    {title: '登陆日志', subTitle:'Login log', icon: '', path: '', isActive: false},
    {title: '账号管理', subTitle:'Account Management', icon: '', path: '', isActive: false},
  ];
  mainVm.currentNav = {};
  mainVm.asideCollapse = false;

  mainVm.switchNavItem = switchNavItem;

  function switchNavItem(index){
    mainVm.currentNav = mainVm.asideArr[index];
    for(var i=0;i<mainVm.asideArr.length;i++){
      if(index != i)
        mainVm.asideArr[i].isActive = false;
      mainVm.currentNav.isActive = true;
    }
  }
}