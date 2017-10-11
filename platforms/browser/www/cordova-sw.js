/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1507751514265';
var CACHE_LIST = [
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/css/index.css",
    "/favicon.ico",
    "/img/logo.png",
    "/index.html",
    "/js/index.js",
    "/manifest.json",
    "/plugins/cordova-plugin-battery-status/src/browser/BatteryProxy.js",
    "/plugins/cordova-plugin-battery-status/www/battery.js",
    "/plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
    "/plugins/cordova-plugin-camera/www/Camera.js",
    "/plugins/cordova-plugin-camera/www/CameraConstants.js",
    "/plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "/plugins/cordova-plugin-contacts/www/Contact.js",
    "/plugins/cordova-plugin-contacts/www/ContactAddress.js",
    "/plugins/cordova-plugin-contacts/www/ContactError.js",
    "/plugins/cordova-plugin-contacts/www/ContactField.js",
    "/plugins/cordova-plugin-contacts/www/ContactFieldType.js",
    "/plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
    "/plugins/cordova-plugin-contacts/www/ContactName.js",
    "/plugins/cordova-plugin-contacts/www/ContactOrganization.js",
    "/plugins/cordova-plugin-contacts/www/contacts.js",
    "/plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
    "/plugins/cordova-plugin-device/www/device.js",
    "/plugins/cordova-plugin-device-motion/src/browser/AccelerometerProxy.js",
    "/plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "/plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "/plugins/cordova-plugin-device-orientation/src/browser/CompassProxy.js",
    "/plugins/cordova-plugin-device-orientation/www/compass.js",
    "/plugins/cordova-plugin-device-orientation/www/CompassError.js",
    "/plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
    "/plugins/cordova-plugin-dialogs/www/browser/notification.js",
    "/plugins/cordova-plugin-dialogs/www/notification.js",
    "/plugins/cordova-plugin-file/src/browser/FileProxy.js",
    "/plugins/cordova-plugin-file/www/browser/FileSystem.js",
    "/plugins/cordova-plugin-file/www/browser/isChrome.js",
    "/plugins/cordova-plugin-file/www/browser/Preparing.js",
    "/plugins/cordova-plugin-file/www/DirectoryEntry.js",
    "/plugins/cordova-plugin-file/www/DirectoryReader.js",
    "/plugins/cordova-plugin-file/www/Entry.js",
    "/plugins/cordova-plugin-file/www/File.js",
    "/plugins/cordova-plugin-file/www/FileEntry.js",
    "/plugins/cordova-plugin-file/www/FileError.js",
    "/plugins/cordova-plugin-file/www/FileReader.js",
    "/plugins/cordova-plugin-file/www/FileSystem.js",
    "/plugins/cordova-plugin-file/www/fileSystemPaths.js",
    "/plugins/cordova-plugin-file/www/fileSystems.js",
    "/plugins/cordova-plugin-file/www/FileUploadOptions.js",
    "/plugins/cordova-plugin-file/www/FileUploadResult.js",
    "/plugins/cordova-plugin-file/www/FileWriter.js",
    "/plugins/cordova-plugin-file/www/Flags.js",
    "/plugins/cordova-plugin-file/www/LocalFileSystem.js",
    "/plugins/cordova-plugin-file/www/Metadata.js",
    "/plugins/cordova-plugin-file/www/ProgressEvent.js",
    "/plugins/cordova-plugin-file/www/requestFileSystem.js",
    "/plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
    "/plugins/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
    "/plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
    "/plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
    "/plugins/cordova-plugin-globalization/src/browser/GlobalizationProxy.js",
    "/plugins/cordova-plugin-globalization/www/browser/moment.js",
    "/plugins/cordova-plugin-globalization/www/globalization.js",
    "/plugins/cordova-plugin-globalization/www/GlobalizationError.js",
    "/plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
    "/plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "/plugins/cordova-plugin-media/www/browser/Media.js",
    "/plugins/cordova-plugin-media/www/Media.js",
    "/plugins/cordova-plugin-media/www/MediaError.js",
    "/plugins/cordova-plugin-media-capture/src/browser/CaptureProxy.js",
    "/plugins/cordova-plugin-media-capture/www/capture.js",
    "/plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
    "/plugins/cordova-plugin-media-capture/www/CaptureError.js",
    "/plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
    "/plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
    "/plugins/cordova-plugin-media-capture/www/MediaFile.js",
    "/plugins/cordova-plugin-media-capture/www/MediaFileData.js",
    "/plugins/cordova-plugin-network-information/src/browser/network.js",
    "/plugins/cordova-plugin-network-information/www/Connection.js",
    "/plugins/cordova-plugin-network-information/www/network.js",
    "/plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
    "/plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "/plugins/cordova-plugin-statusbar/src/browser/statusbar.js",
    "/plugins/cordova-plugin-statusbar/www/statusbar.js",
    "/plugins/cordova-plugin-vibration/src/browser/Vibration.js",
    "/plugins/cordova-plugin-vibration/www/vibration.js",
    "/res/.pgbomit",
    "/res/icon/android/drawable-hdpi-icon.png",
    "/res/icon/android/drawable-ldpi-icon.png",
    "/res/icon/android/drawable-mdpi-icon.png",
    "/res/icon/android/drawable-xhdpi-icon.png",
    "/res/icon/android/drawable-xxhdpi-icon.png",
    "/res/icon/android/drawable-xxxhdpi-icon.png",
    "/res/icon/ios/icon-40.png",
    "/res/icon/ios/icon-40@2x.png",
    "/res/icon/ios/icon-50.png",
    "/res/icon/ios/icon-50@2x.png",
    "/res/icon/ios/icon-60.png",
    "/res/icon/ios/icon-60@2x.png",
    "/res/icon/ios/icon-60@3x.png",
    "/res/icon/ios/icon-72.png",
    "/res/icon/ios/icon-72@2x.png",
    "/res/icon/ios/icon-76.png",
    "/res/icon/ios/icon-76@2x.png",
    "/res/icon/ios/icon-small.png",
    "/res/icon/ios/icon-small@2x.png",
    "/res/icon/ios/icon-small@3x.png",
    "/res/icon/ios/icon.png",
    "/res/icon/ios/icon@2x.png",
    "/res/icon/windows/Square150x150Logo.scale-100.png",
    "/res/icon/windows/Square150x150Logo.scale-240.png",
    "/res/icon/windows/Square30x30Logo.scale-100.png",
    "/res/icon/windows/Square310x310Logo.scale-100.png",
    "/res/icon/windows/Square44x44Logo.scale-100.png",
    "/res/icon/windows/Square44x44Logo.scale-240.png",
    "/res/icon/windows/Square70x70Logo.scale-100.png",
    "/res/icon/windows/Square71x71Logo.scale-100.png",
    "/res/icon/windows/Square71x71Logo.scale-240.png",
    "/res/icon/windows/StoreLogo.scale-100.png",
    "/res/icon/windows/StoreLogo.scale-240.png",
    "/res/icon/windows/Wide310x150Logo.scale-100.png",
    "/res/icon/windows/Wide310x150Logo.scale-240.png",
    "/res/icon/wp8/ApplicationIcon.png",
    "/res/icon/wp8/Background.png",
    "/res/screen/android/drawable-land-hdpi-screen.png",
    "/res/screen/android/drawable-land-ldpi-screen.png",
    "/res/screen/android/drawable-land-mdpi-screen.png",
    "/res/screen/android/drawable-land-xhdpi-screen.png",
    "/res/screen/android/drawable-land-xxhdpi-screen.png",
    "/res/screen/android/drawable-land-xxxhdpi-screen.png",
    "/res/screen/android/drawable-port-hdpi-screen.png",
    "/res/screen/android/drawable-port-ldpi-screen.png",
    "/res/screen/android/drawable-port-mdpi-screen.png",
    "/res/screen/android/drawable-port-xhdpi-screen.png",
    "/res/screen/android/drawable-port-xxhdpi-screen.png",
    "/res/screen/android/drawable-port-xxxhdpi-screen.png",
    "/res/screen/ios/Default-568h@2x~iphone.png",
    "/res/screen/ios/Default-667h.png",
    "/res/screen/ios/Default-736h.png",
    "/res/screen/ios/Default-Landscape-736h.png",
    "/res/screen/ios/Default-Landscape@2x~ipad.png",
    "/res/screen/ios/Default-Landscape~ipad.png",
    "/res/screen/ios/Default-Portrait@2x~ipad.png",
    "/res/screen/ios/Default-Portrait~ipad.png",
    "/res/screen/ios/Default@2x~iphone.png",
    "/res/screen/ios/Default~iphone.png",
    "/res/screen/windows/SplashScreen.scale-100.png",
    "/res/screen/windows/SplashScreenPhone.scale-240.png",
    "/res/screen/wp8/screen-portrait.jpg",
    "/spec/helper.js",
    "/spec/index.js",
    "/spec/lib/jasmine-1.2.0/jasmine-html.js",
    "/spec/lib/jasmine-1.2.0/jasmine.css",
    "/spec/lib/jasmine-1.2.0/jasmine.js",
    "/spec/lib/jasmine-1.2.0/MIT.LICENSE",
    "/spec.html"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
