import React, { useEffect, useState } from "react";
import axios from "axios";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/customers");
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCustomer = async () => {
    if (!name || !email || !company) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/customers", {
        name,
        email,
        company,
      });

      setName("");
      setEmail("");
      setCompany("");

      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/customers/${id}`
      );

      fetchCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Customer Management</h2>

        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button className="add-btn" onClick={addCustomer}>
          Add Customer
        </button>
      </div>

      <div className="card">
        <h2>Customer Records</h2>

        {customers.length === 0 ? (
          <p>No Customers Found</p>
        ) : (
          customers.map((customer) => (
            <div className="lead-card" key={customer._id}>
              <h3>{customer.name}</h3>
              <p>{customer.email}</p>
              <p>{customer.company}</p>

              <button
                className="delete-btn"
                onClick={() => deleteCustomer(customer._id)}
              >
                Delete Customer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Customers;