/**
 * Created by zhongyuqiang on 16/11/14.
 */
angular.module('appApi', [])
  .factory('appSrv', appSrv);

//appSrv.$inject = ['$q', '$filter', '$timeout', '$http', '$location'];
function appSrv($location){
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

  return {
    checkUrl: checkUrl,
    switchTabNav: switchTabNav
  }
}