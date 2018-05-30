app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('common', {
            templateUrl: 'app/menu/menu.html',
            abstract: true,
        })

        //Pagina Inicial
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            parent: 'common',
            controller: 'Home',
            controllerAs: 'vm'
        })

        //Animal
        .state('animalNovo', {
            url: '/animal/novo',
            templateUrl: 'app/animal/Animal.html',
            parent: 'common',
            controller: 'AnimalNovo',
            controllerAs: 'vm'
        })
        .state('animalEditar', {
            url:'/animal/:id',
            templateUrl: 'app/animal/Animal.html',
            parent: 'common',
            controller: 'AnimalEditar',
            controllerAs: 'vm'
        })
        .state('animalListar', {
            url: '/animal',
            templateUrl: 'app/animal/AnimalPesquisa.html',
            parent: 'common',
            controller: 'AnimalListar',
            controllerAs: 'vm'
        })

        //Fazenda
        .state('fazendaNovo', {
            url: '/fazenda/novo',
            templateUrl: 'app/fazenda/fazenda.html',
            parent: 'common',
            controller: 'FazendaNovo',
            controllerAs: 'vm'
        })
        .state('fazendaEditar', {
            url: '/fazenda/:id',
            templateUrl: 'app/fazenda/fazenda.html',
            parent: 'common',
            controller: 'FazendaEditar',
            controllerAs: 'vm'
        })
        .state('fazendaListar', {
            url: '/fazenda',
            templateUrl: 'app/fazenda/FazendaPesquisa.html',
            parent: 'common',
            controller: 'FazendaListar',
            controllerAs: 'vm'
        })

        //Ciclos de Vida
        .state('cicloVidaNovo', {
            url: '/cicloVida/novo',
            templateUrl: 'app/cicloVida/CiclosVida.html',
            parent: 'common',
            controller: 'AnimalListar',
            controllerAs: 'vm'
        })
        .state('cicloVidaListar', {
            url: '/cicloVida',
            templateUrl: 'app/cicloVida/CicloVidaPesquisa.html',
            parent: 'common',
            controller: 'CicloVidaListar',
            controllerAs: 'vm'
        })
        .state('cicloVidaEditar', {
            url: '/cicloVida',
            templateUrl: 'app/cicloVida/CiclosVida.html',
            parent: 'common',
            controller: 'CicloVidaEditar',
            controllerAs: 'vm'
        })

        //Pai
        .state('paiNovo', {
            url: '/pai/novo',
            templateUrl: 'app/pai/Pai.html',
            parent: 'common',
            controller: 'PaiNovo',
            controllerAs: 'vm'
        })
        .state('paiListar', {
            url: '/pai/',
            templateUrl: 'app/pai/PaiPesquisa.html',
            parent: 'common',
            controller: 'PaiListar',
            controllerAs: 'vm'
        })
        .state('paiEditar', {
            url: '/pai/novo',
            templateUrl: 'app/pai/Pai.html',
            parent: 'common',
            controller: 'PaiEditar',
            controllerAs: 'vm'
        })

        //Mae
        .state('maeNovo', {
            url: '/mae/novo',
            templateUrl: 'app/mae/Mae.html',
            parent: 'common',
            controller: 'MaeNovo',
            controllerAs: 'vm'
        })
        .state('maeListar', {
            url: '/mae/',
            templateUrl: 'app/mae/MaePesquisa.html',
            parent: 'common',
            controller: 'MaeListar',
            controllerAs: 'vm'
        })
        .state('maeEditar', {
            url: '/mae/novo',
            templateUrl: 'app/mae/mae.html',
            parent: 'common',
            controller: 'MaeEditar',
            controllerAs: 'vm'
        })

        //Pesagem
        .state('pesagemNovo', {
            url: '/pesagem/novo',
            templateUrl: 'app/pesagem/pesagem.html',
            parent: 'common',
            controller: 'PesoListar',
            controllerAs: 'vm'
        })

        //Hematócrito
        .state('hematocritoNovo', {
            url: '/hematocrito/novo',
            templateUrl: 'app/hematocrito/hematocrito.html',
            parent: 'common',
            controller: 'AnimalListar',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/');


});
