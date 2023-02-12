// const { readFile } = require("fs");
const _ = require("lodash");

let fs = require("fs");

// const { default: test } = require("node:test");
const path = "./user-data.json";

let Data = fs.readFileSync("user-data.json");
let userData = JSON.parse(Data);

// console.log(userData);

///////////Promise///////////

let promiseReadFile = (path, option) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, option, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

let promiseWriteFile = (path, text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, text, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// read = async () => {
//   let read = await promiseReadFile(path, "utf8");
//   console.log(JSON.parse(read));
// };
// read();

// let newUser = {
//   uid: 11223344,
//   firstname: "yasin",
//   lastname: "akhondi",
//   city: "tehran",
//   postalCode: "23456909072345",
//   phoneNumber: "03118998891234234",
//   position: "back-End Developer",
// };

// creat = async (userData, newUser) => {
//   try {
//     let dublicateFlag = false;
//     for (const user of userData) {
//       if (user.uid === newUser.uid) {
//         dublicateFlag = true;
//       }
//     }
//     if (dublicateFlag === true) {
//       return console.log("eroore!!!!");
//     }
//     userData.push(newUser);
//     await promiseWriteFile(path, JSON.stringify(userData));
//   } catch (error) {
//     console.log(error);
//   }
// };
// creat(userData, newUser);

// //////////update ///////////

// let newPerson = {
//   uid: 113344,
//   firstname: "test",
//   lastname: "test",
//   city: "test",
//   postalCode: "test",
//   phoneNumber: "test",
//   position: "test",
// };

// update = async (person) => {
//   let find = userData.find(function (item) {
//     return person.uid === item.uid;
//   });
//   if (!find) {
//     console.log("uid not find!!!!!!");
//   }
//   for (const index in person) {
//     console.log(index);
//   }
// };
// update(newPerson);

// /////////delete///////

// deleteUser = async (id) => {
//   const users = await promiseReadFile(path, "utf8");
//   const prevJson = JSON.parse(users);
//   const newJson = prevJson.filter((user) => user.uid !== id);
//   if (prevJson.length === newJson.length) {
//     console.log("User not found!");
//     return;
//   }

//   await promiseWriteFile(path, JSON.stringify(newJson));
//   console.log("User removed!");
// };
// deleteUser(11223344);

const update = async (id, data) => {
  if (data.uid !== id) {
    console.log("Invalid use of update method");
    return;
  }
  const users = await promiseReadFile(path, "utf8");
  const Json = JSON.parse(users);
  const newJson = _.map(Json, (user) => {
    if (user.uid === id) {
      console.log("User updated!");
      return data;
    }
    return user;
  });
  await promiseWriteFile(path, JSON.stringify(newJson));
};

update(11223344, {
  uid: 11223344,
  firstname: "edited",
  lastname: "edited",
  city: "test",
  postalCode: "5545689232",
  phoneNumber: "04121334415",
  position: "ui designer",
});
