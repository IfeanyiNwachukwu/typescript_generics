// THE PARTIAL TYPES OF

// -- It constructs a type with all the properties
// -- of the type set to optional

interface Todo {
  title: string;
  description: string;
}

const UpdateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate };
};

const todo1 = { title: "organize desk", description: "Cear Clutter" };

const todo2 = UpdateTodo(todo1, { description: "throw out thrash" });

console.log(todo2);

// REQUIRED TYPES

//-- construct a type consisting of all properties of Type set to required.

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // works fine because both properties are set to optional in the interface

// const obj2: Required<Props> = {a:5} -- does not compile successfully because property b is missing

// READONLY
// -- constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type can not be reassigned

interface TodoR {
  title: string;
}

const todo: Readonly<TodoR> = { title: "Delete Inactive Users" };

// todo.title = 'expected to fail' -- fails becauseproperties can not be reassigned

// RECORD -- Record<keys,type>

// -- constructs an object type whose property keys
// -- are keys and whose property values are Type
// -- These utility can be used to map a property
// -- of a type to another type

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

console.log(cats);
console.log(cats.boris);
