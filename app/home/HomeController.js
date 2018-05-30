app.controller('Home', function ($scope, DataService) {




    var meses = ["Agosto", "Setembro", "Outubro"];
    var valores = ["20", "15", "17"];


    var ctx = document.getElementById('doencasPorMes').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: meses,
            datasets: [{
                label: "Doenças por Mês",
                backgroundColor: 'rgba(30,148,210,0.5)',
                borderColor: 'rgba(30,148,210,1)',
                pointBackgroundColor: "#fff",
                data: valores,
            }]
        },

        // Configuration options go here
        options: {}
    });

    //GRAFICO DE VENDA POR MES
    // DataService.realizarGet('relatorios/15').then(function(data){
    //     console.log(data);
    //     var meses = ["Agosto", "Setembro", "Outubro"];
    //     var valores = ["20", "15", "17"];
    //     data.data.forEach(function(obj) {
    //             meses.push(obj.meses);
    //             valores.push(obj.saldo);
    //
    //     }, this);
    //    // console.log(valores);
    //     valores.push("19000.00");
    //      meses.push("Agosto");
    //   //  valores.sort(function(a,b){return b-a});
    //
    //     var ctx = document.getElementById('vendasPorMes').getContext('2d');
    //     var chart = new Chart(ctx, {
    //         // The type of chart we want to create
    //         type: 'line',
    //
    //         // The data for our dataset
    //         data: {
    //             labels: meses,
    //             datasets: [{
    //                 label: "Vendas por Mês",
    //                 backgroundColor: 'rgba(30,148,210,0.5)',
    //                 borderColor: 'rgba(30,148,210,1)',
    //                 pointBackgroundColor: "#fff",
    //                 data: valores,
    //             }]
    //         },
    //
    //         // Configuration options go here
    //         options: {}
    //     });
    // });
    // ----------- FIM ---------



    var mes = ["Julho","Agosto", "Setembro", "Outubro"];
    var valor = ["30","35", "45", "37"];


    var ctx = document.getElementById('nascimentos').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: mes,
            datasets: [{
                label: "Nascimentos por Mês",
                backgroundColor: 'rgba(30,148,210,0.5)',
                borderColor: 'rgba(30,148,210,1)',
                pointBackgroundColor: "#fff",
                data: valor,
            }]
        },

        // Configuration options go here
        options: {}
    });

    //Ganho de peso por lote
    var lote = ["lote 1", "lote 2", "lote 3"];
    var valores = ["14", "17", "12"];


    var ctx = document.getElementById('ganhoPesoPorLote').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: lote,
            datasets: [{
                label: "Ganho de peso por lote",
                backgroundColor: 'rgba(30,148,210,0.5)',
                borderColor: 'rgba(30,148,210,1)',
                pointBackgroundColor: "#fff",
                data: valores,
            }]
        },

        // Configuration options go here
        options: {}
    });

    //Ganho de peso por lote
    var lote = ["lote 1", "lote 2", "lote 3"];
    var valores = ["14", "17", "12"];


    var ctx = document.getElementById('ganhoPesoSemanal').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: lote,
            datasets: [{
                label: "Ganho de peso semanal",
                backgroundColor: 'rgba(30,148,210,0.5)',
                borderColor: 'rgba(30,148,210,1)',
                pointBackgroundColor: "#fff",
                data: valores,
            }]
        },

        // Configuration options go here
        options: {}
    });

    //GRAFICO DE VENDEDORES 
    // DataService.realizarGet('relatorios/16').then(function(data){
    //     console.log(data);
    //     var nome = [];
    //     var valores = [];
    //     data.data.forEach(function(obj) {
    //             nome.push(obj.nome);
    //             valores.push(obj.saldo);
    //
    //     }, this);
    //
    //     var ctx = document.getElementById('faturamentoVendedores').getContext('2d');
    //     var chart = new Chart(ctx, {
    //         // The type of chart we want to create
    //         type: 'bar',
    //
    //         // The data for our dataset
    //         data: {
    //             labels: nome,
    //             datasets: [{
    //                 label: "Vendas por Vendedor",
    //                 backgroundColor: 'rgba(30,148,210,0.5)',
    //                 borderColor: 'rgba(30,148,210,1)',
    //                 pointBackgroundColor: "#fff",
    //                 data: valores,
    //             }]
    //         },
    //
    //         // Configuration options go here
    //         options: {}
    //     });
    // });
    // ----------- FIM ---------

});