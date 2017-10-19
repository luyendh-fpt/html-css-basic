// 1. Định nghĩa về đối tượng (object)
// 1.1 Cách khai báo một đối tượng trong javascript.
// 1.1 Làm việc với đối tượng kiểu mảng, đối tượng lồng.

// 2. DOM là gì?
// 2.1 Những thứ có thể làm = DOM -> tất cả trên tài liệu html.
// 2.2 Cách lấy ra các phần tử trong DOM. 4 (đã học)

// 1. document.getElementById("id");
// 2. document.getElementsByTagName("tag-name");
// 3. document.getElementsByClassName("class-name");
// 4. document.querySelectorAll("");
// 5. document.forms["login-form"].elements["username"];

// Navigation DOM
var btnLogin = document.getElementById("btnLogin");
var usernameInput = document.forms["login-form"].elements["username"];
var passwordInput = document.forms["login-form"].elements["password"];
var isValidUserName = false;
var isValidPassword = false;

usernameInput.onkeyup = function(){
	checkValidUserName();
}

passwordInput.onkeyup = function(){
	checkValidPassword();
}

btnLogin.onclick = function(){		
	return isValidUserName && isValidPassword;
};

function checkValidUserName(){	
	var spanMsg = usernameInput.nextElementSibling;
	if (usernameInput.value.length == 0){
		spanMsg.classList = "error-msg";
		spanMsg.innerHTML = "*Vui lòng nhập username.";				
		isValidUserName = false;
	} else{
		spanMsg.classList = "success-msg";
		spanMsg.innerHTML = "Ok.";
		isValidUserName = true;
	}
}


function checkValidPassword(){	
	var spanPasswordMsg = passwordInput.nextElementSibling;	
	if (passwordInput.value.length == 0){
		spanPasswordMsg.classList = "error-msg";
		spanPasswordMsg.innerHTML = "*Vui lòng nhập password.";
		isValidPassword = false;
	}else{
		spanPasswordMsg.classList = "success-msg";
		spanPasswordMsg.innerHTML = "Ok.";
		isValidPassword = true;	
	}
}



