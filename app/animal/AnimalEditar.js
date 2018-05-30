/**
 * Created by Usuario on 16/09/2017.
 */
app.controller('AnimalEditar', function ($scope, $stateParams, DataService) {
    var id = $stateParams.id; //pega o paramentro informado na url
    DataService.realizarGet('animal/idAnimal/' + id).then(function (data) {
        console.log(data);
        $scope.form = data.data.mensagem[0];
    });
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPut('animal/idAnimal/' + id, $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});
