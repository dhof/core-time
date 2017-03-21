"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var workout_service_1 = require('./workout.service');
var AppComponent = (function () {
    // filteredWorkouts = this.workouts;
    function AppComponent(workoutService, router) {
        this.workoutService = workoutService;
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkouts().then(function (workouts) { return _this.workouts = workouts; }, this.filteredWorkouts = this.workouts);
        // this.filteredWorkouts = this.workouts;
        // console.log(this.workouts)
        // console.log(this.filteredWorkouts);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
        // this.filteredWorkouts = this.workouts;
    };
    AppComponent.prototype.console = function () {
        // this.filteredWorkouts = this.workouts;
        console.log(this.filteredWorkouts);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [workout_service_1.WorkoutService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
