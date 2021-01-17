import React, { useState, useRef } from 'react';
import Pagination from '../pagination/pagination';

import ProfilePreviewItem from '../profile-preview/profile-preview';

import './profile-list.scss';

const ProfileList = ({
  filteredData,
  filterText,
  setModalData,
  setIsModalOpen,
  currentPage,
  setCurrentPage,
}) => {
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(20);

  // pagination logic
  const indexAfterLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexAfterLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexAfterLastPost);
  const isLastPage = indexAfterLastPost >= filteredData.length;
  const isFirstPage = indexOfFirstPost === 0;

  const profileListRef = useRef(null);

  const scrollToTop = () => {
    setTimeout(() => {
      profileListRef.current.scrollIntoView();
    }, 0);
  };

  return (
    <div className="profile-list" ref={profileListRef}>
      <header>
        <h2>Results</h2>
        {filteredData.length ? (
          <p>
            Showing{' '}
            {`${indexOfFirstPost + 1} - ${
              isLastPage ? filteredData.length : indexAfterLastPost
            }`}{' '}
            of {filteredData.length}
          </p>
        ) : (
          ''
        )}
      </header>
      {filteredData.length ? (
        <>
          <Pagination
            className="top"
            {...{
              setCurrentPage,
              currentPage,
              isFirstPage,
              isLastPage,
              scrollToTop,
            }}
          />
          <div className="results">
            {currentPosts.map((profile, idx) => (
              <ProfilePreviewItem
                userData={profile}
                showDetails={() => {
                  setModalData(profile);
                  setIsModalOpen(true);
                }}
                key={idx}
              />
            ))}
          </div>
          <Pagination
            {...{
              setCurrentPage,
              currentPage,
              isFirstPage,
              isLastPage,
              scrollToTop,
            }}
          />
        </>
      ) : (
        <p style={{ textAlign: 'center', margin: '2rem' }}>
          No Results for "{filterText}" Found.
        </p>
      )}
    </div>
  );
};

export default ProfileList;
