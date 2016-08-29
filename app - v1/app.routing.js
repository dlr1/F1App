"use strict";
var router_1 = require('@angular/router');
var pagenotfound_1 = require('./pagenotfound');
var drivers_1 = require('./drivers');
var driver_1 = require('./driver');
var teams_1 = require('./teams');
var team_1 = require('./team');
var races_1 = require('./races');
var race_1 = require('./race');
var appRoutes = [
    {
        path: '',
        redirectTo: '/drivers',
        pathMatch: 'full'
    },
    { path: 'drivers', component: drivers_1.DriversComponent },
    { path: 'driver/:id', component: driver_1.DriverComponent },
    { path: 'teams', component: teams_1.TeamsComponent },
    { path: 'team/:id', component: team_1.TeamComponent },
    { path: 'races', component: races_1.RacesComponent },
    { path: 'race/:id', component: race_1.RaceComponent },
    { path: '**', component: pagenotfound_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes.slice());
//# sourceMappingURL=app.routing.js.map