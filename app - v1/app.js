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
var rx = require('rxjs/rx');
var AppComponent = (function () {
    function AppComponent(ergastAPIservice) {
        this.ergastAPIservice = ergastAPIservice;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        rx.Observable
            .fromEvent(this.search.nativeElement, 'keyup')
            .debounceTime(200)
            .distinctUntilChanged()
            .subscribe(function (x) {
            _this.ergastAPIservice.onSearchChanged.emit(_this.search.nativeElement.value);
        });
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "search", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.template.html'
        }), 
        __metadata('design:paramtypes', [ergastAPIservice_1.ErgastAPIservice])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map