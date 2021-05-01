import './App.css';
import UserTable from "./applications/elexiant/UserTable.jsx";
import userData from "./mock/users";

function App() {
  return (
    <div className="App">
      <UserTable userData ={userData} />
    </div>
  );
}

export default App;
