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
        <div>
            <div className="w-full mx-auto bg-white rounded-md shadow-md p-20 h-screen">
                <h1 className="text-2xl font-semibold w-screen text-center">Contact Us</h1>
                {isSubmitting ? (
                    <div className="text-center">Sending data to the server...</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2  border rounded-md border-black"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 border rounded-md border-black"
                                required
                            />
                        </div>

<div className="mb-4">
    <label className="block text-sm font-medium text-gray-600">Gender:</label>
    <div className="flex items-center mt-1">
        <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            className="mr-2"
        />
        <label htmlFor="male" className="mr-4">Male</label>

        <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
            className="mr-2"
        />
        <label htmlFor="female" className="mr-4">Female</label>

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
                className="p-2 border rounded-md border-black"
                placeholder="Enter your gender"
            />
        )}
    </div>
</div>

<div className="mb-4">
    <label htmlFor="urgency" className="block text-sm font-medium text-gray-600">
        Urgency:
    </label>
    <select
        id="urgency"
        name="urgency"
        value={formData.urgency}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md border-black"
        required
    >
        <option value="">Select urgency level</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="emergency">Emergency</option>
    </select>
</div>
              

                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                Message:
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
    
    );
};

export default ContactForm;
