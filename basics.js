//Const cannot reassign
const Nuser = "abc";
Nuser = "Cat";
console.log(Nuser);

// Const can change field value
const data = {
  name: "Vijay",
  className: "X11",
};
data.name = "Bob";

//iterating and extracting fields from object : METHOD 1
const objects = [
  {
    name: "Amir",
  },
  {
    name: "Billy",
  },
];

for (let i = 0; i < objects.length; i++) {
  const u = objects[i];
  const key = "name";
  console.log("user: ", u[key]);
}

//iterating and extracting fields from object : METHOD 2
for (const u of users) {
  console.log(u["name"]);
}

//Adding new object to array
const array = {
  name: "Kamal",
  id: "21",
};

const newUser = {
  name: "Jim",
  id: "12",
};

array.push(newUser);

//adding new field to object, changes reflect in old array as well
const newArray = [];
for (const u of objects) {
  const newData = u;
  newData.id = 33;
  newArray.push(newData);
}

console.log(objects);
console.log(newArray);

//passing the same logic in function to avoid reflecting changes in origin
function addIdToObj(newArray) {
  const newUsers = [];
  for (const u of newArray) {
    const newObj = u;
    newObj.id = 55;
    newUsers.push(newObj);
  }
  return newUsers;
}

console.log("Before adding age ", users);
const agedUsers = addAgeToUsers(users);
console.log("After adding age ", agedUsers);
