var app = new Vue({
    el: "#app",
    data: {
        title: "Contas",
        menus: [
            {id: 0, name:"Listar"},
            {id: 1, name:"Criar"}
        ],
        activedView: 1,
        formType: 'insert',
        bill: {
            date_due:'',
            name: '',
            value: 0,
            done: 0
        },
        names: [
            'Luz',
            'Agua',
            'Telefone',
            'Mercado',
            'Cartao',
            'Gasolina',
            'Educacao',
            'Lazer',
            'Refeicao'
        ],
        bills: [
            {date_due: '20/08/2016', name: 'Luz', value: 25.99, done:1},
            {date_due: '20/08/2016', name: 'Agua', value: 35.99, done:0},
            {date_due: '20/08/2016', name: 'Telefone', value: 45.99, done:0},
            {date_due: '20/08/2016', name: 'Mercado', value: 55.99, done:0},
            {date_due: '20/08/2016', name: 'Cartao', value: 65.99, done:1},
            {date_due: '20/08/2016', name: 'Gasolina', value: 75.99, done:0},
            {date_due: '20/08/2016', name: 'Educacao', value: 85.99, done:0}
        ]
    },
    computed: {
        status: function () {
            var count = 0;
            for (var i in this.bills) {
                if (!this.bills[i].done){
                    count++;
                }
            }
            return !count?"Contas OK":" " + count + " em aberto";
        }
    },
    methods: {
        showView: function (id) {
            this.activedView = id;
            if(id == 1) {
                this.formType = 'insert'
            }
        },
        submit: function () {
            if(this.formType == 'insert')
            {
                this.bills.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };

            this.activedView = 0;
        },
        loadBill: function(bill) {
            this.bill = bill;
            this.activedView = 1;
            this.formType = 'update';
        }
    }
});

Vue.filter('doneLabel', function (value) {
    if (value==0) {
        return '<i class="icon fa fa-check-circle-o fa-fw has-text-primary"></i>'
    } else {
        return '<i class="icon fa fa-times-circle-o fa-fw has-text-danger"></i>'
    }
});