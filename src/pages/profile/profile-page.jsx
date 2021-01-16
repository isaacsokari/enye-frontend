import React, { useState, useEffect } from 'react';

import ProfileModal from '../../components/profile-modal/profile-modal';
import ProfilePreviewItem from '../../components/profile-preview/profile-preview';

import './profile-page.scss';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filterText, setFilterText] = useState('');
  const [profiles, setProfiles] = useState([]);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  const [paymentMethodsList, setPaymentMethodsList] = useState(new Set());
  const [gendersList, setGendersList] = useState(new Set());

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const filteredData = profiles.filter((profile) => {
    return (
      (profile.FirstName.toLowerCase().startsWith(
        filterText.trim().toLowerCase()
      ) ||
        profile.LastName.toLowerCase().startsWith(
          filterText.trim().toLowerCase()
        )) &&
      profile.Gender.includes(selectedGender) &&
      profile.PaymentMethod.includes(selectedPaymentMethod)
    );
  });

  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.records.profiles);
        // add payment methods to set
        data.records.profiles.forEach((profile) =>
          setPaymentMethodsList(paymentMethodsList.add(profile.PaymentMethod))
        );

        // add genders to set
        data.records.profiles.forEach((profile) =>
          setGendersList(gendersList.add(profile.Gender))
        );
        setIsLoading(false);
      });
    return () => {};
    // eslint-disable-next-line
  }, []);

  if (isLoading) return 'Loading...';

  return (
    <>
      <div className="profile-page">
        <div className="filters">
          <h2>Filter By:</h2>

          <label htmlFor="search">Name:</label>
          <input
            type="text"
            placeholder="Seach for a specific patient"
            id="search"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <label htmlFor="filterByPaymentMethod">Payment Method:</label>
          <select
            name="Payment Methods"
            id="filterByPaymentMethod"
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}>
            <option value="">None</option>
            {Array.from(paymentMethodsList).map((method, idx) => (
              <option value={method} key={idx}>
                {method}
              </option>
            ))}
          </select>
          <label htmlFor="filterByGender">Gender</label>
          <select
            name="gender"
            id="filterByGender"
            onChange={(e) => setSelectedGender(e.target.value)}>
            <option value="">None</option>
            {Array.from(gendersList)
              .sort()
              .map((gender, idx) => (
                <option value={gender} key={idx}>
                  {gender}
                </option>
              ))}
          </select>
        </div>
        <div className="profile-list">
          <h2>Results: </h2>

          {filteredData.length ? (
            filteredData.map((profile, idx) => (
              <ProfilePreviewItem
                userData={profile}
                showDetails={() => {
                  setModalData(profile);
                  setIsModalOpen(true);
                }}
                key={idx}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', margin: '2rem' }}>
              No Results for "{filterText}" Found.
            </p>
          )}
        </div>

        {/* Profile Modal */}
        <ProfileModal
          data={modalData}
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default ProfilePage;
