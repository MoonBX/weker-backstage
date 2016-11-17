/**
 * Created by zhongyuqiang on 16/11/17.
 */
angular.module('propertyMdl', [])
  .controller('propertyCtrl', propertyCtrl);

function propertyCtrl(appSrv){
  var propertyVm = this;
  propertyVm.navGroup = [
    {sref: 'property.village', path:'/property/village', title: '小区管理', isActive: true}
  ];
  propertyVm.infoList = appSrv.getInfoList();

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(propertyVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(propertyVm.currentNav, propertyVm.navGroup, index);
  }
}