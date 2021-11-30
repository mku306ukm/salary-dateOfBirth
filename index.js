// const salaryGet = (increamentAmt, users) => {
//   console.log("increamentAmt----", increamentAmt);

//   return users.filter((user) => {
//     console.log("tetttttt");
//     if (user.salary <= 500) {
//       console.log("user.salary---", user.salary);
//       user.salary = user.salary + increamentAmt;
//       return user;
//     }
//   });
// };

var users = [
  { salary: 800, name: "Ram", dob: "1965-10-25" },
  { salary: 400, name: "Shyam", dob: "1970-02-22" },
  { salary: 900, name: "Mohan", dob: "1950-05-01" },
  { salary: 500, name: "Sohan", dob: "1990-07-10" },
  { salary: 600, name: "Rohan", dob: "1980-11-14" },
];

// const salaryMoreThan500Array = salaryGet(50, users);
// console.log("salaryMoreThan500Array----", salaryMoreThan500Array);

const birthGet = (users) => {
  let arrayGreaterThan50 = [];
  let now = new Date();
  let currentYear = now.getFullYear();
  users.map((user) => {
    var userBirthDate = new Date(user.dob);
    var birthYear = userBirthDate.getFullYear();
    if (currentYear - birthYear > 50) {
      arrayGreaterThan50.push(user.dob);
    }
  });
  return arrayGreaterThan50;
};
console.log(birthGet(users));
