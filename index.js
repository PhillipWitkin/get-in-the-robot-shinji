// takes in an array of Map objects
// returns a Map object whose keys match all the input map keys, 
// and value holds a Set with all matching values for that key among all maps
const convertArrayOfMapsToMapOfSets = (pilotTests) => {

    resultsMap = new Map();

    // iterate through the array of syncTests 
    for (const syncTest of pilotTests){
        // iterate through each pilot-unit key-value pair present in a syncTest
        for (const [pilot, unit] of syncTest){
            // check to see if that pilot is in the final map
            if (resultsMap.has(pilot)){
                // get a reference to the set of compatible units
                compatibleEvas = resultsMap.get(pilot);
                // add the unit for that pilot to the set of compatible Evas 
                // since it will be a Set object, it will automatically stop duplicates (in O(1) time)
                compatibleEvas.add(unit);

            } else {
                // create a new set and add the robot to the set of that pilots compatible Evas
                const compatibleEvas = new Set();
                compatibleEvas.add(unit);
                // add the set to the final map for that pilot
                resultsMap.set(pilot, compatibleEvas);
            }
        }
    }

    return resultsMap;
}

/// we need individual Map objects to put inside the input array

// create input map 1 - manually by setting key-value pairs
const syncTest1 = new Map();
syncTest1.set("Rei", "Eva-00");
syncTest1.set("Shinji", "Eva-01");

// create input map 2 - using the built-in constructor of key-value arrays
const syncTest2 = new Map([
    ["Asuka", "Eva-02"],
    ["Shinji", "Eva-01"]
]);

// create input map 3 - from a plain JS object using Object.entries
const syncTest3 = new Map(Object.entries({
    "Shinji": "Eva-00",
    "Rei": "Eva-01",
    "Asuka": "Eva-02"
}));

const syncTestsArray = [syncTest1, syncTest2, syncTest3];
console.log("input:", syncTestsArray);
const syncTestsByPilot = convertArrayOfMapsToMapOfSets(syncTestsArray);
console.log("returned:", syncTestsByPilot);



