import React, { useState, useEffect } from 'react';
import Button from './button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Form submitted:', formData);
    };

    useEffect(() => {
        if (isSubmitting) {
            setTimeout(() => {
                setIsSubmitting(false);
            }, 4000);
        }
    }, [isSubmitting]);

    return (
        <div className='inter flex '>
            <div>
            <h1 className="text-2xl font-semibold pt-10 pl-20 ml-20">Contact</h1>
           
            <div className="w-full mx-auto  rounded-md shadow-md p-20 h-screen">
                
                {isSubmitting ? (
                    <div className="text-center">Sending data to the server...</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div>
                            <label htmlFor="name" className="inter block text-sm font-medium text-gray-400">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className=" p-2  border placeholder:text-white rounded-md  hover:bg-white hover:text-black placeholder:font-inter border-black bg-[#A41034] shadow-md focus:outline-none focus:border-gray-400 text-white ${window.innerWidth < 400 ? 'sm:w-10' : ''}`"
                                required
                                placeholder='Full name'
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className=" p-2  border placeholder:text-white rounded-md  hover:bg-white hover:text-black placeholder:font-inter border-black bg-[#A41034] shadow-md focus:outline-none focus:border-gray-400 text-white ${window.innerWidth < 400 ? 'sm:w-10' : ''}`"
                                required
                                placeholder='Email address'
                            />
                        </div>

<div className="mb-4">
    <label className="block text-sm font-medium text-gray-400">Gender</label>
    <div className="flex items-center mt-1">
        <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            className='mr-2'
        />
        <label htmlFor="male" className="mr-4 font-inter">Male</label>

        <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
            className="mr-2"
        />
        <label htmlFor="female" className="mr-4 ">Female</label>

        <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
            className="mr-2"
        />
        <label htmlFor="other" className="mr-4">Other</label>

        {formData.gender === "other" && (
            <input
                type="text"
                id="otherGender"
                name="otherGender"
                value={formData.otherGender}
                onChange={handleChange}
                className="p-2 border rounded-md placeholder:text-white   hover:bg-white hover:text-black placeholder:font-inter border-black bg-[#A41034] shadow-md focus:outline-none focus:border-gray-400 text-white ${window.innerWidth < 400 ? 'sm:w-10' : ''}`"
                placeholder="Enter your gender"
            />
        )}
    </div>
</div>

<div className="mb-4">
    <label htmlFor="urgency" className="block text-sm font-medium text-gray-400">
        Urgency
    </label>
    <select
        id="urgency"
        name="urgency"
        value={formData.urgency}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md border-black  p-2  border placeholder:text-white rounded-md  hover:bg-white hover:text-black placeholder:font-inter border-black bg-[#A41034] shadow-md focus:outline-none focus:border-gray-400 text-white ${window.innerWidth < 400 ? 'sm:w-10' : ''}`"
        required
    >
        <option value="">Select urgency level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="emergency">Emergency</option>
        <option value="sucide">Sucide</option>
    </select>
</div>
              

                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 p-2 w-[75%] border border-black rounded-md"
                                required
                            ></textarea>
                        </div>

                        <Button text="Submit"
                            type="submit"
                            className="bg-[#A41034] text-white p-20 rounded-md"
                        >
                            Submit
                        </Button>
                        
                    </form>
                    

                )}
                </div>
            </div>
        
            <p className='p-4 m-20 w-75% hidden sm:flex'>
                This is a contact form for reporting any data available on our platform that is causing disturbance to your life. 
                We understand that certain information can be harmful or disruptive, and we take your concerns seriously. 
                By filling out this form, you can help us identify and address any issues related to the data on our platform.
                Please provide as much detail as possible about the specific data that is causing disturbance, including any relevant URLs or descriptions.
                Our team will review your report and take appropriate action to ensure the quality and safety of our platform.
            </p>
             </div>
      
    
    );
};

export default ContactForm;
