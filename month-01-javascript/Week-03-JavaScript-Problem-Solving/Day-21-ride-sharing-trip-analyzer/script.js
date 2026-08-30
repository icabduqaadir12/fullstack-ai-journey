// Dataset
const trips = [
    {
        id: 101,
        passenger: "Ahmed",
        driver: "Yusuf",
        city: "Nairobi",
        distance: 12,
        fare: 800,
        rating: 5,
        status: "completed"
    },
    {
        id: 102,
        passenger: "Amina",
        driver: "Hassan",
        city: "Mombasa",
        distance: 8,
        fare: 500,
        rating: 4,
        status: "completed"
    },
    {
        id: 103,
        passenger: "Mohamed",
        driver: "Yusuf",
        city: "Nairobi",
        distance: 20,
        fare: 1200,
        rating: 5,
        status: "completed"
    },
    {
        id: 104,
        passenger: "Fatima",
        driver: "Ali",
        city: "Kisumu",
        distance: 5,
        fare: 350,
        rating: 3,
        status: "cancelled"
    },
    {
        id: 105,
        passenger: "Hassan",
        driver: "Yusuf",
        city: "Nairobi",
        distance: 15,
        fare: 950,
        rating: 4,
        status: "completed"
    },
    {
        id: 106,
        passenger: "Maryam",
        driver: "Ali",
        city: "Mombasa",
        distance: 10,
        fare: 650,
        rating: 5,
        status: "completed"
    },
    {
        id: 107,
        passenger: "Yusuf",
        driver: "Hassan",
        city: "Nairobi",
        distance: 25,
        fare: 1500,
        rating: 5,
        status: "completed"
    },
    {
        id: 108,
        passenger: "Khadija",
        driver: "Ali",
        city: "Kisumu",
        distance: 7,
        fare: 400,
        rating: 4,
        status: "completed"
    }
];


// getTripById
const getTripById = (trips, id) => trips.find(trip => trip.id === id);
// console.log(getTripById(trips, 105));

// getCompletedTrips
const getCompletedTrips = (trips) => trips.filter(trip => trip.status === 'completed');
// console.log(getCompletedTrips(trips));

// getCompletedPassengerNames
const getCompletedPassengerNames = (trips) => trips.filter(trip => trip.status === 'completed').map(trip => trip.passenger)
// console.log(getCompletedPassengerNames(trips));


// calculateTotalRevenue
const calculateTotalRevenue = (trips) => trips.filter(trip => trip.status === 'completed').reduce((total, trip) => total + trip.fare, 0);
// console.log(calculateTotalRevenue(trips));

// countNairobiCompletedTrips
const countNairobiCompletedTrips = (trips) => trips.filter(trip => trip.status === 'completed' && trip.city === 'Nairobi').length
// console.log(countNairobiCompletedTrips(trips)); // returns 4

// getExpensiveTripPassengers
const getExpensiveTripPassengers = (trips) => trips.filter(trip => trip.fare > 900).map(trip => trip.passenger);
// console.log(getExpensiveTripPassengers(trips));

// getFiveStarDrivers
const getFiveStarDrivers = (trips) => trips.filter(trip => trip.rating === 5).map(trip => trip.driver);
// console.log(getFiveStarDrivers(trips));

// getLongestTrips
const getLongestTrips = (trips) => [...trips].filter(trip => trip.distance >= 15).sort((a, b) => b.distance - a.distance);
// console.log(getLongestTrips(trips)); // Returning the complete trip objects, ordered from longest distance to shortest.

// getRevenueByDriver
const getRevenueByDriver = (trips) => {
    return trips.reduce((total, trip) => {
        const driver = trip.driver
        if (total[driver])
            total[driver] += trip.fare
        else {
            total[driver] = trip.fare
        }
            
        return total
    }, {});
}

// console.log(getRevenueByDriver(trips));


// getHighestRevenueCity
const getHighestRevenueCity = (trips) => {
    let revenueByCity = trips.filter(trip => trip.status === 'completed').reduce((total, trip) => {
        const city = trip.city
        if (total[city])
            total[city] += trip.fare;
        else
            total[city] = trip.fare
        return total
    }, {});

    const highestRevenueByCity = Object.entries(revenueByCity).reduce((highest, [city, revenue]) => {
        if (revenue > highest.revenue){
            highest.city = city
            highest.revenue = revenue
        }
        return highest
    }, {
        city: null,
        revenue: 0
    });

    return highestRevenueByCity.city;
}

console.log(getHighestRevenueCity(trips));