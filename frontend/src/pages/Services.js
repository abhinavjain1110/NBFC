import { CheckCircle, ArrowRight, BarChart3, CreditCard, Briefcase, PieChart, FileText, Building } from 'lucide-react';
import SectionHeader from '../components/Style/SectionHeader';

const Services = () => {
  return (
    <div>
      <section className="hero-gradient py-20" style={{backgroundColor:"#283618"}}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Financial Services</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your business and personal needs.
          </p>
        </div>
      </section>

      <section className="mx-4 py-20 section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Explore Our Services" 
            subtitle="At FinTrust Capital, we offer a wide range of financial solutions to support your growth and needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-10 w-10 " style={{color:"#1e81b0"}}/>,
                title: "Business Loans",
                description: "Fuel your business growth with our flexible business loans designed for enterprises of all sizes.",
                features: ["Quick approvals", "Competitive rates", "Minimal documentation", "Flexible tenure"]
              },
              {
                icon: <BarChart3 className="h-10 w-10 " style={{color:"#1e81b0"}}/>,
                title: "Working Capital",
                description: "Keep your operations running smoothly with our working capital solutions for day-to-day expenses.",
                features: ["Overdraft facility", "Inventory financing", "Short-term loans", "Seasonal credit lines"]
              },
              {
                icon: <CreditCard className="h-10 w-10 " style={{color:"#1e81b0"}}/>,
                title: "Personal Loans",
                description: "Achieve your personal goals with quick and easy personal loans with minimal documentation.",
                features: ["No collateral required", "Fixed interest rates", "Flexible repayment options", "Quick disbursement"]
              },
              {
                icon: <PieChart className="h-10 w-10 "style={{color:"#1e81b0"}} />,
                title: "Equipment Financing",
                description: "Acquire the equipment your business needs without depleting your working capital.",
                features: ["Up to 100% financing", "Customized payment plans", "Tax benefits", "Quick processing"]
              },
              {
                icon: <FileText className="h-10 w-10 " style={{color:"#1e81b0"}}/>,
                title: "Invoice Financing",
                description: "Improve your cash flow by converting your accounts receivable into immediate cash.",
                features: ["Advance up to 90%", "Non-recourse options", "Online account management", "Quick processing"]
              },
              {
                icon: <Building className="h-10 w-10 " style={{color:"#1e81b0"}}/>,
                title: "Property Loans",
                description: "Secure loans against your property for various business or personal needs.",
                features: ["Competitive interest rates", "Long tenure options", "High loan amounts", "Flexible repayment"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-semibold text-nbfc-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center  hover:text-nbfc-accent">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="mx-4 py-20 section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.clix.capital/clixblog/wp-content/uploads/sites/3/2023/04/What-is-SME-Loan.png" 
                alt="Business Loan" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <div>
              <h1 className="mx-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Business Loans
              </h1>
              <p className="mx-4 text-gray-500 text-lg max-w-lg mb-6">
              Tailored financial solutions to fuel your business growth            
              </p>
              </div>
              <p className="mx-4 text-gray-600 mb-6">
                Our business loans are designed to provide the capital you need to expand operations, purchase equipment, or manage cash flow. With competitive interest rates and flexible repayment terms, we make it easy for you to focus on growing your business.
              </p>
              
              <div className="mx-4 bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-medium text-nbfc-dark mb-4">Key Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Loans up to ₹50 crore</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Interest rates starting from 9.99% p.a.</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Loan tenure from 12 months to 10 years</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Minimal documentation required</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Quick approval and disbursement</span>
                  </li>
                </ul>
              </div>
              <button className="mx-4 px-3 py-3 font-semibold border rounded-lg text-white bg-[#023047] hover:bg-[#283618]" >
              Apply Now
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx- 4 py-20 section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader 
                title="Eligibility Criteria" 
                subtitle="Simple requirements to qualify for our financial services"
              />
              
              <div className=" space-y-6">
                <div className="mx-4 bg-gray-100 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Business Loans & Working Capital</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Business operation for at least 2 years</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Minimum annual turnover of ₹50 lakhs</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Good credit history and CIBIL score</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mx-4 bg-gray-100 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-nbfc-dark mb-3">Personal Loans</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Age between 21 to 60 years</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Minimum monthly income of ₹25,000</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Credit score above 700</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeader 
                title="Application Process" 
                subtitle="A simple 4-step process to get your financing"
              />
              
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Submit Application",
                    description: "Fill out our simple online application form with your details and required documents."
                  },
                  {
                    number: "02",
                    title: "Document Verification",
                    description: "Our team verifies your documents and assesses your eligibility for the service."
                  },
                  {
                    number: "03",
                    title: "Approval Process",
                    description: "Once verified, your application goes through our approval process. Most approvals happen within 24-48 hours."
                  },
                  {
                    number: "04",
                    title: "Loan Disbursement",
                    description: "After approval, the funds are disbursed directly to your bank account."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{color:"#023047"}}>
                        {step.number}
                      </div>
                      {index < 3 && <div className="w-px h-full bg-nbfc-light mx-auto mt-2"></div>}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-nbfc-dark mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10" style={{backgroundColor:"#bc6c25"}}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Apply now and our team will help you find the perfect financial solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-3 py-3 font-semibold border rounded-lg hover:bg-white" style={{borderColor:"#023047"}}>
              Apply Now
            </button>
            <button variant="outline" className="px-3 py-3 font-semibold border rounded-lg hover:bg-white"style={{borderColor:"#023047"}}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
