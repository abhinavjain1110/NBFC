import SectionHeader from "../components/Style/SectionHeader";
import { ArrowRight, BarChart3, Shield, CreditCard, Clock, Award } from 'lucide-react';


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* {section1} */}

      <section className="relative hero-gradient" style={{background:"#283618"}}>
        <div className="container-custom relative z-10 py-20 md:py-32 px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="mx-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Financial<br/> Solutions for a <br/><span className="text-light" style={{color:"#dda15e"}}>Brighter Future</span>
              </h1>
              <p className="mx-4 text-gray-300 text-lg mb-8 max-w-lg">
                Expert financial services to help your business thrive. Fast approvals, competitive rates, and personalized solutions.
              </p>
              <button className="mx-4 px-8 py-4 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Get Started
              </button>
              <button className="px-8 py-4 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Learn More
              </button>
              </div>
              <div className="hidden md:block">
              <img 
                src="https://d3jlwjv6gmyigl.cloudfront.net/images/2020/04/nb.jpg" 
                alt="Financial growth chart" 
                className="w-100 h-auto rounded-lg shadow-xl"
              />
            </div>
              </div>
              </div>
      </section>


      <section className="py-20 section-padding" >
        <div className="container-custom">
          <SectionHeader 
            title="Our Financial Services" 
            subtitle="We offer a wide range of financial solutions to meet your business and personal needs."
          />
          <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
            {[
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "Business Loans",
                description: "Fuel your business growth with our flexible business loans designed for enterprises of all sizes."
              },
              {
                icon: <Shield className="h-10 w-10 text-nbfc-light" />,
                title: "Working Capital",
                description: "Keep your operations running smoothly with our working capital solutions for day-to-day expenses."
              },
              {
                icon: <CreditCard className="h-10 w-10 text-nbfc-light" />,
                title: "Personal Loans",
                description: "Achieve your personal goals with quick and easy personal loans with minimal documentation."
              }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200" >
                <div className="mb-5" style={{color:"#1e81b0"}}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="/services" className="inline-flex items-center  hover:text-accent">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="py-20 section-padding bg-gray-100">
        <div className="container-custom">
          <SectionHeader 
            title="Why Choose FinTrust Capital" 
            subtitle="With years of experience and a customer-focused approach, we stand out from the competition."
          />
          
          <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="h-8 w-8 text-nbfc-light" />,
                title: "Quick Approvals",
                description: "Get loan approvals within 24-48 hours with minimal documentation."
              },
              {
                icon: <Award className="h-8 w-8 text-nbfc-light" />,
                title: "Industry Expertise",
                description: "Our team has over 20 years of experience in financial services."
              },
              {
                icon: <Shield className="h-8 w-8 text-nbfc-light" />,
                title: "Secure & Transparent",
                description: "Clear terms and conditions with no hidden charges."
              },
              {
                icon: <CreditCard className="h-8 w-8 text-nbfc-light" />,
                title: "Competitive Rates",
                description: "We offer some of the most competitive interest rates in the market."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4" style={{color:"#1e81b0"}}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold  mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20" style={{backgroundColor:"#283618"}}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Your Finances to the Next Level?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Apply now and get a financial solution tailored to your specific needs. Our experts are ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition">
            Apply Now
          </button>
          <button className="px-8 py-4 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition">
            Contact Us
          </button>
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
            centered={true}
          />
          
          <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "FinTrust Capital provided us with the working capital we needed to expand our operations. Their process was quick and transparent.",
                author: "Rajesh Sharma",
                position: "CEO, TechSolutions India"
              },
              {
                quote: "Getting a business loan from FinTrust was the best decision for my startup. Their team was supportive throughout the process.",
                author: "Priya Patel",
                position: "Founder, GreenGrocers"
              },
              {
                quote: "The personal loan I received helped me renovate my house without any financial stress. The interest rates were truly competitive.",
                author: "Amit Verma",
                position: "IT Professional"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg border border-gray-100">
                <div className="text-nbfc-light mb-4">
                  <svg className="h-8 w-8" fill="#1e81b0" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-nbfc-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}