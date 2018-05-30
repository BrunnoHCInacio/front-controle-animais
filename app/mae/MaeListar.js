app.controller('MaeListar', function ($scope, $rootScope, DataService) {
    $scope.maes = [];
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
            pesquisa = "nomeMae/" + $scope.form.nome + "/";
            DataService.realizarGet('mae/' + pesquisa).then(function (data) {
                if (data.data.codigo !== 400) {
                    for (var i = 0; i < paginas; i++) {
                        $scope.paginas[i] = {
                            numero: i
                        };
                    }
                    certa = true;
                    $scope.maes = data.data.mensagem;
                }
            });
        }
        else {
            DataService.realizarGet('mae/').then(function (data) {
                pesquisa = "";
                $scope.maes = data.data.mensagem;
            });
        }
    }
    $scope.paginar = function (id) {
        var string = "mae/"
        if (pesquisa !== "" && certa === true) {
            string += pesquisa;
        }
        if (id !== 0) {
            string += "limite/" + id * 10;
        }
        DataService.realizarGet(string).then(function (data) {
            console.log(string);
            $scope.maes = data.data.mensagem;
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
    DataService.realizarGet('mae').then(function (data) {
        $scope.maes = data.data.mensagem;
    });
    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $scope.modulo = 'MAE'
        $scope.modulo_nome = id.nomeFazenda;
        $rootScope.idModalExclusao = id.idFazenda;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function () {
        DataService.realizarDelete('mae/idMae/' + $rootScope.idModalExclusao).then(function (data) {
            $scope.fazendas.splice(indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');
        });

    };
});
