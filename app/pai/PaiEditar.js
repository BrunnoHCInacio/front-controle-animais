/**
 * Created by Usuario on 05/10/2017.
 */
app.controller('PaiEditar', function ($scope, $stateParams, DataService) {
    var id = $stateParams.id; //pega o paramentro informado na url
    DataService.realizarGet('pai/idPai/' + id).then(function (data) {
        console.log(data);
        $scope.form = data.data.mensagem[0];
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPut('pai/idPai/' + id, $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});
