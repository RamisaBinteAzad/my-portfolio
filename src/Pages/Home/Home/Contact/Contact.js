import React, { useRef } from "react";
import {
  FaCommentAlt,
  FaEnvelope,
  FaGithub,
  FaLock,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import contact from "../../../../assets/images/contact2.png";
import gmail from "../../../../assets/images/gmail.png";
import linkedIn from "../../../../assets/images/linkedin.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
       const form = useRef();

       const sendEmail = (e) => {
         e.preventDefault();

         emailjs
           .sendForm(
             "service_2g0ktqd",
             "template_l9oh0uu",
             form.current,
             "Wca-C24y4JuLJWFrL"
           )
           .then(
             (result) => {
                   console.log(result.text);
                   form.reset();
                   toast.success("Message Sent Successfully");
                   
             },
             (error) => {
               console.log(error.text);
             }
           );
       };
  return (
    <section id="contact  ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-column justify-center items-center">
          <p className="text-primary text-6xl mb-0 mt-14 font-semibold ">
            CONTACT <span className="text-gray-400 ml-3">ME</span>
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-center text-xl w-[420px]">
            Please feel free to contact me if you have any question! I'll try to
            get back to you.
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <a
            href="https://www.linkedin.com/in/ramisa-binte-azad/"
            target="blank"
          >
            <img src={linkedIn} alt="" className="w-10 h-10 mr-4" />
          </a>
          <a href="https://github.com/RamisaBinteAzad" target="blank">
            <FaGithub className=" w-10 h-9 mr-4"></FaGithub>
          </a>

          <a href="https://mail.google.com/mail/" target="blank">
            <label className="flex  items-center  text-white    text-sm ">
              <img src={gmail} alt="" />
              <span className="ml-2 font-light">tasnimlamia52@gmail.com</span>
            </label>
          </a>
        </div>

        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full h-full ">
            <img
              src={contact}
              className="w-full h-full rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-4xl px-6 text-primary">Write me a message</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="card   w-full   shadow-2xl ">
                <div className="card-body">
                  <div className="form-control text-black">
                    <label className="flex  mb-2 text-white text-xl font-normal">
                      <FaUser className=" mr-2 text-blue-300"></FaUser>
                      Your Name
                    </label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control text-black">
                    <label className="flex  mb-2 text-white text-xl font-normal">
                      <FaEnvelope className=" mr-2 text-blue-300"></FaEnvelope>
                      Email
                    </label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="@gmail.com"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control text-black">
                    <label className="flex  mb-2 text-white text-xl font-normal">
                      <FaCommentAlt className=" mr-2 text-blue-300"></FaCommentAlt>
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered  h-28 "
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-control mt-6 flex items-center justify-center">
                    <button
                      className="btn bg-blue-500 hover:bg-slate-600 w-32 font-light border-0 text-white btn-md  text-lg "
                      type="submit"
                      value="Send"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
