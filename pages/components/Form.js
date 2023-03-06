import styles from "@/styles/form.module.css";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function Form() {
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [state, handleSubmit] = useForm("mqkobgzb");

  //   form data

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const { name, email, company, title, message } = formData;

  const [isError, setIsError] = useState({
    nameError: "",
    emailError: "",
    companyError: "",
    titleError: "",
    messageError: "",
  });

  const { nameError, emailError, companyError, titleError, messageError } =
    isError;
  const validate = (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    for (let key in formData) {
      if (!formData[key]) {
        errors[key + "Error"] = `The ${key} field is required`;
      }
    }

    if (!emailRegex.test(email)) {
      errors.emailError = "Please enter a valid email";
    }
    setIsError(errors);
    if (!errors.keys) {
      handleSubmit(e);
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
        message: "",
      });
      setIsPopupShown(true);
    } else if (errors) {
      return;
    }
  };

  return (
    <form
      onSubmit={validate}
      className={`flex flex-col px-[7%] gap-6 pb-[88px] ${styles.form}`}
    >
      {state.succeeded && (
          <p className={`${styles.success} `}>
            Thanks for sending us a message, we'll get back to you as soon as possible!
          </p>
      )}
      <label htmlFor="name" className={`${styles.labelVisuallyHidden}`}>
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleInput}
        className={`${styles.input}`}
      />

      <ValidationError prefix="Name" field="name" errors={state.errors} />
      {nameError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{emailError}</p>
        </div>
      ) : (
        ""
      )}
      <label htmlFor="email" className={`${styles.labelVisuallyHidden}`}>
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={handleInput}
        className={`${styles.input}`}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {emailError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{emailError}</p>
        </div>
      ) : (
        ""
      )}
      <label htmlFor="company" className={`${styles.labelVisuallyHidden}`}>
        company
      </label>
      <input
        id="company"
        type="text"
        name="company"
        placeholder="Company Name"
        value={company}
        onChange={handleInput}
        className={`${styles.input}`}
      />
      <ValidationError prefix="Company" field="company" errors={state.errors} />
      {companyError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{companyError}</p>
        </div>
      ) : (
        ""
      )}
      <label htmlFor="title" className={`${styles.labelVisuallyHidden}`}>
        Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleInput}
        className={`${styles.input}`}
      />
      <ValidationError prefix="Title" field="title" errors={state.errors} />
      {titleError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{titleError}</p>
        </div>
      ) : (
        ""
      )}
      <label htmlFor="message" className={`${styles.labelVisuallyHidden}`}>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        value={message}
        onChange={handleInput}
        className={` ${styles.input} ${styles.textarea}`}
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {messageError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{messageError}</p>
        </div>
      ) : (
        ""
      )}
      <button
        className={`button ${styles.button}`}
        type="submit"
        disabled={state.submitting}
      >
        submit
      </button>
    </form>
  );
}
