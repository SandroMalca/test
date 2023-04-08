import { useContext, useState } from "react";
import { EmployeesContext } from "../../context/EmployeeContext";
import Row from "../row/Row";
import styles from"../tabla/Tabla.module.css"

function Tabla() {
  const { employee, data, actions } = useContext(EmployeesContext);
  const [editing, setEditing]=useState(null)

  return (
    <div className={styles.cont}>
      <table>
        {/* table titles */}
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
          <th></th>
        </tr>
        {/* table content */}
        {data &&
          data.map((item) => (
            <Row props={item} key={`${item.id}-employee`} />
          ))}
      </table>
    </div>
  );
}

export default Tabla;
