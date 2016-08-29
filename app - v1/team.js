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
var TeamComponent = (function () {
    function TeamComponent(route, router, ergastAPIservice) {
        this.route = route;
        this.router = router;
        this.ergastAPIservice = ergastAPIservice;
        this.team = {};
        this.races = [];
        this.driver = {};
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id']; // (+) converts string 'id' to a number
            _this.ergastAPIservice.getTeamDetails(id)
                .subscribe(function (response) {
                _this.team = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
                console.log(_this.team);
            }, function (error) { });
            _this.ergastAPIservice.getTeamRaces(id)
                .subscribe(function (response) {
                response.MRData.RaceTable.Races.forEach(function (race) { return race.points = parseInt(race.Results[0].points) + parseInt(race.Results[1].points); });
                _this.races = response.MRData.RaceTable.Races;
                _this.driver1Code = _this.races[0].Results[0].Driver.familyName;
                _this.driver2Code = _this.races[0].Results[1].Driver.familyName;
            }, function (error) { });
        });
    };
    TeamComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team',
            moduleId: module.id,
            templateUrl: 'team.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ergastAPIservice_1.ErgastAPIservice])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.js.map