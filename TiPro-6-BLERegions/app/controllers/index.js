
var beacons;

if (OS_IOS){
	beacons = require('org.beuckman.tibeacons');
} else {
	beacons = require('com.liferay.beacons');
}

$.index.open();
