import Side from "../../components/auth-left/side.component";
import Form from "../../components/auth-right/form.component";

// import "./authentication.style.scss";

function Authentication() {
  return (
    <section className="authentication">
      <Side className="side" />
      <Form className="form__side" />
    </section>
  );
}

export default Authentication;
