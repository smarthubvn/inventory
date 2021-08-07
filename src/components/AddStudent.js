import { useState } from "react";

function AddStudent(props) {
  const [student, setStudent] = useState("");
  const addStudentButtonPressed = () => {
    console.log("addStudentButtonPressed");
    props.addStudent(student);
    setStudent("");
  };
  return (
    <div>
      <h2>Students List</h2>
      <form action="">
        <input
          type="text"
          id="add-student"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
        />
        <button type="button" onClick={addStudentButtonPressed}>
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
