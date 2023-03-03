import styles from "@/styles/form.module.css";
import { useState } from "react";
export default function Form() {
  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    message: "",
  });

  const { name, email, company, title, message } = formData;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  //   validate form data

  const [isError, setIsError] = useState({
    nameError: "",
    emailError: "",
    companyError: "",
    titleError: "",
    messageError: "",
  });
  
  const { nameError, emailError, companyError, titleError, messageError } =
    isError;
  const validate = () => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    for (let key in formData) {
      if (!formData[key]) {
        errors[key + "Error"] = `The ${key} field is required`;
      }
    }

    if (!emailRegex.test(email)) {
        errors.emailError = 'Please enter a valid email'
    }
    setIsError(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col px-[7%] gap-6 pb-[88px] ${styles.form}`}
    >
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
      {nameError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{nameError}</p>
        </div>
      ) : (
        ""
      )}
      <label htmlFor="email" className={`${styles.labelVisuallyHidden}`}>
        Email
      </label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={handleInput}
        className={`${styles.input}`}
      />
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
{messageError ? (
        <div role="error" className={styles.error}>
          <p className={styles.errorText}>{messageError}</p>
        </div>
      ) : (
        ""
      )}
      <button className={`button ${styles.button}`}>submit</button>
    </form>
  );
}
