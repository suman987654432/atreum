import React from 'react'

const EnquiryForm = () => {
    return (
        <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-2xl w-full max-w-[550px] mx-auto relative z-10">
            <h3 className="text-[#19628D] text-2xl font-semibold mb-6 font-primary">Enquiry Form</h3>
            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#19628D] text-gray-700 placeholder-gray-400"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#19628D] text-gray-700 placeholder-gray-400"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#19628D] text-gray-700 placeholder-gray-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#18628D] hover:bg-[#133858] text-white font-bold py-3.5 rounded-full mt-4 transition-colors uppercase tracking-wide text-sm md:text-base"
                >
                    Enquire Now
                </button>
            </form>
        </div>
    )
}

export default EnquiryForm