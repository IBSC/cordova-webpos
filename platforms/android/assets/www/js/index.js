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
		var action;
		var nameInterval;
		var activeAction = '';

    	var ref = cordova.InAppBrowser.open(encodeURI('http://10.79.3.151/webpos/'),'_self','location=no,toolbar=no,zoom=no,clearcache=no,clearsessioncache=no');
		ref.addEventListener('loadstart', function(event) { console.log(event.url); });

		ref.addEventListener( "loadstop", function() {
			ref.executeScript({ code: "localStorage.setItem('action', '')" });
			nameInterval = setInterval(function() {
				ref.executeScript({ code: "localStorage.getItem('action')" }, function(values) {
					localStorage.setItem('action', values[0]);

					if(localStorage.getItem('action') == 'scan' && activeAction != 'scan'){
						activeAction = 'scan';
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
					}
				});
			}, 100)
		});

		ref.addEventListener('exit', function() {
			clearInterval(nameInterval);
		});

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

		/*
		const ESC = "\x1b";
		const GS="\x1d";
		const NUL="\x00";
		const BEL="\x07";

		var out = '';
		out += ESC+"@"; // Reset to defaults
		out += ESC+"E"+chr(1); // Bold
		out += "RESICO Ltd.\n"; // Company
		out += ESC+"E"+chr(0); // Not Bold
		out += ESC+"d"+chr(1); // Blank line
		out += "Receipt for whatever\n"; // Print text
		out += ESC+"d"+chr(4); // 4 Blank lines

		//barcode
		out += ESC+"a"+chr(1); // Centered printing
		out += GS+"k"+chr(4)+"987654321"+NUL; // Print barcode
		out += ESC+"d"+chr(1); // Blank line
		out += "987654321\n"; // Print number
		out += GS+"V\x41"+chr(3); // Cut

		var socket = new Socket();
		socket.open(
			"192.168.1.10",
			9100,
			function() {
				var dataString = out;
				var data = new Uint8Array(dataString.length);
				for (var i = 0; i < data.length; i++) {
					data[i] = dataString.charCodeAt(i);
				}
				socket.write(data);
				socket.close();
			},
			function(errorMessage) {
				alert(errorMessage);
			}
		);
		*/
	}
};

app.initialize();

function chr(n) {
	if (n < 128) {
		return String.fromCharCode(n);
	} else {
		return "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "[n - 128];
	}
}