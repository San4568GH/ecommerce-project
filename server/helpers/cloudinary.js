const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
cloudinary.config({
  cloud_name: "dervixjwy",
  api_key: "445183984579184",
  api_secret:"ZvOkIxNzoAnmkFizxTdVCkd3TFk",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
