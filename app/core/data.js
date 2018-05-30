angular
    .module('app.core')
    .factory('DataService', DataService);

/* @ngInject */
function DataService($http, toastr) {
    var service = {
        realizarGet: realizarGet,
        realizarPost: realizarPost,
        realizarDelete: realizarDelete,
        realizarPut: realizarPut
    };
    const link = 'http://localhost:8888/API/api/';
    return service;

    function realizarGet(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.get(link + caminho, config)
            .then(function successCallback(response) {
                    if (response.data.codigo === 400) {
                        toastr.error(response.data.mensagem);
                    }
                    else if (response.data.codigo === 401) {
                        var msg = response.data.mensagem.split(",");
                        for (var i = 0; i < msg.length; i++) {
                            toastr.error(msg[i]);
                        }
                    }
                    return response;
                }
                , function errorCallback(response) {
                    toastr.error(response.data.mensagem);
                    return response;
                });
    }

    function realizarPost(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.post(link + caminho, data, config)
            .then(function successCallback(response) {
                    if (response.data.codigo === 200) {
                        toastr.success(response.data.mensagem);
                    }
                    else if (response.data.codigo === 400) {
                        toastr.error(response.data.mensagem);
                    }
                    else if (response.data.codigo === 401) {
                        var msg = response.data.mensagem.split(",");
                        for (var i = 0; i < msg.length; i++) {
                            toastr.error(msg[i]);
                        }
                    }
                    return response;
                }
                , function errorCallback(response) {
                    toastr.error(response.data.mensagem);
                    return response;
                });
    }

    function realizarDelete(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.delete(link + caminho, config)
            .then(function successCallback(response) {
                    if (response.data.codigo === 200) {
                        toastr.success(response.data.mensagem);
                    }
                    else if (response.data.codigo === 400) {
                        toastr.error(response.data.mensagem);
                    }
                    else if (response.data.codigo === 401) {
                        var msg = response.data.mensagem.split(",");
                        for (var i = 0; i < msg.length; i++) {
                            toastr.error(msg[i]);
                        }
                    }
                    return response;
                }
                , function errorCallback(response) {
                    toastr.error(response.data.mensagem);
                    return response;
                });
    }

    function realizarPut(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        if (data !== undefined) {
            return $http.put(link + caminho, data, config)
                .then(function successCallback(response) {
                        if (response.data.codigo === 200) {
                            toastr.success(response.data.mensagem);
                        }
                        else if (response.data.codigo === 400) {
                            toastr.error(response.data.mensagem);
                        }
                        else if (response.data.codigo === 401) {
                            var msg = response.data.mensagem.split(",");
                            for (var i = 0; i < msg.length; i++) {
                                toastr.error(msg[i]);
                            }
                        }
                        return response;
                    }
                    , function errorCallback(response) {
                        toastr.error(response.data.mensagem);
                        return response;
                    });
        }
        else {
            return $http.put(link + caminho, data, config)
                .then(function successCallback(response) {
                        if (response.data.codigo === 200) {
                            toastr.success(response.data.mensagem);
                        }
                        else if (response.data.codigo === 400) {
                            toastr.error(response.data.mensagem);
                        }
                        else if (response.data.codigo === 401) {
                            var msg = response.data.mensagem.split(",");
                            for (var i = 0; i < msg.length; i++) {
                                toastr.error(msg[i]);
                            }
                        }
                        return response;
                    }
                    , function errorCallback(response) {
                        toastr.error(response.data.mensagem);
                        return response;
                    });
        }
    }
}