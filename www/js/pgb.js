function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
}
function mcgorisInfo() {
	
	info = 'Siema, tu mcgoris ' + '\n' +
		   'Imie : ' + 'Marcin' +  '\n' +
		   'Nazwisko : ' + 'Goryl' +  '\n' +
		   'E-mail : ' + 'mcgoris@o2.pl' +  '\n' +
		   'Website : ' + 'mcastronomia.blogspot.com' + '\n' +
		   'Grupa : ' + 'Informatyka i Ekonometria' + '\n' +
		   'Studia : ' + '3 rok' + '\n';
	   
	navigator.notification.alert(info);
	
}
	
