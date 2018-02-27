
	//pop up modal PopUp Main Event 

	$('body').on('click','.close',closeMainEvent);
	

// close Main Event Pop Up 
	
	function closeMainEvent(event){
		$('#Main-PopUp').fadeOut();
		$('#Main-PopUp-main').fadeOut();
	}	

	//pop up login 

	$('body').on('click','.login',showMainlog);
	$('body').on('click','.close',closeMainlog);



	function showMainlog(event){
		$('#login-PopUp').fadeIn();
		$('#login-PopUp-main').show();
	}
	
// close login pop up 
	
	function closeMainlog(event){
		$('#login-PopUp').fadeOut();
		$('#login-PopUp-main').fadeOut();
	}	


	//pop up sign Up 

	$('body').on('click','.signup',showMainSignUp);
	$('body').on('click','.close',closeMainSignUp);



	function showMainSignUp(event){
		$('#signUp-PopUp').fadeIn();
		$('#signUp-PopUp-main').show();
	}
	
// close sign Up pop up 
	
	function closeMainSignUp(event){
		$('#signUp-PopUp').fadeOut();
		$('#signUp-PopUp-main').fadeOut();
	}	




//  verification sign Up 




