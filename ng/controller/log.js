/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('logMdl', [])
  .controller('logCtrl', logCtrl)

function logCtrl(appSrv, NgTableParams){
  var logVm = this;
  logVm.infoList = {
    group: [
      {sref: 'log.record', path:'/log/record', title: '登陆日志', isActive: true}
    ]
  };
  var serverList = [
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
    {loginTime: '2016-02-12', loginAccount: 'abcccbb', ip: '192.168.1.1', place: '浙江省'},
  ]

  logVm.switchTabNav = switchTabNav;
  logVm.currentNav = {};
  logVm.tableParams = new NgTableParams({ count: 7 }, { counts: [5], dataset: serverList});

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(logVm.infoList.group);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(logVm.currentNav, logVm.infoList.group, index);
  }
}