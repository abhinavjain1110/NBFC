import { Users, Target, Clock, Award, Briefcase } from 'lucide-react';
import SectionHeader from '../components/Style/SectionHeader';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" hero-gradient py-20" style={{backgroundColor:"#063970"}}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About FinTrust Capital</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A leading non-banking financial company providing innovative financial solutions since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 section-padding bg-white">
        <div className="container-custom ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mx-4 px-20 text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Our Story
              </h1>
              <div className='px-20'>
              <p className="mx-4 text-gray-500 text-lg max-w-lg mb-4">
              From humble beginnings to becoming one of India's most trusted NBFCs.              
              </p>
              <div className='mx-4 w-20 h-1 mb-8'style={{backgroundColor:"#1e81b0"}}></div>
              </div>
              <div className='px-20'>
              <p className="mx-4 text-gray-600 mx-4 mb-4 ">
                Founded in 2010, FinTrust Capital began with a simple mission: to provide accessible financial solutions to businesses and individuals who were underserved by traditional banking institutions.
              </p>
              <p className="mx-4 text-gray-600 mb-4">
                Over the years, we've grown from a small team of 5 to over 500 employees across India, serving thousands of clients with their diverse financial needs. Our journey has been marked by innovation, customer-centricity, and a commitment to ethical financial practices.
              </p>
              <p className="mx-4 text-gray-600 ">
                Today, we're proud to be recognized as one of the leading NBFCs in the country, with a strong presence in business loans, working capital solutions, and personal financing.
              </p>
              </div>
            </div>
            <div className="mx-3 relative w-100">
              <img 
                src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-c7c8-61fd-b94a-49e33acd89b8/raw?se=2025-05-11T20%3A19%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-10T22%3A30%3A04Z&ske=2025-05-11T22%3A30%3A04Z&sks=b&skv=2024-08-04&sig=UXjnvrv%2Br8eN6xnI0oClAHQh899soJA1ODJ1q0Q2gDI%3D" 
                alt="FinTrust Capital " 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-4 py-20 section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="rounded-full p-3 mr-4" style={{backgroundColor:"#1e81b0"}}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-nbfc-dark">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be the most trusted financial partner for businesses and individuals across India, empowering them to achieve their financial goals through accessible, innovative, and tailored financial solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className=" rounded-full p-3 mr-4" style={{backgroundColor:"#1e81b0"}}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-nbfc-dark">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To bridge the financial gap for underserved segments by offering simplified processes, competitive rates, and exceptional customer service, while maintaining the highest standards of transparency and ethics in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-4 py-20 section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at FinTrust Capital."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Integrity",
                description: "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction."
              },
              {
                icon: <Users className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Customer Focus",
                description: "Our clients are at the center of everything we do. We are committed to understanding their needs and exceeding expectations."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Excellence",
                description: "We strive for excellence in all aspects of our service, continuously improving and innovating to deliver the best solutions."
              },
              {
                icon: <Clock className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Accessibility",
                description: "We believe financial services should be accessible to all. We work to remove barriers and simplify processes."
              },
              {
                icon: <Target className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Innovation",
                description: "We embrace change and continuously seek innovative ways to improve our services and meet evolving customer needs."
              },
              {
                icon: <Award className="h-10 w-10 text-nbfc-light" style={{color:"#1e81b0"}}/>,
                title: "Social Responsibility",
                description: "We are committed to making a positive impact in the communities we serve through ethical business practices."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <div className="mb-5">{value.icon}</div>
                <h3 className="text-xl font-semibold text-nbfc-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mx-4 py-20 section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader 
            title="Leadership Team" 
            subtitle="Meet the experienced professionals who lead FinTrust Capital."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo2Mcne5gfIgamsBMyHUboDtaQoQsGGC-LA&s",
                name: "Vijay Sharma",
                position: "Chief Executive Officer",
                bio: "With over 25 years of experience in the financial sector, Vijay has led FinTrust's growth since its inception."
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGPxd-RZ5Dy24Go_4KTSTIzPz0U0a_nRHW_LaFSPx6FOph_6_3d8UcgDGdmBlC5TzLXs&usqp=CAU",
                name: "Priya Mehta",
                position: "Chief Financial Officer",
                bio: "Priya brings 15+ years of experience in financial management and strategy from leading banking institutions."
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo2Mcne5gfIgamsBMyHUboDtaQoQsGGC-LA&s",
                name: "Rajesh Kumar",
                position: "Chief Operations Officer",
                bio: "Rajesh oversees all operations, ensuring efficient processes and exceptional service delivery."
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGPxd-RZ5Dy24Go_4KTSTIzPz0U0a_nRHW_LaFSPx6FOph_6_3d8UcgDGdmBlC5TzLXs&usqp=CAU",
                name: "Sanjana Reddy",
                position: "Chief Technology Officer",
                bio: "Sanjana leads our digital transformation initiatives, bringing fintech innovations to our services."
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-nbfc-dark">{leader.name}</h3>
                  <p className="text-nbfc-light text-sm mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Journey" 
            subtitle="Key milestones in the growth of FinTrust Capital over the years."
          />
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"style={{backgroundColor:"#1e81b0"}}></div>
            
            {[
              {
                year: "2010",
                title: "Foundation",
                description: "FinTrust Capital was founded in Mumbai with a small team of 5 members."
              },
              {
                year: "2013",
                title: "Expansion",
                description: "Opened branches in Delhi, Bangalore and Chennai, growing to 50 employees."
              },
              {
                year: "2016",
                title: "Digital Transformation",
                description: "Launched our online loan application platform, making services more accessible."
              },
              {
                year: "2018",
                title: "Award Recognition",
                description: "Recognized as one of the 'Top 10 NBFCs' by Financial Express."
              },
              {
                year: "2020",
                title: "10 Year Anniversary",
                description: "Celebrated 10 years with 300+ employees and ₹1000+ crore loan portfolio."
              },
              {
                year: "2023",
                title: "Innovation Hub",
                description: "Launched FinTrust Innovation Lab to develop next-gen financial solutions."
              }
            ].map((milestone, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-12 md:pr-0 md:text-left' : 'md:mr-auto md:pr-12 md:pl-0 md:text-right'} md:w-1/2 px-6`}>
                <div className={`absolute top-3 ${index % 2 === 0 ? 'md:-left-4' : 'md:-right-4'} left-1/2 transform -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-white border-4 `}style={{borderColor:"#1e81b0"}}></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <span className="inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-3" style={{backgroundColor:"#1e81b0"}}>{milestone.year}</span>
                  <h3 className="text-xl font-semibold  mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
