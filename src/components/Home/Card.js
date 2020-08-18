import React from 'react';

export default ({ image, name, school, ID }) => {
  return (
    <div className="home-container__info--card">
      <div className="home-container__info--card__name">
        <div className="home-container__info--card__name--avatar">
          <img
            alt="avatar"
            src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg"
            className="home-container__info--card__name--avatar-frame"
          />
        </div>
        <div
          className="home-container__info--card__name--username"
          style={{ maxWidth: 300, maxHeight: 100 }}
        >
          <h1 style={{ fontSize: 30, color: '#fff' }}>{name}</h1>
          {school && (
            <>
              <h1
                style={{ marginTop: 30, fontSize: 15, color: '#fff' }}
              >{`Trường : ${school} `}</h1>
              <h1
                style={{ marginTop: 30, fontSize: 15, color: '#fff' }}
              >{` ID : ${ID} `}</h1>
            </>
          )}
        </div>
      </div>
      <div
        className="progressing"
        style={{
          marginLeft: 10,
          maxWidth: '80%',
          marginTop: '20%',
          height: 10,
          backgroundColor: '#29ee48',
        }}
      ></div>
    </div>
  );
};
