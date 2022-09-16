const { Router } = require("express");
const {
  getStudents,
  getStudentById,
  postStudent,
  deleteStudent,
  updateStudent,
} = require("./controller");

const router = Router();

router.get("/students/", getStudents);
router.post("/upload", postStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);
router.get("/students/:id/result", getStudentById);
module.exports = router;
