
// *****************           VueJs                     **********************************


// input list  in general list : using vue.js
Vue.component('general-task-list', {

	template:'<div> <slot></slot> </div>'

});




new Vue ({

	el: '#task',
	data: {
		newtask: '',
		tasks: []
		},

	methods: {
		addTask() {

			this.tasks.push(this.newtask);
			this.newtask='';		
		}
	},
});



 // the different boxes : 


Vue.component('important_urgent-list','important-list','urgent-list','not_important_urgent-list', {

	template:'<div> <slot></slot> </div>'

});




// ***************************    Jquery  ******************************



