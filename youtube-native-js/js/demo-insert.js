var btnInsert = document.getElementById("btnInsert");
btnInsert.onclick = function(){
	var divContent = document.getElementById("content");
	var para = "";
	for (var i = 0; i < 15; i++) {
		para += '<div class="video">';
		para += '<img src="https://i.ytimg.com/vi/-TR_0x0Bl70/mqdefault.jpg">';
		para += '<p>Taylor Swift song</p>';
		para += '</div>';
	}	
	divContent.innerHTML += para;
}