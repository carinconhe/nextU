var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var allowInsecureHTTP = true;

var app1 = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/lista',
    appId: 'Lista1',
    restAPIKey: "restAPIKey",
    fileKey: 'myFileKey',
    masterKey: 'masterKey',
    serverURL: "http://localhost:8080/lista"
});

var pasreDashboardSettings = {
    "apps": [{
        "serverURL": "http://localhost:8080/lista",
        "appId": "Lista1",
        "restAPIKey": "restAPIKey",
        "masterKey": "masterKey",
        "appName":"Lista"
    }],
    "users": [{
        "user": "carincon@gmail.com",
        "pass": "Rincon123",
        "masterKey": "masterKey",
        "apps": [{
            "appId": "Lista1"
        }]
    }]
}
var dashboard = new ParseDashboard(pasreDashboardSettings, allowInsecureHTTP);

var app = express();

app.use('/lista', app1, function(req, res, next){
      return next();
});

app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(8080);