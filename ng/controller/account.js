/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('accountMdl', [])
  .controller('accountCtrl', accountCtrl)

function accountCtrl($location){
  var accountVm = this;
  accountVm.infoList = {
    group: [
      {sref: 'account.update', path:'/account/update', title: '修改密码', isActive: true}
    ]
  }
  accountVm.switchTabNav = switchTabNav;

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = accountVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      accountVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        accountVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    accountVm.currentNav = accountVm.infoList.group[index];
    for(var i=0;i<accountVm.infoList.group.length;i++){
      if(index != i)
        accountVm.infoList.group[i].isActive = false;
      accountVm.currentNav.isActive = true;
    }
  }
}