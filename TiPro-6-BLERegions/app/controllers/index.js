var beacons;

var beaconObject = {
    uuid: "F60E144E-F138-42AA-B362-2E91DE91C7B5",
    identifier: "Titanium in Practice Beacon Test",
    major: 100,
    minor: 1
};

if (OS_IOS) {
    beacons = require('org.beuckman.tibeacons');
    beacons.addEventListener('bluetoothStatus', function(e) {
        console.log(e);
        if (e.status === 'on') {
            beacons.startAdvertisingBeacon(beaconObject);
        } else {

        }
    });
} else {
    beacons = require('com.liferay.beacons');
}

$.broadcastButton.addEventListener('click', function(e) {
    beacons.requestBluetoothStatus();
});

$.requestButton.addEventListener('click', function(e){
	Ti.Geolocation.requestAuthorization(Ti.Geolocation.AUTHORIZATION_ALWAYS);
});

$.monitorButton.addEventListener('click', function(e) {
    beacons.startMonitoringForRegion({
        uuid: "F60E144E-F138-42AA-B362-2E91DE91C7B5",
        identifier: "Test Region 1"
    });

});

$.wrapper.open();