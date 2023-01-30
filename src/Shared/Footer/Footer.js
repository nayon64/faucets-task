import React from 'react';

const Footer = () => {
	const year= new Date().getFullYear()
	return (
    <section className="mt-2 bg-light">
      <h6 className='text-center my-4'>© copyright {year} - All Right Reserved by Faucet</h6>
    </section>
  );
};

export default Footer;