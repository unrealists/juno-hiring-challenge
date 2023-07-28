# Full-Stack Engineer Hiring Challenge: Dynamic Map Visualization Using Sveltekit

## Challenge Brief

Your task is to develop a web application that visualizes moving vehicles on a map. The project involves using SvelteKit, TypeScript, and a map rendering library such as MapGL, LeafletJS, etc. The vehicles route data is initially static and will be simulated from a static route path file.

## Endpoints

**GET /api/routes/:id**

This endpoint accepts an `id` which corresponds to a specific vehicle. It will return a JSON object detailing the location of the vehicle based on the static route path simulation.

Example response:

```json
{
	"id": "route1",
	"location": {
		"lat": 37.7749,
		"lng": -122.4194
	}
}
```

## Task Requirements

Your application should meet the following requirements:

1. **Rendering**: Utilize SvelteKit's server-side rendering (SSR) to preload the initial locations of the vehicles when the application loads.

2. **Fetching Data**: Periodically fetch the real-time locations of each vehicle from the '/api/routes/:id' endpoint and update the vehicle markers on the map accordingly.

3. **Visualizing Data**: Each vehicle's real-time location should be plotted on the map using a moving marker.

4. **User Interaction**: Enable a tooltip display with detailed information (name, plate number, driver, load id, etc.) when a user clicks on a vehicle marker.

5. **TypeScript**: Use TypeScript for static type checking in the application.

## Bonus Tasks

To level up your submission, you can implement the following additional tasks:

1. **PostgreSQL Integration**: Shift from using a static route path file to load vehicle and route data from a PostgreSQL database.

2. **Docker Compose Setup**: Use Docker Compose to set up and run your PostgreSQL database and application. Provide a `docker-compose.yml` that starts a PostgreSQL service and (if you can) a service for the web application too.

## Submission Guidelines

1. Fork this repository
2. Clone your forked repository into your local environment
3. Build your solution
4. Push your changes to your forked repository
5. Submit a pull request to this repository for review

Your submission will be evaluated based on how well you meet the requirements, your code structure and organization, and your use of TypeScript.

Good luck!
