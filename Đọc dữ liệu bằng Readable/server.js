var file = require("fs");
var docluong = file.createReadStream(__dirname + "/readme.txt", {
  encoding: "utf8",
});
var ghiluong = file.createWriteStream(__dirname + "/writeme.txt");
docluong.on("data", function (chunk) {
  console.log("Ghi luong nao: ");
  ghiluong.write(chunk);
});
