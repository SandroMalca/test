
const API_URL = {
  GET: "https://dummy.restapiexample.com/api/v1/employees",
  POST: "https://dummy.restapiexample.com/api/v1/create",
  PUT: "https://dummy.restapiexample.com/api/v1/update/`21`/", //{id}
  DELETE: "https://dummy.restapiexample.com/api/v1/delete/2/", //{id}
};

const getEmployees = async () => {
  try {
    const res = await fetch(API_URL.GET);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


const createEmployee = async (params) => {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(API_URL.POST, options);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateEmployee = async (params) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(`${API_URL.PUT}${(params.id)}`, options);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployee = async (id) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(`${API_URL.PUT}${(id)}`, options);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getEmployees, createEmployee, updateEmployee, deleteEmployee };