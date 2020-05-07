import React from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users.json";
import imag from "./linkedin.png";

function App() {
  let state = {
    users: [...users],
  };

  // let userRow = (users) => {
  //   users.map((user) => {
  //     <tr key={user.id}>
  //       <td>{user.firstName}</td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //       <td></td>
  //     </tr>;
  //   });
  // };

  return (
    <div className="App">
      <h1>Ironbook</h1>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td>
                  {user.linkedin ? (
                    <a href={user.linkedin}>
                      <img src={imag} alt="" />
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
