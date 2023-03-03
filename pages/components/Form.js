import styles from "@/styles/form.module.css";
export default function Form() {
  return (
    <form className={`flex flex-col px-[7%] gap-6 pb-[88px] ${styles.form}`}>
      <label htmlFor="name" className={`${styles.labelVisuallyHidden}`}>
        Name
      </label>
      <input id="name" type="text" name="name" placeholder="Name" required className={`${styles.input}`}/>
      <label htmlFor="email" className={`${styles.labelVisuallyHidden}`}>
        Email
      </label>
      <input id="email" type="email" name="email" placeholder="Email Address" required className={`${styles.input}`}/>

      <label htmlFor="company" className={`${styles.labelVisuallyHidden}`}>
        company
      </label>
      <input id="company" type="text" name="company" placeholder="Company Name" required className={`${styles.input}`}/>

      <label htmlFor="title" className={`${styles.labelVisuallyHidden}`}>
        Title
      </label>
      <input id="title" type="text" name="title" placeholder="Title" required className={`${styles.input}`}/>

      <label htmlFor="message" className={`${styles.labelVisuallyHidden}`}>
        Message
      </label>
      <textarea id="message" name="message" placeholder="Message" required className={` ${styles.input} ${styles.textarea}`}>
    </textarea>

      <button className={`button ${styles.button}`}>submit</button>
    </form>
  );
}
