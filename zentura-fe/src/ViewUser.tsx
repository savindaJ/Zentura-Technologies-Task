import React, { useState } from "react";

export default function viewUser(users: any) {
  // const [user, setUser] = React.useState({});

  return (
    <div className="p-5">
      <h1 className="text-center">View User</h1>
      <a href="/save" className="btn btn-primary">
        <button className="btn btn-primary">Add User</button>
      </a>

      <table className="table w-100 p-4">
        <thead>
          <tr>
            <th scope="col">Given Name</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.ussers.map((user: any) => {
            return (
              <tr>
                {/* <th scope="row">{user.id}</th> */}
                <td>{user.given_name}</td>
                <td>{user.middle_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>
                  <a href={`/edit/${user.id}`} className="btn btn-primary me-4">
                    Edit
                  </a>
                  <a href={`/delete/${user.id}`} className="btn btn-danger">
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
