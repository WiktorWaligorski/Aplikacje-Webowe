import { useState } from "react";

function AddStudentForm({ onAdd }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || String(grade).trim() === "") {
            alert("Pola muszą być wypełnione!");
            return;
        }

        const g = Number(grade);
        if (!Number.isInteger(g) || g < 1 || g > 6) {
            alert("Ocena musi być z zakresu <1;6>");
            return;
        }

        onAdd(name.trim(), g);
        setName("");
        setGrade("");
    };

    return (
        <form onSubmit={handleSubmit} className="m-2 p-2">
            <label className="form-label">Imię i nazwisko:</label>
            <input
                type="text"
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label className="form-label">Ocena:</label>
            <select
                className="form-select mb-2"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            >
                <option value=""></option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                ))}
            </select>

            <button type="submit" className="btn btn-primary">Dodaj ucznia</button>
        </form>
    );
}

export default AddStudentForm;