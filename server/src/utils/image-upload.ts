import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products', // Optional: folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'],
  } as {folder:string,allowed_formats:string[]},
});

const upload = multer({ storage });
export default upload;
