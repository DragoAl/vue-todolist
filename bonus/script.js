var app = new Vue ({
    el: '#todo',
    data : {
        newItem: {text :'' , done : true},
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
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        addItem(){
            if (this.newItem.text !== '' && this.newItem.text[0] !== ' ' ){
                this.items.push(this.newItem);
                this.newItem = {text :'' , done : true};
    
            }
        },
        markAsDone(index){
            if (this.items[index].done == false) {
                this.items[index].done = true

            } else {
                this.items[index].done = false            
            }

        }
    }
}

)