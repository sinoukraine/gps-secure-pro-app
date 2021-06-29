Protocol.AVL05 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[25];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[23];
    }
});
Protocol.ClassManager.add("AVL05", Protocol.AVL05);

Protocol.AVL09 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.rfid = ary[23];
        posInfo.drivingTime = ary[24];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.rfid = ary[21];
        posInfo.drivingTime = ary[22];
    }
});
Protocol.ClassManager.add("AVL09", Protocol.AVL09);


Protocol.EELINK_OBD = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[23];
        posInfo.IAT = ary[24];
        posInfo.DTC = ary[25];
        posInfo.MPG = ary[26];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[21];
        posInfo.IAT = ary[22];
        posInfo.DTC = ary[23];
        posInfo.MPG = ary[24];
    }
});
Protocol.ClassManager.add("EELINK_OBD", Protocol.EELINK_OBD);


Protocol.GOT10 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.BatteryVoltage = ary[23];
        posInfo.alt = ary[24];

    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.BatteryVoltage = ary[21];
        posInfo.alt = ary[22];

    },
});
Protocol.ClassManager.add("GOT10", Protocol.GOT10);


Protocol.HONGYUAN = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.LaunchHours2 = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        //posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("HONGYUAN", Protocol.HONGYUAN);


Protocol.HONGYUAN_V = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.LaunchHours2 = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        //posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("HONGYUAN_V", Protocol.HONGYUAN_V);

Protocol.RUPTELA = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.alt = ary[24];
        posInfo.rfid = ary[25];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.alt = ary[22];
        posInfo.rfid = ary[23];
    }
});
Protocol.ClassManager.add("RUPTELA", Protocol.RUPTELA);

Protocol.TIANQIN_LK3G = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("TIANQIN_LK3G", Protocol.TIANQIN_LK3G);

Protocol.TIANQIN_QT206 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("TIANQIN_QT206", Protocol.TIANQIN_QT206);

Protocol.TIANQIN_QT525 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.LaunchHours2 = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        //posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("TIANQIN_QT525", Protocol.TIANQIN_QT525);

Protocol.TIANQIN_QTPTW = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("TIANQIN_QTPTW", Protocol.TIANQIN_QTPTW);

Protocol.VJOY = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){

        posInfo.BatteryVoltage = ary[23];
        posInfo.ChargeVoltage = ary[24];
        posInfo.Battery = (ary[25]/ 6 ) * 100;
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.BatteryVoltage = ary[21];
        posInfo.ChargeVoltage = ary[22];
        posInfo.Battery = (ary[23]/ 6 ) * 100;
    }
});
Protocol.ClassManager.add("VJOY", Protocol.VJOY);

Protocol.VT600 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[24];
        posInfo.alt = ary[25];
        posInfo.rfid = ary[26];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[22];
        posInfo.alt = ary[23];
        posInfo.rfid = ary[24];
    }
});
Protocol.ClassManager.add("VT600", Protocol.VT600);

Protocol.VT600_FUEL = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[24];
        posInfo.alt = ary[25];
        posInfo.rfid = ary[26];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[22];
        posInfo.alt = ary[23];
        posInfo.rfid = ary[24];
    }
});
Protocol.ClassManager.add("VT600_FUEL", Protocol.VT600_FUEL);

Protocol.SINOCASTEL = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[23];
        posInfo.IAT = ary[24];
        posInfo.DTC = ary[25];
        posInfo.MPG = ary[26];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[21];
        posInfo.IAT = ary[22];
        posInfo.DTC = ary[23];
        posInfo.MPG = ary[24];
    }
});
Protocol.ClassManager.add("SINOCASTEL", Protocol.SINOCASTEL);

Protocol.VT600_3G = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[24];
        posInfo.alt = ary[25];
        posInfo.rfid = ary[26];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[22];
        posInfo.alt = ary[23];
        posInfo.rfid = ary[24];
    }
});
Protocol.ClassManager.add("VT600_3G", Protocol.VT600_3G);

Protocol.BSJV3 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("BSJV3", Protocol.BSJV3);

Protocol.JT808_GLOCK = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    }
});
Protocol.ClassManager.add("JT808_GLOCK", Protocol.JT808_GLOCK);

Protocol.JT808_KMXXX = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.LaunchHours2 = ary[23];
    },
    initHisPosInfoEx:function(ary, posInfo){
        //posInfo.Battery = ary[21];
    }

});
Protocol.ClassManager.add("JT808_KMXXX", Protocol.JT808_KMXXX);

Protocol.TIANQIN_LK3GP = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
        posInfo.LBSWifi = ary[24];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    },

});
Protocol.ClassManager.add("TIANQIN_LK3GP", Protocol.TIANQIN_LK3GP);

