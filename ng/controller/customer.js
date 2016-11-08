/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerMdl', [])
  .controller('customerCtrl', customerCtrl)
  .controller('addUserCtrl', addUserCtrl)

function customerCtrl($scope, $filter, $location, $modal, customerSrv){
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

  ]
  customerVm.switchTabNav = switchTabNav;
  customerVm.addUser = addUser;
  customerVm.currentNav = {};

  function switchTabNav(index){
    customerVm.currentNav = customerVm.group[index];
    for(var i=0;i<customerVm.group.length;i++){
      if(index != i)
        customerVm.group[i].isActive = false;
      customerVm.currentNav.isActive = true;
    }
  }

  function addUser(){
    $modal.open({
      templateUrl: './views/customer/addUser.html',
      controller: []
    })
  }

  //动态显示条数
  $scope.itemsOptions = [5,10,20];
  //smart-table配置变量
  $scope.displayed = [];
  $scope.callServer = function callServer(tableState) {
    $scope.tableState = tableState; //tableState对象中包含sort排序信息以及search搜索信息
    $scope.getData(1);
  };
  $scope.getData = function(pageNo) {
    console.log("getData exe");
    var pagination = $scope.tableState.pagination;
    var start = (pageNo-1)*10 || 0;     //从第几条数据开始查询，默认0条
    var number = pagination.number || 10;   //每页显示条数
    console.log(number);
    pagination.currentPage = pagination.inputCurPage = pageNo;
    $scope.isLoading = true;    //控制数据加载状态
    //数据获取函数
    customerSrv.getPage(start, number, $scope.tableState).then(function(result) {
      console.log(result);
      $scope.displayed = result.data;
      pagination.totalItemCount = result.totalItems;  //设置数据总条数
      pagination.maxSize = pagination.totalItemCount/pagination.number; //一共有多少页
      $scope.isLoading = false;
      console.log("tableState信息：",$scope.tableState);
    });
  }
}

function addUserCtrl($scope, $modalInstance){
  var adduserVm = this;
  adduserVm.closeModal = closeModal;
  function closeModal(){
    console.log('a');
  }
}