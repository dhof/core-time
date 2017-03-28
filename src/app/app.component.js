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
    function AppComponent(workoutService) {
        this.workoutService = workoutService;
        this.title = 'Core Time';
        this.selectedWorkouts = [];
        // WORKOUT FILTERS BUTTONS
        this.typeStatic = true;
        this.typeDynamic = true;
        this.locationGround = true;
        this.locationHanging = true;
    }
    // populates workouts array from in memory db data
    AppComponent.prototype.getWorkouts = function () {
        var _this = this;
        this.workoutService.getWorkouts().then(function (workouts) { return _this.workouts = workouts; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getWorkouts();
    };
    AppComponent.prototype.filterTypes = function (workoutType) {
        var i;
        for (i = 0; i < this.workouts.length; i++) {
            if (this.workouts[i].type === workoutType && this.workouts[i].typeShow === true) {
                this.workouts[i].typeShow = false;
                if (workoutType === 'static') {
                    this.typeStatic = false;
                }
                else {
                    this.typeDynamic = false;
                }
            }
            else if (this.workouts[i].type === workoutType && this.workouts[i].typeShow === false) {
                this.workouts[i].typeShow = true;
                if (workoutType === 'static') {
                    this.typeStatic = true;
                }
                else {
                    this.typeDynamic = true;
                }
            }
        }
    };
    AppComponent.prototype.filterLocations = function (workoutLocation) {
        var i;
        for (i = 0; i < this.workouts.length; i++) {
            if (this.workouts[i].location === workoutLocation && this.workouts[i].locationShow === true) {
                this.workouts[i].locationShow = false;
                if (workoutLocation === 'ground') {
                    this.locationGround = false;
                }
                else {
                    this.locationHanging = false;
                }
            }
            else if (this.workouts[i].location === workoutLocation && this.workouts[i].locationShow === false) {
                this.workouts[i].locationShow = true;
                if (workoutLocation === 'ground') {
                    this.locationGround = true;
                }
                else {
                    this.locationHanging = true;
                }
            }
        }
    };
    // selectedWorkouts functionality
    AppComponent.prototype.addWorkout = function (workout) {
        var i = 0;
        var j = 0;
        var workoutExists = false;
        if (this.selectedWorkouts.length < 5) {
            for (i; i < this.selectedWorkouts.length; i++) {
                if (workout.id === this.selectedWorkouts[i].id) {
                    workoutExists = true;
                }
            }
            if (workoutExists === false) {
                this.selectedWorkouts.push(workout);
            }
            for (j; j < this.workouts.length; j++) {
                if (workout.id === this.workouts[j].id) {
                    this.workouts[j].selected = true;
                }
            }
        }
    };
    AppComponent.prototype.removeWorkout = function (workout) {
        var i = 0;
        var j = 0;
        for (i; i < this.selectedWorkouts.length; i++) {
            if (workout.id === this.selectedWorkouts[i].id) {
                this.selectedWorkouts.splice(i, 1);
                for (j; j < this.workouts.length; j++) {
                    if (workout.id === this.workouts[j].id) {
                        this.workouts[j].selected = false;
                    }
                }
            }
        }
    };
    AppComponent.prototype.clearSelectedWorkouts = function () {
        var i = 0;
        this.selectedWorkouts = [];
        for (i; i < this.workouts.length; i++) {
            this.workouts[i].selected = false;
        }
    };
    AppComponent.prototype.randomizeWorkouts = function () {
        var min = 0;
        var max = this.workouts.length;
        var q;
        var i = 0;
        var j = 0;
        var k = 0;
        while (this.selectedWorkouts.length < 5) {
            var workoutExists = false;
            q = Math.floor(Math.random() * (max - min)) + min;
            // console.log(q);
            for (i; i < this.selectedWorkouts.length; i++) {
                if (this.selectedWorkouts[i].id === this.workouts[q].id) {
                    workoutExists = true;
                }
            }
            if (workoutExists === false) {
                this.selectedWorkouts.push(this.workouts[q]);
            }
        }
        for (k; k < this.workouts.length; k++) {
            console.log(this.workouts[k].id + " workout");
            for (j; j < this.selectedWorkouts.length; j++) {
                console.log(this.selectedWorkouts[j].id + " selected");
                k++;
            }
        }
    };
    AppComponent.prototype.console = function () {
        var j = 0;
        var k = 0;
        for (k; k < 10; k++) {
            console.log(k + " workout");
            for (j; j < 5; j++) {
                console.log(j + " selected");
            }
        }
        // console.log(this.selectedWorkouts);
        // console.log(this.workouts.length);
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
