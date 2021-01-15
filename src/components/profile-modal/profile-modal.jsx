import ReactDOM from 'react-dom';

import './profile-modal.scss';

const ProfileModal = (props) => {
  const {
    CreditCardNumber,
    CreditCardType,
    DomainName,
    Email,
    FirstName,
    Gender,
    LastLogin,
    LastName,
    Latitude,
    Longitude,
    MacAddress,
    PaymentMethod,
    PhoneNumber,
    URL,
    UserName,
  } = props.data;

  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modalBackground" onClick={props.closeModal}></div>
      <div className="profileModal">
        <button id="closeModalBtn" onClick={props.closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="1em"
            height="1em">
            <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
          </svg>
        </button>
        <h2>{FirstName}'s Data</h2>
        <div className="basic-details">
          <h3>Basic Details</h3>
          <p>
            <span className="label">First Name:</span>
            {FirstName}
          </p>
          <p>
            <span className="label">Last Name:</span>
            {LastName}
          </p>
          <p>
            <span className="label">Gender:</span>
            {Gender}
          </p>
          <p>
            <span className="label">Username</span>
            {UserName}
          </p>
          <p>
            <span className="label">Domain Name:</span>
            {DomainName}
          </p>
          <p>
            <span className="label">Last Login:</span>
            {LastLogin}
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <span className="label">Phone Number:</span>
            {PhoneNumber}
          </p>
          <p>
            <span className="label">Email:</span>
            {Email}
          </p>
          <p>
            <span className="label">Username:</span>
            {UserName}
          </p>
          <p>
            <span className="label">URL:</span>
            {URL}
          </p>
        </div>
        <div className="payment-info">
          <h3>Payment Information</h3>
          <p>
            <span className="label">Credit Card Number:</span>
            {CreditCardNumber}
          </p>
          <p>
            <span className="label">Credit Card Type:</span>
            {CreditCardType}
          </p>
          <p>
            <span className="label">Payment Method:</span>
            {PaymentMethod}
          </p>
        </div>
        <div className="device-info">
          <h3>Payment Information</h3>
          <p>
            <span className="label">MAC Address:</span>
            {MacAddress}
          </p>
          <p>
            <span className="label">Location:</span>
            {Latitude},{Longitude}
          </p>
          {/* <p><span className="label"></span></p> */}
        </div>
      </div>
    </>,
    document.getElementById('modals')
  );
};

export default ProfileModal;
