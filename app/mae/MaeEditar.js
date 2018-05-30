app.controller('MaeEditar', function ($scope, $stateParams, DataService) {
    var id = $stateParams.id; //pega o paramentro informado na url
    DataService.realizarGet('mae/idMae/' + id).then(function (data) {
        console.log(data);
        $scope.form = data.data.mensagem[0];
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPut('mae/idMae/' + id, $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});