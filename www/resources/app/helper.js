String.prototype.format = function (e) { let t = this; if (arguments.length > 0) if (arguments.length == 1 && typeof e == "object") { for (let n in e) if (e[n] != undefined) { let r = new RegExp("({" + n + "})", "g"); t = t.replace(r, e[n]) } } else for (let i = 0; i < arguments.length; i++) if (arguments[i] != undefined) { let r = new RegExp("({)" + i + "(})", "g"); t = t.replace(r, arguments[i]) } return t };
String.prototype.subStrEx = function (e) { return this.length + 3 > e ? this.substr(0, e) + "..." : this };
function isUndefined(e) { return "undefined" == typeof e };


let CurrentTimeZone = moment().utcOffset() / 60;

let Protocol = {
    MarkerIcon: [
        L.icon({
            iconUrl: 'resources/images/markers/pin-track.svg',
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-watch.svg',
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-loc8.svg',
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-protect.svg',
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
        }),

        L.icon({
            iconUrl: 'resources/images/markers/pin-acc-off.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-acc-on.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-activity.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-stopped.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-moving.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-search-address.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-geo-in.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),
        L.icon({
            iconUrl: 'resources/images/markers/pin-geo-out.svg',
            iconSize:     [32, 32], // size of the icon
            iconAnchor:   [16, 31], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -32] // point from which the popup should open relative to the iconAnchor
        }),

    ],
    TrackingInterval: [
        {
            '1':{
                AUS: {
                    cost: 5.50 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,  //month
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LT53RSYE5B4A2',
                    payPlanCode: 'LT53RSYE5B4A2',
                },
                OTHER: {
                    cost: 0.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,  //month
                    button: '',
                    payPlanCode: '',
                },
            },
            '2':{
                AUS: {
                    cost: 66.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,    // year
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4P2ZLZU7KYZ8G',
                    payPlanCode: '4P2ZLZU7KYZ8G',
                },
                OTHER: {
                    cost: 0.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,    // year
                    button: '',
                    payPlanCode: '',
                },
            },
            intervalDisplayed: '12'+' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG10,
            interval: 720,
        },
        {
            '1':{
                AUS: {
                    cost: 8.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MT2SUYZ35R7GL',
                    payPlanCode: '2WHU48K4XUFSS'
                },
                OTHER: {
                    cost: 2.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2WHU48K4XUFSS',
                    payPlanCode: '2WHU48K4XUFSS'
                },
            },
            '2':{
                AUS: {
                    cost: 96.00 +' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LQYYAZFFYW9D6',
                    payPlanCode: 'L9S33552S62Q6'
                },
                OTHER: {
                    cost: 20.00 +' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L9S33552S62Q6',
                    payPlanCode: 'L9S33552S62Q6'
                },

            },
            intervalDisplayed: '6'+' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG10,
            interval: 360,
        },
        {
            '1':{
                AUS: {
                    cost: 12.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZPUNBTBMQU594',
                    payPlanCode: 'FHWEQYJU4J7PG'
                },
                OTHER: {
                    cost: 5.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FHWEQYJU4J7PG',
                    payPlanCode: 'FHWEQYJU4J7PG'
                },
            },
            '2':{
                AUS: {
                    cost: 144.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W7ZNFJ976H7CL',
                    payPlanCode: 'KHH32FAY82TTC'
                },
                OTHER: {
                    cost: 50.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KHH32FAY82TTC',
                    payPlanCode: 'KHH32FAY82TTC'
                },
            },
            intervalDisplayed: '1'+' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG09,
            interval: 60,
        },
        {
            '1':{
                AUS: {
                    cost: 16.50 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VMDPGMUUAFTFC',
                    payPlanCode: 'S52J34JS89MTU'
                },
                OTHER: {
                    cost: 10.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S52J34JS89MTU',
                    payPlanCode: 'S52J34JS89MTU'
                },
            },
            '2':{
                AUS: {
                    cost: 198.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BDR3HC6Z4AX9U',
                    payPlanCode: '8ZRAGALKV27D2'
                },
                OTHER: {
                    cost: 100.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8ZRAGALKV27D2',
                    payPlanCode: '8ZRAGALKV27D2'
                },
            },
            intervalDisplayed: '30'+' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG07,
            interval: 30,
        },
        {
            '1':{
                AUS: {
                    cost: 19.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LB6GD39K98M6U',
                    payPlanCode: 'W4LJDLLA4DNHU'
                },
                OTHER: {
                    cost: 20.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG03,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W4LJDLLA4DNHU',
                    payPlanCode: 'W4LJDLLA4DNHU'
                },
            },
            '2':{
                AUS: {
                    cost: 228.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3HDP3UANR3KBQ',
                    payPlanCode: 'W7N6LKCNNLT6S'
                },
                OTHER: {
                    cost: 200.00 + ' ' + LANGUAGE.ASSET_TRACKING_INTERVAL_MSG12,
                    button: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W7N6LKCNNLT6S',
                    payPlanCode: 'W7N6LKCNNLT6S'
                },

            },
            intervalDisplayed: '1'+' '+LANGUAGE.ASSET_TRACKING_INTERVAL_MSG11,
            interval: 1,
        },
    ],
    PositionTypes: {
        "NONE": 0,
        "GPS": 1,
        "LBS": 2,
        "GPSLBS": 3,
        "IRIDIUM": 4,
        "COMPASS": 8,
        "GLONASS": 16,
        "WiFi": 32
    },
    DeviceStatus: {
        "Disable": 0,
        "Normal": 1,
        "Overdue": -1
    },
    PositionAlerts: {
        "None": 0,
        "Custom": 1,
        "SOS": 2,
        "ElectricCutoff": 4,
        "InGeoFance": 8,
        "OutGeoFance": 16,
        "HighSpeed": 32,
        "LowSpeed": 64,
        "Theft": 128,
        "Vibrate": 256,
        "LowPower": 512,
        "Moving": 1024,
        "Fire": 2048,
        "MedicalHelp": 4096,
        "Defence": 8192,
        "Destroy": 16384,
        "ACCON": 32768,
        "ACCOFF": 65536,
        "INPUT1": 131072,
        "INPUT2": 262144,
        "INPUT1_LOW": 524288,
        "INPUT2_LOW": 1048576,
        "HardBrake": 2097152,
        "LowTemp": 4194304,
        "HighTemp": 8388608,
        "FatigueDriving": 16777216,
        "Accelerate": 33554432,
        "Offline": 67108864,
        "INPUT3": 134217728,
        "INPUT3_OFF": 268435456,
        "INPUT4": 536870912,
        "INPUT4_OFF": 1073741824,
    },
    PositionStatus: {
        "NONE": 0,
        "ACC": 1,
        "Static": 2,
        "Power": 4,
        "Charging": 8,
        "BeProtected": 16,
        "ACC2": 32,
        "Relay": 64,
        "ForceSave": 2097152,
    },
    EventClasses: {
        "PROTOCOL_DEFINED": 0,
        "ALERT": 1,
        "ACC": 2,
        "STATIC": 4,
        "COMMAND": 8,
        "POI": 16,
        "ACC2": 32,
        "GEOLOCK": 64,
        "ACC3": 128,
        "SERVICEINTERVAL": 256,
        "NEW_SERVICEINTERVAL": 512,
        "POI_STATION": 1024
    },
    EventCommandTypes: {
        "NONE": 0,
        "REQUEST": 1,
        "RESPONSE": 2
    },
    ProductFeatures : {
        None: 0,
        LatLng: 1,
        Alt: 2,
        Direct: 4,
        Speed: 8,
        Mileage: 16,
        GsmSignal: 32,
        GpsSignal: 64,
        Acc: 128,
        Static: 256,
        Voltage: 512,
        Battery: 1024,
        FuelSensor: 2048,
        TempSensor: 4096,
        OBD: 8192,
        RFIDCard: 16384,
        Holder: 32768,
        DrivingTime: 65536,
        Acc2: 131072,
        Heartrate: 262144,
        Charging: 524288,
        BrakePedal: 1048576,
        Seat_belt: 2097152,
        HarshBracking: 4194304,
        HarshAcceleration: 8388608,
    },
    StatusNewEnum:{
        "Geolock" : 1,
        "Immobilise": 2,
        "LockDoor": 4,
    },
    FeaturesEnum: {
        Immobilisation: 1,
        PositiveInput: 256,
        LockDoor: 512,
    },
    CustomerTypes: {
        Agent: 2,
        Enterprise: 4,
        Personal: 5,
        Dealer: 6,
        Master: 7,
        ProtectEnterprise: 8,
    },
    UserRoleTypes: {
        Admin: 1,
        Controller: 2,
        Installer: 4,
        Dirver: 5,
        User: 6,
        Standard: 7,
        View: 9,
        ViewOnly: 10,
        FullAccess: 11
    },


    Helper: {
        getSpeedValue: function (speedUnit, speed=0) {
            let ret = 0;
            speed = parseFloat(speed);
            switch (speedUnit) {
                case "KT":
                    ret = parseFloat(speed  * 0.53995680345572);
                    break;
                case "KPH":
                    ret = parseFloat(speed);
                    break;
                case "MPS":
                    ret = parseFloat(speed * 0.277777778);
                    break;
                case "MPH":
                    ret = parseFloat(speed * 0.621371192);
                    break;
            }
            return Math.round(ret);
        },
        getSpeedValueInKM: function (speedUnit, speed) {
            let ret = 0;
            switch (speedUnit) {
                case "KT":
                    ret = parseFloat(speed  / 0.53995680345572);
                    break;
                case "KPH":
                    ret = parseFloat(speed);
                    break;
                case "MPS":
                    ret = parseFloat(speed / 0.277777778);
                    break;
                case "MPH":
                    ret = parseFloat(speed / 0.621371192);
                    break;
            }
            return Math.round(ret);
        },
        getSpeedUnit: function (speedUnit) {
            let ret = "";
            switch (speedUnit) {
                case "KT":
                    ret = "kt";
                    break;
                case "KPH":
                    ret = "km/h";
                    break;
                case "MPS":
                    ret = "m/s";
                    break;
                case "MPH":
                    ret = "mile/h";
                    break;
                default:
                    break;
            }
            return ret;
        },
        getMileageValue: function (speedUnit, mileage) {
            let ret = 0;
            switch (speedUnit) {
                case "KT":
                    ret = parseInt(mileage * 0.53995680345572);
                    break;
                case "KPH":
                    ret = parseInt(mileage);
                    break;
                case "MPS":
                    ret = parseInt(mileage * 1000);
                    break;
                case "MPH":
                    ret = parseInt(mileage * 0.62137119223733);
                    break;
                default:
                    break;
            }
            return ret;
        },
        getMileageUnit: function (speedUnit) {
            let ret = "";
            switch (speedUnit) {
                case "KT":
                    ret = "mile";
                    break;
                case "KPH":
                    ret = "km";
                    break;
                case "MPS":
                    ret = "m";
                    break;
                case "MPH":
                    ret = "mile";
                    break;
                default:
                    break;
            }
            return ret;
        },
        getMileage: function(asset, mileage){
            let ret = 0;
            ret = (Protocol.Helper.getMileageValue(asset.Unit, mileage) + parseInt(asset.InitMileage) + parseInt(asset._FIELD_FLOAT7)) + '&nbsp;' + Protocol.Helper.getMileageUnit(asset.Unit);
            return ret;
        },
        getEngineHours: function(asset, launchHours){
            let ret = 0;
            ret = TimeSpan(parseInt(launchHours)*1000 + parseInt(asset.InitAcconHours)*60*60*1000 + parseInt(asset._FIELD_FLOAT8)*1000).format("^hh:mm:ss");
            return ret;
        },
        getAlertNameByType: function(type=0){
            var ret = "";
            type = parseInt(type,10);
            switch (type){
                case 8:
                    ret = LANGUAGE.ALARM_MSG12;    //InGeoFance
                    break;
                case 16:
                    ret = LANGUAGE.ALARM_MSG13;     //OutGeoFance
                    break;
            }
            return ret;
        },
        getDirectionCardinal: function(direction){
            let ret = LANGUAGE.COM_MSG027;
            direction = parseFloat(direction);
            switch (true){
                case (direction >= 338 || direction <= 22 ):
                    ret = LANGUAGE.COM_MSG019;
                    break;
                case (direction >= 23 && direction <= 75 ):
                    ret = LANGUAGE.COM_MSG020;
                    break;
                case (direction >= 76 && direction <= 112 ):
                    ret = LANGUAGE.COM_MSG021;
                    break;
                case (direction >= 113 && direction <= 157 ):
                    ret = LANGUAGE.COM_MSG022;
                    break;
                case (direction >= 158 && direction <= 202 ):
                    ret = LANGUAGE.COM_MSG023;
                    break;
                case (direction >= 203 && direction <= 247 ):
                    ret = LANGUAGE.COM_MSG024;
                    break;
                case (direction >= 248 && direction <= 292 ):
                    ret = LANGUAGE.COM_MSG025;
                    break;
                case (direction >= 293 && direction <= 337 ):
                    ret = LANGUAGE.COM_MSG026;
                    break;
            }
            return ret;
        },
        getPositionType: function(type){
            let ret = "";
            switch (type){
                case 0: case 1:
                    ret = "GPS";
                    break;
                case 2:
                    ret = "LBS";
                    break;
                case 3:
                    ret = "GPSLBS";
                    break;
                    case 4:
                    ret = "IRIDIUM";
                    break;
                case 8:
                    ret = "COMPASS";
                    break;
                    case 16:
                    ret = "GLONASS";
                    break;
                case 32:
                    ret = "WiFi";
                    break;
            }
            return ret;

        },
        getEventTypeName: function(eventClass, eventType){
            let ret = '';
            eventClass += '';
            eventType += '';
            switch (eventClass){
                case '2':
                    eventType == '1' ? ret = LANGUAGE.ASSET_ALARM_MSG11 : ret = LANGUAGE.ASSET_ALARM_MSG10;
                    break;
                case '4':
                    eventType == '1' ? ret = LANGUAGE.REPORT_PANEL_MSG136 : ret = LANGUAGE.REPORT_PANEL_MSG135;
                    break;
            }
            return ret;
        },
        getReportNameByType: function(type){
            let ret = '';
            type = ''+type;
            switch (type) {
                case '1':
                    ret = LANGUAGE.REPORTS_MSG01;
                    break; // Overview Report
                case '2':
                    ret = LANGUAGE.REPORTS_MSG00;
                    break; // Stop Log
                case '3':
                    ret = LANGUAGE.REPORTS_MSG02;
                    break; // Alarm report
                case '4':
                    ret = LANGUAGE.REPORTS_MSG03;
                    break; // Trip report
                case '5':
                    ret = LANGUAGE.REPORTS_MSG04;
                    break; // Runtime / Ignition

                default:
                    ret = LANGUAGE.REPORTS_MSG05;
            }
            return ret;
        },
        getAletTypeName: function(type){
            let ret = "";
            type = ''+type;
            switch (type){
                //case '0':           ret = LANGUAGE.REPORT_ALERT_LIST_MSG01; break; // None
                //case '1':           ret = LANGUAGE.REPORT_ALERT_LIST_MSG02; break; // Custom
                case '2':           ret = LANGUAGE.REPORT_ALERT_LIST_MSG03; break; // SOS Duress
                case '4':           ret = LANGUAGE.REPORT_ALERT_LIST_MSG04; break; // Power Disconnect
                case '8':           ret = LANGUAGE.REPORT_ALERT_LIST_MSG05; break; // Enter Geofence
                case '16':          ret = LANGUAGE.REPORT_ALERT_LIST_MSG06; break; // Leave Geofence
                case '32':          ret = LANGUAGE.REPORT_ALERT_LIST_MSG07; break; // Speed Alert
                case '128':         ret = LANGUAGE.REPORT_ALERT_LIST_MSG09; break; // Intrusion Alert
                case '256':         ret = LANGUAGE.REPORT_ALERT_LIST_MSG10; break; // Tilt / Shock
                case '512':         ret = LANGUAGE.REPORT_ALERT_LIST_MSG11; break; // Low Battery
                case '1024':        ret = LANGUAGE.REPORT_ALERT_LIST_MSG12; break; // Geolock Alert
                case '16384':       ret = LANGUAGE.REPORT_ALERT_LIST_MSG16; break; // Impact / Crash
                case '32768':       ret = LANGUAGE.REPORT_ALERT_LIST_MSG17; break; // Ignition On
                case '65536':       ret = LANGUAGE.REPORT_ALERT_LIST_MSG18; break; // Ignition Off
                case '131072':      ret = LANGUAGE.REPORT_ALERT_LIST_MSG19; break; // Positive Input
                case '1048576':     ret = LANGUAGE.REPORT_ALERT_LIST_MSG22; break; // Negative Input
                case '2097152':     ret = LANGUAGE.REPORT_ALERT_LIST_MSG23; break; // Harsh Bracking
                case '16777216':    ret = LANGUAGE.REPORT_ALERT_LIST_MSG26; break; // Fatigue Driving
                case '33554432':    ret = LANGUAGE.REPORT_ALERT_LIST_MSG27; break; // Harsh Accelerate

            }
            return ret;
        },
        getOverviewReportOptions: function(){
            let ret = [
                {
                    Value: "STATIC",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG00,
                },
                {
                    Value: "MOVE",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG01,
                },
                {
                    Value: "ACC",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG02,
                },
                {
                    Value: "ACC2",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG03
                },
                {
                    Value: "MILEAGE",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG04,
                },
                {
                    Value: "FUEL_CONSUMED",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG05,
                },
                {
                    Value: "TOTAL_MILEAGE",
                    Name: LANGUAGE.REPORT_ADDITIONAL_OPTIONS_MSG06,
                },
            ];

            return ret;
        },
        getDaysOffWeekArray: function(val=false){
            let ret = [
                {
                    val: 0,
                    name: LANGUAGE.COM_MSG005,
                    displayAs: LANGUAGE.COM_MSG012,
                },
                {
                    val: 1,
                    name: LANGUAGE.COM_MSG006,
                    displayAs: LANGUAGE.COM_MSG013,
                },
                {
                    val: 2,
                    name: LANGUAGE.COM_MSG007,
                    displayAs: LANGUAGE.COM_MSG014,
                },
                {
                    val: 3,
                    name: LANGUAGE.COM_MSG008,
                    displayAs: LANGUAGE.COM_MSG015,
                },
                {
                    val: 4,
                    name: LANGUAGE.COM_MSG009,
                    displayAs: LANGUAGE.COM_MSG016,
                },
                {
                    val: 5,
                    name: LANGUAGE.COM_MSG010,
                    displayAs: LANGUAGE.COM_MSG017,
                },
                {
                    val: 6,
                    name: LANGUAGE.COM_MSG011,
                    displayAs: LANGUAGE.COM_MSG018,
                },
            ];
            if (val !== false){
                val = parseInt(val);
                let itm = ret.find(item => item.val === val);
                if(itm) itm.selected = true;
            }
            return ret
        },
        getScheduleOptions: function (val = false){
            let ret = [
                {
                    val: 1, // Weekly
                    name: LANGUAGE.COM_MSG110,
                },
                {
                    val: 2, // Daily
                    name: LANGUAGE.COM_MSG111,
                },
                {
                    val: 3, // Monthly
                    name: LANGUAGE.COM_MSG112,
                }
            ];
            if (val !== false){
                val = parseInt(val);
                let itm = ret.find(item => item.val === val);
                if(itm) itm.selected = true;
            }
            return ret
        },
        getMonthdayOptions: function(val = false){
            let ret = [];
            for (let i = 1; i <= 28; i++) {
                ret.push({
                    val: i,
                    name: i,
                });
            }
            if (val !== false){
                val = parseInt(val);
                let itm = ret.find(item => item.val === val);
                if(itm) itm.selected = true;
            }
            return ret
        },

        getSolutionTypeIcon: function(type){
            let ret = "icon-live-no-plan";
            if (type) {
                type = type.toLowerCase();
                switch (type){
                    case 'protect':
                        ret = 'icon-live-protect2';
                        break;
                    case 'witiprotect':
                        ret = 'icon-live-protect2';
                        break;
                    case 'qprotect':
                        ret = 'icon-live-protect2';
                        break;
                    case 'witiqprotect':
                        ret = 'icon-live-protect2';
                        break;
                    case 'loc8':
                        ret = 'icon-live-loc82';
                        break;
                    case 'track':
                        ret = 'icon-live-track2';
                        break;
                    case 'wititrack':
                        ret = 'icon-live-track2';
                        break;
                    case 'boat_watch':
                        ret = 'icon-live-track2';
                        break;
                    case 'watch':
                        ret = 'icon-live-watch2';
                        break;
                }
            }
            return ret;
        },
        getDifferenceBTtwoDates: function(date1, date2){
            let ret = "";
            if (date1 && date2) {
                //let one_day=1000*60*60*24;

                // Convert both dates to milliseconds
                let date1_ms = moment(date1).valueOf();
                let date2_ms = moment(date2).valueOf();

                ret = date2_ms - date1_ms;
            }
            return ret;
        },
        getGeoImmobState: function(val){
            let ret = {
                Geolock: false,
                Immobilise: false,
                LockDoor: false,
            };
            if (val) {
                if ((parseInt(val,10) & 1) > 0) {
                    ret.Geolock = true;
                }
                if ((parseInt(val,10) & 2) > 0) {
                    ret.Immobilise = true;
                }
                if ((parseInt(val,10) & 4) > 0) {
                    ret.LockDoor = true;
                }
            }
            return ret;
        },
        getGoefenceAlarmTypes: function(val){
            let ret = [
                {
                    Val: 16,
                    State: false,
                    Name: LANGUAGE.COM_MSG029,
                },
                {
                    Val: 8,
                    State: false,
                    Name: LANGUAGE.COM_MSG028,
                },
            ];
            if (val) {
                for (let i = ret.length - 1; i >= 0; i--) {
                    if ( parseInt(val,10) & ret[i].Val) {
                        ret[i].State = true;
                    }
                }
            }
            return ret;
        },
        getGeofenceTypes: function(val){
            let ret = [
                {
                    Val: 1,
                    State: false,
                    Name: LANGUAGE.GEOFENCES_MSG00,
                },
                {
                    Val: 2,
                    State: false,
                    Name: LANGUAGE.GEOFENCES_MSG01,
                },
            ];
            return ret;
        },
        getOfflineAlarmOptions: function(selectedSrt){
            let ret = [
                {
                    Value: 24,
                    State: false,
                    Name: 24 + ' ' + LANGUAGE.ASSET_ALARM_MSG33,
                },
                {
                    Value: 48,
                    State: false,
                    Name: 48 + ' ' + LANGUAGE.ASSET_ALARM_MSG33,
                },
                {
                    Value: 72,
                    State: false,
                    Name: 72 + ' ' + LANGUAGE.ASSET_ALARM_MSG33,
                },
            ];
            if (selectedSrt) {
                let arr = selectedSrt.split(',');
                for (let i = arr.length - 1; i >= 0; i--) {
                    ret[ret.findIndex( el => el.Value === parseInt(arr[i]))].State = true;
                }
            }
            return ret;
        },
        /*getTimezoneList: function(selected){
            let ret = [
                { Value: -12,   Name: '(GMT -12:00) Eniwetok,Kwajalein' },
                { Value: -11,   Name: '(GMT -12:00) Eniwetok,Kwajalein' },
                { Value: -10,   Name: '(GMT -10:00) Hawaii' },
                { Value: -9,    Name: '(GMT -09:00) Alaska' },
                { Value: -8,    Name: '(GMT -08:00) Pacific Time (US &  Canada),Tijuana' },
                { Value: -7,    Name: '(GMT -07:00) Mountain Time (US & Canada), Arizona' },
                { Value: -6,    Name: '(GMT -06:00) Central Time (US &  Canada), Mexico City' },
                { Value: -5,    Name: '(GMT -05:00) Eastern Time (US &  Canada), Bogota, Lima, Quito' },
                { Value: -4,    Name: '(GMT -04:00) Atlantic Time (Canada),Caracas, La Paz' },
                { Value: -3.5,  Name: '(GMT -03:30) Newfoundland' },
                { Value: -3,    Name: '(GMT -03:00) Brassila, Buenos Aires, Georgetown, Falkland Is' },
                { Value: -2,    Name: '(GMT -02:00) Mid-Atlantic,Ascension Is., St. Helena' },
                { Value: -1,    Name: '(GMT -01:00) Azores,Cape Verde Islands' },
                { Value: 0,     Name: '(GMT) Casablanca,Dublin,Edinburgh, London, Lisbon, Monrovia' },
                { Value: 1,     Name: '(GMT +01:00) Amsterdam, Berlin, Brussels, Madrid, Paris, Rome' },
                { Value: 2,     Name: '(GMT +02:00) Cairo, Helsinki, Kaliningrad, South Africa' },
                { Value: 3,     Name: '(GMT +03:00) Baghdad, Riyadh, Moscow, Nairobi' },
                { Value: 3.5,   Name: '(GMT +03:30) Tehran' },
                { Value: 4,     Name: '(GMT +04:00) Abu Dhabi, Baku, Muscat, Tbilisi' },
                { Value: 4.5,   Name: '(GMT +04:30) Kabul' },
                { Value: 5,     Name: '(GMT +05:00) Ekaterinburg, Islamabad, Karachi, Tashkent' },
                { Value: 5.5,   Name: '(GMT +05:30) Bombay, Calcutta, Madras, New Delhi' },
                { Value: 5.75,  Name: '(GMT +05:45) Katmandu' },
                { Value: 6,     Name: '(GMT +06:00) Almaty, Colombo, Dhaka, Novosibirsk' },
                { Value: 6.5,   Name: '(GMT +06:30) Rangoon' },
                { Value: 7,     Name: '(GMT +07:00) Bangkok, Hanoi, Jakarta' },
                { Value: 8,     Name: '(GMT +08:00) Beijing, Hong Kong, Perth, Singapore, Taipei' },
                { Value: 9,     Name: '(GMT +09:00) Osaka, Sapporo, Seoul, Tokyo, Yakutsk' },
                { Value: 9.5,   Name: '(GMT +09:30) Adelaide, Darwin' },
                { Value: 10,    Name: '(GMT +10:00) Canberra, Guam, Melbourne, Sydney, Vladivostok' },
                { Value: 10,    Name: '(GMT +10:00) Brisbane' },
                { Value: 10.5,  Name: '(GMT +10:30) Adelaide, Darwin(daylight savings)' },
                { Value: 11,    Name: '(GMT +11:00) Magadan, New Caledonia, Solomon Islands' },
                { Value: 12,    Name: '(GMT +12:00) Auckland, Wellington, Fiji, Marshall Island' },
            ];
            if (selected) {
                ret[ret.findIndex( el => el.Value == selected)].State = true;
            }

            return ret;
        },*/
        getTimezoneList: function(selected){
            let ret = [
                { Value: '-12_Dateline Standard Time', Name: '(UTC-12:00) International Date Line West' },
                { Value: '-10_Hawaiian Standard Time', Name: '(UTC-10:00) Hawaii' },
                { Value: '-9_Alaskan Standard Time', Name: '(UTC-09:00) Alaska' },
                { Value: '-8_Pacific Standard Time (Mexico)', Name: '(UTC-08:00) Baja California' },
                { Value: '-8_Pacific Standard Time', Name: '(UTC-08:00) Pacific Time (US & Canada)' },
                { Value: '-7_US Mountain Standard Time', Name: '(UTC-07:00) Arizona' },
                { Value: '-7_Mountain Standard Time (Mexico)', Name: '(UTC-07:00) Chihuahua, La Paz, Mazatlan' },
                { Value: '-7_Mountain Standard Time', Name: '(UTC-07:00) Mountain Time (US & Canada)' },
                { Value: '-6_Central America Standard Time', Name: '(UTC-06:00) Central America' },
                { Value: '-6_Central Standard Time', Name: '(UTC-06:00) Central Time (US & Canada)' },
                { Value: '-6_Central Standard Time (Mexico)', Name: '(UTC-06:00) Guadalajara, Mexico City, Monterrey' },
                { Value: '-6_Canada Central Standard Time', Name: '(UTC-06:00) Saskatchewan' },
                { Value: '-5_SA Pacific Standard Time', Name: '(UTC-05:00) Bogota, Lima, Quito, Rio Branco' },
                { Value: '-5_Eastern Standard Time', Name: '(UTC-05:00) Eastern Time (US & Canada)' },
                { Value: '-5_US Eastern Standard Time', Name: '(UTC-05:00) Indiana (East)' },
                { Value: '-4.5_Venezuela Standard Time', Name: '(UTC-04:30) Caracas' },
                { Value: '-4_Paraguay Standard Time', Name: '(UTC-04:00) Asuncion' },
                { Value: '-4_Atlantic Standard Time', Name: '(UTC-04:00) Atlantic Time (Canada)' },
                { Value: '-4_Central Brazilian Standard Time', Name: '(UTC-04:00) Cuiaba' },
                { Value: '-4_SA Western Standard Time', Name: '(UTC-04:00) Georgetown, La Paz, Manaus, San Juan' },
                { Value: '-4_Pacific SA Standard Time', Name: '(UTC-04:00) Santiago' },
                { Value: '-3.5_Newfoundland Standard Time', Name: '(UTC-03:30) Newfoundland' },
                { Value: '-3_E. South America Standard Time', Name: '(UTC-03:00) Brasilia' },
                { Value: '-3_Argentina Standard Time', Name: '(UTC-03:00) Buenos Aires' },
                { Value: '-3_SA Eastern Standard Time', Name: '(UTC-03:00) Cayenne, Fortaleza' },
                { Value: '-3_Greenland Standard Time', Name: '(UTC-03:00) Greenland' },
                { Value: '-3_Montevideo Standard Time', Name: '(UTC-03:00) Montevideo' },
                { Value: '-3_Bahia Standard Time', Name: '(UTC-03:00) Salvador' },
                { Value: '-2_Mid-Atlantic Standard Time', Name: '(UTC-02:00) Mid-Atlantic - Old' },
                { Value: '-1_Azores Standard Time', Name: '(UTC-01:00) Azores' },
                { Value: '-1_Cape Verde Standard Time', Name: '(UTC-01:00) Cape Verde Is.' },
                { Value: '0_Morocco Standard Time', Name: '(UTC) Casablanca' },
                { Value: '0_UTC', Name: '(UTC) Coordinated Universal Time' },
                { Value: '0_GMT Standard Time', Name: '(UTC) Dublin, Edinburgh, Lisbon, London' },
                { Value: '0_Greenwich Standard Time', Name: '(UTC) Monrovia, Reykjavik' },
                { Value: '1_W. Europe Standard Time', Name: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' },
                { Value: '1_Central Europe Standard Time', Name: '(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' },
                { Value: '1_Romance Standard Time', Name: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris' },
                { Value: '1_Central European Standard Time', Name: '(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb' },
                { Value: '1_W. Central Africa Standard Time', Name: '(UTC+01:00) West Central Africa' },
                { Value: '1_Namibia Standard Time', Name: '(UTC+01:00) Windhoek' },
                { Value: '2_Jordan Standard Time', Name: '(UTC+02:00) Amman' },
                { Value: '2_GTB Standard Time', Name: '(UTC+02:00) Athens, Bucharest' },
                { Value: '2_Middle East Standard Time', Name: '(UTC+02:00) Beirut' },
                { Value: '2_Egypt Standard Time', Name: '(UTC+02:00) Cairo' },
                { Value: '2_Syria Standard Time', Name: '(UTC+02:00) Damascus' },
                { Value: '2_E. Europe Standard Time', Name: '(UTC+02:00) E. Europe' },
                { Value: '2_South Africa Standard Time', Name: '(UTC+02:00) Harare, Pretoria' },
                { Value: '2_FLE Standard Time', Name: '(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius' },
                { Value: '2_Turkey Standard Time', Name: '(UTC+02:00) Istanbul' },
                { Value: '2_Israel Standard Time', Name: '(UTC+02:00) Jerusalem' },
                { Value: '2_Libya Standard Time', Name: '(UTC+02:00) Tripoli' },
                { Value: '3_Arabic Standard Time', Name: '(UTC+03:00) Baghdad' },
                { Value: '3_Kaliningrad Standard Time', Name: '(UTC+03:00) Kaliningrad, Minsk' },
                { Value: '3_Arab Standard Time', Name: '(UTC+03:00) Kuwait, Riyadh' },
                { Value: '3_E. Africa Standard Time', Name: '(UTC+03:00) Nairobi' },
                { Value: '3.5_Iran Standard Time', Name: '(UTC+03:30) Tehran' },
                { Value: '4_Arabian Standard Time', Name: '(UTC+04:00) Abu Dhabi, Muscat' },
                { Value: '4_Azerbaijan Standard Time', Name: '(UTC+04:00) Baku' },
                { Value: '4_Russian Standard Time', Name: '(UTC+04:00) Moscow, St. Petersburg, Volgograd' },
                { Value: '4_Mauritius Standard Time', Name: '(UTC+04:00) Port Louis' },
                { Value: '4_Georgian Standard Time', Name: '(UTC+04:00) Tbilisi' },
                { Value: '4_Caucasus Standard Time', Name: '(UTC+04:00) Yerevan' },
                { Value: '4.5_Afghanistan Standard Time', Name: '(UTC+04:30) Kabul' },
                { Value: '5_West Asia Standard Time', Name: '(UTC+05:00) Ashgabat, Tashkent' },
                { Value: '5_Pakistan Standard Time', Name: '(UTC+05:00) Islamabad, Karachi' },
                { Value: '5.5_India Standard Time', Name: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi' },
                { Value: '5.5_Sri Lanka Standard Time', Name: '(UTC+05:30) Sri Jayawardenepura' },
                { Value: '5.75_Nepal Standard Time', Name: '(UTC+05:45) Kathmandu' },
                { Value: '6_Central Asia Standard Time', Name: '(UTC+06:00) Astana' },
                { Value: '6_Bangladesh Standard Time', Name: '(UTC+06:00) Dhaka' },
                { Value: '6_Ekaterinburg Standard Time', Name: '(UTC+06:00) Ekaterinburg' },
                { Value: '6.5_Myanmar Standard Time', Name: '(UTC+06:30) Yangon (Rangoon)' },
                { Value: '7_SE Asia Standard Time', Name: '(UTC+07:00) Bangkok, Hanoi, Jakarta' },
                { Value: '7_N. Central Asia Standard Time', Name: '(UTC+07:00) Novosibirsk' },
                { Value: '8_China Standard Time', Name: '(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi' },
                { Value: '8_North Asia Standard Time', Name: '(UTC+08:00) Krasnoyarsk' },
                { Value: '8_Singapore Standard Time', Name: '(UTC+08:00) Kuala Lumpur, Singapore' },
                { Value: '8_W. Australia Standard Time', Name: '(UTC+08:00) Perth' },
                { Value: '8_Taipei Standard Time', Name: '(UTC+08:00) Taipei' },
                { Value: '8_Ulaanbaatar Standard Time', Name: '(UTC+08:00) Ulaanbaatar' },
                { Value: '9_North Asia East Standard Time', Name: '(UTC+09:00) Irkutsk' },
                { Value: '9_Tokyo Standard Time', Name: '(UTC+09:00) Osaka, Sapporo, Tokyo' },
                { Value: '9_Korea Standard Time', Name: '(UTC+09:00) Seoul' },
                { Value: '9.5_Cen. Australia Standard Time', Name: '(UTC+09:30) Adelaide' },
                { Value: '9.5_AUS Central Standard Time', Name: '(UTC+09:30) Darwin' },
                { Value: '10_E. Australia Standard Time', Name: '(UTC+10:00) Brisbane' },
                { Value: '10_AUS Eastern Standard Time', Name: '(UTC+10:00) Canberra, Melbourne, Sydney' },
                { Value: '10_West Pacific Standard Time', Name: '(UTC+10:00) Guam, Port Moresby' },
                { Value: '10_Tasmania Standard Time', Name: '(UTC+10:00) Hobart' },
                { Value: '10_Yakutsk Standard Time', Name: '(UTC+10:00) Yakutsk' },
                { Value: '11_Central Pacific Standard Time', Name: '(UTC+11:00) Solomon Is., New Caledonia' },
                { Value: '11_Vladivostok Standard Time', Name: '(UTC+11:00) Vladivostok' },
                { Value: '12_New Zealand Standard Time', Name: '(UTC+12:00) Auckland, Wellington' },
                { Value: '12_Fiji Standard Time', Name: '(UTC+12:00) Fiji' },
                { Value: '12_Magadan Standard Time', Name: '(UTC+12:00) Magadan' },
                { Value: '12_Kamchatka Standard Time', Name: '(UTC+12:00) Petropavlovsk-Kamchatsky - Old' },
                { Value: '13_Tonga Standard Time', Name: '(UTC+13:00) Nuku\'alofa' },
                { Value: '13_Samoa Standard Time', Name: '(UTC+13:00) Samoa' },
            ];
            if (selected) {
                let index = ret.findIndex( el => el.Value == selected);
                if(index !== -1){
                    ret[index].State = true;
                }else{
                    index = ret.findIndex( el => parseFloat(el.Value) == selected);
                    if(index !== -1) {
                        ret[index].State = true;
                    }
                }
            }

            return ret;
        },
        getAssetPayPlanName: function(code){
            let ret = code;
            if (code) {
                switch (code) {
                    case 'Tracking':
                        ret = 'Live';
                        break;
                    case 'Monitoring':
                        ret = 'Live';
                        break;
                    case 'Protect Plan':
                        ret = 'Protect';
                        break;
                }
            }
            return ret;
        },
        getGeofenceAlertType: function(val){
            let ret = '';
            if (val) {
                if ((parseInt(val) & 8) > 0) {
                    ret += LANGUAGE.COM_MSG028 + ', ';
                }
                if ((parseInt(val) & 16) > 0) {
                    ret += LANGUAGE.COM_MSG029 + ', ';
                }
            }
            if (ret) {
                ret = ret.slice(0, -2);
            }else{
                ret = LANGUAGE.COM_MSG030;
            }
            return ret;
        },
        getAddressByGeocoder: function(latlng,replyFunc, additionalData){
            let coords = LANGUAGE.COM_MSG037 + ': ' + latlng.lat + ', ' + LANGUAGE.COM_MSG038 + ': ' + latlng.lng;
            $.ajax({
                   type: "GET",
                    url: API_DOMIAN7+`reverse.php?format=json&zoom=18&addressdetails=1&lat=${latlng.lat}&lon=${latlng.lng}`,
               dataType: "json",
                  async: true,
                  cache: false,
                success: function (result) {
                    if (result.display_name) {
                        replyFunc(result.display_name, additionalData);
                    }else{
                        replyFunc(coords, additionalData);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    $.ajax({
                           type: "GET",
                            url: API_DOMIAN8+`reverse?format=json&zoom=18&addressdetails=1&lat=${latlng.lat}&lon=${latlng.lng}`,
                       dataType: "json",
                          async: true,
                          cache: false,
                        success: function (result) {
                            if (result.display_name) {
                                replyFunc(result.display_name, additionalData);
                            }else{
                                replyFunc(coords, additionalData);
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown){
                            replyFunc(coords, additionalData);
                        }
                    });
                }
            });
        },
        getLatLngByGeocoder: function(address,replyFunc){
            let url = API_DOMIAN8+`search?format=json&polygon=1&addressdetails=1&q=${address}`;
            let res = null;
            $.ajax({
                   type: "GET",
                    url: url,
               dataType: "json",
                  async: true,
                  cache: false,
                success: function (result) {
                    if (result.length > 0) {
                        if (result[0].lat && result[0].lon) {
                            res = new L.LatLng(result[0].lat, result[0].lon);
                            replyFunc(res);
                        }else{
                            replyFunc(res);
                        }
                    }else{
                        replyFunc(res);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    url = API_DOMIAN7+`?format=json&polygon=1&addressdetails=1&q=${address}`;
                            $.ajax({
                           type: "GET",
                            url: url,
                       dataType: "json",
                          async: true,
                          cache: false,
                        success: function (result) {
                            if (result.length > 0) {
                                if (result[0].lat && result[0].lon) {
                                    res = new L.LatLng(result[0].lat, result[0].lon);
                                    replyFunc(res);
                                }else{
                                    replyFunc(res);
                                }
                            }else{
                                replyFunc(res);
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown){
                            replyFunc(res);
                        }
                    });
                }
            });
        },
        createMap: function(option){
            let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { name: 'osm', attribution: '' });
            let googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'+'&hl='+lang,{
                maxZoom: 22,
                subdomains:['mt0','mt1','mt2','mt3']
            });
            let googleSatelitte = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'+'&hl='+lang,{
                maxZoom: 22,
                subdomains:['mt0','mt1','mt2','mt3']
            });

            let layerSeaMark = L.tileLayer( "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png", { numZoomLevels: 18, isBaseLayer:false, displayOutsideMaxExtent:true });

            let layerGrid2 = L.latlngGraticule({
                showLabel: true,
                dashArray: [8, 8],
                color: '#999',
                fontColor: '#999',
                opacity: .8,
                zoomInterval: [
                    {start: 2, end: 3, interval: 30},
                    {start: 4, end: 4, interval: 10},
                    {start: 5, end: 6, interval: 5},
                    {start: 7, end: 8, interval: 1},
                    {start: 9, end: 10, interval: 0.25},
                    {start: 11, end: 12, interval: 0.1},
                    {start: 13, end: 13, interval: 0.025},
                    {start: 14, end: 15, interval: 0.01},
                    {start: 16, end: 22, interval: 0.005},
                ]
            });
            let mapSettingsObg = app.methods.getFromStorage('mapSettings');

            let layersToShow = [];
            if(mapSettingsObg.map){
                if(mapSettingsObg.map === 'google') layersToShow.push(googleStreets);
                if(mapSettingsObg.map === 'satellite') layersToShow.push(googleSatelitte);
                if(mapSettingsObg.map === 'openstreet') layersToShow.push(osm);
            }
            if(!layersToShow.length) layersToShow.push(googleStreets);
            if(mapSettingsObg.seamark) layersToShow.push(layerSeaMark);
            if(mapSettingsObg.grid) layersToShow.push(layerGrid2);

            let map = L.map(option.target, {
                zoomControl: false,
                center: option.latLng,
                zoom: option.zoom,
                fullscreenControl: true,
                drawControl: option.drawControl ? option.drawControl : false,
                layers: layersToShow });

            let layers = {
                "<span class='mapSwitcherWrapper customOverlay googleSwitcherWrapper' data-type='google'><img class='layer-icon' src='resources/images/googleRoad.png' alt='' /> <p>Map</p></span>": googleStreets,
                "<span class='mapSwitcherWrapper customOverlay satelliteSwitcherWrapper' data-type='satellite'><img class='layer-icon' src='resources/images/googleSatellite.png' alt='' />  <p>Satellite</p></span>": googleSatelitte,
                "<span class='mapSwitcherWrapper customOverlay openstreetSwitcherWrapper' data-type='openstreet'><img class='layer-icon' src='resources/images/openStreet.png' alt='' /> <p>OpenStreet</p></span>": osm,
            };

            let mapOverlays = {
                '<i class="icon-checkbox customOverlay" data-type="seamark"></i>SeaMarks': layerSeaMark,
                '<i class="icon-checkbox customOverlay" data-type="grid"></i>Grid': layerGrid2,
            };

            L.control.layers(layers, mapOverlays).addTo(map);

            return map;
        },
        toDegreesMinutesAndSeconds: function (coordinate) {
            let absolute = Math.abs(coordinate);
            let degrees = Math.floor(absolute);
            let minutesNotTruncated = (absolute - degrees) * 60;
            let minutes = Math.floor(minutesNotTruncated);
            let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

            return degrees + " " + minutes + " " + seconds;
        },
        convertDMS: function (lat, lng) {
            let latitude = Protocol.Helper.toDegreesMinutesAndSeconds(lat);
            let latitudeCardinal = Math.sign(lat) >= 0 ? "N" : "S";

            let longitude = Protocol.Helper.toDegreesMinutesAndSeconds(lng);
            let longitudeCardinal = Math.sign(lng) >= 0 ? "E" : "W";

            return latitude + " " + latitudeCardinal + "\n" + longitude + " " + longitudeCardinal;
        },
        getAssetStateInfo: function(asset){

            /*
                state-0  -- gray
                state-1  -- green
                state-2  -- yellow
                state-3  -- red
            */
            let ret = {};
            if (asset) {

                let dateTimeSecond = 24* 600 * 60 * 1000;
                //console.log(asset.posInfo.positionTime);
                if(asset.posInfo.positionTime !== null) {
                    try{
                        dateTimeSecond = Math.abs(moment(moment(asset.posInfo.positionTime.toDate()).add(CurrentTimeZone, 'hours').toDate()).diff(moment(moment(moment().toDate()).add((moment().utcOffset()/60),'hours').toDate()), 'milliseconds'));
                    }catch(error){
                        console.log(error);
                    }

                }
                /*if(asset.posInfo.positionTime !== null&&Math.abs(moment(moment(asset.posInfo.positionTime.toDate()).add(CurrentTimeZone, 'hours').toDate()).diff(moment(moment(moment().toDate()).add((moment().utcOffset()/60)).toDate()), 'milliseconds'),'hours') > 20 * 60 * 1000)
                {
                    asset.posInfo.speed=0;
                }*/
                if(asset.posInfo.positionTime !== null) {
                    try{
                        if(asset.posInfo.lat===0||asset.posInfo.lng===0||(asset.posInfo.positionTime !== null&&Math.abs(moment(moment(asset.posInfo.positionTime.toDate()).add(CurrentTimeZone).toDate(),'hours').diff(moment(moment(moment().toDate()).add((moment().utcOffset()/60)).toDate()), 'milliseconds'),'hours') > 40 * 60 * 1000))
                        {
                            asset.posInfo.isRealTime="False";
                            asset.posInfo.isLocated="False";
                            asset.posInfo.speed=0;
                            asset.posInfo.status=0;
                        }
                    }catch(error){
                        console.log(error);
                    }
                }

                ret.stats = true;
                if(asset.posInfo.positionTime === null) {
                    ret.stats = false;

                }else{
                    ret.istDriverRatingSupported = false;
                    if (asset.haveFeature("HarshBracking") && asset.haveFeature("HarshAcceleration")){
                        ret.istDriverRatingSupported = true;
                    }
                    if (asset.haveFeature("Speed")){
                        let speed = parseInt(asset.posInfo.speed);
                        if(asset.haveFeature("Acc") && (Protocol.PositionStatus.ACC & asset.posInfo.status) === 0 && speed <= 10)
                        {
                            asset.posInfo.speed = 0;
                        }
                        ret.speed = {};
                        if (asset.posInfo.speed<0){
                            asset.posInfo.speed=0;
                        }
                        ret.speed.value = Protocol.Helper.getSpeedValue(asset.Unit, asset.posInfo.speed) + ' ' + Protocol.Helper.getSpeedUnit(asset.Unit);
                    }
                    if(asset.haveFeature("TempSensor")){
                        ret.temperature = {};
                        if(typeof asset.posInfo.alt == "undefined"){
                            ret.temperature.value = LANGUAGE.COM_MSG031;
                        }else{
                            ret.temperature.value = Math.round(asset.posInfo.alt*10)/10 + '&nbsp;°C';
                        }
                    }
                    if(asset.haveFeature("FuelSensor")){
                        ret.fuel = {};
                        if(typeof asset.posInfo.fuel == "undefined" || asset.posInfo.fuel == 0){
                            ret.fuel.value = LANGUAGE.COM_MSG031;
                        }else{
                            ret.fuel.value = parseInt(((parseFloat(asset.posInfo.fuel) - asset._FIELD_FLOAT2) / (asset._FIELD_FLOAT1 - asset._FIELD_FLOAT2)) * 100) + '&nbsp;%';
                        }
                    }
                    if(asset.haveFeature("Voltage")){
                        ret.voltage = {};
                        //console.log(asset.posInfo.alt);
                        /*if(typeof asset.posInfo.alt == "undefined"){
                            ret.voltage.value = LANGUAGE.COM_MSG031;
                        }else{
                            ret.voltage.value = (asset.posInfo.alt > 50? LANGUAGE.COM_MSG031 : ""+ Math.round(asset.posInfo.alt*10)/10 + '&nbsp;V');
                        }    */

                        ret.voltage.value = LANGUAGE.COM_MSG031;
                        if(asset.posInfo.Voltage){
                            ret.voltage.value =  Math.round(asset.posInfo.Voltage*10)/10 + '&nbsp;V';
                        }
                        else{
                            ret.voltage.value = (asset.posInfo.alt > 50 || !asset.posInfo.alt ? LANGUAGE.COM_MSG031 : ""+ Math.round(asset.posInfo.alt*10)/10 + '&nbsp;V');
                        }
                    }
                    if(asset.haveFeature("Mileage")) {
                        ret.mileage = {};
                        ret.mileage.value = (Protocol.Helper.getMileageValue(asset.Unit, asset.posInfo.mileage) + parseInt(asset.InitMileage) + parseInt(asset._FIELD_FLOAT7)) + '&nbsp;' + Protocol.Helper.getMileageUnit(asset.Unit);

                        ret.engineHours = {};
                        if(asset.posInfo.Engine){
                            asset.posInfo.launchHours = asset.posInfo.Engine;
                        }
                        if (typeof (asset._FIELD_FLOAT8) == 'undefined') {
                            asset._FIELD_FLOAT8 = 0;
                        }
                        ret.engineHours.value = TimeSpan(parseInt(asset.posInfo.launchHours)*1000 + parseInt(asset.InitAcconHours)*60*60*1000 + parseInt(asset._FIELD_FLOAT8)*1000).format("^hh:mm:ss");
                        //console.log(asset);
                    }
                    if(asset.haveFeature("Acc")){
                        ret.acc = {};
                        //if((Protocol.PositionStatus.ACC & asset.posInfo.status) > 0 && asset.posInfo.isLocated=="True"){
                        //if((Protocol.PositionStatus.ACC & this.posInfo.status) > 0)
                        if((Protocol.PositionStatus.ACC & asset.posInfo.status) > 0){
                            ret.acc.value = 'ON';
                        }else{
                            ret.acc.value = 'OFF';
                        }
                    }
                    if(asset.haveFeature("Acc2")){
                        ret.acc2 = {};
                        if((Protocol.PositionStatus.ACC2 & asset.posInfo.status) > 0){
                            ret.acc2.value = 'ON';
                        }else{
                            ret.acc2.value = 'OFF';
                        }
                    }
                    if(asset.haveFeature("Battery")){
                        ret.battery = {};
                        if (asset.posInfo.Battery) {
                            ret.battery.value = parseInt(asset.posInfo.Battery) + '&nbsp;%';
                        }else{
                            ret.battery.value = LANGUAGE.COM_MSG031; // no data
                        }
                    }
                    if(asset.haveFeature("Alt")){
                        ret.altitude = {};
                        ret.altitude.value = asset.posInfo.alt + '&nbsp;ft';
                    }
                    if(asset.haveFeature("Heartrate"))
                    {
                        ret.heartrate = {};
                        ret.heartrate.value = parseInt(asset.posInfo.Heartrate);
                    }



                    ret.GPS = {};
                    ret.GPS.state = 'state-1';
                    ret.GSM = {};
                    ret.GSM.state = 'state-1';
                    if(asset.posInfo.lat===0||asset.posInfo.lng===0||dateTimeSecond > 40 * 60 * 1000){
                        ret.GPS.state = 'state-0';
                    }
                    if(dateTimeSecond > 5 * 60 * 60 * 1000){
                        ret.GSM.state = 'state-0';
                    }
                    ret.status = {};
                    if(parseInt(asset.posInfo.speed) > 0){
                        ret.status.value = LANGUAGE.COM_MSG032;
                        ret.status.state = 'state-1';
                        ret.status.event = LANGUAGE.COM_MSG033;
                        ret.status.eventTime = asset.posInfo.positionTime.format(window.COM_TIMEFORMAT);
                        ret.GSM.state = 'state-1';
                    }
                    else if(parseInt(asset.posInfo.speed) === 0){
                        if( asset.haveFeature("Acc") && (Protocol.PositionStatus.ACC & asset.posInfo.status) > 0){
                            ret.status.value = LANGUAGE.COM_MSG034;
                            ret.status.state = 'state-2';
                            ret.status.eventTime = asset.posInfo.positionTime.format(window.COM_TIMEFORMAT);
                            ret.status.event = LANGUAGE.COM_MSG035;
                            ret.GSM.state = 'state-1';
                        }else{
                            if (asset.posInfo.staticTime) {
                                //ret.status.value = LANGUAGE.ASSET_STATUS_MSG04+' <span class="stopped_time">('+asset.posInfo.staticTime.format(window.COM_TIMEFORMAT)+')</span>';

                                ret.stopped = {};
                                ret.stopped.time = asset.posInfo.staticTime.format(window.COM_TIMEFORMAT);

                                let dateDifference = Protocol.Helper.getDifferenceBTtwoDates(asset.posInfo.staticTime,moment());

                                ret.stopped.duration = moment.duration(dateDifference, "milliseconds").format('d[d] h[h] m[m]');

                                ret.status.value = LANGUAGE.COM_MSG036+' <span class="stopped_time">('+ret.stopped.duration+')</span>';
                            }else{
                                ret.status.value = LANGUAGE.COM_MSG036;
                            }

                            ret.status.state = 'state-0';
                            ret.status.eventTime = asset.posInfo.positionTime.format(window.COM_TIMEFORMAT);
                            ret.status.event = LANGUAGE.COM_MSG035;
                            ret.GSM.state = 'state-1';
                        }

                    }

                    if(dateTimeSecond > 72 * 60 * 60 * 1000){
                        ret.GSM.state = 'state-3';
                    }
                    else if(dateTimeSecond > 24 * 60 * 60 * 1000){
                        ret.GSM.state = 'state-2';
                    }
                    else if(dateTimeSecond > 12 * 60 * 60 * 1000){
                        ret.GSM.state = 'state-0';
                    }else{
                        ret.GSM.state = 'state-1';
                    }

                    if(dateTimeSecond > 48 * 60 * 60 * 1000){
                        ret.GPS.state = 'state-0';
                    }
                    else if(asset.haveFeature("Acc") && (Protocol.PositionStatus.ACC & asset.posInfo.status) === 0 && asset.posInfo.speed === 0) {
                        ret.GPS.state = 'state-1';
                    }
                    else if(asset.posInfo.speed > 0){
                        ret.GPS.state = 'state-1';
                    }else if(asset.posInfo.speed === 0){
                        ret.GPS.state = 'state-1';
                    }

                    ret.geolock = {
                        value: false,
                        state: 'state-0',
                    };
                    ret.immob = {
                        value: false,
                        state: 'state-0',
                    };
                    ret.lockdoor = {
                        value: false,
                        state: 'state-0',
                    };
                    if (asset.StatusNew) {
                        let geolockImmobSate = Protocol.Helper.getGeoImmobState(asset.StatusNew);
                        if (geolockImmobSate.Geolock) {
                            ret.geolock.value = geolockImmobSate.Geolock;
                            ret.geolock.state = 'state-1';
                        }
                        if (geolockImmobSate.Immobilise) {
                            ret.immob.value = geolockImmobSate.Immobilise;
                            ret.immob.state = 'state-3';
                        }
                        if (geolockImmobSate.LockDoor) {
                            ret.lockdoor.value = geolockImmobSate.LockDoor;
                            ret.lockdoor.state = 'state-3';
                        }
                    }

                }
            }


            return ret;
        }
    }
};

Protocol.Common = JClass({
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initDeviceInfo: function (arg) {

        this.Id = arg.Id;
        this.IMEI = arg.IMEI;
        this.Name = arg.Name;
        this.TagName = arg.TagName;
        this.Icon = arg.Icon;
        this.Unit = arg.Unit;
        this.InitMileage = arg.InitMileage;
        this.InitAcconHours = arg.InitAcconHours;
        this.State = arg.State;
        this.ActivateDate = arg.ActivateDate;
        this.PayPlanName = arg.PayPlanName;
        this.PRDTName = arg.PRDTName;
        this.PRDTFeatures = arg.PRDTFeatures;
        this.PRDTAlerts = arg.PRDTAlerts;
        this.Describe1 = arg.Describe1;
        this.Describe2 = arg.Describe2;
        this.Describe3 = arg.Describe3;
        this.Describe4 = arg.Describe4;
        this.Describe5 = arg.Describe5;
        this.Describe7 = arg.Describe7;
        this._FIELD_FLOAT1 = arg._FIELD_FLOAT1;
        this._FIELD_FLOAT2 = arg._FIELD_FLOAT2;
        this._FIELD_FLOAT7 = arg._FIELD_FLOAT7;
        this.AlarmOptions = arg.AlarmOptions;
        this.StatusNew = arg.StatusNew;
        this._FIELD_FLOAT8 = arg._FIELD_FLOAT8;
        this.IMSI = arg.IMSI;
        this._FIELD_INT2 = arg._FIELD_INT2;
        this.GroupCode = arg.GroupCode;
        this.SolutionType = arg.SolutionType;
        this.Registration = arg.Registration;
        this.StockNumber = arg.StockNumber;
        this.MaxSpeed = arg.MaxSpeed;
        this.MaxSpeedAlertMode = arg.MaxSpeedAlertMode;
        this.StorageTime = arg.StorageTime;
        this.DaysInInventory = arg.DaysInInventory;
        this.ActivationTime = arg.ActivationTime;
        this.BusinessExpense = arg.BusinessExpense;
        this.FuelEconomy = arg.FuelEconomy;
        this.EngineCapacity = arg.EngineCapacity;
        this.OffroadTaxCredit = arg.OffroadTaxCredit;
        this.AssetType = arg.AssetType;
        this.DriverCode = arg.DriverCode;

        /*this.Id = arg.Id;
        this.IMEI = arg.IMEI;
        this.Name = arg.Name;
        this.TagName = arg.TagName;
        this.Icon = arg.Icon;
        this.Unit = arg.Unit;
        this.InitMileage = arg.InitMileage;
        this.InitAcconHours = arg.InitAcconHours;
        this.State = arg.State;
        this.ActivateDate = arg.ActivateDate;
        this.PRDTName = arg.PRDTName;
        this.PRDTFeatures = arg.PRDTFeatures;
        this.PRDTAlerts = arg.PRDTAlerts;
        this.Describe1 = arg.Describe1;
        this.Describe2 = arg.Describe2;
        this.Describe3 = arg.Describe3;
        this.Describe4 = arg.Describe4;
        this.Describe5 = arg.Describe5;
        this.Describe7 = arg.Describe7;
        this._FIELD_FLOAT1 = arg._FIELD_FLOAT1;
        this._FIELD_FLOAT2 = arg._FIELD_FLOAT2;
        this._FIELD_FLOAT7 = arg._FIELD_FLOAT7;
        this.AlarmOptions = arg.AlarmOptions;
        this._FIELD_FLOAT8 = arg._FIELD_FLOAT8;
        this.StatusNew = arg.StatusNew;
        this._FIELD_INT2 = arg._FIELD_INT2;
        this.GroupCode = arg.GroupCode;
        this.SolutionType = arg.SolutionType;
        this.Registration = arg.Registration;
        this.StockNumber = arg.StockNumber;
        this.MaxSpeed = arg.MaxSpeed;
        this.MaxSpeedAlertMode = arg.MaxSpeedAlertMode;*/

    },
    initDeviceInfoEx:function(){},
    initPosInfo: function (ary) {
        let posInfo = {};

        posInfo.assetID = ary[0];
        posInfo.imei = ary[1];
        posInfo.protocolClass = ary[2];
        posInfo.positionType = ary[3];
        posInfo.dataType = ary[4];
        if(ary[5] !== null) {

            posInfo.positionTime = moment(ary[5].split('.')[0]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.positionTime = null;
        }
        if(ary[6] !== null) {
            posInfo.sysTime = moment(ary[6].split('.')[0]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.sysTime = null;
        }
        if(ary[7] !== null) {
            posInfo.staticTime = moment(ary[7]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.staticTime = null;
        }
        posInfo.isRealTime = ary[8];
        posInfo.isLocated = ary[9];
        posInfo.satelliteSignal = ary[10];
        posInfo.gsmSignal = ary[11];
        posInfo.lat = ary[12];
        posInfo.lng = ary[13];
        posInfo.alt = ary[14];
        posInfo.direct = ary[15];
        posInfo.speed = ary[16];
        posInfo.mileage = ary[17];
        posInfo.launchHours = ary[18];
        posInfo.alerts = ary[19];
        posInfo.status = ary[20];
        posInfo.originalAlerts = ary[21];
        posInfo.originalStatus = ary[22];
        this.initPosInfoEx(ary, posInfo);
        this.posInfo = posInfo;

        return posInfo;
    },
    initPosInfoEx:function(){},
    initHisPosInfo: function (ary) {
        let posInfo = {};
        posInfo.assetID = ary[0];
        posInfo.positionType = ary[1];
        posInfo.dataType = ary[2];
        if(ary[3] !== null) {
            posInfo.positionTime = moment(ary[3].split('.')[0]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.positionTime = null;
        }
        if(ary[4] !== null) {
            posInfo.sysTime = moment(ary[4]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.sysTime = null;
        }
        if(ary[5] !== null) {
            posInfo.staticTime = moment(ary[5]).add(CurrentTimeZone, 'hours');
        }
        else {
            posInfo.staticTime = null;
        }
        posInfo.isRealTime = ary[6];
        posInfo.isLocated = ary[7];
        posInfo.satelliteSignal = ary[8];
        posInfo.gsmSignal = ary[9];
        posInfo.lat = ary[10];
        posInfo.lng = ary[11];
        posInfo.alt = ary[12];
        posInfo.direct = ary[13];
        posInfo.speed = ary[14];
        posInfo.mileage = ary[15];
        posInfo.launchHours = ary[16];
        posInfo.alerts = ary[17];
        posInfo.status = ary[18];
        posInfo.originalAlerts = ary[19];
        posInfo.originalStatus = ary[20];
        this.initHisPosInfoEx(ary, posInfo);
        return posInfo;
    },
    initHisPosInfoEx: function(){},
    initEventInfo: function(ary){
        let event = {};
        event.assetID = ary[0];
        event.eventClass = ary[1];
        event.eventType = ary[2];
        event.state = ary[3];
        event.otherCode = ary[4];
        event.otherCode2 = ary[5];
        event.contactCode = ary[6];
        event.beginTime = moment(ary[7]).add(CurrentTimeZone, 'hours');
        event.endTime = moment(ary[8]).add(CurrentTimeZone, 'hours');
        event.positionType = ary[9];
        event.lat = ary[10];
        event.lng = ary[11];
        event.alt = ary[12];
        event.alerts = ary[13];
        event.status = ary[14];
        this.initEventInfoEx(ary, event);
        return event;
    },
    initEventInfoEx: function(){},
    haveFeature: function(feature){
        return (Protocol.ProductFeatures[feature] & this.PRDTFeatures) > 0;
    },
    getStaticTimeSpan: function(){
        let ret = "";
        if(this.posInfo.speed === 0 && this.posInfo.positionTime !== null && this.posInfo.staticTime !== null)
        {
            ret = TimeSpan(this.posInfo.positionTime.diff(this.posInfo.staticTime, 'milliseconds')).format("^hh:mm:ss");
        }
        return ret;
    }
});
Protocol.ClassManager = {
    array: {},
    add: function (name, clas) {
        Protocol.ClassManager.array[name] = clas;
    },
    get: function (name, arg) {
        let clasType = Protocol.ClassManager.array[name];
        let ret = null;
        if (isUndefined(clasType)) {
            ret = new Protocol.Common(arg);
        }
        else {
            ret = new clasType(arg);
        }
        return ret;
    }
};


