/**
 * Created by zhongyuqiang on 16/11/14.
 */
angular.module('appApi', [])
  .factory('appSrv', appSrv);

appSrv.$inject = ['$q', '$location', '$http'];
function appSrv($q, $location, $http){
  var arr = {
    nameArr: ['一一', '二二', '三三', '四四'],
    phoneArr: ['15757118202', '15757118293', '15757192394'],
    amountArr: [10, 20, 30],
    daopian: ['12*12cm', '39*39cm', '4*4cm'],
    type: ['企业用户','个人用户', '内测用户'],
    channel: ['淘宝', '代理', '招募活动'],
    product: ['Weker W1', 'Weker W2', 'Weker T1', 'Weker T2'],
    //'待审批', '未通过审批', '通过审批', '未提交'
    customerM_state: ['pending', 'failing', 'approve', 'uncommitted'],
    //'待审批', '未通过审批', '通过审批', '未通过签收'
    customerV_state: ['pending', 'failing', 'approve', 'uncommitted'],
    //'待签收', '未通过签收', '通过签收'
    orderR_state: ['pending', 'failing', 'approve'],
    //'待出货', '已出货'
    orderV_state: ['shipping', 'shipped'],
    //'已出货', '安装中', '已安装'
    service_state: ['shipped', 'installing', 'installed'],
    direction: ['右内', '右外', '左内', '左外'],
    sohe: ['有', '无']
  };

  function checkUrl(arr){
    var path = $location.path();
    for(var i=0;i<arr.length;i++){
      arr[i].isActive = false;
      if(path === arr[i].path){
        arr[i].isActive = true
      }
    }
    return arr;
  }

  function switchTabNav(currentObj, currentArr, index){
    currentObj = currentArr[index];
    for(var i=0;i<currentArr.length;i++){
      if(index != i)
        currentArr[i].isActive = false;
      currentObj.isActive = true;
    }
  }

  function getInfoList(){
    return arr;
  }

  function getProduct(){
    var serverList = [];
    var item = {};
    for(var i=0; i<100; i++){
      item = {
        name: arr.nameArr[Math.floor(Math.random()*arr.nameArr.length)],
        phone: arr.phoneArr[Math.floor(Math.random()*arr.phoneArr.length)],
        amount: arr.amountArr[Math.floor(Math.random()*arr.amountArr.length)],
        type: arr.type[Math.floor(Math.random()*arr.type.length)],
        channel: arr.channel[Math.floor(Math.random()*arr.channel.length)],
        product: arr.product[Math.floor(Math.random()*arr.product.length)],
        customerM_state: arr.customerM_state[Math.floor(Math.random()*arr.customerM_state.length)],
        customerV_state: arr.customerV_state[Math.floor(Math.random()*arr.customerV_state.length)],
        orderR_state: arr.orderR_state[Math.floor(Math.random()*arr.orderR_state.length)],
        orderV_state: arr.orderV_state[Math.floor(Math.random()*arr.orderV_state.length)],
        service_state: arr.service_state[Math.floor(Math.random()*arr.service_state.length)],
        param: {
          direction: arr.direction[Math.floor(Math.random()*arr.direction.length)],
          daopian: arr.daopian[Math.floor(Math.random()*arr.daopian.length)]
        }
      };
      serverList.push(item);
    }
    return serverList;
  }

  function getAddress(){
    var defer = $q.defer();
    $http.get("./json/address.json")
      .success(function (data) {
        defer.resolve(data);
      })
      .error(function(data){
        defer.reject();
        console.log(data);
      });
    return defer.promise;
  }

  function setExtraAttr(dataList, array, stateTxt){
    for(var i=0; i<dataList.length; i++){
      for(var j=0; j<array.length; j++){
        if(dataList[i][stateTxt] == array[j].state){
          dataList[i][stateTxt] = array[j].state_title;
          dataList[i][stateTxt+'_class'] = array[j].class;
          dataList[i][stateTxt+'_option'] = array[j].option;
        }
      }
    }
    return dataList;
  }

  return {
    checkUrl: checkUrl,
    switchTabNav: switchTabNav,
    getInfoList: getInfoList,
    getProduct: getProduct,
    getAddress: getAddress,
    setExtraAttr: setExtraAttr
  }
}