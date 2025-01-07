/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function EditEmployee() {
  let navigate = useNavigate();
  const {id} = useParams();
  const [emps, setEmps] = useState({
    name: "",
    email: "",
    salary: "",
  });
  const { name, email, salary } = emps;

  const onInputChange = (e) => {
    setEmps({ ...emps, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadEmp();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/employee/${id}`, emps); //update emp
    navigate("/");
  };

  const loadEmp=async(e)=>{
    const result=await axios.get(`http://localhost:8080/api/employees/${id}`);//get emp by id
    setEmps(result.data);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Employee</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type={"email"}
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Salary" className="form-label">
                  Salary
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter salary"
                  name="salary"
                  value={salary}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
