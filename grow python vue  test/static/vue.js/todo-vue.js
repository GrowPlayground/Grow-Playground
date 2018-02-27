Vue.component('ToDos',{

    template: '<div> <slot> </slot> </div>'
});

Vue.component('header-todos',{
    template: '<div> ToDo-List </div>'
});



Vue.component('general-task', {

    template: '<div> <slot></slot> </div>'

});

var app = new Vue ({

	el: '#ToDos',
	data: {
		newtask: '',
		editedTodo: null,
	    visibility: 'all',
		tasks: []
		},

	methods: {
		addTask() {
			var value = this.newtask;

			if(!value) { return }

			this.tasks.push(value);
			this.newtask='';		
		}
	},
});


