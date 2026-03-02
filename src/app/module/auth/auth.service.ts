import { auth } from "../../lib/auth";


interface IRegisterPatientPayload {
    name: string;
    email: string;
    password: string;
}
const registerPatient = async (payload: IRegisterPatientPayload) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
        }
    })

    if (!data.user) {
        throw new Error("Failed to register patient")
    }

    // const patient = await prisma.$transaction(async (tx) => {

    //     // await tx.
    // })

    return data
}

export const authService = {
    registerPatient,

}