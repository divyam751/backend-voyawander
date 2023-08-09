# Voyawander - Documentation for Frontend API

This documentation provides developers with information on how to interact with the backend API endpoints, routes, and utilize the searching functionality for the Voyawander travel website's frontend.

## Table of Contents

- [Introduction](#introduction)
- [API Endpoints](#api-endpoints)
  - [Destinations](#destinations)
  - [Hotels](#hotels)
  - [Flights](#flights)
  - [Messages](#messages)
- [Searching](#searching)
- [Example Usage](#example-usage)

## Introduction

The Voyawander frontend interacts with the backend API to fetch data related to destinations, hotels, flights, and messages. Developers can use the provided API endpoints to perform various actions such as fetching data, creating new entries, updating entries, and deleting entries.

## API Endpoints

### Destinations

- **GET /destinations**: Fetch a list of all destinations.
- **POST /destinations/create**: Create a new destination.
- **PUT /destinations/edit/:destinationId**: Update a destination by ID.
- **DELETE /destinations/delete/:destinationId**: Delete a destination by ID.

### Hotels

- **GET /hotels**: Fetch a list of all hotels.
- **POST /hotels/create**: Create a new hotel.
- **PUT /hotels/edit/:hotelId**: Update a hotel by ID.
- **DELETE /hotels/delete/:hotelId**: Delete a hotel by ID.

### Flights

- **GET /flights**: Fetch a list of all flights.
- **POST /flights/create**: Create a new flight.
- **PUT /flights/edit/:flightId**: Update a flight by ID.
- **DELETE /flights/delete/:flightId**: Delete a flight by ID.

### Messages

- **GET /messages**: Fetch a list of all messages.
- **POST /messages/create**: Create a new message.
- **DELETE /messages/delete/:messageId**: Delete a message by ID.

## Searching

- The browsing endpoints `/destinations` support query parameters for searching. You can add query parameters to filter and search based on specific attributes. For example:
  - `/destinations?search=beach`: Search for destinations with "beach" in their name.

## Example Usage

Here's an example of how to use the Fetch API to interact with the API endpoints in JavaScript:

```javascript
// Fetch destinations
fetch("/destinations")
  .then((response) => response.json())
  .then((destinations) => {
    console.log(destinations); // Array of destination objects
  })
  .catch((error) => {
    console.error("Error fetching destinations:", error);
  });

// Create a new hotel
fetch("/hotels/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Sample Hotel",
    image: "sample-hotel-image.jpg",
    room_price: 150,
    rating: 4,
    facilities: ["Pool", "Spa", "Restaurant"],
    address: "123 Main St, City",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Should print "New hotel added"
  })
  .catch((error) => {
    console.error("Error creating hotel:", error);
  });
```
