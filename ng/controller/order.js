/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('orderMdl', [])
  .controller('orderCtrl', orderCtrl)
  .controller('order.detailCtrl', odDetailCtrl)

function orderCtrl($modal, $filter, appSrv, NgTableParams){
  var orderVm = this;

  orderVm.serverFilterList = orderVm.serverList = appSrv.getProduct();
  orderVm.navGroup = [
    {sref: 'order.receipt', path:'/order/receipt', title: '订单签收', isActive: true},
    {sref: 'order.validate', path:'/order/validate', title: '订单校验', isActive: false}
  ];
  orderVm.infoList = appSrv.getInfoList();

  orderVm.switchTabNav = switchTabNav;
  orderVm.openModal = openModal;
  orderVm.updateFilteredList = updateFilteredList;
  orderVm.currentNav = {};
  var rAttr = [
    {state: 'pending', state_title: '待签收', class: 'text-warning', option: ['通过', '拒绝']},
    {state: 'failing', state_title: '未通过签收', class: 'text-danger', option: []},
    {state: 'approve', state_title: '通过签收', class: 'text-success', option: []}
  ];
  var vAttr = [
    {state: 'shipping', state_title: '待出货', class: 'text-warning', option: ['快递单号']},
    {state: 'shipped', state_title: '已出货', class: 'text-success', option: []}
  ];

  checkUrl();
  appSrv.setExtraAttr(orderVm.serverList, rAttr, 'orderR_state');
  appSrv.setExtraAttr(orderVm.serverList, vAttr, 'orderV_state');

  orderVm.tableParams = new NgTableParams(
    { count: 7 },
    { counts: [5], dataset: orderVm.serverFilterList}
  );

  function checkUrl(){
    appSrv.checkUrl(orderVm.navGroup);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(orderVm.currentNav, orderVm.navGroup, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/order/' + template + '.html',
      controller: controller
    })
  }

  function updateFilteredList(query) {
    orderVm.serverFilterList = $filter("filter")(orderVm.serverList, query);
    orderVm.tableParams = new NgTableParams(
      { count: 7 },
      { counts: [5], dataset: orderVm.serverFilterList}
    );
  }
}

function odDetailCtrl($modalInstance, orderSrv){
  var detailVm = this;

  detailVm.result = orderSrv.getSingleItem();

  detailVm.cancel = cancel;

  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}