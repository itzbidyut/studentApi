const getStudents = "SELECT * FROM student";
const getStudentById = "SELECT * FROM student WHERE id = $1";
const addstudent =
  "INSERT INTO student (name, age, mark1, mark2, mark3) VALUES ($1,$2,$3,$4,$5)";
const checkNameExists = "SELECT s FROM student s WHERE s.name=$1";
const getStudentPassed = "SELECT * FROM student WHERE (mark1+mark2+mark3) >90";
const getStudentFailed = "SELECT * FROM student WHERE (mark1+mark2+mark3) <90;";
module.exports = {
  getStudents,
  getStudentById,
  getStudentPassed,
  checkNameExists,
  getStudentFailed,
  addstudent,
};
