/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl);

function customerCtrl($location){
  var customerVm = this;
  customerVm.group = [
    { sref: 'customer.manage', title: '客户管理', isActive: true },
    { sref: 'customer.verify', title: '客户审批', isActive: false }
  ];
  customerVm.typeList = ['企业用户','个人用户', '内测用户'];
  customerVm.channelList = ['淘宝', '代理', '招募活动'];
  customerVm.productList = ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'];
  customerVm.stateList = ['待审批', '未通过审批', '通过审批', '未提交'];
  customerVm.manageTable = [
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'}
    ,{name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'}
  ]
  customerVm.switchTabNav = switchTabNav;
  customerVm.currentNav = {};

  function switchTabNav(index){
    customerVm.currentNav = customerVm.group[index];
    for(var i=0;i<customerVm.group.length;i++){
      if(index != i)
        customerVm.group[i].isActive = false;
      customerVm.currentNav.isActive = true;
    }
  }


}