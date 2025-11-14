'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("Subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?: string;
}

export default function ContactForm({ btnCls = '' }: IProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data: FormData) => {
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2dae9214-1666-491e-bca6-40687d54c111", // Your access key
          to: "netpulsedigitals@gmail.com", // Updated email address
          subject: data.subject,
          name: data.name,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess("Message sent successfully!");
        reset();
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Name</label>
        <input id='name' {...register("name")} type="text" placeholder="Netpulse Digitals" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Subject</label>
        <input id='subject' {...register("subject")} type="text" placeholder="Your@netpulsedigitals.com" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {success && <p className="mt-4 text-center text-green-600">{success}</p>}
    </form>
  );
}
