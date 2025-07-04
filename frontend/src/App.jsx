import React from 'react';
import Footer from './Footer/footer';
import headerlogo from '../src/assets/images/Talviewlogo.png'

const solutions = [
  { title: 'Remote Proctoring', desc: 'Secure, scalable AI & human‑in‑loop exam monitoring.', icon: '🛡️',url:'https://www.talview.com/en/online-proctoring-software' },
  { title: 'AI Exam Agents', desc: 'Automated proctoring, interviewing & evaluations.', icon: '🤖' ,url:'https://www.talview.com/en/alvy-ai-proctoring-agent'},
  { title: 'Integrity & Verification', desc: 'Real‑time identity checks & fraud detection.', icon: '🔍',url:'https://www.talview.com/en/id-verification' },
  { title: 'Engineering Support', desc: 'Integration, optimization & global delivery.', icon: '⚙️',url :'https://talview.freshdesk.com/support/home' },
];

export default function App() {

 const handleLogoClick =()=>{
   window.open("https://www.talview.com/en/", "_blank");
 }


  return (
    <div className="min-h-screen flex flex-col text-gray-800 overflow-x-hidden">
    
      <header className="h-[72px] sm:h-20 bg-blue-600 shadow-md px-3 sm:px-6 lg:px-10 flex items-center justify-between text-white w-full">
  <div className="flex items-center space-x-2 sm:space-x-3">
    <img
      src={headerlogo}
      alt="Talview logo"
      className="h-12 sm:h-[52px] w-auto cursor-pointer"
      onClick={handleLogoClick}
    />
  </div>
  <nav className="flex space-x-3 sm:space-x-6 text-sm sm:text-base md:text-lg">
    {['Home'].map(link => (
      <a
        key={link}
        href={`https://www.talview.com/en/`}
        className="relative hover:text-gray-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all"
      >
        {link}
      </a>
    ))}
  </nav>
</header>



     
      <main className="flex-grow bg-fixed bg-gradient-to-br from-white via-blue-50 to-purple-50">
      
        <section id="home" className="flex flex-col items-center justify-center text-gray-900 pt-16 sm:pt-32 pb-10 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-center">Welcome to AIWF</h2>

          <p className="text-lg sm:text-xl max-w-3xl text-center mb-4">
            Pioneering AI‑powered assessment, remote proctoring, and enterprise solutions backed by Talview India.
          </p>
          <a
            href="https://www.talview.com/en/"
            target="_blank"
            className="flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow transition hover:bg-indigo-700 hover:shadow-lg"
          >
            Learn More →
          </a>
        </section>

        <section id="solutions" className="pt-10 pb-16 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {solutions.map(({ title, desc, icon ,url}) => (
              <div
                key={title}
                className="relative flex flex-col items-start bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 w-full"
                style={{ minHeight: '250px' }}
              >
                <div className="text-4xl mb-4 text-indigo-500">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-base flex-grow mb-6">{desc}</p>

                <a
                  href={url} target='_blank'
                  className="mt-auto inline-flex items-center text-indigo-600 font-medium hover:underline text-base"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 relative">
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { heading: 'Our Mission', text: 'Drive intelligent transformation using AI-powered assessment, proctoring, and certification.' },
                { heading: 'Our Vision', text: 'Create a fair, scalable, and secure ecosystem for talent evaluation globally.' },
                { heading: 'Our Values', text: 'Ethical AI, transparency, inclusivity, and continuous innovation.' },
                { heading: 'Our Impact', text: 'Improved ROI, reduced costs, and trusted proctoring for global enterprises.' },
              ].map(({ heading, text }) => (
                <div key={heading} className="relative bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-700">{heading}</h3>
                  <p className="text-base text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section id="careers" className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
              Careers
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Join us in redefining the future of AI-powered assessments and talent transformation.
            </p>
            <a
              href="https://careers.talview.com/"
              target="_blank"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
            >
              Explore Careers
            </a>
          </div>
        </section>

       
        <section id="contact" className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 mt-8">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <span className="text-base sm:text-lg font-medium">Bengaluru, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <a href="mailto:India@talview.com" className="text-base sm:text-lg font-medium text-indigo-600 hover:underline">
                  India@talview.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    
      <Footer />
    </div>
  );
}
