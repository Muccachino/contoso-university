import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import {Button, Divider, FormLabel, Input} from "@mui/joy";
import useStudents, {getSingleStudent} from "../../useData/useStudents.ts";
import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {IStudent} from "../../interfaces/global_interfaces.ts";
import  {useState} from "react";

export async function loader({params}: {params: {id: string}}) {
  const student = await  getSingleStudent(params.id);
  return {student};
}


export default function StudentEdit() {
  const navigate = useNavigate();
  const {student} = useLoaderData() as {student: IStudent};
  const [,editStudents] = useStudents()
  const [currentStudent, setCurrentStudent] = useState<IStudent>(student);

  return (
    <>
      <Header headerBackground="black" headerColor="lightgray"/>
      <div style={{margin: "0 10vw" }}>
        <div style={{margin: "50px 0 20px 50px"}}>
          <h1 style={{marginBottom: "20px"}}>Edit</h1>
          <h3>Student</h3>
        </div>

        <div style={{ height: "250px", width: "30vw", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Divider sx={{marginBottom: "20px"}}/>

          <FormLabel>First Name</FormLabel>
          <Input value={currentStudent.firstName} onChange={(e) => setCurrentStudent(prevState => ({...prevState, firstName: (e.target.value)}))}/>
          <FormLabel>Last Name</FormLabel>
          <Input value={currentStudent.lastName} onChange={(e) => setCurrentStudent(prevState => ({...prevState, lastName: (e.target.value)}))}/>
          <FormLabel>Enrollment Date</FormLabel>
          <Input value={currentStudent.enrollmentDate} onChange={(e) => setCurrentStudent(prevState => ({...prevState, enrollmentDate: (e.target.value)}))} type="date"/>
        </div>

        <div>
          <Button sx={{marginTop: "30px"}} onClick={() => {
            (editStudents as (studentToEdit: IStudent) => Promise<void>)(currentStudent);
          navigate("/students")}}>Save</Button>
          <span style={{marginLeft: "30px"}}><Link to={"/students"}>Back to List</Link></span>
        </div>
      </div>
      <Footer/>
    </>
  )
}