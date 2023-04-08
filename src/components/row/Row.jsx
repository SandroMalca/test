import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeeContext";

function Row({ props }) {
  const { actions } = useContext(EmployeesContext);


  const hanleDelete = (id) => {
    if (id) {
      actions.removeEmployee(id);
    }
  };

  const hanldeEdit = (props) => {
    actions.setEmployeeForm(props);    
  };

  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.salary}</td>
        <td>{props.age}</td>
        <td>
          <button type="button" onClick={() => hanldeEdit(props)}>
            Edit
          </button>
          <button type="button" onClick={() => hanleDelete(props.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Row;
