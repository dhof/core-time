import { Component, OnInit } from '@angular/core';

import { Workout } from './workout';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WorkoutService]
})

export class AppComponent implements OnInit {
	title = 'Core Time'
	workouts : Workout[];
	selectedWorkouts = [];

	constructor (
		private workoutService: WorkoutService
	) {}


	// populates workouts array from in memory db data
	getWorkouts(): void {
		this.workoutService.getWorkouts().then(workouts => this.workouts = workouts);
	}

	ngOnInit(): void {
		this.getWorkouts();
	}




// WORKOUT FILTERS BUTTONS
	typeStatic = true;
	typeDynamic = true;
	locationGround = true;
	locationHanging = true;

	
	filterTypes(workoutType: string): void {
		var i;
		for (i = 0; i < this.workouts.length; i++) { 
			if (this.workouts[i].type === workoutType && this.workouts[i].typeShow === true) {
					this.workouts[i].typeShow = false
					if (workoutType === 'static') {
							this.typeStatic = false
					} else {
							this.typeDynamic = false
					}
			}
			else if (this.workouts[i].type === workoutType && this.workouts[i].typeShow === false) {
					this.workouts[i].typeShow = true 
					if (workoutType === 'static') {
							this.typeStatic = true
					} else {
							this.typeDynamic = true
					}
			}
		} 
	}


	filterLocations(workoutLocation: string): void {
		var i;
		for (i = 0; i < this.workouts.length; i++) { 
			if (this.workouts[i].location === workoutLocation && this.workouts[i].locationShow === true) {
					this.workouts[i].locationShow = false
					if (workoutLocation === 'ground') {
							this.locationGround = false
					} else {
							this.locationHanging = false
					}
			}
			else if (this.workouts[i].location === workoutLocation && this.workouts[i].locationShow === false) {
					this.workouts[i].locationShow = true 
					if (workoutLocation === 'ground') {
							this.locationGround = true
					} else {
							this.locationHanging = true
					}
			}
		} 
	}




// selectedWorkouts functionality

	addWorkout(workout: Workout): void {
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
				this.selectedWorkouts.push(workout)
			}
			for (j; j < this.workouts.length; j++) {
				if(workout.id === this.workouts[j].id) {
					this.workouts[j].selected = true;
				}
			}
		}
	}


	removeWorkout(workout: Workout): void {
		var i = 0;
		var j = 0;

		for (i; i < this.selectedWorkouts.length; i++) {
			if (workout.id === this.selectedWorkouts[i].id) {
				this.selectedWorkouts.splice(i, 1)

				for (j; j < this.workouts.length; j++) {
					if(workout.id === this.workouts[j].id) {
						this.workouts[j].selected = false
					}
				}
			}
		}
	}


	clearSelectedWorkouts(): void {
		var i = 0;
		this.selectedWorkouts = [];
		for (i; i < this.workouts.length; i++) {
			this.workouts[i].selected = false
		}
	}


	randomizeWorkouts(): void {
		var min = 0;
		var max = this.workouts.length;
		var q;
		var i;

	  	while (this.selectedWorkouts.length < 5) {
	  		var workoutExists = false
	  		q = Math.floor(Math.random() * (max - min)) + min;
	  		// console.log(q);
	  		for (i = 0; i < this.selectedWorkouts.length; i++) {
	  			if(this.selectedWorkouts[i].id === this.workouts[q].id) {
	  				workoutExists = true;
	  			}
	  		}
	  		if (workoutExists === false) {
  				this.selectedWorkouts.push(this.workouts[q])
	  		}
		}


		// highlight selected workouts
		var j;
		var k;

		for (k = 0; k < this.selectedWorkouts.length; k++) {
  			for (j = 0; j < this.workouts.length; j++) {
				if(this.selectedWorkouts[k].id === this.workouts[j].id) {
					this.workouts[j].selected = true;
				}
			}
  		}	
	}


	console(): void {
		var i = 0;
		var j = 0;
		var k = 0;
		for (k; k < 5; k ++) {
		console.log(k + " k")
		for (j; j < 10; j ++) {
			console.log(j + " j")
		}
	}
		// console.log(this.selectedWorkouts);
		// console.log(this.workouts.length);
	}
}
