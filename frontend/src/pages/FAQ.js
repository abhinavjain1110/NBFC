import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'General Questions' },
    { id: 'business', label: 'Business Loans' },
    { id: 'personal', label: 'Personal Loans' },
    { id: 'process', label: 'Application Process' }
  ];
  
  const faqItems = [
    {
      question: 'What is an NBFC?',
      answer: 'A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that provides banking services without meeting the legal definition of a bank. NBFCs provide services such as loans and credit facilities, retirement planning, money markets, underwriting, and merger activities.',
      category: 'general'
    },
    {
      question: 'How is FinTrust Capital different from a bank?',
      answer: 'While banks are regulated by the Banking Regulation Act, NBFCs like FinTrust Capital are regulated by the RBI under a different set of regulations. We offer more flexible lending terms, faster approvals, and specialized financing solutions that traditional banks may not provide.',
      category: 'general'
    },
    {
      question: 'What documents do I need for a business loan application?',
      answer: 'For a business loan application, you typically need: Business registration documents, last 2 years audited financial statements, 6 months bank statements, KYC documents of directors/partners, business plan for startups, and collateral documents if applicable.',
      category: 'business'
    },
    {
      question: 'What is the maximum loan amount available for businesses?',
      answer: 'FinTrust Capital offers business loans up to ₹50 crore, depending on your business financials, credit history, and the purpose of the loan. The final loan amount is determined during the application assessment.',
      category: 'business'
    },
    {
      question: 'What are the interest rates for business loans?',
      answer: 'Our business loan interest rates start from 9.99% p.a. The exact rate depends on factors such as your business profile, loan amount, tenure, and credit score. We offer competitive rates compared to other NBFCs in the market.',
      category: 'business'
    },
    {
      question: 'How long does the approval process take for business loans?',
      answer: 'Our business loan approval typically takes 24-48 hours after all required documents are submitted. For larger loan amounts or complex cases, it might take 3-5 business days. We pride ourselves on having one of the fastest approval processes in the industry.',
      category: 'business'
    },
    {
      question: 'What is the eligibility criteria for personal loans?',
      answer: 'To be eligible for a personal loan, you should be between 21-60 years of age, have a minimum monthly income of ₹25,000, a credit score above 700, and a stable employment history of at least 1 year.',
      category: 'personal'
    },
    {
      question: 'How much can I borrow through a personal loan?',
      answer: 'FinTrust Capital offers personal loans ranging from ₹1 lakh to ₹25 lakhs, depending on your income, credit profile, and repayment capacity. The final loan amount is determined during the application assessment.',
      category: 'personal'
    },
    {
      question: 'What is the repayment tenure for personal loans?',
      answer: 'Our personal loans come with flexible repayment options ranging from 12 months to 60 months (5 years). You can choose a tenure that best suits your financial situation and repayment capacity.',
      category: 'personal'
    },
    {
      question: 'How quickly can I get a personal loan disbursed?',
      answer: 'After approval, personal loans are typically disbursed within 24 hours. In some cases, we offer same-day disbursement if all documentation is complete and verified before the cut-off time.',
      category: 'personal'
    },
    {
      question: 'Can I apply for a loan online?',
      answer: 'Yes, FinTrust Capital offers a completely online application process. You can fill out the application form on our website, upload all required documents, and track your application status—all without visiting a physical branch.',
      category: 'process'
    },
    {
      question: 'What happens after I submit my loan application?',
      answer: "After submission, our team reviews your application and documents. You'll receive acknowledgment via email/SMS. We may contact you for additional information or clarification. Once approved, you'll receive a loan offer and upon acceptance, the amount will be disbursed to your bank account.",
      category: 'process'
    },
    {
      question: 'Are there any processing fees for loans?',
      answer: 'Yes, we charge a processing fee ranging from 1% to 3% of the loan amount, depending on the loan type and amount. This fee covers the administrative costs of processing your loan application.',
      category: 'process'
    },
    {
      question: 'Can I repay my loan before the end of the tenure?',
      answer: 'Yes, you can prepay your loan partially or fully before the end of the tenure. Depending on the loan type, there might be a prepayment penalty ranging from 0% to 5% of the prepaid amount. Business loans typically have a lock-in period of 6-12 months.',
      category: 'process'
    },
    {
      question: 'What happens if I miss a loan payment?',
      answer: 'Missing a loan payment may result in late payment charges, typically 2-3% of the installment amount. It can also negatively impact your credit score. If you anticipate difficulty making a payment, we recommend contacting us in advance to discuss potential solutions.',
      category: 'process'
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItem, setOpenItem] = useState(null);
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenItem(null);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setOpenItem(null);
  };
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const filteredFaqs = faqItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    
    const searchMatch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div>
      <section className="hero-gradient py-20" style={{backgroundColor:"#283618"}}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
      </section>

      <section className="py-20 section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbfc-light"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#023047] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="text-lg font-medium text-nbfc-dark">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-nbfc-light transition-transform ${
                          openItem === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openItem === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No results found for your query. Please try a different search term or category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
