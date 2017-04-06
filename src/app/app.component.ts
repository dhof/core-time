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
	shownWorkouts = [];

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


	getShownWorkouts(): void {
		var i;
		for (i = 0; i < this.workouts.length; i++) {
			if (this.workouts[i].typeShow === true && this.workouts[i].locationShow === true) {
				this.shownWorkouts.push(this.workouts[i])
			}
		}
	}


	randomizeWorkouts(): void {
		this.shownWorkouts = [];
		this.getShownWorkouts();
		var min = 0;
		var max = this.shownWorkouts.length;
		var q;
		var i;
		var j;
		var l;
		var workoutVisibleCount = this.shownWorkouts.length;
		var workoutAlreadyAddedCount = 0;
		var alreadyAdded = [];
		var addCount = 0;


	  	while (this.selectedWorkouts.length < 5 && workoutVisibleCount != 0) {
	  		var workoutAlreadyAdded = false
	  		q = Math.floor(Math.random() * (max - min)) + min;
	  		if (this.shownWorkouts.length === workoutAlreadyAddedCount) {
	  			break;
	  		} else {

	  			/* this ELSE statement: cycles through selectedWorkouts array, IF the workout exists, it pushes to a new array.
	  			 	Then cycling through this new array to see how many instances there are. 
	  			 	If one instance, workoutAlreadyAddedCount +1, otherwise continues cycling through selectedWorkouts array. 
	  			 	This allows workoutAlreadyCount to be increased if there is ONLY ONE instance of the already added workout
	  			 */
		  		for (i = 0; i < this.selectedWorkouts.length; i++) {
		  			if(this.selectedWorkouts[i].id === this.shownWorkouts[q].id) {
		  				workoutAlreadyAdded = true;
  						alreadyAdded.push(this.selectedWorkouts[i])
		  				addCount = 0;
		  				for (j = 0; j < alreadyAdded.length; j++) {		  					
		  					if (this.selectedWorkouts[i].id === alreadyAdded[j].id) {
		  						addCount = addCount + 1;	
		  					}
	  					}
	  					if (addCount === 1) { 
	  						workoutAlreadyAddedCount = workoutAlreadyAddedCount + 1;
	  					}
		  			}
		  		}
		  		if (workoutAlreadyAdded === false) {
	  				this.selectedWorkouts.push(this.shownWorkouts[q])
	  				workoutVisibleCount = workoutVisibleCount - 1;
		  		}
		  	}
		}


		// highlight selected workouts picked by randomize
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
}




