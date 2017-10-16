// 1. document.getElementById.
// 2. document.getElementsByTagName.
// 3. document.getElementsByClassName.
// 4. document.querySelectorAll.
// 5. document.forms["myForm"].elements["username"]

var usernameInput = document.forms["myForm"].elements["username"];
usernameInput.onkeyup = function(){
	var span = usernameInput.nextElementSibling;    

	var username = usernameInput.value;
	if(username.length == 0){
		span.innerHTML = "Vui lòng nhập username.";
		span.style = "color:red;";
	} else {
		span.innerHTML = "Ok.";
		span.style = "color:green;";
	}	
}
