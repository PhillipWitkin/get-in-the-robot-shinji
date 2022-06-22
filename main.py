def list_of_dictionaries_to_dicitonary_of_lists(pilot_tests):
    # this will be the final returned dictionary
    dictionary_of_results = {}

    for sync_test in pilot_tests:
        for pilot, unit in sync_test.items():
            # check to see if that pilot is in the final dictionary
            if pilot in dictionary_of_results:
                # get a reference to the set of compatible units and add one
                compatible_evas = dictionary_of_results[pilot]
                compatible_evas.add(unit)
            else:
                # create a new set and add the robot to the set of that pilots compatible robots
                compatible_evas = set()
                compatible_evas.add(unit)
                dictionary_of_results[pilot] = compatible_evas

    return dictionary_of_results


# create 3 objects representing a set of tests
# each sync test is a dictionary, with its entries a pilot and the ability to sync with EVA unit robot
syncTest1 = {}
syncTest1["Rei"] = "Eva-00"
syncTest1["Shinji"] = "Eva-01"
# create second dictionary, add 2 key-value pairs
syncTest2 = {};
syncTest2["Asuka"] = "Eva-02";
syncTest2["Shinji"] = "Eva-01";
# create third dictionary object, add 3 key-value pairs
# we can also create it as a literal
syncTest3 = {
    "Shinji": "Eva-00",
    "Rei": "Eva-01",
    "Asuka": "Eva-02"
}
# create a list of the sync tests
pilotTests = [syncTest1, syncTest2, syncTest3]
for test in pilotTests:
    print("\n Sync Test:")
    for [pilot, unit] in test.items():
        print("{pilot} can sync with {unit}".format(pilot=pilot, unit=unit))

print("\n Results:")
results = list_of_dictionaries_to_dicitonary_of_lists(pilotTests)
for [pilot, compatible_evas] in results.items():
    print(pilot + " Syncs with: " + str(compatible_evas))
