import './App.css';
import UserCard from './components/UserCard';
import { useSelector } from "react-redux"

function App() {

  const user = useSelector(state => state.user)

  return (
    <div className="App">
      <h2>User name: {user.name}</h2>
      <UserCard />
    </div>
  );
}

export default App;
