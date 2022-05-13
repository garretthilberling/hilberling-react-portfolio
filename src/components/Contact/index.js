import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="flex justify-center">
            <div className="bg-gradient-to-b from-sky-500 to-indigo-600 px-2 pt-3 pb-1 rounded-lg text-lg">
                <div className="flex justify-center">
                    <div className="">
                    <h1 className="text-center">Send me an email!</h1>
                        <form id="contact-form" onSubmit={handleSubmit} className="inline-block">
                            <div>
                                <div className="grow">
                                    <label htmlFor="name" className="">Name:</label>
                                    <br></br>
                                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="w-100 inline-block border-1 border-solid border-sky-50 box-border bg-sky-50 text-slate-900 px-1"/>
                                </div>
                                <div>
                                    <label htmlFor="email"  className="">Email address:</label>
                                    <br></br>
                                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="w-100 inline-block border-1 border-solid border-sky-50 box-border bg-sky-50 text-slate-900 px-1"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="">Message:</label>
                                    <br></br>
                                    <div className="flex justify-center">
                                        <textarea name="message" rows="4" cols="22" defaultValue={message} onBlur={handleChange} className="w-100 inline-block border-1 border-solid border-sky-50 box-border bg-sky-50 text-slate-900 px-1"/>
                                    </div>
                                </div>
                            </div>
                        {errorMessage && (
                            <div className="">
                                <p className="text-red-400 text-center pt-1">{errorMessage}</p>
                            </div>
                        )}
                        <div className="text-center mt-1">
                            <button type="submit" data-testid="submit" className="hover:bg-sky-50 hover:text-slate-900 transition-all fade-in-out duration-300 py-1 px-2 rounded">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;