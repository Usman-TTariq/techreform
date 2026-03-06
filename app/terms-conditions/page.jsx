import Header from "../components/header";
import GeneralHeroSection from "../components/general-hero-section";
import Footer from "../components/footer";

export const metadata = {
  alternates: { canonical: "/terms" },
};

const TermsPage = () => {
  return (
    <div>
      <Header />
      <GeneralHeroSection
        firstWord="Terms and"
        secondWord="Conditions"
        thirdWord=""
        forthWord=""
        fifthWord=""
        para=""
        compact
      />
      <div className="container relative z-10 px-4 sm:px-4 py-12 sm:py-16 md:py-20 max-w-4xl mx-auto">
        <div className="font-britanicaRegular text-white/90 text-[14px] sm:text-[16px] leading-relaxed space-y-6">
          <p>
            Welcome to Tech Reforms. By accessing and using our website (<a href="https://techreforms.com/" className="text-[#F74B1C] hover:underline" target="_blank" rel="noopener noreferrer">https://techreforms.com/</a>), you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services. If you do not agree to these terms, you should not use our website or services.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the Tech Reforms website and all services provided by Tech Reforms (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). These terms apply to all visitors, users, and clients who access or use our website and services.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Use of Website</h2>
          <p>
            You may use our website for lawful purposes only. You must not use this site:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>In any way that violates any applicable local, national, or international law or regulation.</li>
            <li>To transmit any unsolicited or unauthorized advertising or promotional materials.</li>
            <li>To gain unauthorized access to any portion of the website or its related systems.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your access if you violate these terms.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Intellectual Property Rights</h2>
          <p>
            All content, designs, code, graphics, logos, and other intellectual property on this website are owned by Tech Reforms or licensed to us. You may not reproduce, distribute, or use any part of the website or its content without our prior written consent.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Services and Deliverables</h2>
          <p>
            Tech Reforms provides mobile app development, web development, UI/UX design, branding, and related digital services. Each project is governed by separate agreements or contracts. We reserve the right to modify or discontinue our service offerings at any time without prior notice.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Payments and Fees</h2>
          <p>
            All payments for services rendered are subject to the terms outlined in the client agreement. We may require partial or full payment upfront. Delayed or non-payment may result in suspension of services or legal action. All fees are non-refundable unless otherwise stated in the project contract.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. Tech Reforms does not control and is not responsible for the content, policies, or practices of any third-party sites. Accessing third-party links is at your own risk.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Confidentiality</h2>
          <p>
            We value your privacy and confidentiality. Any sensitive or proprietary information shared with us during a project will be treated with the utmost care and will not be disclosed to any third party without your consent, except as required by law.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Limitation of Liability</h2>
          <p>
            Tech Reforms shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the website or services. Our total liability for any claims under these terms is limited to the amount you paid for the services.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Tech Reforms, its affiliates, and its employees from any claims, damages, liabilities, or expenses arising out of your use of the website, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to revise these Terms and Conditions at any time. All updates will be posted on this page with the updated effective date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your access to the website and services without notice if you breach any of these terms. Upon termination, your right to use the website ceases immediately.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under or related to these Terms shall be subject to the exclusive jurisdiction of the state or federal courts located in Santa Rosa, California.
          </p>

          <h2 className="font-britanicaBlack text-[20px] sm:text-[24px] text-white mt-10 mb-4">Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, you may contact us at: <a href="mailto:info@techreforms.com" className="text-[#F74B1C] hover:underline">info@techreforms.com</a> or call <a href="tel:+15822335015" className="text-[#F74B1C] hover:underline">(582) 233-5015</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
