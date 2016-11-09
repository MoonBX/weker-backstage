/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('app')
  .directive('wkDropdown', dropdown)

function dropdown(){
  return{
    restrict: 'EA',
    scope:{
      list: '=',
      myDirectiveVar: '='
    },
    template: '<div class="wk-dropdown" style="width: 100%;height: 30px;">' +
      '<input type="text" ng-model="myDirectiveVar" class="hide">'+
    '<p id="subject" >{{item}}<i></i></p><ul><li ng-repeat="item in list" ng-click="setItem(item)"><a href="javascript:;">{{item}}</a></li></ul></div>',
    controller: function($scope){
      $scope.item = $scope.list[0];
      $scope.setItem = function(item){
        $scope.item = item;
      }
    },
    link: function(scope, ele, attrs){
      $(document).bind('click', function(){
        $('.wk-dropdown ul').hide();
      });
      $('.wk-dropdown p').bind('click', function(e){
        $('.wk-dropdown ul').hide();
        var ul = $(this).siblings('ul');
        if(ul.css('display')=='none'){
          ul.slideDown('fast');
        }else{
          ul.slideUp('fast');
        }
        e.stopPropagation();
      });
    }
  }
}