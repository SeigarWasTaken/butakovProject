import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/restStyles/ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Thanks for diddy, ${data.name}! We will message you ig.`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <label>
        Name:
        <input type="text" {...register("name", { required: "Enter your name" })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>
      <label>
        Email:
        <input type="email" {...register("email", { required: "Enter email" })} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </label>
      <label>
        Message:
        <textarea {...register("message", { required: "Enter your message" })}></textarea>
        {errors.message && <p className="error">{errors.message.message}</p>}
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
