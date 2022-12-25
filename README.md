# Get in the robot Shinji
### **Purpose** - To practice utilizing:
  * The Set and Map classes in ES6 JavaScript
  * Selecting appropriate data structures
  
##
### **Description** - Complete the functions which map the input data - 
* For mock data, we are referencing the franchise _Neon Genesis Evangelion_, where certain humans can synchronize with particular biomechanical mecha robots (Eva Units) in order to pilot them  
* We have a collection of synchronization test results, each one containing the test results for a human pilot and a biomechanical Eva Unit they can synchronize with at the time 
* Each test is respresnted as a map of of key-vlaue pairs with a pilot key to an Eva Unit value

### 1. Complete the function __mapCompatibleUnitsByPilot__:

* We want to take in an array of those tests, and respresent that data by a Map of pilots to a Set of all the Eva units they are compatible of synchronizing with (we don't want duplicate Eva unit values for a given pilot, or care about the order of their compatible Evas). 

#### For example:
``` 
[
  Map(2) { 'Rei' => 'Eva-00', 'Shinji' => 'Eva-01' },
  Map(2) { 'Asuka' => 'Eva-02', 'Shinji' => 'Eva-01' },
  Map(3) { 'Shinji' => 'Eva-00', 'Rei' => 'Eva-01', 'Asuka' => 'Eva-02' }
]
```

 Should return:
```
Map(3) {
  'Rei' => Set(2) { 'Eva-00', 'Eva-01' },
  'Shinji' => Set(2) { 'Eva-01', 'Eva-00' },
  'Asuka' => Set(1) { 'Eva-02' }
}
```
* It should be able to run in O(n) time, where n = total number of k-v pairs in all the input maps, and O(n) space 

#
### 2. Complete the function __mapCompatiblePilotsByUnit__:

* We want to take the exact same input, but return a map this time as a Map of Eva units to 
a Set of all the pilots that can synchronize with that Eva. Just Like before, we can use a Set because 
we don't want duplicate pilots or care about their order. 

#### The same input
```
[
  Map(2) { 'Rei' => 'Eva-00', 'Shinji' => 'Eva-01' },
  Map(2) { 'Asuka' => 'Eva-02', 'Shinji' => 'Eva-01' },
  Map(3) { 'Shinji' => 'Eva-00', 'Rei' => 'Eva-01', 'Asuka' => 'Eva-02' }
]
```
Should return:
```
Map(3) {
  'Eva-00' => Set(2) { 'Rei', 'Shinji' },
  'Eva-01' => Set(2) { 'Shinji', 'Rei' },
  'Eva-02' => Set(1) { 'Asuka' }
}
```
* It should also run in O(n) time, where n = total number of k-v pairs in all the input maps, and O(n) space  
 
#
## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Cloning _forked_ repository
* Navigate to your github profile to find the _newly forked repository_.
* Clone the repository from **your account** into the `~/dev` directory (or a parent directory of your repositories).
  * clone the project by executing the following command:
    * `git clone https://github.com/${MYUSERNAME}/${NAMEOFPROJECT}`




