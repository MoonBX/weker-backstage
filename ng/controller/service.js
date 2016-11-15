/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('serviceMdl', [])
  .controller('serviceCtrl', serviceCtrl)
  .controller('service.detailCtrl', svDetailCtrl);

function serviceCtrl($modal, $filter, appSrv, NgTableParams){
  var serviceVm = this;
  serviceVm.navGroup = [
    {sref: 'service.setup', path:'/service/setup', title: '安装跟进', isActive: true}
  ];
  var attr = [
    {state: 'shipped', state_title: '已出货', class: 'text-success', option: ['安装']},
    {state: 'installing', state_title: '安装中', class: 'text-warning', option: ['详情', '修改']},
    {state: 'installed', state_title: '已安装', class: 'text-success', option: ['详情']}
  ];
  serviceVm.serverFilterList = serviceVm.serverList = appSrv.getProduct();
  serviceVm.infoList = appSrv.getInfoList();
  serviceVm.currentNav = {};

  serviceVm.switchTabNav = switchTabNav;
  serviceVm.openModal = openModal;
  serviceVm.updateFilteredList = updateFilteredList;
  serviceVm.tableParams = new NgTableParams(
    { count: 7 },
    { counts: [5], dataset: serviceVm.serverFilterList}
  );


  checkUrl();
  appSrv.setExtraAttr(serviceVm.serverList, attr, 'service_state');

  function checkUrl(){
    appSrv.checkUrl(serviceVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(serviceVm.currentNav, serviceVm.navGroup, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/service/' + template + '.html',
      controller: controller
    })
  }

  function updateFilteredList(query) {
    serviceVm.serverFilterList = $filter("filter")(serviceVm.serverList, query);
    serviceVm.tableParams = new NgTableParams(
      { count: 7 },
      { counts: [5], dataset: serviceVm.serverFilterList}
    );
  }
}

function svDetailCtrl($modalInstance, appSrv){
  var detailVm = this;
  detailVm.result = [{
    name: 'zzyq',
    phone: '15757118202',
    type: '企业用户',
    channel: '淘宝',
    product: 'Weker W1',
    state: '待审批',
    direction: '右内',
    sohe: '有',
    amount: 10,
    width: 12,
    height: 24,
    remark: '备注备注备注备注备注备注备注备注备注备注备注备注',
    receiveAddr: '浙江省杭州市余杭区五常大道',
    receiveDetailAddr: '西溪花园竞舟苑1单元',
    postAddr: '浙江省杭州市余杭区五常大道',
    postDetailAddr: '西溪花园竞舟苑1单元',
    date: '2016-11-09 11:11:11'
  }]

  detailVm.infoList = appSrv.getInfoList();

  detailVm.cancel = cancel;

  getAddress();

  function getAddress(){
    appSrv.getAddress().then(function(data){
      detailVm.addressList = data[0];
    });
  }

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}