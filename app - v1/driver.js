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
var router_1 = require('@angular/router');
var DriverComponent = (function () {
    function DriverComponent(route, router, ergastAPIservice) {
        this.route = route;
        this.router = router;
        this.ergastAPIservice = ergastAPIservice;
        this.races = [];
        this.driver = {};
        this.ergastAPIservice.onSearchChanged.subscribe(function (x) { console.log(x); });
    }
    DriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.ergastAPIservice.getDriverDetails(id)
                .subscribe(function (response) {
                _this.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            }, function (error) { });
            _this.ergastAPIservice.getDriverRaces(id)
                .subscribe(function (response) {
                _this.races = response.MRData.RaceTable.Races;
            }, function (error) { });
        });
    };
    DriverComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DriverComponent = __decorate([
        core_1.Component({
            selector: 'driver',
            moduleId: module.id,
            templateUrl: 'driver.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ergastAPIservice_1.ErgastAPIservice])
    ], DriverComponent);
    return DriverComponent;
}());
exports.DriverComponent = DriverComponent;
//# sourceMappingURL=driver.js.map