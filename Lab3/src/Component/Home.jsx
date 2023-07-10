import { useState } from "react";


export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleHome = (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleHome}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
