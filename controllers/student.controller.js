const studentRepository = require("../repositories/student.repository");

// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = await studentRepository.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentRepository.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
exports.getStudentById = async (req, res) => {
  try {
    const student = await studentRepository.getStudentById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await studentRepository.updateStudent(
      req.params.id,
      req.body
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await studentRepository.deleteStudent(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
