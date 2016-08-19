/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Mania", "Art", "Dancing on a grave", "Theater of doom", "Murder", "Homicide"];
var programmers = ["murderer", "coroner", "psychopath", "grim reaper", "architect of death"]
var castles = ["mosoleums", "scaffolds", "crematoreum"]
var exertions = ["effort", "strain", "struggle", "toil", "die", "slave", "fail"];
var airs = ["corpse", "nooses", "hells", "guillotine ", "scythe"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

document.getElementById("thing").innerHTML = thing;
document.getElementById("person").innerHTML = programmer + "s";

var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + programmer +
    ", like the poet, works only slightly removed from pure thought-stuff. He builds his " +
    castles + " in the " + air + ", from " + air + ", creating by " + exertion + " of the imagination.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";


var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

for (var i = 0; i < is.length; i = i + 1){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
