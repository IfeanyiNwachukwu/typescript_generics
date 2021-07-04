"use strict";
const names = ["Max", "Manuel"];
console.log(names);
const boys = ["obi", "Uche", "Gambo"];
console.log(boys);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
function mergeT(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObjT = mergeT({ name: "Max", hobbies: ["sports", "cinema"] }, { age: 30 });
console.log(mergedObjT);
function mergeC(objA, objB) {
    return Object.assign(objA, objB);
}
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    if (element.length > 1) {
        descriptionText = `Got  ${element.length}  elements`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint(["obi", "uchendu", "adaeze", "michael", "philip"]));
function extractAndConvert(obj, key) {
    return obj[key];
}
const objTest = { name: "Gambo", age: 33, job: "software developer" };
const res = extractAndConvert(objTest, "job");
console.log(res);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Gambo");
textStorage.addItem("Ifeanyi");
textStorage.addItem("Miracle");
textStorage.removeItem("Gambo");
const items = textStorage.getItems();
console.log(textStorage);
console.log(`items:  ${items}`);
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.removeItem(1);
console.log(numberStorage);
function createCourseGoal(title, completeUntil, description) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const newGoal = createCourseGoal("javascript", new Date(), "everything about javascript");
console.log(newGoal);
const namesA = ["Max", "Uche", "Miracle"];
//# sourceMappingURL=app.js.map