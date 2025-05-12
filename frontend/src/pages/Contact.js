import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/Style/SectionHeader';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone:'',subject:'',message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message|| !form.phone || !form.subject) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '',phone: '', subject:'', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Server error.');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className=" hero-gradient py-10"style={{backgroundColor:"#283618"}}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Get in touch with our team for any queries or assistance you need.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="mx-4 py-20 section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <SectionHeader 
                title="Get In Touch" 
                subtitle="We're here to help and answer any questions you might have."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className=" rounded-full p-3 mr-4 flex-shrink-0" style={{background:"#023047"}}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-nbfc-dark mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Financial District, Business Avenue<br />
                      Mumbai, 400001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className=" rounded-full p-3 mr-4 flex-shrink-0"style={{background:"#023047"}}>
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-nbfc-dark mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className=" rounded-full p-3 mr-4 flex-shrink-0"style={{background:"#023047"}}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-nbfc-dark mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@fintrust.com</p>
                    <p className="text-gray-600">support@fintrust.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full p-3 mr-4 flex-shrink-0"style={{background:"#023047"}}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-nbfc-dark mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-lg text-nbfc-dark mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className=" hover:bg-nbfc-light transition-colors w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor:"#063970"}}>
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className=" hover:bg-nbfc-light transition-colors w-10 h-10 rounded-full flex items-center justify-center"style={{backgroundColor:"#063970"}}>
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className=" hover:bg-nbfc-light transition-colors w-10 h-10 rounded-full flex items-center justify-center"style={{backgroundColor:"#063970"}}>
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className=" hover:bg-nbfc-light transition-colors w-10 h-10 rounded-full flex items-center justify-center"style={{backgroundColor:"#063970"}}>
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        <div className="lg:col-span-2">
              <div className="mx-10 bg-gray-50 p-8 rounded-lg shadow-md">
                <SectionHeader 
                  title="Send Us A Message" 
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                />
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-nbfc-dark mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border` }
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-nbfc-dark mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border `}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-nbfc-dark mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border`}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-nbfc-dark mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md border`}
                        placeholder="Loan Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-nbfc-dark mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border`}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                    <button 
                    type="submit" 
                    className="rounded-lg text-white py-2 px-3 bg-[#023047] hover:bg-[#283618]"
                      >
                        Submit
                      </button>
                </form>
                {status && (
                  <p className="mt-4 text-center text-sm font-medium text-red-500">
                    {status}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};


export default Contact;
