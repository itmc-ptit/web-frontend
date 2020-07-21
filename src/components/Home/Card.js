import React from 'react'
import DEV from '../../statics/dev.png';
export default () =>{
  return(
    <div className="home-container__info--card">
      <div className="home-container__info--card__name">
        <div className="home-container__info--card__name--avatar">
          <img alt="avatar" src={DEV} className="home-container__info--card__name--avatar-frame" />
        </div>
        <div className="home-container__info--card__name--username">
          <h1 style={{fontSize: 35, color: '#fff'}}>Dương Quốc Bảo</h1>
        </div>
      </div>
      <div className="progressing" style={{marginLeft:10,maxWidth: '80%', marginTop:'20%',height:10, backgroundColor:'#29ee48', }}>

      </div>
    </div>
  ); 
}