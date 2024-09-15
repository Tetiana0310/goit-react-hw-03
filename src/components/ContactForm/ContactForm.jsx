
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid"; 
import css from "../ContactForm/ContactForm.module.css";
import clsx from "clsx";


export default function ContactForm({ onAddBtn }) {
  const textId = useId();
  const telId = useId();
  const userId = nanoid(5);

  const initialValues = { id: "", name: "", number: "" };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
      message: "Invalid phone number",
      excludeEmptyString: false,
    }),
  });

  const handleSubmite = (values, actions) => {
    onAddBtn({ ...values, id: userId });
    actions.resetForm();
  };

  return (
    
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmite}
      >
        <Form className={css.container}>
          <label className={css.label} htmlFor={textId}>
            Name
          </label>
          <Field className={css.input} name="name" type="text" id={textId} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label className={clsx(css.label, css.margin)} htmlFor={telId}>
            Number
          </label>
          <Field className={css.input} name="number" type="tel" id={telId} />
          <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
   
  );
}
