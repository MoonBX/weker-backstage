/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('orderApi', [])
  .factory('orderSrv', orderSrv);

orderSrv.$inject = ['$q'];
function orderSrv($q){
  function getSingleItem(){
    return [{
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
    }];
  }

  return {
    getSingleItem: getSingleItem
  }
}