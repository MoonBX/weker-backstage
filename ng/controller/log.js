/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('logMdl', [])
  .controller('logCtrl', logCtrl)

function logCtrl($location){
  var logVm = this;
  logVm.infoList = {
    group: [
      {sref: 'log.record', path:'/log/record', title: '登陆日志', isActive: true}
    ]
  }

  logVm.switchTabNav = switchTabNav;

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = logVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      logVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        logVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    logVm.currentNav = logVm.infoList.group[index];
    for(var i=0;i<logVm.infoList.group.length;i++){
      if(index != i)
        logVm.infoList.group[i].isActive = false;
      logVm.currentNav.isActive = true;
    }
  }
}