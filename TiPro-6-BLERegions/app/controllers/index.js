var beacons;

if (OS_IOS) {
    beacons = require('org.beuckman.tibeacons');
    beacons.addEventListener('bluetoothStatus', function(e) {
        console.log(e);
        if (e.status === 'on') {
            beacons.startAdvertisingBeacon({
                uuid: "F60E144E-F138-42AA-B362-2E91DE91C7B5",
                identifier: "Titanium in Practice Beacon Test",
                major: 100,
                minor: 1
            });

        }
    });
} else {
    beacons = require('com.liferay.beacons');
}

$.label.addEventListener('touchstart', function(e) {
    beacons.requestBluetoothStatus();
});

$.index.open();