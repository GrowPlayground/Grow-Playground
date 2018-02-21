// SCRIPT TO LOAD CONSOLE - MIGRATE TO CONSOLE.VUE 

// TAB PARENT
Vue.component("tabs", {
template: 
`
	<div>
		<div>
		 <ul class="nav nav-pills">
		  <li class="nav-item" v-for="tab in tabs" :class='{"active" : tab.isActive}'>
			<a :href="tab.href" class="nav-link" @click="selectTab(tab)">{{tab.name}}</a>
		  </li>
		 </ul>
		</div>

		<div class="tabsDetails">
			<slot></slot>
			
		</div>
	</div>
`,

data(){
	return { tabs: []};
},

created(){
	this.tabs = this.$children;
},

methods: {
	selectTab(selectedTab){	
		this.tabs.forEach(tab => {
			tab.isActive = (tab.name == selectedTab.name);
		});
	}
}
}),

//INDIVIDUAL TAB
Vue.component("tab",{
	template: 
	`
	<div v-show="isActive"><slot></slot></div>

	`,

	props: {
		name: {required: true},
		selected: { default: false}
	},

	data(){
		return {
			isActive: false
		};
	},

	computed: {
		href(){
			return "#";
		}
	},

	mounted(){
		this.isActive = this.selected;
	}
}),


Vue.component("console-button",{
	template: 
	`
	<span class="consoleButton"></span>
	`,
})

data = {
	health : 1
}

new Vue({
	el: '.consoleContainer',
	

})



/* MIGRATE TO TABS.VUE - REUSABLE FEATURE */


/* END OF TABS */