/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('configMdl', [])
  .controller('configCtrl', configCtrl)
  .controller('config.addCtrl', addCtrl)
  .controller('config.carouselCtrl', carouselCtrl);

function configCtrl($location, $scope, $modal, appSrv){
  var configVm = this;
  configVm.infoList = {
    group: [
      {sref: 'config.banner', path: '/config/banner', title: 'PC广告图', isActive: true},
      {sref: 'config.carousel', path: '/config/carousel', title: 'PC轮播图', isActive: false},
      {sref: 'config.proto', path: '/config/proto', title: '协议配置', isActive: false},
      {sref: 'config.active', path: '/config/active', title: '活动配置', isActive: false},
      {sref: 'config.push', path: '/config/push', title: '推送配置', isActive: false},
      {sref: 'config.appLaunch', path: '/config/appLaunch', title: '启动页配置', isActive: false},
      {sref: 'config.upgrade', path: '/config/upgrade', title: '固件更新推送', isActive: false},
    ]
  };
  $scope.d = 'android';

  configVm.switchTabNav = switchTabNav;
  configVm.openModal = openModal;
  configVm.currentNav = {};

  checkUrl();
  function checkUrl(){
    appSrv.checkUrl(configVm.infoList.group);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(configVm.currentNav, configVm.infoList.group, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/config/' + template + '.html',
      controller: controller
    })
  }
}

function addCtrl($modalInstance){
  var addVm = this;
  addVm.cancel = cancel;

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}

function carouselCtrl($modalInstance){
  var carVm = this;
  carVm.cancel = cancel;

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}