import React, { useRef, useState } from "react";

const Contact = () => {
  const name = "marcel";
  const [popup, setPopup] = useState(false);
  let btnRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }

    setPopup(true);
  };

  return (
    <div className=" w-[85%] lg:w-[60%] mb-20 relative">
      <div className="my-8">
        <h1 className="text-3xl text-left mb-6 font-bold">Contact Me</h1>
        <p
          className="text-md font-normal
        text-gray-600"
        >
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="lg:flex md-block  items-center  mb-4  gap-7">
          <div className="flex lg:mb-0 mb-4  flex-col w-full">
            <label className="font-semibold" htmlFor="first_name">
              First Name
            </label>
            <input
              required
              className="border rounded-md
              p-3 mt-2 outline-none items-stretch
  
  
              focus:valid:border-green-400
              focus:invalid:border-red-600 
              valid:border-green-400
               border-[#D0D5DD]"
              placeholder="Enter your first name"
              type="text"
              pattern="^[A-Za-z][A-Za-z0-9_]{5,29}$"
              id="first_name"
              name="first_name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold" htmlFor="first_name">
              Last Name
            </label>
            <input
              required
              pattern="^[A-Za-z][A-Za-z0-9_]{3,29}$"
              className="border rounded-md
              focus:valid:border-green-400
              focus:invalid:border-red-600 
              valid:border-green-400
            
             p-3 mt-2 outline-none items-stretch
              border-[#D0D5DD]"
              placeholder="Enter your last name"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            required
            className="border rounded-md 
             focus:invalid:border-red-600 
             valid:border-green-400
             p-3 mt-2 outline-none items-stretch
              border-[#D0D5DD]"
            placeholder="Enter your email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          <label className="font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            required
            name="message"
            minLength="10"
            className="border h-[132px] rounded-md
             
             focus:invalid:border-red-600 
             valid:border-green-400
             focus:valid:border-green-400
            
                 p-2 mt-2 outline-none items-stretch
                  border-[#D0D5DD]"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="flex items-center space-x-4 w-full mt-6">
          <input
            required
            name="check"
            className="border  rounded-xl    
                 p-3 outline-none lg:w-6 lg:6 w-9 h-9
                  border-[#D0D5DD]"
            type="checkbox"
          />
          <label htmlFor="checkbox" className="font-md text-md text-[#475467]">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>
        <button
          ref={btnRef}
          className={`w-full text-white disabled:opacity-40 mt-4
           py-4 bg-[#1560EF] hover:bg-[#1520EF] rounded-md`}
          id="btn__submit"
          type="submit"
        >
          Send Message
        </button>
      </form>
      {popup && (
        <div className="text-green-400 font-semibold text-center mt-4">
          Message Delivered
        </div>
      )}
    </div>
  );
};

export default Contact;
