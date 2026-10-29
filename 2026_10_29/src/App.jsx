import { useState } from "react";
import { students as initialStudents } from "./data/students";
import AddStudentForm from "./components/form";
import StudentList from "./components/students_table";

function App() {
    const [students, setStudents] = useState(initialStudents);
    const [onlyAbove3, setOnlyAbove3] = useState(false);

    const addStudent = (name, grade) => {
        const newStudent = { id: Date.now(), name, grade };
        setStudents([...students, newStudent]);
    };

    return (
        <div className="container m-2 p-2" style={{ maxWidth: "800px", margin: "10px auto", padding: "10px" }}>
            <h1 className="m-2 p-2">Lista uczniów:</h1>

            <AddStudentForm onAdd={addStudent} />

            <div className="form-check form-switch m-2 p-2 ps-5">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="filter"
                    checked={onlyAbove3}
                    onChange={(e) => setOnlyAbove3(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="filter">
                    Pokaż tylko uczniów z oceną powyżej 3
                </label>
            </div>

            <StudentList students={students} onlyAbove3={onlyAbove3} />
        </div>
    );
}

export default App;