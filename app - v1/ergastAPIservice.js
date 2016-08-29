"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ErgastAPIservice = (function () {
    function ErgastAPIservice(jsonp) {
        this.jsonp = jsonp;
        this.onSearchChanged = new core_1.EventEmitter();
    }
    ErgastAPIservice.prototype.getDrivers = function () {
        return this.jsonp.get('http://ergast.com/api/f1/2013/driverStandings.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getDriverDetails = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getDriverRaces = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getTeams = function () {
        return this.jsonp.get('http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getTeamDetails = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/constructors/' + id + '/constructorStandings.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getTeamRaces = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/constructors/' + id + '/results.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getRaceWinners = function () {
        return this.jsonp.get('http://ergast.com/api/f1/2013/results/1.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getRaces = function () {
        return this.jsonp.get('http://ergast.com/api/f1/2013.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getRaceDetails = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/' + id + '/results.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice.prototype.getQualiDetails = function (id) {
        return this.jsonp.get('http://ergast.com/api/f1/2013/' + id + '/qualifying.json?callback=JSONP_CALLBACK').map(function (res) { return res.json(); });
    };
    ErgastAPIservice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], ErgastAPIservice);
    return ErgastAPIservice;
}());
exports.ErgastAPIservice = ErgastAPIservice;
//# sourceMappingURL=ergastAPIservice.js.map