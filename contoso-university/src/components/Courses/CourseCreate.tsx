import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import {Button, Divider, FormLabel, Input} from "@mui/joy";
import useCourses from "../../useData/useCourses.ts";
import {Link, useNavigate} from "react-router-dom";
import {ICourse} from "../../interfaces/global_interfaces.ts";
import  {useState} from "react";


export default function CourseCreate() {
  const navigate = useNavigate();
  const [,,createCourse] = useCourses()
  const [currentCourse, setCurrentCourse] = useState<ICourse>({id: "", courseNumber: "", title: "", credits: ""});

  return (
    <>
      <Header headerBackground="black" headerColor="lightgray"/>
      <div style={{margin: "0 10vw" }}>
        <div style={{margin: "50px 0 20px 50px"}}>
          <h1 style={{marginBottom: "20px"}}>Create</h1>
          <h3>Course</h3>
        </div>

        <div style={{ height: "250px", width: "30vw", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
          <Divider sx={{marginBottom: "20px"}}/>

          <FormLabel>Course Number</FormLabel>
          <Input onChange={(e) => setCurrentCourse(prevState => ({...prevState, courseNumber: (e.target.value)}))}/>
          <FormLabel>Title</FormLabel>
          <Input onChange={(e) => setCurrentCourse(prevState => ({...prevState, title: (e.target.value)}))}/>
          <FormLabel>Credits</FormLabel>
          <Input onChange={(e) => setCurrentCourse(prevState => ({...prevState, credits: (e.target.value)}))}/>
        </div>

        <div>
          <Button sx={{marginTop: "30px"}} onClick={() => {
            (createCourse as (courseToCreate: ICourse) => Promise<void>)(currentCourse);
            navigate("/courses")}}>Save</Button>
          <span style={{marginLeft: "30px"}}><Link to={"/courses"}>Back to List</Link></span>
        </div>
      </div>
      <Footer/>
    </>
  )
}