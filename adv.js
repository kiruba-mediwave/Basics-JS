function printMessage(wish, name) {
  let iname = "name";
  let iMessage = "Hello";
  if (name) {
    iname = name;
  }
  if (wish) {
    iMessage = wish;
  }
  console.log(iMessage + " " + iname);
}

function printNewMessage(wish, time, name) {
  let iname = "name";
  let iMessage = "Hello";
  letiTime = "10";
  if (name) {
    iname = name;
  }
  if (wish) {
    iMessage = wish;
  }
  if (wish) {
    iTime = time;
  }
  console.log(iMessage + " " + iname + " " + "Time is : " + iTime);
}

function printNewM({ name, wish, time }) {
  let iname = "name";
  let iMessage = "Hello";
  letiTime = "10";
  if (name) {
    iname = name;
  }
  if (wish) {
    iMessage = wish;
  }
  if (wish) {
    iTime = time;
  }

  const output = `${wish} ${name}.Time is ${time}`;
}

sayHello({
  time: "8:00",
  name: "meenatchi",
  wish: "Good morning",
});
