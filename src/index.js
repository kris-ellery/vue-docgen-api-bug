const vueDocs = require("vue-docgen-api");
const path = require("path");

vueDocs.parse(path.join(__dirname, "pass.tsx")).then((ci) => {
  console.log("PASS - Has prop and slot");
  console.log(ci);
});

vueDocs.parse(path.join(__dirname, "fail.tsx")).then((ci) => {
  console.log("FAIL - No prop and no slot");
  console.log(ci);
});
