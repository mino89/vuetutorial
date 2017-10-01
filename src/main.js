import Vue from 'vue'


var app = new Vue({
    el:'#app',
    data:{
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el:'#app-2',
    data:{
    message: 'hai caricato questa pagina il' + new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'Impara il javascript!'},
            {text:'Impara Vue'},
            {text:'Costruisci qualcosa di spettacolare'},
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message: 'Ciao vue.js'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })

// data object
new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    }
  })