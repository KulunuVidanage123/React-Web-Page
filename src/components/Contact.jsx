import React from 'react';

function Contact() {
  return (
    <section className="min-h-[400px] bg-blue-50 relative flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center w-full">
        <h3 className="text-xl font-bold mb-4">
          Lorem Ipsum is simply dummy <br />
          text of the printing.
        </h3><br></br>
        <form className="flex gap-3 mt-8 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
