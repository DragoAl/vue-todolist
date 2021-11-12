var app = new Vue ({
    el: '#todo',
    data : {
        newItem: {text :'' , done : false},
        items : [
            {
                text: 'fare la spesa',
                done : true
            },
            {
                text: 'portare il gatto dal veterinario',
                done : false
            },
            {
                text: 'pulire il bagno',
                done : true
            } ,   
            {
                text: 'allenarsi',
                done : false
            } ,   
            {
                text: 'scrivere codice',
                done : false
            },    
          
        ],
        
    },
    methods: {
        removeItem(index) {
            this.items.splice(index, 1);
        },
        addItem(){
            this.items.push(this.newItem);
            this.newItem = {text :'' , done : false};
        }
    }
}

)