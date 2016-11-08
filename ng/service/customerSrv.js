/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('customerApi', [])
  .factory('customerSrv', customerSrv);

customerSrv.$inject = ['$q', '$filter', '$timeout'];
function customerSrv($q, $filter, $timeout){
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

  function getPage(start, number, params) {

    var deferred = $q.defer();

    var filtered = params.search.predicateObject ? $filter('filter')(randomsItems, params.search.predicateObject) : randomsItems;

    if (params.sort.predicate) {
      filtered = $filter('orderBy')(filtered, params.sort.predicate, params.sort.reverse);
    }

    var result = filtered.slice(start, start + number);

    $timeout(function () {
      //note, the server passes the information about the data set size
      deferred.resolve({
        data: result,
        totalItems: filtered.length,
        numberOfPages: Math.ceil(filtered.length / number)
      });
    }, 500);


    return deferred.promise;
  }

  return {
    getPage: getPage
  }
}