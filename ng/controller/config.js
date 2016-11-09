/**
 * Created by zhongyuqiang on 16/11/9.
 */
configCtrl
angular.module('configMdl', [])
  .controller('configCtrl', configCtrl)

function configCtrl($location){
  var configVm = this;
  configVm.infoList = {
    group: [
      {sref: 'config.banner', path: '/config/banner', title: 'PC广告图', isActive: true},
      {sref: 'config.carousel', path: '/config/carousel', title: 'PC轮播图', isActive: false},
      {sref: 'config.proto', path: '/config/proto', title: '协议配置', isActive: false},
      {sref: 'config.active', path: '/config/active', title: '活动配置', isActive: false},
      {sref: 'config.push', path: '/config/push', title: '推送配置', isActive: false},
      {sref: 'config.launch', path: '/config/launch', title: '启动页配置', isActive: false},
      {sref: 'config.update', path: '/config/update', title: '固件更新推送', isActive: false},
    ]
  }

  configVm.switchTabNav = switchTabNav;

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = configVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      configVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        configVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    configVm.currentNav = configVm.infoList.group[index];
    for(var i=0;i<configVm.infoList.group.length;i++){
      if(index != i)
        configVm.infoList.group[i].isActive = false;
      configVm.currentNav.isActive = true;
    }
  }
}