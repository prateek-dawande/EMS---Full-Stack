/* eslint-disable no-unused-vars */
// import React from 'react'
import axios from "axios";
import { useState, useEffect ,} from "react";
import { Link, useParams } from "react-router-dom";
function Home() {
  const [emps, setEmps] = useState([]);
const { id } = useParams();
  useEffect(() => {
    getEmps();
  }, []);

  const getEmps = async () => {
    const result = await axios.get("http://localhost:8080/api/employees");
    setEmps(result.data);
    console.log(result.data);
  };

  const deleteEmp = async(id)=>{
    await axios.delete(`http://localhost:8080/api/employee/${id}`);
    getEmps();
  }

  return (
    <div>
      <table className="table border table-hover shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Email</th>
            <th scope="col">Employee Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((emp, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>Rs. {emp.salary}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`viewemp/${emp.id}`}>View</Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`editemp/${emp.id}`}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2"
                    onClick={()=>{deleteEmp(emp.id)}}
                  >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
