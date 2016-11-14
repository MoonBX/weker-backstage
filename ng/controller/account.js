/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('accountMdl', [])
  .controller('accountCtrl', accountCtrl)

function accountCtrl(appSrv){
  var accountVm = this;
  accountVm.infoList = {
    group: [
      {sref: 'account.update', path:'/account/update', title: '修改密码', isActive: true}
    ]
  };
  accountVm.switchTabNav = switchTabNav;
  accountVm.currentNav = {};

  checkUrl();
  function checkUrl(){
    appSrv.checkUrl(accountVm.infoList.group);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(accountVm.currentNav, accountVm.infoList.group, index);
  }
}