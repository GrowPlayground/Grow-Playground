
$(document).ready( function()
{
	/* $('#addItem').on('click',addItem); */            /*  if you use the button submit task version */

	$('#ToDos').on('change','.completeItem',completeItem);   /* change the boxe of checkbox ( Valid or not) */
	$('#ToDos').on('click','.deleteItem',deleteItem);        /* the button to delete item */
	$('ToDos').on('click','.remove-Menu',deleteItem);
	$('#task_to-do').on('keypress', function(event){       /*  13 ->> keycode(button : Entree ) */
		if(event.keyCode === 13){							/* function when you click in keyboard Entree */
			addItem();
			event.preventDefault();
		}
	});

	// edit calendar 
	


	// editing 
	$('#ToDos').on('click','.ToDoText',startEditing);
	$('#ToDos').on('click','.saveItem','cancelItem',stopediting);
	$('#ToDos').on('click','.cancelItem','saveItem',cancelediting);
	
	// pop up modal TodoS

	$('#ToDos').on('click','.editItem',showModal);
	$('#ToDos').on('click','.close',closeModal);

	//pop up modal accomplished 
	$('#ToDos').on('click','#accomplished-ref',showaccomplished);
	$('#ToDos').on('click','.close',closeaccomplished);

	// showing the box of tasks 
	
	$('#ToDos').on('click','#title-IU',oth);
	$('#ToDos').on('click','#title-I',oth);
	$('#ToDos').on('click','#title-U',oth);
	$('#ToDos').on('click','#title-NIU',oth);
	$('#ToDos').on('click','.general-task-title',oth);

	
	// showing / hiding ToDos

	$('#ToDos').on('click','#To-Dos-ref',showToDos);
	$('#ToDos').on('click','.close',closeToDos);
	// cancel button in modal ToDos
	$('#ToDos').on('click','.failled',closeModal);


	// showing Option Edit / Remove  on li
	$('.custom-menu').hide();
	$('li').on('contextmenu',function(event){
		event.preventDefault();
	});
	$('#general-task').on('contextmenu',function(event){
		event.preventDefault();
	});
	
	




	function startEditing(event){

		var searchParent = $(this).parent();  // to get the parent in DOM


		// get the current text
		var currentText = searchParent.find('.ToDoText').text();  // find stop when she find the first element that e gave in option
		//place it inside the text box
		searchParent.find('.editText').val(currentText);
		//show the text box
		searchParent.find('.editText').show();
		searchParent.find('.saveItem').show();
		searchParent.find('.cancelItem').show();
		//hide the orriginal text
		searchParent.find('.ToDoText').hide();
	}

	function  stopediting(event){
		var searchParent = $(this).parent();
		//hide the save button
		searchParent.find('.cancelItem').hide();
		$(this).hide();
		var newvalue = searchParent.find('.editText').val();
		//hide the edit box
		searchParent.find('.editText').hide();
		// get the value from the edit box and place it in ou span
		searchParent.find('.ToDoText').text(newvalue);
		// show our span
		searchParent.find('.ToDoText').show();
	
	}

	function cancelediting(event){
		var searchParent=$(this).parent();
		// hide the cancel button 
		searchParent.find('.saveItem').hide();
		$(this).hide();
		// hide the save button
		searchParent.find('.saveItem').hide();
		//hide the edit box
		searchParent.find('.editText').hide();
		// show our span
		searchParent.find('.ToDoText').show();	
	}

	// making our list of task

	function addItem(event){   /* name of the function */
		var newToDoText = $('#task_to-do').val();   /*  grabing the value of what we write in the boxe text  and store it in a variable*/
		$('#general-task').append('<li class="menuList"><input type="checkbox" class= "completeItem"><span class="glyphicon glyphicon-calendar calendarItem" ></span><span class="ToDoText">' + newToDoText + '</span><input type="text" class="editText"><button class="btn btn-success saveItem">save</button><button class="btn btn-fail cancelItem">cancel</button></li>');     /* add what we already grab in the first funtion to the general boxe + specifying that it's a checkboxe and add an trash icone from the site of bootstrap &&   wwe link all of this to completItem class and deleteItem class */             
		$('#task_to-do').val(""); /* clear the boxe task to do to make another task  */
	}

	function deleteItem(event){  /* name of the function*/
		$(this).parent().remove(); /* select the parent of what e wanted to remove ( if we see : the <input (checkbox)>  ->  his parent in DOM is <li> so if we remove the parent, the checkboxe disappear) */
	}

	function completeItem(event){
		$(this).parent().toggleClass('done');  /* same for the previous one, just here we link it to a classe which can be modified in your css */
	}


	//  Pop Up

	function showModal(event){
		$('#modal-ToDos').fadeIn();
		$('.modal_ToDos-List').show();
	}
	
	function closeModal(event){
		$('#modal-ToDos').fadeOut();
		$('.modal_ToDos-List').fadeOut();
	}

	// Pop Up ToDos-Main

	function showToDos(event){
		$('#PopUp-ToDo-list').fadeIn();
		$('#PopUp-ToDo-list-main').show();
	}
	
	function closeToDos(event){
		$('#PopUp-ToDo-list').fadeOut();
		$('#PopUp-ToDo-list-main').fadeOut();
	}


	// accomplished Pop Up 



	function showaccomplished(event){
		$('#PopUp-accomplished-list').fadeIn();
		$('#PopUp-accomplished-list-main').show();
	}
	
	function closeaccomplished(event){
		$('#PopUp-accomplished-list').fadeOut();
		$('#PopUp-accomplished-list-main').fadeOut();
	}	

	//   hiding / showing the box tasks


	function oth (event) {
		$(this).next().toggle(400);
	}

	//   hiding / showing the different button :   calendar

	$('#general-task').on('mouseover','li',showOption);
	$('#general-task').on('mouseout','li',hideOption);

	function showOption(event){
		$(this).find('.calendarItem').css({
			'opacity':'1'
		});
		
	}

	function hideOption(event){
		$('.calendarItem').css({
			'opacity':'0'
		});
		
	}


	// Menu Option 


	$('#ToDos').on('contextmenu','li',ShowMenu);
	$(document).on('click',HideMenu);

	function ShowMenu(event){
		$('.custom-menu').toggle(200);
		$('.custom-menu').offset({
			left : event.pageX,
			top  : event.pageY
		});
	}

	function HideMenu(event){
		$('.custom-menu').hide();
	}

	
	// removing
	$('.custom-menu').on('click','#remove-Menu',function (event) {
		console.log(event.delegateTarget);
	});

	// editing
	$('.custom-menu').on('click','#edit-Menu',showModal);


	// Drop and drag event

	 	$('ul').sortable({
		containment : 'document',
		cursor : 'move',
		opacity : 0.6,
		connectWith : 'ul'
	}); 
	$('ul').disableSelection();

	// try to delete
	
	$('#modal-ToDos').on('click','#edit-ToDos-delete',function(event){
		console.log(event);
	});

});


