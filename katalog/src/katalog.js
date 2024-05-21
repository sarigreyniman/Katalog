import React from 'react';
// import singleton from './singleton';
import './pictures/1.png';
import './pictures/2.png';
import './pictures/3.png';
import './pictures/4.png';
import './pictures/5.png';
import './pictures/6.png';
import './pictures/7.png';
import './pictures/8.png';
import './pictures/9.png';
import './pictures/10.png';
import './pictures/11.png';
import './pictures/12.png';
import './style.css';

const Katalog = () => {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     phone: '',
    //     address: '',
    //     postalCode: '',
    //     city: '',
    //     country: '',
    //     JewelryNumbersAndQuantityOfEachPrize: '',
    //     imageBase64: null,
    // });
    // const [errorMessage, setErrorMessage] = useState('');
    // const [successMessage, setSuccessMessage] = useState('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleButtonClick = () => {
        window.open('https://www.kupat.org/views/DonationPage?pid=1297&recid=0', '_blank');
    };
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    //         setFormData({ ...formData, imageBase64: base64String });
    //     };
    // };
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         window.scrollTo({ top: 800, behavior: 'smooth' });
    //     }, 1600);
    //     return () => clearTimeout(timer);
    // }, []);
    // const validatePhoneNumber = (phoneNumber) => {
    //     // בדיקת מספר טלפון בעזרת רגקס
    //     const phoneRegex = /^[0-9]{7,15}$/;
    //     return phoneRegex.test(phoneNumber);
    // };

  // try {
        //     await singleton.postWorker(formData);
        //     setSuccessMessage('User added successfully.');
        //     setFormData({
        //         id: '',
        //         firstName: '',
        //         lastName: '',
        //         phone: '',
        //         address: '',
        //         postalCode: '',
        //         city: '',
        //         country: '',
        //         JewelryNumbersAndQuantityOfEachPrize: '',
        //         imageBase64: null,
        //     });
        //     setErrorMessage('');
        // } catch (error) {
        //     console.error('Error adding user:', error);
        //     setErrorMessage('Failed to add user.');
        // }

        const handleButtonClickCollect=()=>{
            const emailBody = `
            First Name: \n
            Last Name:\n
            Phone: \n
            Address: \n
            Postal Code:\n
            City:\n
            Country:\n
            Jewelry Numbers and Quantity: \n
            Recipt on your donating:
        `;
        window.open( `https://mail.google.com/mail/?view=cm&fs=1&to=sarigreyniman@gmail.com&su=Katalog&body=${emailBody}`, '_blank');
        }
    // const submitForm = async (e) => {
    //     e.preventDefault();
    //     const isValidPhoneNumber = validatePhoneNumber(formData.phone);
    //     const isValidPostalCodeNumber = validatePhoneNumber(formData.phone);
    //     if (!isValidPhoneNumber || !isValidPostalCodeNumber) {
    //         setErrorMessage('Please enter a valid phone number.');
    //         return;
    //     }

    //     console.log(formData)
      
    //     const emailBody = `
    //     F Name: ${formData.firstName}\n
    //     LName: ${formData.lastName}\n
    //     Phone: ${formData.phone}\n
    //     Address: ${formData.address}\n
    //     Postal Code: ${formData.postalCode}\n
    //     City: ${formData.city}\n
    //     Country: ${formData.country}\n
    //     Jewelry Numbers and Quantity: ${formData.JewelryNumbersAndQuantityOfEachPrize}\n
    //     Image: ${formData.imageBase64 ? formData.imageBase64 : 'No Image'}
    // `;
    //     // window.open( `https://mail.google.com/mail/?view=cm&fs=1&to=sarigreyniman@gmail.com&su=Katalog&body=${emailBody}`, '_blank');
    //     const mailtoLink = `mailto:sarigreyniman@gmail.com?subject=Katalog&body=${encodeURIComponent(emailBody)}`;
    //     window.open(mailtoLink, '_blank');
    // };

    return (
        <div className='div'>
            <header className='header'>
                <h1>HACHNOSAS KALLAH</h1>
                <h2>COLLECT /DONATE MONEY FOR A YESOMA KALLAH AND GET STUNNING JEWELRY!</h2>
            </header>
            <div className='prices'>
                <p>SAFETY CHAINS:$15</p>
                <p>CHARMS:$25</p>
                <p>EARINGS:$30</p>
                <p>BABY BRACELETS;$35</p>
                <p>RINGS:$40</p>
                <p>CLIP ON EARINGS:$45</p>
                <p>BRACELETS:$50</p>
                <p>WATCHS:$120</p>
            </div>
            <div className='pdown'>
                <p>
                    Many different styles and designs!
                    Please drop off the money
                    and Jewelry collection
                    sheet in a ziploc bag in 31
                    fairholme ave mailbox.
                    Jewelry will be delivered
                    in 4-6 weeks.
                </p>
            </div>
            <button className='bb' style={{ backgroundColor: '#DC8175', borderRadius: '10vh', height: '5vh', cursor: 'pointer' }} onClick={handleButtonClick} sx={{
            }}>
                I want to donate
            </button>

            <div className='divswithform'>
            <button className='form'  onClick={handleButtonClickCollect} sx={{
                  }}>
                  I want to collect
              </button>
                {/* <div className='form'>
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                    {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                    <form onSubmit={submitForm}>
                        <input placeholder='First Name' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        <input placeholder='Last Name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        <input placeholder='Phone' type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        <input placeholder='Address' type="text" name="address" value={formData.address} onChange={handleChange} required />
                        <input placeholder='Postal Code' type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                        <input placeholder='City' type="text" name="city" value={formData.city} onChange={handleChange} required />
                        <input placeholder='Country' type="text" name="country" value={formData.country} onChange={handleChange} required />
                        <textarea placeholder='Jewelry Numbers and Quantity' type="text" name="JewelryNumbersAndQuantityOfEachPrize" value={formData.JewelryNumbersAndQuantityOfEachPrize} onChange={handleChange} required /> */}
                        {/* <input type="file" accept="image/*" name="imageBase64" onChange={handleFileChange} /> */}
                        {/* Upload Receipt
                        <input type="file" accept="image/*" name="imageBase64" onChange={handleFileChange} />
                        <button type="submit" className='buttton'>Submit</button>
                    </form>
                </div> */}
                <div className='p'>
                    <div className='p1'></div>
                    <div className='p2'></div>
                    <div className='p3'></div>
                    <div className='p4'></div>
                    <div className='p5'></div>
                    <div className='p6'></div>
                    <div className='p7'></div>
                    <div className='p8'></div>
                    <div className='p9'></div>
                    <div className='p10'></div>
                    <div className='p11'></div>
                    <div className='p12'></div>
                </div> <button className='scrollToTop' onClick={scrollToTop}>⬆</button>   <button ></button>
            </div>
        </div>
    );
};

export default Katalog;
