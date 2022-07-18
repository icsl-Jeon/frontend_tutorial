import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useRef, useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, name: value });
  };

  const onCreate = () => {
    const { username, email } = inputs;
    console.log("onCreate");
    alert(" will be registered!");
  };

  return (
    <div>
      <CreateUser
        users={users}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
