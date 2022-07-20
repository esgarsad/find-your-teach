import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 footer">
      <div className="container">
        &copy;{new Date().getFullYear()} by Find your teach
      </div>
    </footer>
  );
};

export default Footer;
