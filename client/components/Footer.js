import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <p style={{ fontSize: '17px', margin: '0' }}>Created By</p>
      <div className="socials">
        <a href="https://github.com/egarris">
          <img src="https://i.gyazo.com/0c7b6dc6ec371d2109107a0fcbd34643.jpg" />
        </a>
        <a href="https://github.com/hujeffy1">
          <img src="https://i.gyazo.com/0c7b6dc6ec371d2109107a0fcbd34643.jpg" />
        </a>
        <a href="https://github.com/rwatkins123">
          <img src="https://i.gyazo.com/0c7b6dc6ec371d2109107a0fcbd34643.jpg" />
        </a>
        <a href="https://github.com/rickypaya">
          <img src="https://i.gyazo.com/0c7b6dc6ec371d2109107a0fcbd34643.jpg" />
        </a>
      </div>
      <div id="footerBottom">
        <p style={{ fontSize: '12px' }}>
          Copyright ©2022 PotStop #TepigTroublemakers
        </p>
      </div>
    </div>
  );
};

export default Footer;
