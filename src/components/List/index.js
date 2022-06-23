import "./style.css";
import axios from 'axios';
import { useState, useEffect } from "react";


export function EmployeeList(props) {
  const [items,setItems] = useState([])
  useEffect(() => {
    const promise = axios.get("https://jsonplaceholder.typicode.com/users");
  promise
  .then((response) => {
    setItems(response.data);
  }).catch((error) => {
    console.log(error)
  });
    return () => {};
  }, [])


  
  return (
    <>
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <input
            className="dataTable-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>City</th>
              <th>Street</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>City</th>
              <th>Street</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </tfoot>
          <tbody>
            {(items || []).map((item) => (
              <tr key={item.name}>
                <td className="item" onClick={() => {}}>{item.name}</td>
                <td className="item" onClick={() => {}}>{item.username}</td>
                <td className="item" onClick={() => {}}>{item.email}</td>
                <td className="item" onClick={() => {}}>{item.address.city}</td>
                <td className="item" onClick={() => {}}> {item.address.street}</td>
                <td className="item" onClick={() => {}}>{item.phone}</td>
                <td className="item" onClick={() => {}}>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
}