Protocol.GOT20 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[23];
        posInfo.Input1Voltage = ary[24];
        posInfo.Input2Voltage = ary[25];
        posInfo.Engine = ary[26];
        if (posInfo.Voltage >= 0 && posInfo.Voltage <= 3.39) {
            //blevel = 5;
            posInfo.Battery = 0;
        }
        else if (posInfo.Voltage >= 3.39 && posInfo.Voltage <= 3.45) {
            //blevel = 4;
            posInfo.Battery = 20;
        }
        else if (posInfo.Voltage > 3.45 && posInfo.Voltage <= 3.54) {
            //blevel = 4;
            posInfo.Battery = 40;
        }
        else if (posInfo.Voltage > 3.54 && posInfo.Voltage <= 3.72) {
            //blevel = 3;
            posInfo.Battery = 60;
        }
        else if (posInfo.Voltage > 3.72 && posInfo.Voltage <= 3.8927) {
            //blevel = 2;
            posInfo.Battery = 80;
        }
        else {
            posInfo.Battery = 100;
        }
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[21];
        posInfo.Input1Voltage = ary[22];
        posInfo.Input2Voltage = ary[23];
        posInfo.Engine = ary[24];
        if (posInfo.Voltage >= 0 && posInfo.Voltage <= 3.39) {
            //blevel = 5;
            posInfo.Battery = 0;
        }
        else if (posInfo.Voltage >= 3.39 && posInfo.Voltage <= 3.45) {
            //blevel = 4;
            posInfo.Battery = 20;
        }
        else if (posInfo.Voltage > 3.45 && posInfo.Voltage <= 3.54) {
            //blevel = 4;
            posInfo.Battery = 40;
        }
        else if (posInfo.Voltage > 3.54 && posInfo.Voltage <= 3.72) {
            //blevel = 3;
            posInfo.Battery = 60;
        }
        else if (posInfo.Voltage > 3.72 && posInfo.Voltage <= 3.8927) {
            //blevel = 2;
            posInfo.Battery = 80;
        }
        else {
            posInfo.Battery = 100;
        }
    },
});
Protocol.ClassManager.add("GOT20", Protocol.GOT20);

Protocol.TKSTAR = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
        posInfo.Steps = ary[24];
        posInfo.Heartrate = ary[25];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
        posInfo.Steps = ary[22];
        posInfo.Heartrate = ary[23];
    }
});
Protocol.ClassManager.add("TKSTAR", Protocol.TKSTAR);

Protocol.OUNING_WATCH = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
        posInfo.Steps = ary[24];
        posInfo.Heartrate = ary[25];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
        posInfo.Steps = ary[22];
        posInfo.Heartrate = ary[23];
    }
});
Protocol.ClassManager.add("OUNING_WATCH", Protocol.OUNING_WATCH);

Protocol.VT900_DOOR = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this._FIELD_INT2 = arg._FIELD_INT2;
        this.posInfo = {};
    },
    initPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[24];
        posInfo.alt = ary[25];
        posInfo.rfid = ary[26];
    },
    initHisPosInfoEx: function (ary, posInfo) {
        posInfo.fuel = ary[22];
        posInfo.alt = ary[23];
        posInfo.rfid = ary[24];
    },
});
Protocol.ClassManager.add("VT900_DOOR", Protocol.VT900_DOOR);

Protocol.KKS = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[23];
        posInfo.ECT = ary[24];
        posInfo.DTC = ary[25];
        posInfo.MPG = ary[26];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.RPM = ary[21];
        posInfo.ECT = ary[22];
        posInfo.DTC = ary[23];
        posInfo.MPG = ary[24];
    },
});
Protocol.ClassManager.add("KKS", Protocol.KKS);


Protocol.EELINK_TEMP = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[23];
        posInfo.Input1Voltage = ary[24];
        posInfo.Input2Voltage = ary[25];
        posInfo.Engine = ary[26];

    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[21];
        posInfo.Input1Voltage = ary[22];
        posInfo.Input2Voltage = ary[23];
        posInfo.Engine = ary[24];

    },
});
Protocol.ClassManager.add("EELINK_TEMP", Protocol.EELINK_TEMP);

Protocol.PHONE_TRACK = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[14];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[12];
    }
});
Protocol.ClassManager.add("PHONE_TRACK", Protocol.PHONE_TRACK);


Protocol.GPT19H = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[23];
        posInfo.Battery = ary[24];
        posInfo.Input2Voltage = ary[25];
        posInfo.Engine = ary[26];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Voltage = ary[21];
        posInfo.Battery = ary[22];
        posInfo.Input2Voltage = ary[23];
        posInfo.Engine = ary[24];
    },
});
Protocol.ClassManager.add("GPT19H", Protocol.GPT19H);

Protocol.TIANQIN_LK3GV2 = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
        posInfo.LBSWifi = ary[24];
        posInfo.Voltage = ary[14];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
        posInfo.Voltage = ary[12];
    },
});
Protocol.ClassManager.add("TIANQIN_LK3GV2", Protocol.TIANQIN_LK3GV2);

Protocol.TKXXX = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){

        posInfo.BatteryVoltage = ary[23];
        posInfo.ChargeVoltage = ary[24];
        posInfo.Battery = (ary[25]/ 6 ) * 100;
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.BatteryVoltage = ary[21];
        posInfo.ChargeVoltage = ary[22];
        posInfo.Battery = (ary[23]/ 6 ) * 100;
    }
});
Protocol.ClassManager.add("TKXXX", Protocol.TKXXX);

Protocol.TIANQIN_EN4G = JClass(Protocol.Common,{
    STATIC: {

    },
    constructor: function(arg) {
        this.initDeviceInfo(arg);
        this.posInfo = {};
    },
    initPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[23];
        posInfo.LBSWifi = ary[24];
    },
    initHisPosInfoEx:function(ary, posInfo){
        posInfo.Battery = ary[21];
    },
});

Protocol.ClassManager.add("TIANQIN_EN4G", Protocol.TIANQIN_EN4G);