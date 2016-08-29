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
var ergastAPIservice_1 = require('./ergastAPIservice');
var DriversComponent = (function () {
    function DriversComponent(ergastAPIservice) {
        var _this = this;
        this.ergastAPIservice = ergastAPIservice;
        this.filterName = null;
        this.driversList = [];
        this.tempDriversList = [];
        ergastAPIservice.onSearchChanged.subscribe(function (x) {
            _this.driversList = _this.tempDriversList.filter(function (y) { return y.Driver.givenName.indexOf(x) > -1 || y.Driver.familyName.indexOf(x) > -1; });
            console.log(x);
        });
    }
    DriversComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ergastAPIservice.getDrivers()
            .subscribe(function (response) {
            _this.tempDriversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            _this.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }, function (error) { });
    };
    DriversComponent = __decorate([
        core_1.Component({
            selector: 'drivers',
            moduleId: module.id,
            templateUrl: 'drivers.template.html'
        }), 
        __metadata('design:paramtypes', [ergastAPIservice_1.ErgastAPIservice])
    ], DriversComponent);
    return DriversComponent;
}());
exports.DriversComponent = DriversComponent;
//# sourceMappingURL=drivers.js.map