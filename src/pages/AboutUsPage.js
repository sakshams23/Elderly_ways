import React from 'react';
import saksham from "../assets/saksham.jpg";
import anushka from "../assets/anushka.jpeg";
// Define team members with image URLs
const teamMembers = [
  {
    name: 'Saksham Soni',
    role: 'Elderly ways',
    image: saksham,
  },
  {
    name: 'Anushka Pal',
    role: 'Elderly ways',
    image: anushka,
  },
  
  
];

const AboutUsPage = () => {
  return (
    <div className='bg-richblack-900 min-h-screen'>
      <div className='container mx-auto px-8 py-16 max-w-5xl'>
        <h1 className='text-4xl font-bold mb-8 text-center text-white'>About Us</h1>
        <section className='mb-12'>
          <p className='text-white'>
            At Elderly Ways, we believe in the power of collective compassion to make a meaningful impact
            in the lives of our senior citizens. Our platform serves as a bridge between those who wish to
            contribute to the well-being of the elderly and the deserving seniors who can benefit from your support.
          </p>
        </section>
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Our Mission</h2>
          <p className='text-white'>
            Our mission is simple yet profound: To enhance the quality of life for senior citizens by providing a platform where individuals and organizations can contribute in various ways. Whether it's through monetary donations, essential goods, or valuable time, Elderly Ways strives to create a community that values and respects the wisdom of our elders.
          </p>
        </section>
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>How You Can Contribute</h2>
          <p className='text-white'>
            Monetary Donations:
            Your financial contributions go a long way in ensuring that essential services and programs are available to seniors in need. Every donation, no matter the size, helps us create a more supportive environment for the elderly.
          </p>
          <p className='text-white'>
            Goods Donations:
            Elderly Ways welcomes donations of essential goods that can make a significant difference in the lives of seniors. From daily necessities to specialized items, your generosity directly impacts the well-being of our elderly community.
          </p>
        </section>
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>NGOs and Collaborations</h2>
          <p className='text-white'>
            Elderly Ways extends a warm invitation to NGOs and organizations dedicated to senior citizen welfare. We believe in collaboration and are open to partnerships that amplify our collective efforts in serving the elderly. Reach out to us to discuss how we can work together to make a positive impact.
          </p>
        </section>
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Our Commitment</h2>
          <p className='text-white'>
            At Elderly Ways, transparency, accountability, and compassion are at the core of what we do. We are committed to ensuring that every donation, whether in the form of goods or money, reaches its intended recipients, making a tangible difference in their lives.
          </p>
        </section>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Key Statistics</h2>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
            <div className='bg-richblack-700 p-6 rounded-md shadow-md text-center'>
              <h3 className='text-3xl font-bold text-white'>0</h3>
              <p className='text-white'>Donations</p>
            </div>
            <div className='bg-richblack-700 p-6 rounded-md shadow-md text-center'>
              <h3 className='text-3xl font-bold text-white'>0</h3>
              <p className='text-white'>Distributions</p>
            </div>
            <div className='bg-richblack-700 p-6 rounded-md shadow-md text-center'>
              <h3 className='text-3xl font-bold text-white'>1</h3>
              <p className='text-white'>Volunteer</p>
            </div>
            <div className='bg-richblack-700 p-6 rounded-md shadow-md text-center'>
              <h3 className='text-3xl font-bold text-white'>1</h3>
              <p className='text-white'>Regions</p>
            </div>
          </div>
        </section>


        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Meet Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Map through team members and display their information */}
            {teamMembers.map((member, index) => (
              <div key={index} className='bg-richblack-700 p-6 rounded-md shadow-md flex items-center'>
                {/* Display team member's image on the left */}
                <img
                  src={member.image}
                  alt={member.name}
                  className='rounded-full w-20 h-20 mr-6'
                />
                {/* Display team member's name and role on the right */}
                <div>
                  <h3 className='text-xl font-semibold mb-1 text-white'>{member.name}</h3>
                  <p className='text-white'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        {/* ... (unchanged) */}
      </div>
    </div>
  );
};

export default AboutUsPage;
