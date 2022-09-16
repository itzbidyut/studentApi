const { Router } = require("express");
const { getStudents, getStudentById, postStudent } = require("./controller");

const router = Router();

router.get("/students/", getStudents);
router.post("/students/", postStudent);
router.get("/students/:id/result", getStudentById);
module.exports = router;
