"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "../../lib/schema";
import { sendEmail } from "../../_actions";
import { toast } from "sonner";
import "./ContactForm.scss";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="form">
      <div>
        <input placeholder="name" className="nameInput" {...register("name")} />
        {errors.name?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="email"
          className="emailInput"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="errorMessage">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          rows={2}
          cols={5}
          placeholder="project description"
          className="messageInput"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="errorMessage">{errors.message.message}</p>
        )}
      </div>

      <button disabled={isSubmitting} className="submitButton">
        {isSubmitting ? "Submitting..." : "Send message"}
      </button>
    </form>
  );
}
