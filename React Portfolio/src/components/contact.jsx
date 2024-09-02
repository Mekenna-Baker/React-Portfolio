import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../css/Contact.css';

const Contact = () => {
    // Create a state to hold the form data
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // Create a state to hold the errors
    const [errors, setErrors] = useState({})

    // Function to validate email
    const validateEmail = (email) => {
        // Finding the index of @ and .
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');

        // Returning true if the email is valid                                                            
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    };

    // Function to validate field(s)
    const validateField = (e) => {
        // Checking if input field is empty
        if (!e.target.value) {
            // If empty, set the error message
            setErrors({ ...errors, [e.target.name]: `${e.target.name} is required!` });

            // Checking if the email is valid
        } else if (e.target.name === 'email' && !validateEmail(e.target.value)) {
            // If email is not valid, set the error message
            setErrors({ ...errors, email: 'Please enter a valid email address!' })

            // If information is valid, remove the error message
        } else {
            const newErrors = { ...errors };
            delete newErrors[e.target.name];
            setErrors(newErrors);
        }
    }

    return (
        <section className="container mt-5">
            <h2>Contact Me <FontAwesomeIcon icon={faEnvelope} /></h2>
            <form>
                {/* Name input */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={formData.name}
                        // Update formData state on input change
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        // Validates when cursor leaves the input field
                        onBlur={validateField}
                    />
                    {/* Display error message if name is empty */}
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                {/* Email input */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control"
                        value={formData.email}
                        // Update formData state on input change
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        // Validates when cursor leaves the input field
                        onBlur={validateField}
                    />
                    {/* Display error message if email is empty or invalid */}
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                {/* Message input */}
                <div className="mb-3">
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Enter your message here"
                        className="form-control"
                        value={formData.message}
                        // Update formData state on input change
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        // Validates when cursor leaves the input field
                        onBlur={validateField}
                    />
                    {/* Display error message if the message is invalid */}
                    {errors.message && <p className="text-danger">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default Contact;