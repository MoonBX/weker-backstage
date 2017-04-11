/**
 * Created by zhongyuqiang on 17/3/29.
 */
angular.module('accountApi', [])
  .factory('accountSrv', accountSrv);

accountSrv.$inject = ['$q', '$http'];
function accountSrv($q, $http) {
  var server = "https://www.51weker.com/operation";
  var accountList = {
    login: function(obj){
      var defer = $q.defer();
      $http({
        method: 'POST',
        url: server + '/account/login',
        data: obj
      })
        .success(function (data) {
          defer.resolve(data);
        })
        .error(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    },
    logout: function(){
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: server + '/account/logout',
        headers: {
          'token': localStorage.wekerOperateToken,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .success(function (data) {
          defer.resolve(data);
        })
        .error(function (error) {
          defer.reject(error);
        });
      return defer.promise;
    }
  };
  return accountList;
}