import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

interface PatientDetailsPros {
  patient: Patient;
}


export default function PatientDetails({ patient }: PatientDetailsPros) {
    const { deletePatient, getPatientById } = usePatientStore()

    const handleDeletePatient = (id: Patient['id']) => {
      deletePatient(id)
      toast.error('Paciente eliminado correctamente', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
        });
    }
    
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID:" info={patient.id} />
      <PatientDetailItem label="Paciente:" info={patient.name} />
      <PatientDetailItem label="Propietario:" info={patient.caretaker} />
      <PatientDetailItem label="Email:" info={patient.email} />
      <PatientDetailItem label="Fecha de alta:" info={patient.date} />
      <PatientDetailItem label="Síntomas:" info={patient.symptoms} />

      <div className="flex flex-col md:flex-row justify-between gap-3 mt-10">
        <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}
        >
            Editar
        </button>
        <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => handleDeletePatient(patient.id)}
        >
            Eliminar
        </button>
      </div>
    </div>
  );
}
