var app = angular.module("email-sig", []);

app
  .controller("MainCtrl", function ($scope) {
    $scope.mobiles = [{ label: "Mobile", number: "" }];
  })
  .filter("removeSpaces", [
    function () {
      return function (string) {
        if (!angular.isString(string)) {
          return string;
        }
        return string.replace(/[\s]/g, "");
      };
    },
  ])
  .config([
    "$compileProvider",
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(
        /^\s*(https?|ftp|mailto|chrome-extension|tel|skype):/
      );
      // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    },
  ]);
