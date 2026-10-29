import 'bootstrap/dist/css/bootstrap.css'

function Table({students, onlyAbove3}) {
    const visible = onlyAbove3 ? students.filter((s) => s.grade > 3) : students;

    return (
        <>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Imie i nazwisko</th>
                        <th>ocena</th>
                    </tr>
                </thead>
                <tbody>
                {visible.map((s) => (
                    <tr key={s.id}>
                        <td>{s.name}</td>
                        <td>{s.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Table
