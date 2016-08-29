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
var RacesComponent = (function () {
    function RacesComponent(route, router, ergastAPIservice) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ergastAPIservice = ergastAPIservice;
        ergastAPIservice.onSearchChanged.subscribe(function (x) {
            _this.raceList = _this.tempRaceList.filter(function (y) { return y.Circuit.circuitName.indexOf(x) > -1
                || y.Results[0].Driver.familyName > -1
                || y.raceName > -1; });
        });
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ergastAPIservice.getRaceWinners()
            .subscribe(function (response) {
            _this.pastRaces = response.MRData.RaceTable.Races;
            _this.ergastAPIservice.getRaces()
                .subscribe(function (response) {
                _this.tempRaceList = _this.raceList = response.MRData.RaceTable.Races;
                _this.pastRaces.forEach(function (x, i) { return _this.tempRaceList[i].Results = x.Results; });
            }, function (error) { });
        }, function (error) { });
    };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'races',
            moduleId: module.id,
            templateUrl: 'races.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ergastAPIservice_1.ErgastAPIservice])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.js.map