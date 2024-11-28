import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../css/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    };

    const validateField = (e) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors((prev) => ({ ...prev, [name]: `${name} is required!` }));
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address!' }));
        } else {
            setErrors((prev) => {
                const updatedErrors = { ...prev };
                delete updatedErrors[name];
                return updatedErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required!';
        if (!formData.email) newErrors.email = 'Email is required!';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address!';
        if (!formData.message) newErrors.message = 'Message is required!';
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000); // Success message visible for 5 seconds
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id= 'contact-page' className="container mt-5">
            <h2>
                Contact Me <FontAwesomeIcon icon={faEnvelope} />
            </h2>
            {isSubmitted && <p className="alert alert-success">Form submitted successfully!</p>}
            <form onSubmit={handleSubmit} noValidate>
                {/* Name Input */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onBlur={validateField}
                        aria-describedby="nameError"
                    />
                    {errors.name && <div id="nameError" className="text-danger">{errors.name}</div>}
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onBlur={validateField}
                        aria-describedby="emailError"
                    />
                    {errors.email && <div id="emailError" className="text-danger">{errors.email}</div>}
                </div>

                {/* Message Input */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message here"
                       className={`form-control contact-text  ${errors.message ? 'is-invalid' : ''}`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onBlur={validateField}
                        aria-describedby="messageError"
                    />
                    {errors.message && <div id="messageError" className="text-danger">{errors.message}</div>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;