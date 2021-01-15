import React, { useState } from 'react';

import ProfileModal from '../../components/profile-modal/profile-modal';

const data = {
  CreditCardNumber: '3588792858379042',
  CreditCardType: 'JCB',
  DomainName: 'fBLBvqI.info',
  Email: 'tdgTcuQ@HvmNcFe.net',
  FirstName: 'Willis',
  Gender: 'Male',
  LastLogin: '1999-05-12 15:00:32',
  LastName: 'Hermann',
  Latitude: 79.26964,
  Longitude: 134.4206,
  MacAddress: 'ab:65:70:b3:1d:f8',
  PaymentMethod: 'paypal',
  PhoneNumber: '269-510-3874',
  URL: 'http://gHdfPkK.biz/ixWZTKP.php',
  UserName: 'RshEJYi',
};

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalData, setModalData] = useState(data);

  return (
    <>
      <ProfileModal
        data={modalData}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProfilePage;
