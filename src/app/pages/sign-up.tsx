import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp: React.FC = () => {
  return (
    <div className='form'>
      <h1 className='font-bold text-[28px] leading-7 text-center m-10 text-[#4A4E71]'>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;