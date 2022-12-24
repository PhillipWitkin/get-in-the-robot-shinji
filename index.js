/*
We have a collection of synchronization test results, 
each one containing human pilots and a biomechanical Eva Unit they can synchronize with at the time, 
where each test is respresnted as a map of pilot keys to Eva values

We want to take in an array of those tests, and respresent that data by a Map of pilots  
to a Set of all the Eva units they are compatible of synchronizing with 
(we don't want duplicate Eva unit values for a given pilot, or care about the order of 
their compatible Evas). 

For example:
[
  Map(2) { 'Rei' => 'Eva-00', 'Shinji' => 'Eva-01' },
  Map(2) { 'Asuka' => 'Eva-02', 'Shinji' => 'Eva-01' },
  Map(3) {
    'Shinji' => 'Eva-00',
    'Rei' => 'Eva-01',
    'Asuka' => 'Eva-02'
  }
]

Should return:
Map(3) {
  'Rei' => Set(2) { 'Eva-00', 'Eva-01' },
  'Shinji' => Set(2) { 'Eva-01', 'Eva-00' },
  'Asuka' => Set(1) { 'Eva-02' }
}
*/


// takes in an array of Map objects
// returns a Map object whose keys match all the input map keys, 
// and value holds a Set with all matching values for that key among all maps
const convertArrayOfMapsToMapOfSets = (pilotTests) => {

    mapUnitsByPilot = new Map();

    // iterate through the array of syncTests 
    for (const syncTest of pilotTests){
        // iterate through each pilot-unit key-value pair present in a syncTest
        for (const [pilot, unit] of syncTest){
            // check to see if that pilot is in the final map
            if (mapUnitsByPilot.has(pilot)){
                // get a reference to the set of compatible units
                compatibleEvas = mapUnitsByPilot.get(pilot);
                // add the unit for that pilot to the set of compatible Evas 
                // since it will be a Set object, it will automatically stop duplicates (in O(1) time)
                compatibleEvas.add(unit);

            } else {
                // create a new set for that pilots compatible Evas, and add the Eva from that sync test
                const compatibleEvas = new Set();
                compatibleEvas.add(unit);
                // add the set for that pilot as a key-value pair to the final map
                mapUnitsByPilot.set(pilot, compatibleEvas);
            }
        }
    }

    return mapUnitsByPilot;
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



