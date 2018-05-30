app.controller('AnimalNovo', function ($scope, $state, $sce, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPost('animal', $scope.form).then(function (data) {
                if (data.data.codigo === 200) {
                    $state.go('animalListar');
                }
            });
        }
    }
});