import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-12 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Josh Khovick Fermano. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;