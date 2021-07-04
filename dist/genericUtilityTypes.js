"use strict";
const UpdateTodo = (todo, fieldsToUpdate) => {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
};
const todo1 = { title: "organize desk", description: "Cear Clutter" };
const todo2 = UpdateTodo(todo1, { description: "throw out thrash" });
console.log(todo2);
const obj = { a: 5 };
const todo = { title: "Delete Inactive Users" };
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats);
console.log(cats.boris);
//# sourceMappingURL=genericUtilityTypes.js.map