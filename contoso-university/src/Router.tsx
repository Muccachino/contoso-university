import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./components/RootElement.tsx";
import StudentIndex from "./components/Students/StudentIndex.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import StudentEdit, {loader as studentEditLoader} from "./components/Students/StudentEdit.tsx";
import StudentCreate from "./components/Students/StudentCreate.tsx";
import StudentDetails, {loader as studentDetailsLoader} from "./components/Students/StudentDetails.tsx";
import StudentDelete, {loader as studentDeleteLoader} from "./components/Students/StudentDelete.tsx";
import CourseIndex from "./components/Courses/CourseIndex.tsx";
import CourseEdit, {loader as courseEditLoader} from "./components/Courses/CourseEdit.tsx";
import CourseCreate from "./components/Courses/CourseCreate.tsx";
import CourseDelete, {loader as courseDeleteLoader} from "./components/Courses/CourseDelete.tsx";
import AboutPage from "./components/AboutPage.tsx";


export default function Router() {


  const router = createBrowserRouter([
    {
      path: "/app",
      element: <RootElement />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutPage/>
    },
    {
      path: "/students",
      element: <StudentIndex />,
    },
    {
      path: "/studentEdit/:id",
      element: <StudentEdit />,
      loader: studentEditLoader as any
    },
    {
      path: "/studentCreate",
      element: <StudentCreate/>
    },
    {
      path: "/studentDetails/:id",
      element: <StudentDetails/>,
      loader: studentDetailsLoader as any
    },
    {
      path: "/studentDelete/:id",
      element: <StudentDelete/>,
      loader: studentDeleteLoader as any
    },
    {
      path: "/courses",
      element: <CourseIndex/>
    },
    {
      path: "/courseEdit/:id",
      element: <CourseEdit/>,
      loader: courseEditLoader as any
    },
    {
      path: "/courseCreate",
      element: <CourseCreate/>
    },
    {
      path: "/courseDelete/:id",
      element: <CourseDelete/>,
      loader: courseDeleteLoader as any
    }
  ]);
  return <RouterProvider router={router} />;
}
