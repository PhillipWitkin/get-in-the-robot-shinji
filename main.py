def list_of_dictionaries_to_dicitonary_of_lists(pilot_tests):
    # this will be the final returned dictionary
    dictionary_of_results = {}
    print(pilot_tests)
    for key in pilot_tests:
        for value in key:
            print(value)
            print(key[value])
            dictionary_of_results[key] = key[value]
            
    # ..... complete code .......

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
