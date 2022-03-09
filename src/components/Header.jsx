import React from 'react'
import NCNewsLogo from '../images/NCNewsLogo.png'

export default function Header() {
  return (
    <nav className='o-header'>
      <div className="m-header__Logo">
        <img src={NCNewsLogo} alt="Northcoders News" />
      </div>
    </nav>
  );
}
