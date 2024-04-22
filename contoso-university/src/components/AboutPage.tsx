import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Button, Divider} from "@mui/joy";
import Table from "@mui/joy/Table";
import {TableCell, TableHead, TableRow, TableBody} from "@mui/material";
import useStudents from "../useData/useStudents.ts";
import {IStudent} from "../interfaces/global_interfaces.ts";
import axios from "axios";

interface EnrollmentGroup {
  enrollmentDate: string;
  studentCount: number;
}

export default function AboutPage() {
  //const [students] = useStudents();

  // const getEnrollmentGroups = () => {
  //   const enrollmentGroupList: EnrollmentGroup[] = [];
  //
  //   (students as IStudent[]).forEach((student) => {
  //     enrollmentGroupList.forEach((enrollment) => {
  //       if (enrollment.enrollmentDate === student.enrollmentDate) {
  //         enrollment.studentCount += 1
  //         return;
  //       }
  //     })
  //   })
  // }


  const testingAPICalls= async () => {
    const response = await axios.post('https://localhost:5001/api/employee',
      {
          FirstName: "Luca", LastName: "Pacheiner", EmailId: "lPacheiner@imendo.at"
      });

    console.log(response.data, "Hallo");
  }

  return (
    <>
      <Header headerBackground="white" headerColor="black"/>
      <div>
        <div>
          <h1 style={{marginBottom: "20px"}}>About</h1>
          <h2 style={{marginBottom: "20px"}}>
            Student Body Statistics
          </h2>
          <Button onClick={testingAPICalls}>TestAPI</Button>

          <Divider style={{margin: "40px 0"}}/>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Enrollment Date</TableCell>
              <TableCell>Number of Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </div>
      <Footer/>
    </>

  )
}