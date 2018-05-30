app.controller('FazendaNovo', function ($scope, $state,$sce, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            console.log($scope.form)
            DataService.realizarPost('fazenda', $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});