const names: Array<string> = ["Max", "Manuel"];

console.log(names);

const boys: string[] = ["obi", "Uche", "Gambo"];
console.log(boys);

// CREATING A GENERIC FUNCTION
// -- Without Generics
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });
// mergedObj.name  -- Throws an error cos typescript does not know

// -- With Generics

function mergeT<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObjT = mergeT(
  { name: "Max", hobbies: ["sports", "cinema"] },
  { age: 30 }
);
// mergedObjT.name  -- Does not throw any error
console.log(mergedObjT);
// WORKING WITH CONSTRAINTS

function mergeC<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
// Just saying T and U must be objects

// ANOTHER GENERIC FUNCTION

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
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

// THE KEYOF CONSTRAINT
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const objTest = { name: "Gambo", age: 33, job: "software developer" };

const res = extractAndConvert(objTest, "job");
console.log(res);

// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Gambo");
textStorage.addItem("Ifeanyi");
textStorage.addItem("Miracle");

textStorage.removeItem("Gambo");

const items = textStorage.getItems();

console.log(textStorage);
console.log(`items:  ${items}`);

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);

numberStorage.removeItem(1);

console.log(numberStorage);

// GENERIC UTILITY TYPES

// -- The partial Type
//The partial keyword makes all the properties optional
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  completeUntil: Date,
  description: string
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

const newGoal = createCourseGoal(
  "javascript",
  new Date(),
  "everything about javascript"
);

console.log(newGoal);

// -- The Readonly Type

const namesA: Readonly<string[]> = ["Max", "Uche", "Miracle"];

// namesA.push("Israel");
