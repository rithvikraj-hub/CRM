import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Enterprise CRM System</h1>
        <p>Lead & Customer Management Dashboard</p>
      </div>

      <Leads />

      <hr
        style={{
          margin: "40px 0"
        }}
      />

      <Customers />
    </div>
  );
}

export default App;