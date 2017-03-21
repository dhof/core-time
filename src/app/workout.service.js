"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var WorkoutService = (function () {
    function WorkoutService(http) {
        this.http = http;
        this.workoutsUrl = 'api/workouts';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    WorkoutService.prototype.getWorkouts = function () {
        // console.log(this.http.get)
        return this.http.get(this.workoutsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    WorkoutService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for dev only
        return Promise.reject(error.message || error);
    };
    WorkoutService = __decorate([
        core_1.Injectable()
    ], WorkoutService);
    return WorkoutService;
}());
exports.WorkoutService = WorkoutService;
