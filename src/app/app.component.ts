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
	title = 'app works!';
	workouts;
	filteredWorkouts;
	// filteredWorkouts = this.workouts;



	constructor (
		private workoutService: WorkoutService,
		private router: Router
	) { }

	getWorkouts(): void {
		this.workoutService.getWorkouts().then(workouts => this.workouts = workouts, this.filteredWorkouts = this.workouts);
		// this.filteredWorkouts = this.workouts;
		// console.log(this.workouts)
		
		// console.log(this.filteredWorkouts);

	}

	ngOnInit(): void {
		this.getWorkouts();
		// this.filteredWorkouts = this.workouts;

	}

	console(): void {
		// this.filteredWorkouts = this.workouts;
		console.log(this.filteredWorkouts)
	}
}

