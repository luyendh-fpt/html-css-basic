//  // Địa chỉ server. Làm việc bằng server side script.
// var apiUrl = "http://youtube-video-api-1608.appspot.com/youtube/api";

// function tenCuaFunction(){
// 	var classHelloTu = document.getElementsByTagName("p");
// 	for (var i = 0; i < classHelloTu.length; i++) {
// 		classHelloTu[i].style.color = "pink";
// 	}	
// }

// function validateForm() {
// 	var videoId = document.getElementById("video-id").value;
// 	var videoName = document.getElementById("video-name").value;
// 	var description = document.getElementById("description").value;
// 	var keyword = document.getElementById("keyword").value;

 	
// 	// Json format. Dữ liệu được gửi đi.
//  	var video = {
// 		"videoId": videoId,
// 		"name": videoName,
// 		"description": description,
// 		"keywords": keyword
// 	};

// 	// construct an HTTP request
// 	var xhr = new XMLHttpRequest(); // Đối tượng có sẵn.
// 	// Mở kết nối tới server với địa chỉ cho trước. Phương thức POST.
// 	xhr.open("POST", apiUrl, true);	
// 	// Gửi dữ liệu theo định dạng json.
// 	xhr.send(JSON.stringify(video));
// 	xhr.onreadystatechange = function() {
// 		// Khi việc gửi dữ liệu lên server thành công.
// 		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
// 			// Hiển thị thông báo cho người dùng.
// 			alert("Send success." + xhr.responseText);
// 		}	  
// 	};
	
	
// }

document.getElementById("btnSubmit").onclick = function(){
	alert(1);
};

