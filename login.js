// JavaScript source code

var name = document.getElementById("username").value;
var password = document.getElementById("password").value;

// Storing Field Values In Variables
var form=document.getElementById("form").value;
var name = document.getElementById("username").value;
var password = document.getElementById("password").value;

var nameBool=false;
var passwordBool=false;


form.addEventListener('submit',(e)=>{
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
    var nameValue = name.value.trim();
    var passwordValue = password.value.trim();
  

	if(nameValue === ''){
	     setErrorFor(name,'Username can not be blank');
	}else{
		nameBool=true;
		setSuccesFor(name);
	}

	if(passwordValue === ''){
	     setErrorFor(password,'Password can not be blank');
	}else{
	    passwordBool=true;
		setSuccesFor(password);
	}
}

function setErrorFor(input,message){
	 var formControl = input.parentElement;
	 var small = formControl.querySelector('small');
	 small.innerText = message;

	 formControl.className= 'form-control error';

}

function setSuccesFor(input){
     var formControl = input.parentElement;
	  formControl.className= 'form-control success';

	  if(nameBool===true && passwordBool===true ){
	  	  alert("Login Successfully");
	  }

}


  