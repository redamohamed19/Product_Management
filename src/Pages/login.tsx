import React from 'react';
import Form_Login from '../component/Form_Login';
import review from '../imgs/ads/reviews.png';
import order from '../imgs/ads/order.png';
import secorder from '../imgs/ads/secorder.png';

function Login() {
  return (
    <div className="flex h-[100vh]">
      <Form_Login />
      <div className="bg-[#697BFF] w-[55%]">
        <div className="flex items-center justify-center mt-16">
          {' '}
          <img src={review} alt="review" />
          <img src={secorder} alt="order preview" />{' '}
        </div>
        <img
          className="flex  justify-center px-48"
          src={order}
          alt="order preview second"
        />
      </div>
    </div>
  );
}

export default Login;
