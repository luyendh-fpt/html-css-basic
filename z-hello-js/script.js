// lấy ra checkbox dùng để check all theo id.
var checkAll = document.getElementById("checkAll");

// Bắt sự kiện vào checkbox, mỗi khi người dùng click.
checkAll.onclick = function () {
	// Lấy và kiểm tra xem checkbox này được check hay không.
	var isCheckAll = this.checked;
	// Lấy ra tất cả các phần tử có class là checkboxId để thay đổi thông tin checked.
	var arrayCheckbox = document.getElementsByClassName("checkboxId");	
	for(var i = 0; i < arrayCheckbox.length; i++){
		// set thuộc tính checked theo giá trị của thằng checkall.
		arrayCheckbox[i].checked = isCheckAll;
	}
}

var btnCheckId = document.getElementById("btnCheck");
btnCheckId.onclick = function(){
	var ids = "";
	var arrayCheckbox = document.getElementsByClassName("checkboxId");
	for(var i = 0; i < arrayCheckbox.length; i++){
		if(arrayCheckbox[i].checked){
			ids += arrayCheckbox[i].value + ",";
		}		 
	}
	alert(ids);

	// var ids = "";	
	// var arrayCheckbox = document.querySelectorAll("input[class=checkboxId]:checked");
	// for(var i = 0; i < arrayCheckbox.length; i++){
	// 	if(arrayCheckbox[i].checked){
	// 		ids += arrayCheckbox[i].value + ",";
	// 	}		 
	// }
	// alert(ids);
}