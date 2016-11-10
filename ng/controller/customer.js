/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl)
  .controller('customer.addCtrl', addCtrl)
  .controller('customer.detailCtrl', ctDetailCtrl)

function customerCtrl($scope, $filter, $location, $modal, customerSrv){
  var randomsItems = [
    {name:'双方1', phone: '15757118222', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方2', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方3', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方4', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方5', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方6', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方7', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方8', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方9', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方10', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方11', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方12', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方13', phone: '15757118222', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方14', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方15', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方16', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方17', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方18', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方19', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方20', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方21', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
    {name:'双方22', phone: '15757118202', type: '企业用户', channel: '淘宝', product: 'Weker W1', amount: '10', param:{fangxiang:'右', tiandigou: true, daopian: '12*12cm'}, state: '待审批'},
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
  ];
  var customerVm = this;

  customerVm.switchTabNav = switchTabNav;
  customerVm.openModal = openModal;
  customerVm.callRandomItems = callRandomItems;
  customerVm.currentNav = {};
  //smart-table配置变量
  $scope.displayed = [];

  setCustomerInfo();
  // 客户管理: customer
  checkUrl();

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

  function callRandomItems(tableState) {
    $scope.tableState = tableState; //tableState对象中包含sort排序信息以及search搜索信息
    getData(1, randomsItems);
  }

  function getData(pageNo, list) {
    console.log("getData exe");
    var pagination = $scope.tableState.pagination;
    var start = (pageNo-1)*10 || 0;     //从第几条数据开始查询，默认0条
    var number = pagination.number || 10;   //每页显示条数
    pagination.currentPage = pagination.inputCurPage = pageNo;
    $scope.isLoading = true;    //控制数据加载状态
    //数据获取函数
    customerSrv.getPage(start, number, $scope.tableState, list).then(function(result) {
      console.log(result);
      $scope.displayed = result.data;
      pagination.totalItemCount = result.totalItems;  //设置数据总条数
      pagination.maxSize = pagination.totalItemCount/pagination.number; //一共有多少页
      $scope.isLoading = false;
      console.log("tableState信息：",$scope.tableState);
    });
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

  addVm.closeModal = function(){
    $modalInstance.dismiss('cancel');
  }

}

function ctDetailCtrl($modalInstance){
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
  detailVm.closeModal = function(){
    $modalInstance.dismiss('cancel');
  }
}