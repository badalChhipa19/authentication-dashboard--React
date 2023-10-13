// import { useSession, signIn, signOut } from "next-auth/react";
import Side from "../../components/auth-left/side.component";
import Form from "../../components/auth-right/form.component";

import "./authentication.style.scss";

function Authentication() {
  // const { data: session } = useSession();
  return (
    <section className="authentication">
      <Side className="side" />
      <Form className="form__side" />
    </section>
  );
}

export default Authentication;
