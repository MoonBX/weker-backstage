/**
 * Created by zhongyuqiang on 16/11/17.
 */
angular.module('deviceMdl', [])
  .controller('deviceCtrl', deviceCtrl)
  .controller('device.repairCtrl', repairCtrl);

function deviceCtrl($filter, $modal, appSrv, deviceSrv, NgTableParams){
  var deviceVm = this;
  deviceVm.navGroup = [
    {sref: 'device.info', path:'/device/info', title: '设备信息', isActive: true},
    {sref: 'device.maintain', path:'/device/maintain', title: '维修列表', isActive: false}
  ];
  deviceVm.infoList = appSrv.getInfoList();
  deviceVm.serverFilterList = deviceVm.serverList = deviceSrv.getDeviceList();
  deviceVm.currentNav = {};

  deviceVm.switchTabNav = switchTabNav;
  deviceVm.updateFilteredList = updateFilteredList;
  deviceVm.updateFilteredListDate = updateFilteredListDate;
  deviceVm.openModal = openModal;
  deviceVm.changePage = changePage;

  deviceVm.tableParams = new NgTableParams(
    { count: 7 },
    { counts: [5], dataset: deviceVm.serverFilterList}
  );

  checkUrl();

  function changePage(nextPage){
    deviceVm.tableParams.page(nextPage);
  }

  function checkUrl(){
    appSrv.checkUrl(deviceVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(deviceVm.currentNav, deviceVm.navGroup, index);
  }

  function updateFilteredListDate(date){
    var currentDate = new Date(date);
    var newDate = formatDate(currentDate);
    deviceVm.serverFilterList = $filter("filter")(deviceVm.serverList, newDate);
    deviceVm.tableParams = new NgTableParams(
      { count: 7 },
      { counts: [5], dataset: deviceVm.serverFilterList}
    );
  }

  function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  }

  function updateFilteredList(query) {
    deviceVm.serverFilterList = $filter("filter")(deviceVm.serverList, query);
    deviceVm.tableParams = new NgTableParams(
      { count: 7 },
      { counts: [5], dataset: deviceVm.serverFilterList}
    );
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/device/' + template + '.html',
      controller: controller,
      size: 'sm'
    })
  }

}

function repairCtrl($modalInstance){
  var repairVm = this;

  repairVm.step = {one: true, two: false, three: false};
  repairVm.finishStep = finishStep;
  repairVm.cancel = cancel;

  function finishStep(target){
    if(target!='over'){
      for(var item in repairVm.step){
        repairVm.step[item] = false
      }
      repairVm.step[target] = true;
    }else{
      cancel()
    }
  }

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}