import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Workout } from './workout';

@Injectable() 
export class WorkoutService {

	private workoutsUrl = 'api/workouts';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getWorkouts(): Promise<Workout[]> {
		// console.log(this.http.get)
		return this.http.get(this.workoutsUrl)
			.toPromise()
			.then (response => response.json().data as Workout[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for dev only
    	return Promise.reject(error.message || error);
  	}


}
