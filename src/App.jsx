import "./App.css";
import Tabla from "./components/tabla/Tabla";
import Form from "./components/form/Form";
import {EmployeesProvider} from "./context/EmployeeContext";

function App() {
  return (
    <div className="app">
      <h1>ACTIVE EMPLOYEES</h1>
      <EmployeesProvider>
        <div>
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Tabla />
            <Form />
          </div>
        </div>
      </EmployeesProvider>
    </div>
  );
}

export default App;
