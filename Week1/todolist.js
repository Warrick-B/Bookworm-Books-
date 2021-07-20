const app = new Vue({
el: '#app',
data:{
  title: 'ToDo List.',
  newtodo:'',
  todos:[],
},
methods: {
  addTodo(){
    this.todos.push({
      title: this.newtodo,
      done: false
    });
    this.newtodo = '' //clear out entry text box
  },
  
  removeTodo(todo)
  {
    const todoIndex =this.todos.indexOf(todo);
    this.todos.splice(todoIndex, 1);
  }
}
});