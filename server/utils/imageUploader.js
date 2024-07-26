require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const crypto = require('crypto');

// Cloudinary Configuration
const cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    console.log("Cloudinary configuration successful");
  } catch (error) {
    console.error('Error configuring Cloudinary:', error.message);
  }
};

// Generate Signature
const generateSignature = (paramsToSign) => {
  const sortedParams = Object.keys(paramsToSign).sort().map(key => `${key}=${paramsToSign[key]}`).join('&');
  const signature = crypto.createHash('sha1').update(sortedParams + process.env.API_SECRET).digest('hex');
  return signature;
};

const uploadImageToCloudinary = async (file, folder, height, quality) => {
  const paramsToSign = {
    folder,
    timestamp: Math.floor(Date.now() / 1000),
  };

  const signature = generateSignature(paramsToSign);
  console.log('Generated signature:', signature);

  const options = {
    folder,
    resource_type: "auto",
    timestamp: paramsToSign.timestamp,
    signature,
    api_key: process.env.API_KEY,
  };

  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }

  console.log("Uploading to Cloudinary with options:", options);

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    console.log("Upload successful:", result);
    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

module.exports = { cloudinaryConnect, uploadImageToCloudinary };
