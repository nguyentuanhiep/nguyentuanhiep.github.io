function myFunction() {
	var obj = window.location.search.substring(1);
	var a = obj.split('&');
	for (var i = 0; i < a.length; i++) {
		var newA = a[i].replace('=',':').replace('%40', '@').replace('+', ' ')
		$('.info').append('<h3>' + newA + '</h3>')
	}
}
myFunction();

for (var i = 1; i<32; i++) {
	$('#day').append('<option>' + [i] + '</option>');
}

var arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	for (var i = 0; i < arr.length; i++) {
		$('#month').append('<option>' + arr[i] + '</option>');
	}

for (var i = 1900; i < 2018; i++) {
	$('#year').append('<option>' + [i] + '</option>');
}