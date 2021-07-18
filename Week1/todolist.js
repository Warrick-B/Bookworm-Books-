Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      TodoList: [
        { id: 0, text: 'Practical 1' },
        { id: 1, text: 'Project Proposal' },
        { id: 2, text: 'Project Implementation ' }
      ]
    }
})