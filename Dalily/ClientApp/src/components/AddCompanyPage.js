import React, { useState } from 'react';
import './AddCompanyPage.css';
//import { Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';


const AddCompanyPage = () => {
    const [company, setCompany] = useState({
        name: '',
        contactNumber: '',
        classification: '',
        workplaceGovernorate: '',
        workplaceCity: '',
        workplaceResidentialArea: '',
        facebookPage: '',
        instagramPage: '',
        whatsappBusinessAccount: '',
        tikTokPage: '',
        twitterPage: '',
        linkedinPage: '',
        youtubePage: '',
        geographicalLocationGPS: '',
        startWorkingHours: '',
        endWorkingHours: '',
        officialEmail: '',
        companyLogo: '',
        companyWebsite: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('companies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(company),
            });
            if (!response.ok) {
                throw new Error('Request failed with status ' + response.status);
            }

            if (response.ok) {
                // Company added successfully
                console.log('Company added successfully');
            } else {
                // Handle the error case
                console.error('Failed to add company');
            }
        } catch (error) {
            console.error('Error occurred while adding company', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCompany((prevCompany) => ({ ...prevCompany, [name]: value }));
    };

    return (
        <div className="container">
            <h1>Add Company</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={company.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        name="contactNumber"
                        value={company.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="classification">Classification:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="classification"
                        name="classification"
                        value={company.classification}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="workplaceGovernorate">Workplace Governorate:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="workplaceGovernorate"
                        name="workplaceGovernorate"
                        value={company.workplaceGovernorate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="workplaceCity">Workplace City:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="workplaceCity"
                        name="workplaceCity"
                        value={company.workplaceCity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="workplaceResidentialArea">Workplace Residential Area:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="workplaceResidentialArea"
                        name="workplaceResidentialArea"
                        value={company.workplaceResidentialArea}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="facebookPage">Facebook Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="facebookPage"
                        name="facebookPage"
                        value={company.facebookPage}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="instagramPage">Instagram Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="instagramPage"
                        name="instagramPage"
                        value={company.instagramPage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="whatsappBusinessAccount">WhatsApp Business Account:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="whatsappBusinessAccount"
                        name="whatsappBusinessAccount"
                        value={company.whatsappBusinessAccount}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tikTokPage">TikTok Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tikTokPage"
                        name="tikTokPage"
                        value={company.tikTokPage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="twitterPage">Twitter Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="twitterPage"
                        name="twitterPage"
                        value={company.twitterPage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="linkedinPage">LinkedIn Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="linkedinPage"
                        name="linkedinPage"
                        value={company.linkedinPage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="youtubePage">YouTube Page:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="youtubePage"
                        name="youtubePage"
                        value={company.youtubePage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="geographicalLocationGPS">Geographical Location (GPS):</label>
                    <input
                        type="text"
                        className="form-control"
                        id="geographicalLocationGPS"
                        name="geographicalLocationGPS"
                        value={company.geographicalLocationGPS}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="startWorkingHours">Start Working Hours:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="startWorkingHours"
                        name="startWorkingHours"
                        value={company.startWorkingHours}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endWorkingHours">End Working Hours:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="endWorkingHours"
                        name="endWorkingHours"
                        value={company.endWorkingHours}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="officialEmail">Official Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="officialEmail"
                        name="officialEmail"
                        value={company.officialEmail}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="companyLogo">Company Logo:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyLogo"
                        name="companyLogo"
                        value={company.companyLogo}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="companyWebsite">Company Website:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="companyWebsite"
                        name="companyWebsite"
                        value={company.companyWebsite}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Company</button>
            </form>
        </div>
    );
};

export default AddCompanyPage;

