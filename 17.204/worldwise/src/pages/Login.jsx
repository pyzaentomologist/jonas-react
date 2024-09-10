import { useEffect, useState } from "react"; 
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import {Button} from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { PageNav } from "../components/PageNav";

export function Login() {
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", {replace: true});
  },[isAuthenticated, navigate])

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        { error && <p>{error}</p>}
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
