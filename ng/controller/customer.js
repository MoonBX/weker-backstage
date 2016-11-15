/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl)
  .controller('customer.addCtrl', addCtrl)
  .controller('customer.detailCtrl', ctDetailCtrl)
  .controller('customer.rejectCtrl', rejectCtrl);

function customerCtrl($scope, $filter, $modal, appSrv, NgTableParams){
  var customerVm = this;

  customerVm.switchTabNav = switchTabNav;
  customerVm.openModal = openModal;
  customerVm.updateFilteredList = updateFilteredList;
  customerVm.currentNav = {};

  customerVm.serverFilterList = customerVm.serverList = appSrv.getProduct();
  customerVm.infoList = appSrv.getInfoList();
  customerVm.navGroup = [
    { sref: 'customer.manage', path: '/customer/manage', title: '客户管理', isActive: true },
    { sref: 'customer.verify', path: '/customer/verify', title: '客户审批', isActive: false }
  ];
  var mAttr = [
    {state: 'pending', state_title: '待审批', class: 'text-warning', option: ['修改']},
    {state: 'failing', state_title: '未通过审批', class: 'text-danger', option: ['修改']},
    {state: 'approve', state_title: '通过审批', class: 'text-success', option: ['录入订单']},
    {state: 'uncommitted', state_title: '未提交', class: 'text-danger', option: ['修改', '提交审批']}
  ];
  var vAttr = [
    {state: 'pending', state_title: '待审批', class: 'text-warning', option: ['通过', '拒绝']},
    {state: 'failing', state_title: '未通过审批', class: 'text-danger', option: []},
    {state: 'approve', state_title: '通过审批', class: 'text-success', option: []},
    {state: 'uncommitted', state_title: '未通过签收', class: 'text-danger', option: []}
  ];

  checkUrl();
  appSrv.setExtraAttr(customerVm.serverList, mAttr, 'customerM_state');
  appSrv.setExtraAttr(customerVm.serverList, vAttr, 'customerV_state');


  customerVm.tableParams = new NgTableParams(
    { count: 7 },
    { counts: [5], dataset: customerVm.serverFilterList}
  );

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

  function updateFilteredList(query) {
    customerVm.serverFilterList = $filter("filter")(customerVm.serverList, query);
    customerVm.tableParams = new NgTableParams(
      { count: 7 },
      { counts: [5], dataset: customerVm.serverFilterList}
    );
  }

  //$scope.$watch('customerVm.serverFilterList', loginStateChange);

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

function ctDetailCtrl($modalInstance, customerSrv){
  var detailVm = this;
  detailVm.cancel = cancel;
  detailVm.result = customerSrv.getSingleItem();
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