const { Router } = require("express");
const { getStudents, getStudentById, postStudent } = require("./controller");

const router = Router();

router.get("/", getStudents);
router.post("/", postStudent);
router.get("/:id/result", getStudentById);
module.exports = router;
