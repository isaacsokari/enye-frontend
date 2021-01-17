import React, { useState, useEffect } from 'react';

import ProfileModal from '../../components/profile-modal/profile-modal';
import ProfileList from '../../components/profile-list/profile-list';

import './profile-page.scss';
import DropdownFilter from '../../components/dropdown-filter/dropdown-filter';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filterText, setFilterText] = useState('');
  const [profiles, setProfiles] = useState([]);
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

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="profile-page">
        <header>
          <h1>Profiles</h1>
          <p>Search for the Patient's Profile Below</p>
        </header>

        {isLoading ? (
          <div className="spinner-container">
            <div className="nb-spinner"></div>
          </div>
        ) : (
          <>
            <div className="filters">
              <h2>Filter List</h2>

              <div className="input-group">
                <label htmlFor="search">Name:</label>
                <input
                  type="text"
                  placeholder="Seach for a specific patient"
                  id="search"
                  value={filterText}
                  onChange={(e) => {
                    setFilterText(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <DropdownFilter
                id="filterByPaymentMethod"
                label="Payment Method:"
                onChange={(e) => {
                  setSelectedPaymentMethod(e.target.value);
                  setCurrentPage(1);
                }}
                optionsSource={paymentMethodsList}
              />

              <DropdownFilter
                id="filterByGender"
                label="Gender:"
                onChange={(e) => {
                  setSelectedGender(e.target.value);
                  setCurrentPage(1);
                }}
                optionsSource={gendersList}
              />
            </div>

            <ProfileList
              {...{
                filteredData,
                filterText,
                setModalData,
                setIsModalOpen,
                currentPage,
                setCurrentPage,
              }}
            />
          </>
        )}

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
