'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted },
    } = useForm<Inputs>();

    const password = watch('password', '');

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
      <div className='w-full max-w-[315px]'>
        <input
          id="email"
          type="email"
          placeholder='Email'
          autoComplete='off'
          className={`
            rounded-[10px] gap-2.5 px-5 py-[14.5px] mb-5 text-base outline-none border w-[315px]
            ${isSubmitted && !errors.email ? 'text-[#27B274] border-[#27B274] focus-visible:border-[#27B274]' : 'text-[#6F91BC] border-transparent focus-visible:border-[#6F91BC]'}
            ${errors.email ? 'border-[#FF8080] focus-visible:border-[#FF8080] text-[#FF8080]' : ''}
          `}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
      </div>

      <div className='w-full max-w-[315px] flex flex-col'>
       <div className='relative'>
        <input
            id="password"
            type={passwordShown ? "text" : "password"}
            placeholder='Create your password'
            className={`
                rounded-[10px] gap-2.5 px-5 py-[14.5px] mb-5 text-base outline-none border focus-visible:border-[#6F91BC] w-[315px]
                ${isSubmitted && `${
                    errors.password ? 'border focus-visible:border-[#FF8080] border-[#FF8080] text-[#FF8080]' : 'text-[#27B274] border focus-visible:border-[#27B274] border-[#27B274]'
                }`}
            `}
            {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                maxLength: { value: 64, message: 'Password must be at least 8 characters long' },
                pattern: { value: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
                validate: {
                  hasNumber: value => /\d/.test(value) || 'Password must contain at least one number',
                }
              })}
        />

        <span 
            className='absolute cursor-pointer right-5 top-[36%] bg-white translate-y-[-50%]' 
            onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.26482 9.6C6.84587 7.40529 9.27533 6 11.9998 6C15.1659 6 17.9336 7.89787 19.4344 10.727C19.8574 11.5244 19.8668 12.4792 19.4378 13.2733C18.3213 15.3396 15.9143 18 11.9998 18C8.85386 18 6.10124 16.1263 4.59401 13.327C4.14841 12.4994 4.14833 11.5007 4.59391 10.6732C4.79587 10.2981 5.02019 9.93958 5.26482 9.6ZM11.9995 16C14.2087 16 15.9995 14.2091 15.9995 12C15.9995 9.79086 14.2087 8 11.9995 8C9.79037 8 7.99951 9.79086 7.99951 12C7.99951 14.2091 9.79037 16 11.9995 16Z" fill={!isSubmitted ? '#6F91BC' : errors.password ? '#FF8080' : '#27B274'}/>
                    <circle cx="12" cy="12" r="2" fill={!isSubmitted ? '#6F91BC' : errors.password ? '#FF8080' : '#27B274'}/>
                    </svg>                  
            ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5672 6.4323C13.7562 6.15136 12.8939 6 11.9998 6C9.27533 6 6.84587 7.40529 5.26482 9.6C5.02019 9.93958 4.79587 10.2981 4.59391 10.6732C4.14833 11.5007 4.14841 12.4994 4.59401 13.327C4.94968 13.9876 5.3747 14.5966 5.85788 15.1416L8.10086 12.8987C8.03455 12.6098 7.99951 12.309 7.99951 12C7.99951 9.79086 9.79037 8 11.9995 8C12.3085 8 12.6093 8.03503 12.8982 8.10135L14.5672 6.4323ZM14.2836 8.71586L15.9413 7.05824C17.3938 7.88989 18.6068 9.16685 19.4344 10.727C19.8574 11.5244 19.8668 12.4792 19.4378 13.2733C18.3213 15.3396 15.9143 18 11.9998 18C10.0809 18 8.30844 17.3029 6.8756 16.1239L8.71538 14.2841C9.43808 15.3213 10.6395 16 11.9995 16C14.2087 16 15.9995 14.2091 15.9995 12C15.9995 10.64 15.3208 9.43857 14.2836 8.71586Z" fill={!isSubmitted ? '#6F91BC' : errors.password ? '#FF8080' : '#27B274'}/>
                    <path d="M17.5 5.5L5.5 17.5C5.22386 17.7761 5.22386 18.2239 5.5 18.5C5.77614 18.7761 6.22386 18.7761 6.5 18.5L18.5 6.5C18.7761 6.22386 18.7761 5.77614 18.5 5.5C18.2239 5.22386 17.7761 5.22386 17.5 5.5Z" fill={!isSubmitted ? '#6F91BC' : errors.password ? '#FF8080' : '#27B274'}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1768 12.8223L12.8233 10.1758C13.5172 10.4896 14 11.1879 14 11.999C14 13.1036 13.1046 13.999 12 13.999C11.1889 13.999 10.4906 13.5162 10.1768 12.8223Z" fill={!isSubmitted ? '#6F91BC' : errors.password ? '#FF8080' : '#27B274'}/>
                    </svg>                
            )}
        </span>
       </div>
      </div>

      <div className='text-[13px] leading-[18px] font-normal pl-5 w-[315px]'>
            {isSubmitted && password.length <= 8 && !(/[A-Z]/.test(password)) && !(/\d/.test(password)) ? (
                <div className='text-[13px] leading-[18px] font-normal text-[#FF8080]'>
                    <div>This password doesn't look right.</div>
                    <div>Please try again or reset it now.</div>
                </div> 
            ) : (
                <>
                    <div className={password.length <= 0 ? 'text-[#4A4E71]' : password.length >= 8 && password.length <= 64 ? 'text-[#27B274] mb-1' : 'text-[#FF8080] mb-1'}>8 characters or more (no spaces)</div>
                    <div className={password.length <= 0 ? 'text-[#4A4E71]' : /[A-Z]/.test(password) ? 'text-[#27B274] mb-1' : 'text-[#FF8080] mb-1'}>Uppercase and lowercase letters</div>
                    <div className={password.length <= 0 ? 'text-[#4A4E71]' : /\d/.test(password) ? 'text-[#27B274] mb-1' : 'text-[#FF8080] mb-1'}>At least one digit</div>
                </>
            )}
        </div>

      <button type="submit" 
        className='rounded-[30px] text-base leading-[14px] font-bold mt-10 py-[15px] px-8 text-white text-center w-full max-w-[240px] signUpBtn'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;