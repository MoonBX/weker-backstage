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

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = accountVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      if(path === arr[i].path){
        arr[i].isActive = true
      }
      arr[i].isActive = false;
    }
  }

  accountVm.switchTabNav = switchTabNav;

  function switchTabNav(index){
    accountVm.currentNav = accountVm.infoList.group[index];
    for(var i=0;i<accountVm.infoList.group.length;i++){
      if(index != i)
        accountVm.infoList.group[i].isActive = false;
      accountVm.currentNav.isActive = true;
    }
  }
}