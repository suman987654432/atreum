import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        mobileNumber: '',
        email: '',
        concern: '',
        affectedArea: [],
        consultationPreference: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenderSelect = (gender) => {
        setFormData(prev => ({ ...prev, gender }));
    };

    const handleAreaSelect = (area) => {
        setFormData(prev => {
            const areas = prev.affectedArea.includes(area)
                ? prev.affectedArea.filter(a => a !== area)
                : [...prev.affectedArea, area];
            return { ...prev, affectedArea: areas };
        });
    };

 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add submission logic here
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 bg-[#D9D9D933] p-8 md:p-10 rounded-2xl  ">
            <div className="mb-8">
                <h2 className="text-[#19628D] text-center">
                    <span className="font-canela font-light text-[32px] leading-[100%] tracking-normal">Share a few details below to help <br />us</span>
                    <span className="font-canela font-bold italic text-[32px] leading-[100%] tracking-normal text-[#19628D]"> understand your concern.</span>
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-[#0FB1AB] rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#0FB1AB] placeholder-black font-sohne"
                    />
                </div>

                {/* Age */}
                <div>
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-1/3 px-4 py-2.5 border border-[#0FB1AB] rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#0FB1AB] placeholder-black font-sohne"
                    />
                </div>

                {/* Gender */}
                <div className="flex items-center border border-[#0FB1AB] rounded-lg bg-white overflow-hidden w-fit">
                    <span className="px-4 py-2.5 text-black bg-transparent font-sohne">Gender</span>
                    <div className="flex border-l border-[#0FB1AB]">
                        <button
                            type="button"
                            onClick={() => handleGenderSelect('MALE')}
                            className={`px-4 py-2.5 text-sm font-bold transition-colors ${formData.gender === 'MALE'
                                ? 'text-[#0FB1AB] bg-[#0FB1AB]/10'
                                : 'text-black hover:text-[#0FB1AB]'
                                }`}
                        >
                            MALE
                        </button>
                        <div className="w-px bg-[#0FB1AB]"></div>
                        <button
                            type="button"
                            onClick={() => handleGenderSelect('FEMALE')}
                            className={`px-4 py-2.5 text-sm font-bold transition-colors ${formData.gender === 'FEMALE'
                                ? 'text-[#0FB1AB] bg-[#0FB1AB]/10'
                                : 'text-black hover:text-[#0FB1AB]'
                                }`}
                        >
                            FEMALE
                        </button>
                    </div>
                </div>

                {/* Mobile Number */}
                <div>
                    <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-[#0FB1AB] rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#0FB1AB] placeholder-black  font-sohne"
                    />
                </div>

                {/* Email ID */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-[#0FB1AB] rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#0FB1AB] placeholder-black font-sohne"
                    />
                </div>

                {/* Orthopedic Concern */}
                <div className="pt-2">
                    <label className="block text-black text-base mb-1">Orthopedic Concern</label>
                    <textarea
                        name="concern"
                        placeholder="Please describe your orthopedic concern to us here"
                        value={formData.concern}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2.5 border border-[#0FB1AB] rounded-lg text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#0FB1AB] placeholder-black italic text-sm font-sohne"
                    ></textarea>
                </div>

                {/* Affected Area */}
                <div className="pt-2">
                    <label className="block text-black text-base mb-2 font-sohne">Affected Area</label>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'SHOULDER',
                            'ELBOW',
                            'WRIST / HAND',
                            'HIP',
                            'KNEE',
                            'ANKLE / FOOT',
                            'SPINE / BACK'
                        ].map((area) => (
                            <button
                                key={area}
                                type="button"
                                onClick={() => handleAreaSelect(area)}
                                className={`px-3 py-1.5 border rounded-lg text-xs font-bold transition-all duration-200 uppercase ${formData.affectedArea.includes(area)
                                    ? 'bg-[#0FB1AB]/10 border-[#0FB1AB] text-[#0FB1AB]'
                                    : 'bg-white border-[#0FB1AB] text-gray-600 hover:border-[#0FB1AB] hover:text-[#0FB1AB]'
                                    }`}
                            >
                                {area}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Consultation Preference */}
           

                {/* Submit Button */}
                <div className="pt-6 flex justify-center">
                    <button
                        type="submit"
                        className="px-16 py-3 border border-[#0FB1AB] text-[#0FB1AB] text-sm font-extrabold uppercase rounded-lg hover:bg-[#0FB1AB] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0FB1AB] focus:ring-offset-2 tracking-wider"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form