/*
    Criado por Brunno dia 21/09/2017
 */

app.controller('FazendaEditar', function ($scope, $stateParams, DataService) {
    var id = $stateParams.id; //pega o paramentro informado na url
    DataService.realizarGet('fazenda/idFazenda/' + id).then(function (data) {
        console.log(data);
        $scope.form = data.data.mensagem[0];
    });
    $scope.salvar = function () {
        if ($scope.formularioFazenda.$valid) {
            DataService.realizarPut('fazenda/idFazenda/' + id, $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});