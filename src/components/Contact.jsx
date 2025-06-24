import React from "react";

const Contact = () => {
  return (
    <div className="">
      <section className="rounded-3xl py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let’s <span className="text-indigo-600">Connect!</span>
          </h1>
          <p className="text-lg text-gray-600">
            We build beautifully curated subscription boxes — and we’d love to
            hear from you. Whether you’ve got a question or just want to say hi,
            our team is here to help!
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-indigo-500">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div>
              <h4 className="text-indigo-600 font-semibold uppercase mb-2 tracking-wider">
                Get In Touch
              </h4>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Have questions about your subscription?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Drop us a message and we’ll get back to you with the info you
                need. From customizing your box to managing your deliveries —
                we’ve got you covered.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 h-32 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
