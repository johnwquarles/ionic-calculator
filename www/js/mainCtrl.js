angular.module('starter')
  .controller('mainCtrl', function($scope) {

    $scope.display = 0;
    $scope.operation = null;
    var x = null;
    var y = null;
    var hasdec = false;
    $scope.symbol = null;

    $scope.number = function(num) {
      if ($scope.display === 0) {
        $scope.display = num;
      } else {
        $scope.display = $scope.display.toString() + num;
      }
      y = $scope.display;
    }

    $scope.clear = function() {
      $scope.display = 0;
      $scope.operation = null;
      x = null;
      hasdec = false;
    }

    $scope.execute = function() {
      if ($scope.operation !== null && x !== null) {
        $scope.display = $scope.operation(x, y);
        x = $scope.display;
      }
    }

    // binary operation function; sets the appropriate
    // symbol to display on the calculator and then
    // executes the relevant binary operation (which is passed
    // in as an argument from the html)
    $scope.binop = function(op, sym) {

      $scope.symbol = sym;

      x = $scope.display;
      $scope.operation = op;
      $scope.display = 0;
    }

    $scope.decimalbtn = function() {
      if (!hasdec) {
        $scope.display += ".";
      }
      hasdec = true;
    }

    $scope.sqrtbtn = function() {
      $scope.display = Math.sqrt($scope.display);
    }

    $scope.squaredbtn = function() {
      $scope.display = Math.pow($scope.display, 2);
    }

    $scope.sinbtn = function() {
      $scope.display = Math.sin($scope.display);
    }
    $scope.cosbtn = function() {
      $scope.display = Math.cos($scope.display);
    }
    $scope.tanbtn = function() {
      $scope.display = Math.tan($scope.display);
    }

    $scope.asinbtn = function() {
      $scope.display = Math.asin($scope.display);
    }
    $scope.acosbtn = function() {
      $scope.display = Math.acos($scope.display);
    }
    $scope.atanbtn = function() {
      $scope.display = Math.atan($scope.display);
    }

    $scope.negbtn = function() {
      $scope.display = -1 * $scope.display;
      y = $scope.display;
    }

    $scope.add = function (a, b) {
      return parseFloat(a) + parseFloat(b);
    }

    $scope.subtract = function (a, b) {
      return a - b;
    }

    $scope.multiply = function (a, b) {
      return a * b;
    }

    $scope.divide = function (a, b) {
      return a / b;
    }

    $scope.pow = function (a, b) {
      return Math.pow(a, b);
    }

    $scope.log = function (a, b) {
      return Math.log(b) / Math.log(a);
    }
  }
)
