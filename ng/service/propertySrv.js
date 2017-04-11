/**
 * Created by zhongyuqiang on 17/3/30.
 */
angular.module('propertyApi', [])
  .factory('propertySrv', propertySrv);

propertySrv.$inject = ['$q', '$http'];
function propertySrv($q, $http) {
  var server = "https://www.51weker.com/operation";
  var propertyList = {
    createVillage: function(obj){
      var defer = $q.defer();
      $http({
        method: 'POST',
        url: server + '/community/add',
        data: obj,
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
    },
    getVillageList: function(pageNo, limit){
      var defer = $q.defer();
      $http({
        method:'GET',
        url: server + '/community/list/' + pageNo + '/' +limit,
        headers: {
          'token': localStorage.wekerOperateToken,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .success(function(data){
          defer.resolve(data);
        })
        .error(function(error){
          defer.reject(error);
        });
      return defer.promise;
    },
    dispatch: function(obj){
      var defer = $q.defer();
      $http({
        method: 'POST',
        url: server + '/construction/assign',
        data: obj,
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
    },
    getProvince: function(){
      var defer = $q.defer();
      $http({
        method:'GET',
        url: server + '/region/provinces/',
        headers: {
          'token': localStorage.wekerOperateToken,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .success(function(data){
          defer.resolve(data);
        })
        .error(function(error){
          defer.reject(error);
        });
      return defer.promise;
    },
    // /region/{provinceCode}/cities
    getCities: function(provinceCode){
      var defer = $q.defer();
      $http({
        method:'GET',
        url: server + '/region/' + provinceCode + '/cities',
        headers: {
          'token': localStorage.wekerOperateToken,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .success(function(data){
          defer.resolve(data);
        })
        .error(function(error){
          defer.reject(error);
        });
      return defer.promise;
    },
    getDistricts: function(cityCode){
      var defer = $q.defer();
      $http({
        method:'GET',
        url: server + '/region/' + cityCode + '/districts',
        headers: {
          'token': localStorage.wekerOperateToken,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
        .success(function(data){
          defer.resolve(data);
        })
        .error(function(error){
          defer.reject(error);
        });
      return defer.promise;
    }
  };

  return propertyList;
}