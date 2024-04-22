import {useEffect, useState} from "react";
import {ICourse} from "../interfaces/global_interfaces.ts";


export async function getSingleCourse(id: string) {
  const course: ICourse = await fetch(`http://localhost:5000/courses/${id}`)
    .then((res) => res.json())
  return course;
}


export default function useCourses(){
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(()=> {
    const connectCourses = async () => {
      try{
        const data = await fetch("http://localhost:5000/courses");
        if(!data.ok){
          throw new Error("Failed to connect to server");
        }
        setCourses((await data.json()) as ICourse[]);
      } catch (error) {
        console.error(error);
      }
    }
    connectCourses();
  }, [])


  const editCourses = async (courseToEdit: ICourse) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(courseToEdit),
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch(`http://localhost:5000/courses/${courseToEdit.id}`, options);
    const data = await res.json();
    setCourses((prevCourses) =>
      prevCourses.map((prevCourse) => {
        if (prevCourse.id === courseToEdit.id) {
          return data;
        }
        return prevCourse
      })
    )
  }

  const createCourse = async (courseToAdd: ICourse) => {
    const options = {
      method: "POST",
      body: JSON.stringify(courseToAdd),
      headers: { "Content-Type": "application/json" },
    }
    const res = await fetch(`http://localhost:5000/courses`, options);
    const data = await res.json();
    setCourses((prevCourses) => [...prevCourses, data]);
  }

  const deleteCourse = async (courseToDelete: ICourse) => {
    const options = {
      method: "DELETE",
    }
    const res = await fetch(`http://localhost:5000/courses/${courseToDelete.id}`, options);
    if(res.ok){
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== courseToDelete.id))
    }
  }

  return [courses, editCourses, createCourse, deleteCourse];
}