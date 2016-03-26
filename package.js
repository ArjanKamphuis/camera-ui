Package.describe({
  name: 'arjankamphuis86:camera-ui',
  version: '0.0.1',
  summary: 'Take photos with UI one function call on desktop and mobile. Choose between camera to photoLibrary.',
  git: 'https://github.com/arjankamphuis/camera-ui',
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-camera": "2.1.0",
  "nl.x-services.plugins.actionsheet": "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet/tarball/df5e89e54d5142c964c1139db6fe813a01125825",
  "org.apache.cordova.device": "0.3.0"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.export(['MeteorCamera', 'MeteorCameraUI']);
  api.use(["templating", "session", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser", "web.cordova"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
  api.addFiles('camera-ui.js');
  api.addFiles('camera-ui-client.js', ['web.browser', 'web.cordova']);
  api.addFiles('camera-ui-browser.js', ['web.browser']);
  api.addFiles('camera-ui-cordova.js', ['web.cordova']);
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('arjankamphuis86:camera-ui');
  api.addFiles('camera-ui-tests.js');
});