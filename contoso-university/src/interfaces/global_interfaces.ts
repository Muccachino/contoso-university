export interface IStudent {
  id?: string;
  firstName: string;
  lastName: string;
  enrollmentDate: string;
}

export interface ICourse {
  id?: string;
  courseNumber: string;
  title: string;
  credits: string;
}

export interface IEnrollments {
  studentID: string;
  courseID: string;
  grade: string;
}