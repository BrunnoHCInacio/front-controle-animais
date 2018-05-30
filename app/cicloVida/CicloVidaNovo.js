app.controller('CicloVidaNovo', function ($scope, $state, $sce, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPost('ciclosVida', $scope.form).then(function (data) {
                if (data.data.codigo === 200) {
                    $state.go('cicloVidaListar');
                }
            });
        }
    }
});