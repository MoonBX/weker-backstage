/**
 * Created by zhongyuqiang on 16/11/9.
 */
angular.module('orderMdl', [])
  .controller('orderCtrl', orderCtrl)

function orderCtrl($location){
  var orderVm = this;
  orderVm.infoList = {
    group: [
      {sref: 'order.receipt', path:'/order/receipt', title: '订单签收', isActive: true},
      {sref: 'order.validate', path:'/order/validate', title: '订单校验', isActive: false}
    ]
  };

  orderVm.switchTabNav = switchTabNav;

  checkUrl();
  function checkUrl(){
    var path = $location.path();
    var arr = orderVm.infoList.group;
    for(var i=0;i<arr.length;i++){
      orderVm.infoList.group[i].isActive = false;
      if(path === arr[i].path){
        orderVm.infoList.group[i].isActive = true
      }
    }
  }

  function switchTabNav(index){
    orderVm.currentNav = orderVm.infoList.group[index];
    for(var i=0;i<orderVm.infoList.group.length;i++){
      if(index != i)
        orderVm.infoList.group[i].isActive = false;
      orderVm.currentNav.isActive = true;
    }
  }
}