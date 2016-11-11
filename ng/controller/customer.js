/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl)
  .controller('customer.addCtrl', addCtrl)
  .controller('customer.detailCtrl', ctDetailCtrl)

function customerCtrl($scope, $filter, $location, $modal, customerSrv, NgTableParams){
  var serverList = customerSrv.getProduct();
  var customerVm = this;

  customerVm.switchTabNav = switchTabNav;
  customerVm.openModal = openModal;
  customerVm.currentNav = {};
  //smart-table配置变量

  setCustomerInfo();
  // 客户管理: customer
  checkUrl();

  customerVm.tableParams = new NgTableParams({ count: 7 }, { counts: [5], dataset: serverList});

  function setCustomerInfo(){
    customerVm.infoList = {
      group: [
        { sref: 'customer.manage', path: '/customer/manage', title: '客户管理', isActive: true },
        { sref: 'customer.verify', path: '/customer/verify', title: '客户审批', isActive: false }
      ],
      type: ['企业用户','个人用户', '内测用户'],
      channel: ['淘宝', '代理', '招募活动'],
      product: ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'],
      state: ['待审批', '未通过审批', '通过审批', '未提交'],
    }
    return customerVm.infoList;
  }

  function checkUrl(){
    var path = $location.path();
    var arr = customerVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      customerVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        customerVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    customerVm.currentNav = customerVm.infoList.group[index];
    for(var i=0;i<customerVm.infoList.group.length;i++){
      if(index != i)
        customerVm.infoList.group[i].isActive = false;
      customerVm.currentNav.isActive = true;
    }
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/customer/' + template + '.html',
      controller: controller
    })
  }

}

function addCtrl($modalInstance, customerSrv){
  var addVm = this;
  addVm.infoList = {
    type: ['企业用户','个人用户', '内测用户'],
    channel: ['淘宝', '代理', '招募活动'],
    product: ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'],
    state: ['待审批', '未通过审批', '通过审批', '未提交'],
    direction: ['右内', '右外', '左内', '左外'],
    sohe: ['有', '无']
  }
  addVm.addressList = customerSrv.getAddress();

  addVm.cancel = cancel;

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
  }]
  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}