/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl)
  .controller('customer.addCtrl', addCtrl)
  .controller('customer.detailCtrl', ctDetailCtrl)
  .controller('customer.rejectCtrl', rejectCtrl);

function customerCtrl($filter, $modal, appSrv, NgTableParams){
  var customerVm = this;

  customerVm.switchTabNav = switchTabNav;
  customerVm.openModal = openModal;
  customerVm.currentNav = {};

  customerVm.serverList = appSrv.getProduct();
  customerVm.infoList = appSrv.getInfoList();
  customerVm.navGroup = [
    { sref: 'customer.manage', path: '/customer/manage', title: '客户管理', isActive: true },
    { sref: 'customer.verify', path: '/customer/verify', title: '客户审批', isActive: false }
  ];
  customerVm.tableParams = new NgTableParams(
    { count: 7 },
    { counts: [5], dataset: customerVm.serverList}
  );

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(customerVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(customerVm.currentNav, customerVm.navGroup, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/customer/' + template + '.html',
      controller: controller
    })
  }

}

function addCtrl($modalInstance, $timeout, appSrv, toastr){
  var addVm = this;
  addVm.infoList = appSrv.getInfoList();

  addVm.cancel = cancel;
  addVm.save = save;
  addVm.getAddress = getAddress;

  getAddress();

  function getAddress(){
    appSrv.getAddress().then(function(data){
      addVm.addressList = data[0];
    });
  }

  function save(){
    toastr.success('保存成功');
    $timeout(function(){
      $modalInstance.dismiss('cancel');
    },1000)

  }
  function cancel(){
    $modalInstance.dismiss('cancel');
  }

}

function ctDetailCtrl($modalInstance){
  var detailVm = this;
  detailVm.cancel = cancel;
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
  }];
  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}

function rejectCtrl($modalInstance){
  var rejectVm = this;
  rejectVm.cancel = cancel;
  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}