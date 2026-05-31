export default function PrivacyPolicy() {
  return (
    <div className="bg-light min-h-screen py-12 animate-pageEnter">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              FitPro Gym ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, address</li>
              <li><strong>Billing Information:</strong> Payment details, billing address</li>
              <li><strong>Fitness Information:</strong> Health and fitness goals, preferences</li>
              <li><strong>Usage Data:</strong> Browser information, IP address, pages visited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Use of Your Information</h2>
            <p className="text-gray-600 mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>Process your transactions and send related information</li>
              <li>Email you regarding your account or subscription</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
              <li>Generate a personal profile about you</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-600">
              We may share your information in the following situations:
              <br /><br />
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, and safety.
              <br /><br />
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, and customer service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Security of Your Information</h2>
            <p className="text-gray-600">
              We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet. If you have any questions about the security of your personal information, you may contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br /><br />
              Email: privacy@fitprogym.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Fitness Street, New York, NY 10001
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="py-24 bg-white mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-52 h-52 bg-maroon/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <span className="uppercase tracking-[4px] text-sm text-maroon font-semibold">
                Your Trust Matters
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mt-5">
                We Protect Your Privacy
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mt-6">
                Join FitPro Gym with confidence. Your data is secure with us as you work toward your fitness goals.
              </p>
              <button className="mt-10 group bg-maroon hover:bg-maroon-dark transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 shadow-2xl hover:scale-105">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
