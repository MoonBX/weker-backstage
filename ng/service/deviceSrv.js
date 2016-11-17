/**
 * Created by zhongyuqiang on 16/11/17.
 */
angular.module('deviceApi', [])
  .factory('deviceSrv', deviceSrv);

function deviceSrv(){
  var arr = {
    order: [101011, 202022, 303033, 404044],
    device_name: ['设备一', '设备二', '设备三'],
    device_type: ['大门机', '单元机'],
    device_version: ['1.0', '3.0', '2.0'],
    applyer: ['一一', '二二', '三三', '四四'],
    applyer_phone: ['15757118202', '15757118293', '15757192394'],
    setup_Addr: ['南区-8幢-4单元-802', '北区-9幢-1单元-302', '南区-22幢-4单元-103'],
    setup_date: ['2016-10-10', '2016-9-29', '2016-10-14'],
    sys: ['2G', '3G', '4G'],
    device_sn: ['012393', '438203', '438939'],
    ip: ['192.168.1.101', '192.168.1.102', '192.168.1.103'],
    card_id: ['123456', '234567', '345678'],
    device_state: ['在线', '离线'],
    amount: [21, 39, 48],
    apply_date: ['2016-11-11', '2016-10-30', '2016-11-15'],
    apply_content: ['爱迪生', '奥古斯丁', '沃尔沃发'],
    maintenance_state: ['unservice', 'servicing', 'serviced'],
    maintainer: ['李工', '王工', '赵工'],
    maintainer_phone: ['15757118502', '15757118593', '15757192594'],
    maintainer_content: ['打开的', '危机没完全', '发的是哪句是']
  }

  function getDeviceList(){
    var serverList = [];
    var item = {};
    for(var i=0; i<100; i++){
      item = {
        order: arr.order[Math.floor(Math.random() * arr.order.length)],
        device_name: arr.device_name[Math.floor(Math.random() * arr.device_name.length)],
        device_type: arr.device_type[Math.floor(Math.random() * arr.device_type.length)],
        device_version: arr.device_version[Math.floor(Math.random() * arr.device_version.length)],
        applyer: arr.applyer[Math.floor(Math.random() * arr.applyer.length)],
        applyer_phone: arr.applyer_phone[Math.floor(Math.random() * arr.applyer_phone.length)],
        setup_Addr: arr.setup_Addr[Math.floor(Math.random() * arr.setup_Addr.length)],
        setup_date: arr.setup_date[Math.floor(Math.random() * arr.setup_date.length)],
        sys: arr.sys[Math.floor(Math.random() * arr.sys.length)],
        device_sn: arr.device_sn[Math.floor(Math.random() * arr.device_sn.length)],
        ip: arr.ip[Math.floor(Math.random() * arr.ip.length)],
        card_id: arr.card_id[Math.floor(Math.random() * arr.card_id.length)],
        amount: arr.amount[Math.floor(Math.random() * arr.amount.length)],
        device_state: arr.device_state[Math.floor(Math.random() * arr.device_state.length)],
        apply_date: arr.apply_date[Math.floor(Math.random() * arr.apply_date.length)],
        apply_content: arr.apply_content[Math.floor(Math.random() * arr.apply_content.length)],
        maintenance_state: arr.maintenance_state[Math.floor(Math.random() * arr.maintenance_state.length)],
        maintainer: arr.maintainer[Math.floor(Math.random() * arr.maintainer.length)],
        maintainer_phone: arr.maintainer_phone[Math.floor(Math.random() * arr.maintainer_phone.length)],
        maintainer_content: arr.maintainer_content[Math.floor(Math.random() * arr.maintainer_content.length)],
      }
      serverList.push(item);
    }
    return serverList;
  }

  return {
    getDeviceList: getDeviceList
  }
}