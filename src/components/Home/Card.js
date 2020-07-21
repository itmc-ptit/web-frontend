import React from 'react'

export default () =>{
  return(
    <div className="home-container__info--card">
      <div className="home-container__info--card__name">
        <div className="home-container__info--card__name--avatar">
          <div className="home-container__info--card__name--avatar-frame">
          </div>
        </div>
        <div className="home-container__info--card__name--username">
          <h1 style={{fontSize: 23, color: '#fff'}}>Duong Quoc Bao !</h1>
        </div>
      </div>
      <div className="progressing" style={{marginLeft:10,maxWidth: '80%', marginTop:'20%',height:10, backgroundColor:'#29ee48', }}>

      </div>
    </div>
  ); 
}