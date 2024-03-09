import React, { useState } from 'react';

const Home = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        textField: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const textField = form.textField.value;

        const updatedFormData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            textField,
        };

        console.log(updatedFormData);
       //setFormData(updatedFormData);

        //Make a POST request to the HubSpot API
        //https://api.hsforms.com/submissions/v3/integration/submit/:portal_id/:form_guid'
        try { 
            const response = await fetch('https://app.hubspot.com/forms/45277480', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    //'Content-Type': 'application/json',
                    Authorization: 'pat-na1-d751be35-6f97-4541-af92-f5602dfceeb4',
                },
                body: JSON.stringify(updatedFormData)
              
            });

            const data = await response.json();
            setFormData(data);
            console.log('Data sent to HubSpot:', data);
        } 
        catch (error) {
            console.error('Error sending data to HubSpot:', error);
        }
     };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div className="mb-4 flex">
                    <div className="w-1/2 pr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div className="w-1/2 pl-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                <div className="mb-4 flex">
                    <div className="w-1/2 pr-2">
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="w-1/2 pl-2">
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="textField">
                        Text Field:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="textField"
                        name="textField"
                        placeholder="Enter your text"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Home;
