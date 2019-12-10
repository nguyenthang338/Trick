>>>>>>>>Data-types

1. Array in Array
var array = ["Marge", "Homer", ["Bart", "Lisa", "Maggie"]];

2. Object in Array
let journal = [
  {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
  /* and so on... */
];

3. Array in object
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

4. Object in Object
var pause_menu = {
  pause_button : { someProperty : "prop1", someOther : "prop2" },
  resume_button : { resumeProp : "prop", resumeProp2 : false },
  quit_button : false
};

5. Json file
{
  "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
}
