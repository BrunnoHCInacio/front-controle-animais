app.controller('AnimalListar', function ($scope, $rootScope, DataService) {
    $scope.animais = [];
    $scope.paginas = [{}];
    var inc = 0;
    var paginas = 6;
    var ultimoClickado;
    var indexRemover;
    var pesquisa = "";
    var certa = false;
    var cond = true;
    for (var i = 0; i < paginas; i++) {
        $scope.paginas[i] = {
            numero: i
        };
    }
    $scope.salvar = function () {
        if ($scope.form.nome !== "") {
            pesquisa = "nomeAnimal/" + $scope.form.nome + "/";
            DataService.realizarGet('animal/' + pesquisa).then(function (data) {
                if (data.data.codigo !== 400) {
                    for (var i = 0; i < paginas; i++) {
                        $scope.paginas[i] = {
                            numero: i
                        };
                    }
                    certa = true;
                    $scope.animais = data.data.mensagem;
                }
            });
        }
        else {
            DataService.realizarGet('animal/').then(function (data) {
                pesquisa = "";
                $scope.animais = data.data.mensagem;
            });
        }
    }
    $scope.paginar = function (id) {
        var string = "animal/"
        if (pesquisa !== "" && certa === true) {
            string += pesquisa;
        }
        if (id !== 0) {
            string += "limite/" + id * 10;
        }
        DataService.realizarGet(string).then(function (data) {
            console.log(string);
            $scope.animais = data.data.mensagem;
            if (id !== 0 && cond === true) {
                ultimoClickado = id - 1;
                cond = false;
            }
            if (id > ultimoClickado) {
                ultimoClickado = id;
                inc++;
                for (var i = 0; i < paginas; i++) {
                    $scope.paginas[i] = {
                        numero: i + inc
                    };
                }
            }
            else if (id < ultimoClickado) {
                if (inc !== 0) {
                    ultimoClickado = id;
                    inc--;
                    for (var i = 0; i < paginas; i++) {
                        $scope.paginas[i] = {
                            numero: inc + i
                        };
                    }
                }
            }
        });
    }
    DataService.realizarGet('animal').then(function (data) {
        $scope.animais = data.data.mensagem;
    });
    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $scope.modulo = 'ANIMAL'
        $scope.modulo_nome = id.nomeAnimal;
        $rootScope.idModalExclusao = id.idAnimal;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function () {
        DataService.realizarDelete('animal/idAnimal/' + $rootScope.idModalExclusao).then(function (data) {
            $scope.animais.splice(indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');
        });

    };
});
