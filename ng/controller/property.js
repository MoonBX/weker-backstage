/**
 * Created by zhongyuqiang on 16/11/17.
 */
angular.module('propertyMdl', [])
  .controller('propertyCtrl', propertyCtrl)
  .controller('property.addCtrl', addCtrl)
  .controller('property.dispatchCtrl', dispatchCtrl);

function propertyCtrl($modal, appSrv, propertySrv){
  var propertyVm = this;
  propertyVm.navGroup = [
    {sref: 'property.village', path:'/property/village', title: '小区管理', isActive: true}
  ];
  propertyVm.infoList = appSrv.getInfoList();
  propertyVm.openModal = openModal;
  propertyVm.getVillageList = getVillageList;

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(propertyVm.navGroup);
    getVillageList(1,7);
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

  function getVillageList(pageNo, limit){
    propertySrv.getVillageList(pageNo, limit).then(function(res){
      console.log(res);
    }, function(err){
      console.log(err);
    })
  }
}

function addCtrl($modalInstance, toastr, $timeout, propertySrv){
  var addVm = this;

  addVm.cancel = cancel;
  addVm.save = save;
  addVm.getProvince = getProvince;
  addVm.getCities = getCities;
  addVm.getDistricts = getDistricts;
  addVm.address = {};
  addVm.formList = {};

  getProvince();
  function getProvince(){
    propertySrv.getProvince().then(function(res){
      addVm.address.province = res.data;
      console.log(addVm.address.province);
    })
  }

  function save(obj) {
    toastr.success('保存成功');
    propertySrv.createVillage(obj).then(function(res){
      console.log(res);
      $timeout(function () {
        $modalInstance.dismiss('cancel');
      }, 1000)
    }, function(err){
      console.log(err);
    });

  }

  function getCities(id){
    propertySrv.getCities(id).then(function(res){
      console.log(res.data);
      addVm.address.cities = res.data;
    }, function(err){
      console.log(err)
    })
  }

  function getDistricts(id){
    propertySrv.getDistricts(id).then(function(res){
      console.log(res.data);
      addVm.address.districts = res.data;
    }, function(err){
      console.log(err)
    })
  }

  function cancel(){
    var a = document.getElementById('province');
    console.log(a.innerText);
    $modalInstance.dismiss('cancel');
  }
}

function dispatchCtrl($modalInstance, toastr, $timeout, propertySrv){
  var dispatchVm = this;

  dispatchVm.cancel = cancel;
  dispatchVm.save = save;

  function save(obj) {
    obj.communityId = 1;
    toastr.success('保存成功');
    console.log(obj);
    propertySrv.dispatch(obj).then(function(res){
      console.log(res);
      $timeout(function () {
        $modalInstance.dismiss('cancel');
      }, 1000)
    }, function(err){
      console.log(err);
    });

  }

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}