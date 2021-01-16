import React, { useState } from 'react';
import Pagination from '../pagination/pagination';

import ProfilePreviewItem from '../profile-preview/profile-preview';

import './profile-list.scss';

const ProfileList = ({
  filteredData,
  filterText,
  setModalData,
  setIsModalOpen,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(20);

  // pagination
  const indexAfterLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexAfterLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexAfterLastPost);

  const isLastPage = indexAfterLastPost >= filteredData.length;
  const isFirstPage = indexOfFirstPost === 0;

  return (
    <div className="profile-list">
      <h2>Results: </h2>
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
      {filteredData.length ? (
        <>
          <Pagination
            {...{ setCurrentPage, currentPage, isFirstPage, isLastPage }}
          />
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
          <Pagination
            {...{ setCurrentPage, currentPage, isFirstPage, isLastPage }}
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
