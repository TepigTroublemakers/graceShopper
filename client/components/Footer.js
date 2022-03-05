import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <p style={{ fontSize: '17px', margin: '0' }}>Created By</p>
      <div className="socials">
        <a href="https://github.com/egarris">
          <img src="GithubLogo.jpg" />
        </a>
        <a href="https://github.com/hujeffy1">
          <img src="GithubLogo.jpg" />
        </a>
        <a href="https://github.com/rwatkins123">
          <img src="GithubLogo.jpg" />
        </a>
        <a href="https://github.com/rickypaya">
          <img src="GithubLogo.jpg" />
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
