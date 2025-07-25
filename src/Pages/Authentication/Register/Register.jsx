import { useValidation } from "../../../Hooks/useValidation.js";
import FormComponentBM from "../../Home/Form/FormComponentBM.jsx";
import { detailsInputs } from "../../Register/DetailsInputs.js";
import * as Yup from "yup";
import Style from "../Authentication.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const {name , email, password , rePassword , phone } = useValidation();

  const initialValues = {
    name: "" ,
    email: "",
    password: "",
    rePassword:"",
    phone:"" ,
  };
  const validationSchema = Yup.object({
    name: name,
    email: email,
    password: password,
    rePassword: rePassword,
    phone: phone
  });

  return (
    <>
      <div className={Style.coverLoginPage}>
        <Container>
          <Row className={`d-flex justify-content-center`}>
            <Col md={6}>
              <div className="bg-light p-2 m-5">
                <h4 className="text-center fw-bold">Register</h4>
                <FormComponentBM
                  detailsInputs={detailsInputs.filter(
                    (detailsInput) =>
                      (
                        detailsInput.name === "name" ||
                        detailsInput.name === "email" ||
                        detailsInput.name === "password" ||
                        detailsInput.name === "rePassword" ||
                        detailsInput.name === "phone") &&
                      detailsInput
                  )}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  url={"api/v1/auth/signup"}
                  method={"post"}
                  inputStyle={`${Style.formInputs} mb-3`}
                  success={"../login"}
                  btn={"register"}
                />
                  <Link className="link text-dark ms-3" to={"../login"}>Do you already have an account?</Link>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

 export default Register;
