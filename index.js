// Your code here
function greet() {
    var name = prompt ('What is your name?');
    console.log(name)
    if (name) {
    alert ("Hello," + name);
    } else {
        alert ("Hi there!");
    }
var age = prompt ('How old are you?');
    console.log(parseInt(age));
var birthday = confirm ("Has your birthday passed this year? Choose 'OK' for 'Yes' and 'Cancel' for 'No'");
var thisyear = new Date().getFullYear();
var yob;
    if (birthday) {
        yob = thisyear - age;
    }
    else {
        yob= thisyear -age -1;
    }
alert ("It looks like you were born in " + yob )
}