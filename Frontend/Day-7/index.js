var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log("\nQUESTION: 1");
function listProperties(student) {
    return Object.keys(student);
}
console.log(listProperties(student));


console.log("\nQUESTION: 2");
console.log("Initial Object = ", student);
function deleteProperty(student) {
    delete student.rollno;
    return student;
}
console.log("Object after deletion = ", deleteProperty(student));


var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log("\nQUESTION: 3");
function getLength(student) {
    return Object.keys(student).length;
}
console.log(getLength(student));


console.log("\nQUESTION: 4");
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
                { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',readingStatus: false } ];
function printDetails(library) {
    for (i in library) {
        var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
        if (library[i].readingStatus) console.log("Already read " + book);
        else console.log("You still need to read " + book);
    }
}
printDetails(library);

console.log("\nQUESTION: 5");
var cylinder = new Object({
    radius: 5,
    height: 10,
    volume: function() {
        return 2*Math.PI*this.radius*this.height;
    }
})
console.log(cylinder.volume().toFixed(4));

console.log("\nQUESTION: 6");
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
                { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
                { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 } ];
