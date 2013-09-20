

function setIconCookie(cName){

    var date=new Date(); 
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var lastday;

	var nextYear;
	var nextMonth;
	if (month == 12){
		nextYear = year+1;
		nextMonth = 1;
	}else{
		nextYear = year;
		nextMonth = month+1;
	}
	//末日取得
	lastday = new Date(nextYear, nextMonth-1, 0);

	document.cookie = cName + "=" + escape(month) + "; expires=" + lastday.toGMTString();
}

$(document).ready(function(){
    var date=new Date(); 
	var month = date.getMonth()+1;

	var cName = "monthcookie";
	if (document.cookie) {
		var cookies = document.cookie.split("; ");
		for (var i = 0; i < cookies.length; i++) {
			var str = cookies[i].split("=");
			if (str[0] == cName) {
				var cookie_value = unescape(str[1]);
				if ( cookie_value != month ){
					setIconCookie(cName);
					location.reload();
				}
			}
		}
	} else {
		setIconCookie(cName);
	}

    
	var cal = month+'.png';
	$('#icon').remove();
	$('meta:last').after($(document.createElement('link')).attr('id', 'icon').attr('rel', 'apple-touch-icon-precomposed').attr('href', cal));

	var iconImg = $('#iconimg');
	iconImg.empty();
	iconImg.append('<img src="'+cal+'">');
});


