import React, { useState } from 'react';

const DepartmentHero = ({ data }) => {
    const { image, title, title1, title2, title3, title4, formTitle, formSubtitle, concerns, centerContent } = data;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        concern: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        concern: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        phone: false,
        email: false,
        concern: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const validateName = (name) => {
        if (!name.trim()) return 'Name is required';
        if (name.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) return 'Phone number is required';
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) return 'Enter a valid 10-digit phone number';
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return 'Enter a valid email address';
        return '';
    };

    const validateConcern = (concern) => {
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            let error = '';
            if (name === 'name') error = validateName(value);
            if (name === 'phone') error = validatePhone(value);
            if (name === 'email') error = validateEmail(value);
            if (name === 'concern') error = validateConcern(value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        let error = '';
        if (name === 'name') error = validateName(value);
        if (name === 'phone') error = validatePhone(value);
        if (name === 'email') error = validateEmail(value);
        if (name === 'concern') error = validateConcern(value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, phone: true, email: true, concern: true });
        const nameError = validateName(formData.name);
        const phoneError = validatePhone(formData.phone);
        const emailError = validateEmail(formData.email);
        const concernError = validateConcern(formData.concern);
        setErrors({ name: nameError, phone: phoneError, email: emailError, concern: concernError });

        if (!nameError && !phoneError && !emailError) {
            setStatus({ type: 'loading', message: 'Sending your inquiry...' });

            try {
                const payload = {
                    fullName: formData.name,
                    age: 'N/A',
                    gender: 'N/A',
                    mobileNumber: formData.phone,
                    email: formData.email,
                    concern: formData.concern,
                    affectedArea: []
                };

                const response = await fetch('https://atreum.onrender.com/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus({ type: 'success', message: 'Thank you! Our Team will get back to you shortly.' });
                    setFormData({ name: '', phone: '', email: '', concern: '' });
                    setIsSubmitted(true);
                } else {
                    setStatus({ type: 'error', message: data.error || data.details || 'Failed to send inquiry. Please try again.' });
                }
            } catch (error) {
                console.error('Submission Error:', error);
                setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
            }
        }
    };

    const renderForm = () => (
        <div className="bg-[#2C747C80] border-[1px] border-[#FFFFFF61] p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-2xl bg-blur-lg backdrop-blur-md">
            <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[34px] tracking-normal text-center">
                <span className="font-bold italic">{formTitle}</span> {formSubtitle.split(' ')[0]}
            </h3>
            <h3 className="text-white font-canela font-normal text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[34px] tracking-normal text-center mb-3 sm:mb-4 md:mb-5">
                {formSubtitle.split(' ').slice(1).join(' ')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-2.5" noValidate>
                <div className="relative">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.name && touched.name ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.name}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.phone && touched.phone ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.phone && touched.phone && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.phone}</p>
                    )}
                </div>

                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.email && touched.email ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] font-sohne ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                    {errors.email && touched.email && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.email}</p>
                    )}
                </div>

                {/* <div className="relative">
                    <select
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitted || status.type === 'loading'}
                        className={`w-full bg-[#ffffff1a] border ${errors.concern && touched.concern ? 'border-red-500' : 'border-transparent'} rounded-lg text-white placeholder-white/70 px-3 py-2 sm:py-2.5 text-[13px] sm:text-sm focus:outline-none focus:border-white/50 focus:bg-[#ffffff25] appearance-none cursor-pointer ${formData.concern === '' ? 'text-white/70' : 'text-white'} ${isSubmitted ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        <option value="" disabled className="text-gray-400 bg-[#19628DE0]">State Your Concern</option>
                        {concerns.map((con, idx) => (
                            <option key={idx} value={con} className="text-white bg-[#19628DE0]">{con}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[12px] sm:h-[8px]">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {errors.concern && touched.concern && (
                        <p className="text-red-700 text-[11px] sm:text-xs mt-1 font-sohne font-medium px-2 py-0.5">{errors.concern}</p>
                    )}
                </div> */}

                <div className="pt-2 sm:pt-3 text-center">
                    {status.message && status.type !== 'success' && (
                        <p className={`text-[11px] sm:text-xs mb-2 sm:mb-3 px-2 py-1 rounded ${status.type === 'error' ? 'text-red-700 bg-red-100' : 'text-white bg-[#19628D]/30'}`}>
                            {status.message}
                        </p>
                    )}
                    {!isSubmitted ? (
                        <button type="submit" disabled={status.type === 'loading'} className="w-full sm:w-auto bg-[#0FB1AB33] border border-[#0FFFFFF] hover:bg-[#347d8b] text-white font-bold py-2 sm:py-2.5 px-5 sm:px-7 rounded shadow-lg uppercase tracking-wide text-[10px] sm:text-xs transition-all duration-300">
                            {status.type === 'loading' ? 'SENDING...' : 'GET COST ESTIMATE'}
                        </button>
                    ) : (
                        <div className="py-1">
                            <h2 className="text-white font-canela font-bold text-[20px] sm:text-[24px] leading-tight mb-1">Thank You</h2>
                            <p className="text-white font-sohne font-normal text-[12px] sm:text-[14px]">Our Team will get back to you shortly.</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );

    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-screen h-auto lg:h-screen font-sans overflow-x-hidden">
            <div className="absolute inset-0 z-0">
                <img src={image} alt="Background" className="w-full h-full object-cover object-top lg:object-center" />
                <div className="absolute inset-0 bg-[#0e4857]/55"></div>
            </div>

            <div className={`relative z-10 w-full h-full flex flex-col px-3 sm:px-4 md:px-8 lg:px-12 ${centerContent ? 'justify-start pt-24 sm:pt-32 md:pt-40 lg:pt-72' : 'justify-center'}`}>
                {centerContent ? (
                    <>
                        {/* Title Section (Left Aligned with micro offset) */}
                        <div className="w-full max-w-[1700px] mx-auto flex justify-start lg:pl-[72px] mt-12 sm:mt-16 md:mt-20">
                            <h1 className="text-white font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[26px] sm:leading-[30px] md:leading-[40px] lg:leading-[46px] tracking-tight text-left">
                                {title}
                            </h1>
                        </div>

                        {/* Form Section (Aligned Right) */}
                        <div className="w-full max-w-[1700px] mx-auto flex justify-end pb-8 sm:pb-10 md:pb-12 lg:pb-0">
                            <div className="w-full sm:w-[360px] md:w-[420px] lg:w-[450px] lg:-mt-44">
                                {renderForm()}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between h-full pt-6 sm:pt-8 md:pt-12 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-0 gap-5 sm:gap-6 lg:gap-8 xl:gap-12">
                        <div className="w-full lg:w-auto lg:flex-1 lg:max-w-[600px] xl:max-w-[700px] text-white flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left mt-12 sm:mt-16 md:mt-20 lg:mt-32">
                            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6 w-full">
                                {title ? (
                                    <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[26px] sm:leading-[30px] md:leading-[40px] lg:leading-[46px] tracking-tight break-words">
                                        {title}
                                    </h1>
                                ) : (
                                    <>
                                        <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal break-words">
                                            {title1} <br /> to <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal">{title2}</span>
                                        </h1>
                                        <h1 className="font-canela font-normal text-[24px] sm:text-[28px] md:text-[38px] lg:text-[43px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal break-words">
                                            {title3} <br /> to <span className="font-canela font-bold italic text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[54px] tracking-normal">{title4}</span>
                                        </h1>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* <div className="w-full sm:w-[360px] md:w-[420px] lg:w-[450px] flex-shrink-0 mx-auto lg:mx-0 lg:ml-auto">
                            {renderForm()}
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DepartmentHero;
