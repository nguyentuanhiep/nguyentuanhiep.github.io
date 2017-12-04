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

$('#form-register').on('submit',function(){
	var isValid=true;

		if ($('#name').val().trim() == '') {
			$('#name').next('span').text('Name is empty');
			isValid=false;
		} else {
			$('#name').next('span').text('');
		}

		if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
			$('#email').next('span').text('Email is invalid');
			isValid=false;
		} else {
			$('#email').next('span').text('');
		}

		if ($('#password').val().match(/^(?=.*\d).{4,8}$/) == null) {
			$('#password').next('span').text('Password is invalid');
			isValid=false;
		} else {
			$('#password').next('span').text('');
		}

		if ($('#confirm').val().trim() != $('#password').val()) {
			$('#confirm').next('span').text('Not confirm');
			isValid=false;
		} else {
			$('#confirm').next('span').text('');
		}

		if ($('#address').val().trim() == '') {
			$('#address').next('span').text('Address is empty');
			isValid=false;
		} else {
			$('#address').next('span').text('');
		}

		if ($('#phone').val().match(/^\(0[1-9]{1}\)[0-9]{8}$/) == null) {
			$('#phone').next('span').text('Phone is empty');
			isValid=false;
		} else {
			$('#phone').next('span').text('');
		}
		console.log(isValid);
		return isValid;
});

$('#name').on('click', function(){
	$('.yourname').show();
	$('.mail').hide();
	$('.pass').hide();
	$('.repeat').hide();
	$('.telephone').hide();
});

$('#email').on('click', function(){
	$('.mail').show();
	$('.pass').hide();
	$('.repeat').hide();
	$('.yourname').hide();
	$('.telephone').hide();
});

$('#password').on('click', function(){
	$('.pass').show();
	$('.mail').hide();
	$('.yourname').hide();
	$('.repeat').hide();
	$('.telephone').hide();
});

$('#confirm').on('click', function(){
	$('.repeat').show();
	$('.pass').hide();
	$('.mail').hide();
	$('.yourname').hide();
	$('.telephone').hide();
});

$('#address').on('click',function(){
	$('.repeat').hide();
	$('.pass').hide();
	$('.mail').hide();
	$('.yourname').hide();
	$('.telephone').hide();
});

$('#phone').on('click',function(){
	$('.telephone').show();
	$('.repeat').hide();
	$('.pass').hide();
	$('.mail').hide();
	$('.yourname').hide();
});