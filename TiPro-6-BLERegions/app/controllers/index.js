var beacons;

if (OS_IOS) {
    beacons = require('org.beuckman.tibeacons');
    beacons.addEventListener('bluetoothStatus', function(e) {
        console.log(e);
    });
} else {
    beacons = require('com.liferay.beacons');
}

$.label.addEventListener('touchstart', function(e) {
    beacons.requestBluetoothStatus();
});

$.index.open();