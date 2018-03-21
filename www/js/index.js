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
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log(id);

        window.CacheClear(function (status) {
            console.log('Message: ' + status);
        }, function (status) {
            console.log('Error: ' + status);
        });

        StatusBar.hide();

        var actionInterval;
        var lastOrder = '';

        var ref = cordova.InAppBrowser.open(encodeURI('https://resico.gigi.tech/horeca/'), '_blank', 'location=no,toolbar=no,zoom=no');
        ref.addEventListener('loadstart', function (event) {
            console.log(event.url);
        });

        ref.addEventListener("loadstop", function () {
            AndroidFullScreen.immersiveMode(function () {
            }, function () {
            });

            ref.executeScript({code: "localStorage.setItem('action', '')"});
            actionInterval = setInterval(function () {
                ref.executeScript({code: "localStorage.getItem('action')"}, function (values) {
                    if (values[0]) {

                        ref.executeScript({code: "localStorage.setItem('action', '')"});
                        var storageData = JSON.parse(values[0]);

                        // webpos
                        if (typeof(storageData.print) != 'undefined') {
                            try {
                                if (lastOrder != storageData.order) {
                                    console.log(lastOrder);
                                    lastOrder = storageData.order;
                                    var socket = new Socket();
                                    socket.open(
                                        storageData.printer.ip,
                                        storageData.printer.port,
                                        function () {
                                            for (var i = 0; i < storageData.print.length; i++) {
                                                var data = new Uint8Array(storageData.print[i].length);
                                                for (var y = 0; y < storageData.print[i].length; y++) {
                                                    data[y] = storageData.print[i][y];
                                                }
                                                socket.write(data);
                                            }
                                            socket.close();
                                        },
                                        function (errorMessage) {
                                            alert(errorMessage);
                                        }
                                    );
                                }
                            } catch (e) {
                                alert(e.message);
                            }
                        }

                        // bareca
                        if (typeof(storageData.printarray) != 'undefined') {
                            try {
                                if (lastOrder != storageData.order) {
                                    lastOrder = storageData.order;
                                    console.log(lastOrder);
                                    $.each(storageData.printarray, function (k, v) {
                                        var socket = new Socket();
                                        socket.open(
                                            storageData.printer[k].ip,
                                            storageData.printer[k].port,
                                            function () {
                                                for (var i = 0; i < v.length; i++) {
                                                    var data = new Uint8Array(v[i].length);
                                                    for (var y = 0; y < v[i].length; y++) {
                                                        data[y] = v[i][y];
                                                    }
                                                    socket.write(data);
                                                }
                                                socket.close();
                                            },
                                            function (errorMessage) {
                                                alert(errorMessage);
                                            }
                                        );
                                    });
                                }
                            } catch (e) {
                                alert(e.message);
                            }
                        }
                    }
                });
            }, 500);

            $('.no-zoom').bind('touchend', function (e) {
                e.preventDefault();
                $(this).click();
            })
        });

        ref.addEventListener('exit', function () {
            clearInterval(actionInterval);
            setTimeout(function () {
                window.location.reload();
            }, 500);
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

        AndroidFullScreen.immersiveMode(function () {
        }, function () {
        });
    }
};

app.initialize();
