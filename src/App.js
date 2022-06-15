import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  function HandleForm(e) {
    e.preventDefault();
    if (fname && email) {
      const person = { id: new Date().getTime().toString(), fname, email };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      alert("not empty please");
    }
  }
  function Remove() {
    setPeople([]);
  }
  return (
    <div className="App">
      <form onSubmit={HandleForm}>
        <div className="form-control">
          <label htmlFor="fname">Name :</label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Person
        </button>
      </form>
      <button type="submit" className="btn" onClick={Remove}>
        Remove Person
      </button>
      <table border="1px">
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
          {people.map((person) => {
            const { id, fname, email } = person;
            return (
              <tr key={id}>
                <td>{fname}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
