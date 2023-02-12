const fs = require("fs");
const nameFilePath = "./name.txt";
const numberFilePath = "./number.txt";

main = async () => {
  try {
    let person = [];
    const name = await fs.promises.readFile(nameFilePath, "utf-8");
    const number = await fs.promises.readFile(numberFilePath, "utf-8");
    name.split("\n").forEach(function (user) {
      let res = user.split("-");

      console.log(res);
    });
  } catch (error) {}
};
main();
