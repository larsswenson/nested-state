import React, { useState } from 'react';

// Initialize state w/ nested properties
function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    address: {
      street: '1234 Main St',
      city: 'Anywhere',
      country: 'Americaland'
    }
  });

// Update address & profile
  const updateAddress = (street, city, country) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        street: street,
        city: city,
        country: country
      }
    }));
  };

// Input fields, event handlers, & button to update address
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Street:</label>
        <input type="text" value={userProfile.address.street} onChange={e => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={userProfile.address.city} onChange={e => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" value={userProfile.address.country} onChange={e => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)} />
      </div>
      <button onClick={() => updateAddress(userProfile.address.street, userProfile.address.city, userProfile.address.country)}>Update Address</button>
      <div>
        <h3>Current Profile</h3>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile;
