const ContactUs = () => {
  return (
    <div className="text-white flex justify-center items-center gap-90 p-10">
      <div>
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-sm max-w-sm">
          We would love to hear from you! Please use the form below to get in
          touch with us.
        </p>
      </div>
      <div className="bg-black/50 p-4 rounded-md">
        <form className="flex flex-col gap-2 w-100">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="bg-white text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-white text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Message"
            className="bg-white text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-[#3E43B6] hover:bg-[#7450C2] text-white p-2 rounded-md mt-5 cursor-pointer"
            onClick={() => {
              alert("Message sent successfully");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
