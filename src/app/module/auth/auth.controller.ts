import { catchAsync } from "../../shared/catchAsync";
import { sendResponce } from "../../shared/sendResponce";
import { authService } from "./auth.service";
import { Request, Response } from "express";

const registerPatient = catchAsync(
    async(req: Request, res: Response) => {
        const payload = req.body;

        const result = await authService.registerPatient(payload)

        sendResponce(res, {
            httpStatuscode: 201,
            success: true,
            message: "Patient registered successfully",
            data: result
        })
    }
)

export const AuthController = {
    registerPatient,
    
}