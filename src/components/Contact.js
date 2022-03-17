import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'


function Contact() {
    const [state, handleSubmit] = useForm("xnqwzzdr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  
    return ( 
        <div>
            <p className="page__header">Contact</p>
            <p className="contact__subheader">Let's Get in Touch!</p>
            <form onSubmit={handleSubmit}>
                <ul class="contact__form">
                    <li>
                        <label>
                            Name
                        </label>
                        <input
                            id="visitor_name"
                            name="visitor_name"
                            placeholder="Your name..."
                            />
                            <ValidationError 
                                prefix="Visitor Name" 
                                field="visitor_name"
                                errors={state.errors}
                            />
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Your email address..."
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                    </li>
                    <li>
                        <label>
                            Subject
                        </label>
                        <input
                            id="email_subject"
                            name="email_subject"
                            placeholder="Email subject..."
                            />
                            <ValidationError 
                                prefix="Email Subject" 
                                field="email_subject"
                                errors={state.errors}
                            />
                    </li>
                    <li>
                        <label>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </li>
                    <li>
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
  }
  
  export default Contact;