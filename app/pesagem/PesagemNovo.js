app.controller('PesagemNovo', function ($scope, $state, $sce, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPost('pesagem', $scope.form).then(function (data) {
                if (data.data.codigo === 200) {
                    $state.go('pesagemListar');
                }
            });
        }
    }
});
