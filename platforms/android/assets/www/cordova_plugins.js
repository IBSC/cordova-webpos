cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-cache-clear.CacheClear",
        "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
        "pluginId": "cordova-plugin-cache-clear",
        "clobbers": [
            "CacheClear"
        ]
    },
    {
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "pluginId": "com.phonegap.plugins.barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-plugin-printer.Printer",
        "file": "plugins/cordova-plugin-printer/www/printer.js",
        "pluginId": "cordova-plugin-printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "id": "cz.blocshop.socketsforcordova.Socket",
        "file": "plugins/cz.blocshop.socketsforcordova/socket.js",
        "pluginId": "cz.blocshop.socketsforcordova",
        "clobbers": [
            "window.Socket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-cache-clear": "1.3.7",
    "cordova-plugin-compat": "1.1.0",
    "com.phonegap.plugins.barcodescanner": "6.0.5",
    "cordova-plugin-printer": "0.7.3",
    "cz.blocshop.socketsforcordova": "1.1.0"
};
// BOTTOM OF METADATA
});