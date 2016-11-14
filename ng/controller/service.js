/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('serviceMdl', [])
  .controller('serviceCtrl', serviceCtrl)
  .controller('service.detailCtrl', svDetailCtrl)

function serviceCtrl($location, $modal, $scope, appSrv, customerSrv, NgTableParams){
  var serviceVm = this;
  var serverList = customerSrv.getProduct();
  serviceVm.infoList = {
    group: [
      {sref: 'service.setup', path:'/service/setup', title: '安装跟进', isActive: true}
    ],
    type: ['企业用户','个人用户', '内测用户'],
    channel: ['淘宝', '代理', '招募活动'],
    product: ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'],
    state: ['待审批', '未通过审批', '通过审批', '未提交'],
  }

  serviceVm.switchTabNav = switchTabNav;
  serviceVm.openModal = openModal;
  serviceVm.tableParams = new NgTableParams({ count: 7 }, { counts: [5], dataset: serverList});
  serviceVm.currentNav = {};

  checkUrl();

  function checkUrl(){
    appSrv.checkUrl(serviceVm.infoList.group);
  }

  function switchTabNav(index){
    appSrv.switchTabNav(serviceVm.currentNav, serviceVm.infoList.group, index);
  }

  function openModal(template, controller){
    $modal.open({
      templateUrl: './views/service/' + template + '.html',
      controller: controller
    })
  }
}

function svDetailCtrl($modalInstance, customerSrv){
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

  detailVm.state = ['待审批', '未通过审批', '通过审批', '未提交'];

  detailVm.addressList = customerSrv.getAddress();

  detailVm.cancel = cancel;
  function cancel(){
    $modalInstance.dismiss('cancel');
  }
}