// import dotenv from "dotenv";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

// import dotenv from "dotenv";
// dotenv.config();

function App() {
  // dotenv.config();
  const api_key = process.env.REACT_APP_API_KEY;
  const cookies = new Cookies();
  const token = cookies.get("token");

  const client = StreamChat.getInstance(api_key);

  if (token) {
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastName: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedPassword"),
    },
    token
    ).then((user) => {
      console.log(user);
    });
  }

  console.log(api_key);
  return (
    <div className="App">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
