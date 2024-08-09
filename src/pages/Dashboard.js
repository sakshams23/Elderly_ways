import React from 'react';
import saksham from "../assets/saksham.jpg";
const Dashboard = () => {
  // Sample user data
  const user = {
    profilePicture: saksham,
    name: 'Saksham Soni',
    email: 'sonisaksham931@gmail.com',
    pastDonations: [
      { id: 1, amount: 50, date: '2022-01-01' },
      { id: 2, amount: 30, date: '2022-02-15' },
      // Add more donation entries as needed
    ],
  };

  const handleDownloadReceipt = (donationId) => {
    // Simulate the download action
    alert(`Downloading receipt for donation ID ${donationId}`);
    // Add logic for generating and downloading receipts in your actual application
  };

  return (
    <div className='flex flex-cols h-screen bg-richblack-900'>
      <div className='flex-1 p-8'>
        {/* Account Details Section */}
        <div className='bg-orange-100 rounded-lg p-6 mb-8'>
          <div className='flex items-center mb-4'>
            <img
              src={user.profilePicture}
              alt='Profile'
              className='w-16 h-16 rounded-full mr-4 object-cover'
            />
            <div>
              <h2 className='text-3xl font-semibold text-gray-800'>{user.name}</h2>
              <p className='text-gray-500'>{user.email}</p>
            </div>
          </div>
        </div>

        {/* Past Donations Section */}
        <div className='bg-orange-100 rounded-lg p-6'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>Past Donations</h3>
          {user.pastDonations.map((donation) => (
            <div key={donation.id} className='mb-4'>
              <p className='text-gray-700'>
                <span className='font-semibold'>Amount:</span> ${donation.amount}
              </p>
              <p className='text-gray-500'>
                <span className='font-semibold'>Date:</span> {donation.date}
              </p>
              <button
                onClick={() => handleDownloadReceipt(donation.id)}
                className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              >
                Download Receipt
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
