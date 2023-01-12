Destructuring;

const data = {
  name: "Apple",
  Price: "20",
};
//destructure using key
const ProductName = data["name"];
console.log(ProductName);

//destructure using object
const { name, Price } = data;

// pass destructured value to variable
const { name: studentName, className: studentClassName } = student;

//destructure array
const dts = ["Anne", "Jven", "Anto"];
const [a, , c] = dts;

//destructure obj from object
const datas = [
  {
    name: "Abi",
    code: "B",
  },
  {
    name: "Arthi",
    code: "Y",
  },
];

const [g, d] = datas;

//destructure obj using REST
const newData = { ...datas };
newData.age = 34;

//passing values wont change the origin
const userName = "apple";
let newUserName = userName;
newUserName = "orange";


