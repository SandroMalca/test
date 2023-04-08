import { useState, ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { createEmployee } from "../../services/employee.service";
import { EmployeesContext } from "../../context/EmployeeContext";
import styles from "../form/Form.module.css";

function Form() {
  const formInitialState = { id: 0, name: "", salary: "", age: ""};
  const [formData, setFormData] = useState(formInitialState);
  const { actions, employee } = useContext(EmployeesContext);

  useEffect(() => {
    setFormData(employee);
  }, [employee]);
  

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id !== 0) {
      actions.updateEmployee(formData);
    } else {
      createEmployee(formData)
        .then((res) => {
          alert(res.message);
          actions.addEmployee(res.data);
        })
        .catch((err) => alert(err));
      console.log(formData);
    }
  };

  const handleReset = () => {
    setFormData(formInitialState);
    actions.setEmployeeForm(formInitialState);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {formData.id !== 0 && formData.id ? <div>
        <label htmlFor="ID">ID</label><br/>
        <input type="text" readOnly  placeholder={formData.id !== 0 ? formData.id : ""}  />
      </div> : ""} 
      
      <div>
        <label htmlFor="name">Name</label><br/>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          autoComplete="off"
          value={formData.name}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary</label><br/>
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          required
          autoComplete="off"
          min="0"
          value={formData.salary}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label><br/>
        <input
          type="number"
          name="age"
          onChange={handleChange}
          required
          autoComplete="off"
          value={formData.age}
          min="18"
          max="90"
        />
      </div><br/>
      <div className={styles.btn}>
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default Form;
