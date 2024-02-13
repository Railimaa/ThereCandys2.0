import { routes } from "@app/Router/routes";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to={routes.signin} >Signin</Link>
      <Link to={routes.signup}>Signup</Link>
    </div>
  )
}