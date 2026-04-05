import {v2 as cloudinary} from "cloudinary"
import { envVars } from "./env"

cloudinary.config({
    cloud_name: envVars.CLOUDINARY_CLOUD_NAME,
    api_key: envVars.CLOUDINARY_API_KEY,
    api_secret: envVars.CLOUDINARY_API_SECRET,
})

export const cloudinaryUpload = cloudinary