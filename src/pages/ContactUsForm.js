import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
    });
  };

  return (
    <div className='bg-richblack-900 min-h-screen py-10 px-4 md:bg-richblack-900 md:min-h-screen md:py-10 md:px-20'>
      <div className='flex flex-col md:flex-row justify-around items-center md:items-start space-y-10 md:space-y-0 md:space-x-10'>
        {/* Contact Info Section */}
        <div className='w-full max-w-md md:max-w-3xl'>
          <div className='bg-richblack-900 text-white p-6 rounded-md mb-8'>
            <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>GET IN TOUCH WITH US</h1>
            <p>
              We are always ready to solve your queries. We are a 100% transparent charity NGO. Feel free to ask any
              questions regarding how we collect and distribute, and how to ensure that our words are really true.
            </p>
            <br></br>
            <p>
              <strong>Our Location:</strong>
              <br />
              We are currently operating from Kamla Nehru institute of technology Sultanpur, UP-228118
            </p>
            <br></br>
            <p>
              <strong>Phone Number:</strong>
              <br />
              (+91) 8542869570
            </p>
            <br></br>
            <p>
              <strong>Email Address:</strong>
              <br />
              sonisaksham931@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='w-full max-w-md md:max-w-4xl'>
          <div className='bg-richblack-800 text-white p-6 rounded-md mb-8'>
            <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>CONTACT US</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6'>
              <label className='text-white'>
                Topic:
                <input
                  type='text'
                  name='topic'
                  value={formData.topic}
                  onChange={handleChange}
                  className='bg-richblack-800 text-white border border-richblack-700 p-2 rounded w-full'
                  required
                />
              </label>
              <label className='text-white'>
                Email:
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='bg-richblack-800 text-white border border-richblack-700 p-2 rounded w-full'
                  required
                />
              </label>
              <label className='text-white'>
                Phone:
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='bg-richblack-800 text-white border border-richblack-700 p-2 rounded w-full'
                  required
                />
              </label>
              <label className='text-white'>
                Message:
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='bg-richblack-800 text-white border border-richblack-700 p-2 rounded w-full'
                  rows='4'
                  required
                ></textarea>
              </label>
              <button
                type='submit'
                className='bg-richblack-800 text-white py-2 px-4 rounded hover:bg-richblack-700 w-full'
              >
                Send Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
