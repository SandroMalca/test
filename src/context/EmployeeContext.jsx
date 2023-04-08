
import { useState, useEffect, createContext } from "react";
import { getEmployees } from "../services/employee.service";
import { EmployeesAdapter } from "../utils/EmployeesAdapter";

const employeesInitialState = {
  data: [],
  employee: {
    id:0,
    name: "",
    salary: 0,
    age: 18,
  },
  actions: {
    addEmployee: (params ) => {},
    removeEmployee: (id ) => {},
    updateEmployee: (params) => {},
    setEmployeeForm: (params) => {},
  },
};

export const EmployeesContext = createContext(
  employeesInitialState
);


export function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState({
    data: [],
    employee: {
      id: 0,
      name: "",
      salary: "",
      age: "",
    },
    actions: {
      addEmployee: (params) => {
        setEmployees((prevState) => ({
          ...prevState,
          data: [...prevState.data, { ...params }],
        }));
      },
      removeEmployee: (id) => {
        setEmployees((prevState) => ({
          ...prevState,
          data: prevState.data.filter((employee) => employee.id !== id),
        }));
      },
      updateEmployee: (params) => {
        setEmployees((prevState) => ({
          ...prevState,
          data: prevState.data.map((employee) =>
            employee.id === params.id ? params : employee
          ),
        }));
      },
      setEmployeeForm: (params) => {
        setEmployees((prevState) => ({
          ...prevState,
          employee: params
        }));
      },
    },
  });

  useEffect(() => {
    getEmployees().then((res) => {
      console.log(EmployeesAdapter(res.data));
      setEmployees({ ...employees, data: EmployeesAdapter(res.data) });
    });
  }, []);

  return (
    <EmployeesContext.Provider value={employees}>
      {children}
    </EmployeesContext.Provider>
  );
}