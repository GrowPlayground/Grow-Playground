Vue.component('ToDos',{

    template: '<div> <slot> </slot> </div>'
});

Vue.component('header-todos',{
    template: '<div> ToDo-List </div>'
});



Vue.component('general-task', {
    template: '<div> <slot></slot>  </div>'
});


Vue.component('all-Todos',{
    template: '<div> <slot> </slot> </div>'
});


var app = new Vue ({

	el: '#container',
	data: {
	    showAllTodos:false,

		newtask: '',
		editedTodo: null,
	    visibility: 'all',
		tasks: []
		},

	methods: {
		addTask() {
			var value = this.newtask;

			if(!value) { return }

			this.tasks.push({
				title:value,
				completed:false
			});
			this.newtask='';		
		},

		deleteTodo(task){
			this.tasks.splice(this.tasks.indexOf(task),1)
		}

	},
});

