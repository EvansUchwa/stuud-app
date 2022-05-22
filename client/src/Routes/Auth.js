import "../Assets/styles/auth.css";
import { useParams } from "react-router";
import { AuthForm } from "../RoutesComponents/auth/index.js";
import { AuthHeader, AuthSignOrLogMsg } from "../RoutesComponents/auth/authUI";

const Authentification = () => {
  const { authType } = useParams();

  return (
    <div className="auth">
      <div className="auth-body">
        <AuthHeader />
        <section className="ab-form">
          <h2>{authType == "connexion" ? "Connexion" : "Inscription"}</h2>
          <AuthForm props={{ authType }} />
          <AuthSignOrLogMsg props={{ authType }} />
        </section>
      </div>
    </div>
  );
};

export default Authentification;
