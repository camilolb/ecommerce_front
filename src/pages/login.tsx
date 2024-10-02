import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../layouts/Main";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import api from "../services/api";
import { useRouter } from "next/router";

type LoginMail = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (data: LoginMail) => api.post("/auth/login", data),
    onSuccess: () => {
      alert("success");
      router.push("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const initialValues: LoginMail = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please write a valid email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a>
                <i className="icon-left"></i> Back to store
              </a>
            </Link>
          </div>
          <div className="form-block">
            <h2 className="form-block__title">Log in</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                loginMutation.mutate(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  <div className="form__input-row">
                    <Field
                      className="form__input"
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="message message--error"
                    />
                  </div>

                  <div className="form__input-row">
                    <Field
                      className="form__input"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="message message--error"
                    />
                  </div>

                  <div className="form__info">
                    <div className="checkbox-wrapper">
                      <label
                        htmlFor="check-signed-in"
                        className={`checkbox checkbox--sm`}
                      >
                        <Field
                          type="checkbox"
                          name="keepSigned"
                          id="check-signed-in"
                        />
                        <span className="checkbox__check"></span>
                        <p>Keep me signed in</p>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--rounded btn--yellow btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
