const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");

dotenv.config();

paypal.configure({
  mode: "sandbox",
  client_id:"AdTlqBym0e6Y0AfY8H72Jn5h36zP_x39yj46X8N0GY7Ihxf-GVfyccihQJhV3oei_NaqnHvhD0lGL-e9",
  client_secret: "EB65NSFigYw19ScbOoLFLeTixwFPhMgdKXIzySONkc4e5GvluUX1hX5EFfdK8S5vM6ewAKmqqBco9Y15",
});

module.exports = paypal;
