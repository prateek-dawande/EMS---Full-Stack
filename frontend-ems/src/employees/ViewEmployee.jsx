import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [emps, setEmps] = useState({
     name: "",
     email: "",
     salary: "",
   });

  const { id } = useParams();

  useEffect(()=>{
      loadEmp();
    },[]);
  

  const loadEmp = async () => {
    const result = await axios.get(`http://localhost:8080/api/employees/${id}`); //get emp by id
    setEmps(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>

          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Details of Employee ID : {emps.id}</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Employee Name : </b>
                  {emps.name}
                </li>
                <li className="list-group-item">
                  <b>Employee Email : </b>
                  {emps.email}
                </li>
                <li className="list-group-item">
                  <b>Employee Salary : </b>
                  {emps.salary}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
