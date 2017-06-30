cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScanner",
        "pluginId": "com.phonegap.plugins.barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "com.phonegap.plugins.barcodescanner.BarcodeScannerProxy",
        "pluginId": "com.phonegap.plugins.barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-printer/www/printer.js",
        "id": "cordova-plugin-printer.Printer",
        "pluginId": "cordova-plugin-printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "file": "plugins/cz.blocshop.socketsforcordova/socket.js",
        "id": "cz.blocshop.socketsforcordova.Socket",
        "pluginId": "cz.blocshop.socketsforcordova",
        "clobbers": [
            "window.Socket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-statusbar": "2.2.3",
    "cordova-plugin-cache-clear": "1.3.7",
    "com.phonegap.plugins.barcodescanner": "6.0.5",
    "cordova-plugin-printer": "0.7.3",
    "cz.blocshop.socketsforcordova": "1.1.0"
}
// BOTTOM OF METADATA
});