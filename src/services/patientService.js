import prisma from "../config/db.js";

export const getAllPatients = async () => {
    return await prisma.patient.findMany();
};

export const createPatientService = async ({ 
    f_name, 
    l_name, 
    street,
    date_of_birth, 
    barangay, 
    municipality, 
    province, 
    zip }) => {
    const newPatient = await prisma.patient.create({ data: { 
        f_name, 
        l_name, 
        street,
        date_of_birth: new Date(date_of_birth),
        barangay, 
        municipality, 
        province, 
        zip },
    });
    return newPatient;
};



// export const getAllDoctors = async () => {
//     return await prisma.doctor.findMany();
// };

