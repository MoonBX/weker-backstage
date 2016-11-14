/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('orderMdl', [])
  .controller('orderCtrl', orderCtrl)
  .controller('order.detailCtrl', odDetailCtrl)

function orderCtrl($modal, customerSrv, appSrv, NgTableParams){
  var orderVm = this;
  var serverList = customerSrv.getProduct();
  orderVm.infoList = {
    group: [
      {sref: 'order.receipt', path:'/order/receipt', title: '订单签收', isActive: true},
      {sref: 'order.validate', path:'/order/validate', title: '订单校验', isActive: false}
    ],
    type: ['企业用户','个人用户', '内测用户'],
    channel: ['淘宝', '代理', '招募活动'],
    product: ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'],
    state: ['待审批', '未通过审批', '通过审批', '未提交'],
  };

  orderVm.switchTabNav = switchTabNav;
  orderVm.openModal = openModal;
  orderVm.currentNav = {};
  orderVm.tableParams = new NgTableParams({ count: 7 }, { counts: [5], dataset: serverList});

  checkUrl();
  function checkUrl(){
    appSrv.checkUrl(orderVm.infoList.group);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(orderVm.currentNav, orderVm.infoList.group, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/order/' + template + '.html',
      controller: controller
    })
  }
}

function odDetailCtrl($modalInstance){
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
  detailVm.cancel = cancel;
  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}