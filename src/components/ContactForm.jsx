import { useState } from 'react';
import { toast } from 'react-hot-toast';
import GHLWebhook from '../utils/GHLWebhook';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await GHLWebhook.sendLead({
                firstName: formData.first_name,
                lastName: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                type: 'contact_form',
                source: 'website_contact_form'
            });
            toast.success('Form submitted successfully!');
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: ''
            });
        } catch (error) {
            toast.error('Error submitting the form. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;