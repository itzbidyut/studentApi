const pool = require("../../db");
const queries = require("./queries");


const getStudents = (req, res) => {
  let resultStatus = "";
  let query;
  function queryRun() {
    pool.query(query, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
  if (Object.keys(req.query).length == 0) {
    query = queries.getStudents;
    queryRun();
  } else {
    resultStatus = req.query.resultStatus;
    if (resultStatus === "passed") {
      query = queries.getStudentPassed;
      queryRun();
    } else if (resultStatus === "failed") {
      query = queries.getStudentFailed;
      queryRun();
    }
  }
};
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const postStudent = (req, res) => {
  const { name, age, mark1, mark2, mark3 } = req.body;
  //check name is exists
  pool.query(queries.checkNameExists, [name], (error, results) => {
    if (results.rows.length) {
      res.send("name already exists");
    }
    // add student
    pool.query(
      queries.addstudent,
      [name, age, mark1, mark2, mark3],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("created");
      }
    );
  });
};

module.exports = {
  getStudents,
  getStudentById,
  postStudent,
};

//  pool.query(queries.getStudents, (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
