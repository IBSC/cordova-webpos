/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	console.log(id);
		var success = function(status) {
			console.log('Message: ' + status);
		};
		var error = function(status) {
			console.log('Error: ' + status);
		};
		window.CacheClear(success, error);

		StatusBar.hide();
    	var ref = cordova.InAppBrowser.open(encodeURI('http://resico.dev/webpos/'),'_self','location=no,toolbar=no,zoom=no,clearcache=yes,clearsessioncache=no');
		ref.addEventListener('loadstart', function(event) { console.log(event.url); });

		/*
		cordova.plugins.barcodeScanner.scan(

				// success callback function
				function (result) {
					// wrapping in a timeout so the dialog doesn't free the app
					setTimeout(function() {
						alert("We got a barcode\n" +
								"Result: " + result.text + "\n" +
								"Format: " + result.format + "\n" +
								"Cancelled: " + result.cancelled);
					}, 0);
				},

				// error callback function
				function (error) {
					alert("Scanning failed: " + error);
				},

				// options objects
				{
					"preferFrontCamera" : false, // default false
					"showFlipCameraButton" : true // default false
				}
		);
		*/
		/*
		cordova.plugins.printer.check(function (avail, count) {
			alert(avail ? 'Found ' + count + ' services' : 'No');
		});
		*/

    }
};

app.initialize();