app.controller('CicloVidaEditar', function ($scope, $stateParams, DataService) {
    var id = $stateParams.id; //pega o paramentro informado na url
    DataService.realizarGet('ciclosVida/idCiclosVida/' + id).then(function (data) {
        console.log(data);
        $scope.form = data.data.mensagem[0];
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPut('ciclosVida/idCiclosVida/' + id, $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});