import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/restStyles/BookingForm.css";

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`Bookin' is cookin'! Data: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
      <label>
        Name:
        <input type="text" {...register("name", { required: "Enter your name" })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>
      <label>
        Trip Date:
        <input type="date" {...register("date", { required: "Choose a date" })} />
        {errors.date && <p className="error">{errors.date.message}</p>}
      </label>
      <label>
        Trip Type:
        <select {...register("tour", { required: "Choose a tour" })}>
          <option value="">--Choose--</option>
          <option value="kyoto">Kyoto</option>
          <option value="mountains">Mntns</option>
          <option value="food">Food tour</option>
        </select>
        {errors.tour && <p className="error">{errors.tour.message}</p>}
      </label>
      <button type="submit">Get that bitch</button>
    </form>
  );
};

export default BookingForm;
