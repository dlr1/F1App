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
var TeamsComponent = (function () {
    function TeamsComponent(route, router, ergastAPIservice) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ergastAPIservice = ergastAPIservice;
        ergastAPIservice.onSearchChanged.subscribe(function (x) {
            _this.teamList = _this.tempTeamList.filter(function (y) { return y.Constructor.name.indexOf(x) > -1; });
            console.log(x);
        });
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ergastAPIservice.getTeams()
            .subscribe(function (response) {
            _this.tempTeamList = _this.teamList = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        }, function (error) { });
    };
    TeamsComponent = __decorate([
        core_1.Component({
            selector: 'teams',
            moduleId: module.id,
            templateUrl: 'teams.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ergastAPIservice_1.ErgastAPIservice])
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.js.map