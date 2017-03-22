import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	typeStatic = true;
	typeDynamic = true;
	locationGround = true;
	locationHanging = true;
	turnRed = 1;
	


	constructor (
		private workoutService: WorkoutService,
		// private router: Router
	) { }

	getWorkouts(): void {
		this.workoutService.getWorkouts().then(workouts => this.workouts = workouts);
	}

	ngOnInit(): void {
		this.getWorkouts();
	}




// WORKOUT FILTERS FOR type AND location
	
	filterTypes(workoutType: string): void {
		var i;
		// console.log(workoutType)
		for (i = 0; i < this.workouts.length; i++) { 
			if (this.workouts[i].type === workoutType && this.workouts[i].typeShow === true) {
				// console.log(this.workouts[i].name + " " + this.workouts[i].type)
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
		// console.log(workoutType)
		for (i = 0; i < this.workouts.length; i++) { 
			if (this.workouts[i].location === workoutLocation && this.workouts[i].locationShow === true) {
				// console.log(this.workouts[i].name + " " + this.workouts[i].type)
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

	filterStatic(): void {
		var i;
		if ( this.typeStatic === true) {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].type === 'static' && this.workouts[i].typeShow === true) {
					this.workouts[i].typeShow = false
				}
				this.typeStatic = false
			}
		} else {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].type === 'static' && this.workouts[i].typeShow === false) {
					this.workouts[i].typeShow = true
				}
			}
			this.typeStatic = true	
		}
	}


	filterDynamic(): void {
		var i;
		if ( this.typeDynamic === true) {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].type === 'dynamic' && this.workouts[i].typeShow === true) {
					this.workouts[i].typeShow = false
				}
				this.typeDynamic = false
			}
		} else {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].type === 'dynamic' && this.workouts[i].typeShow === false) {
					this.workouts[i].typeShow = true
				}
			}
			this.typeDynamic = true	
		}
	}


	filterGround(): void {
		var i;
		if ( this.locationGround === true) {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].location === 'ground' && this.workouts[i].locationShow === true) {
					this.workouts[i].locationShow = false
				}
				this.locationGround = false
			}
		} else {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].location === 'ground' && this.workouts[i].locationShow === false) {
					this.workouts[i].locationShow = true
				}
			}
			this.locationGround = true	
		}
	}


	filterHanging(): void {
		var i;
		if ( this.locationHanging === true) {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].location === 'hanging' && this.workouts[i].locationShow === true) {
					this.workouts[i].locationShow = false
				}
				this.locationHanging = false
			}
		} else {
			for (i = 0; i < this.workouts.length; i++) {
				if (this.workouts[i].location === 'hanging' && this.workouts[i].locationShow === false) {
					this.workouts[i].locationShow = true
				}
			}
			this.locationHanging = true	
		}
	}

	selectStatic(): void {

	}




	console(): void {
		console.log(this.workouts);
	}
}

