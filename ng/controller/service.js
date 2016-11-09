/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('serviceMdl', [])
  .controller('serviceCtrl', serviceCtrl)

function serviceCtrl($location){
  var serviceVm = this;
  serviceVm.infoList = {
    group: [
      {sref: 'service.setup', path:'/service/setup', title: '安装跟进', isActive: true}
    ]
  }

  serviceVm.switchTabNav = switchTabNav;

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = serviceVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      serviceVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        serviceVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    serviceVm.currentNav = serviceVm.infoList.group[index];
    for(var i=0;i<serviceVm.infoList.group.length;i++){
      if(index != i)
        serviceVm.infoList.group[i].isActive = false;
      serviceVm.currentNav.isActive = true;
    }
  }
}