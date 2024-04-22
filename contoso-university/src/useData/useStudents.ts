import {useEffect, useState} from "react";
import {IStudent} from "../interfaces/global_interfaces.ts";


export async function getSingleStudent(id: string) {
  const student: IStudent = await fetch(`http://localhost:5000/students/${id}`)
    .then((res) => res.json())
  return student;
}


export default function useStudents(){
  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(()=> {
    const connectStudents = async () => {
      try{
        const data = await fetch("http://localhost:5000/students");
        if(!data.ok){
          throw new Error("Failed to connect to server");
        }
        setStudents((await data.json()) as IStudent[]);
      } catch (error) {
        console.error(error);
      }
    }
    connectStudents();
  }, [])


  const editStudents = async (studentToEdit: IStudent) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(studentToEdit),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(`http://localhost:5000/students/${studentToEdit.id}`, options);
    const data = await res.json();
    setStudents((prevStudents) =>
      prevStudents.map((prevStudent) => {
        if (prevStudent.id === studentToEdit.id) {
          return data;
        }
        return prevStudent
      })
    )
  }

  const createStudent = async (studentToAdd: IStudent) => {
    const options = {
      method: "POST",
      body: JSON.stringify(studentToAdd),
      headers: { "Content-Type": "application/json" },
    }
    const res = await fetch(`http://localhost:5000/students`, options);
    const data = await res.json();
    setStudents((prevStudents) => [...prevStudents, data]);
  }

  const deleteStudent = async (studentToDelete: IStudent) => {
    const options = {
      method: "DELETE",
    }
    const res = await fetch(`http://localhost:5000/students/${studentToDelete.id}`, options);
    if(res.ok){
      setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentToDelete.id))
    }
  }

  return [students, editStudents, createStudent, deleteStudent];
}