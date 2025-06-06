import { getAllPatients, createPatientService } from "../services/patientService.js";

export const getPatients = async (req, res) => {
    try {
        const patients = await getAllPatients();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const addPatients = async (req, res) => {
    try {
    // console.log('Request Body:', req.body); // Helpful for debugging
        const { f_name, 
                l_name,
                date_of_birth, 
                street, 
                barangay, 
                municipality, 
                province, 
                zip } = req.body;

        const newPatient = await createPatientService({ 
            f_name, 
            l_name, 
            street,
            date_of_birth, 
            barangay, 
            municipality, 
            province, 
            zip });
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Patient.', details: error.message});
    }
};