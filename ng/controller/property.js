/**
 * Created by zhongyuqiang on 16/11/17.
 */
angular.module('propertyMdl', [])
  .controller('propertyCtrl', propertyCtrl)
  .controller('property.addCtrl', addCtrl);

function propertyCtrl($modal, appSrv){
  var propertyVm = this;
  propertyVm.navGroup = [
    {sref: 'property.village', path:'/property/village', title: '小区管理', isActive: true}
  ];
  propertyVm.infoList = appSrv.getInfoList();
  propertyVm.openModal = openModal;

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(propertyVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(propertyVm.currentNav, propertyVm.navGroup, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/property/' + template + '.html',
      controller: controller
    })
  }
}

function addCtrl($modalInstance){
  var addVm = this;
}