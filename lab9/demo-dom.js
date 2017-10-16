function validateName(){
	var txtName = document.getElementById("txtName");
	var msgName = document.getElementById("msgName");
	if(txtName.value.length == 0) {
		msgName.style.color = "red";
		msgName.innerHTML = "Vui lòng nhập tên.";
	} else if(txtName.value.length < 3) {
		msgName.style.color = "red";
		msgName.innerHTML = "Tên quá ngắn.";
	} else {
		msgName.innerHTML = "Tên hợp lệ.";
		msgName.style.color = "green";
	}
}

document.getElementById("txtName").onkeyup = function(){
	validateName();
};

