/**
 * Created by zhongyuqiang on 16/11/7.
 */
angular.module('app')
  .directive('myMaxNumber', myMaxNumber)
  .directive('csSelect', csSelect);

myMaxNumber.$inject = ['$timeout'];
function myMaxNumber($timeout){
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      maxNumber: '@myMaxNumber',
      currentPage: '@currentPage'
    },
    link: function (scope, element, attr, ctrl) {
      ctrl.$parsers.push(function (viewValue) {
        var maxNumber = parseInt(scope.maxNumber, 10);
        var curNumber = scope.currentPage; //当前页数
        var transformedInput = viewValue.replace(/[^0-9]/g, '');
        if (transformedInput !== viewValue||parseInt(transformedInput,10)<1||parseInt(transformedInput,10)>maxNumber) {
          ctrl.$setViewValue(curNumber);
          ctrl.$render();
          return curNumber;
        }
        return viewValue;
      });
    }
  }
}

function csSelect(){
  return {
    require: '^stTable',
    template: '<input type="checkbox"/>',
    scope: {
      row: '=csSelect'
    },
    link: function (scope, element, attr, ctrl) {

      element.bind('change', function (evt) {
        scope.$apply(function () {
          ctrl.select(scope.row, 'multiple');
        });
      });

      scope.$watch('row.isSelected', function (newValue, oldValue) {
        if (newValue === true) {
          element.parent().addClass('st-selected');
        } else {
          element.parent().removeClass('st-selected');
        }
      });
    }
  };
}