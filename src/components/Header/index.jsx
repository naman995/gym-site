import React from 'react';
import image_url from './header.jpg';


const Header = () => {
  return <div className='h-[100vh] w-auto' style={{ backgroundImage: `url(${image_url})` }}>index</div>;
}

export default Header