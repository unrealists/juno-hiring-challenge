# Full-Stack Engineer Hiring Challenge: Dynamic Map Visualization Using Sveltekit

## Challenge Brief

Your task is to develop a web application that can visualize moving vehicles on a map. This project will involve the use of SvelteKit, TypeScript, and a map rendering library of your choice (MapGL, LeafletJS, etc.). The vehicle route and data will be simulated from a static route path file implemented server-side with SvelteKit SSR to preload initial locations.

## Endpoints

You should create an endpoint as follows:

**GET /api/routes/:id**

The endpoint takes an `id` parameter representing a specific vehicle. It will then respond with a JSON object indicating the vehicle's real-time location, following a set of static predetermined coordinates.

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

## Task Specifications

1. **Loading the App**: When the site is opened, SvelteKit's server-side rendering (SSR) should preload the initial whereabouts of the vehicles. 

2. **Fetching Data**: The client app should make regular requests to the '/api/routes/:id' endpoint to fetch the current GPS location of each vehicle and accordingly update the position of markers on the map.

3. **Visualizing Data**: Each vehicle should be plotted on the map using a moving marker. The marker moves to reflect the vehicle's updated location.

4. **Extra feature**: The user should be able to click on a individual vehicle marker to load a tooltip information about the vehicle (e.g. name, plate number, driver, load id etc.).

5. **TypeScript**: The entire application should be written utilizing TypeScript for static type checking. Appropriate types must be defined for handling data and props throughout the app.

## MapGL /LeafletJS

While MapGL is suggested for rendering map visuals, you have the autonomy to use another library of your choice, such as LeafletJS, if you prefer. 

## Submission & Evaluation

To submit your solution, please follow these steps:

1. **Fork** this repository
2. **Clone** the forked repository into your local environment
3. Develop your solution
4. **Push** your final changes
5. Create a **Pull Request** in this repository for review

Your submission will be assessed on its fulfillment of the requirements, code quality, and organization, as well as the accurate use of TypeScript.

## Good luck!
