import classes from "@/components/ContactForm.module.css";
import Image from "next/image";
import robotImage from "@/assests/wall-e.jpg";
import { shareMessage } from "@/lib/actions";

export default function ContactForm() {
  return (
    <section className={`container ${classes.contact}`}>
      <header className={classes.contact__header}>
        <h3>
          Feel free to contact me about projects ideas or any feedback you may
          have about my job.
        </h3>
        <Image src={robotImage} alt="robot image" />
      </header>
      <main className={classes.contact__body}>
        <form className={classes.contact__form} action={shareMessage}>
          <div className={classes.row}>
            <div className={classes.contact__form__data}>
              <label htmlFor="name"> Your name </label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={classes.contact__form__data}>
              <label htmlFor="email"> Your email </label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className={classes.contact__form__data}>
            <label htmlFor="message"> Message </label>
            <textarea id="email" name="message" rows={10} required />
          </div>
          <button
            type="submit"
            className={classes["contact__form__submit-btn"]}
          >
            Share Message
          </button>
        </form>
      </main>
    </section>
  );
}
