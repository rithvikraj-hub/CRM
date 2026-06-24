import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:5000/api/leads");
    setLeads(res.data);
  };

  const addLead = async () => {
    await axios.post("http://localhost:5000/api/leads", {
      name,
      email
    });

    setName("");
    setEmail("");
    fetchLeads();
  };

  const deleteLead = async (id) => {
    await axios.delete(`http://localhost:5000/api/leads/${id}`);
    fetchLeads();
  };

  return (
    <div className="container">

      <div className="header">
        <h1>Enterprise CRM Dashboard</h1>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h2>{leads.length}</h2>
          <p>Total Leads</p>
        </div>
      </div>

      <div className="card">
        <h2>Add New Lead</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button className="add-btn" onClick={addLead}>
          Add Lead
        </button>
      </div>

      <div className="card">
        <h2>Lead Records</h2>

        {leads.map((lead)=>(
          <div className="lead-card" key={lead._id}>
            <h3>{lead.name}</h3>
            <p>{lead.email}</p>

            <button
              className="delete-btn"
              onClick={() => deleteLead(lead._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Leads;