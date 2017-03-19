import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let workouts = [
			{
				id: 1,
				name: 'Russian Twist',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Plank',
				type: 'static',
				location: 'ground'
			},
			{
				id: 3,
				name: 'Flutter Kicks',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 4,
				name: 'Plank Dips',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'V Ups',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Plank Knee to Elbow',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Big Circle',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Superman',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Side Crunch',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Pulse Up',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Hollow Man',
				type: 'static',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Superman',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Scissor Kick',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Crunch Ball Raise',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Ball Bridge',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Mountain Climber',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Ball Knee Tuck',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Knee In',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Starfish',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Cherry Picker',
				type: 'dynamic',
				location: 'ground'
			},
			{
				id: 2,
				name: 'Hanging Knee Raise',
				type: 'dynamic',
				location: 'hanging'
			},

		]; 
		return {workouts};
	}
}

