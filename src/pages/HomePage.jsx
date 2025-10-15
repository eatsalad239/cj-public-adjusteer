import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  ScaleIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  BoltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Act144Banner from '../components/Act144Banner';

const HomePage = () => {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: 'Commercial Property Claims',
      description: 'Expert representation for business owners. We handle complex commercial claims including hurricane, flood, fire, and business interruption.',
      link: '/commercial-services',
      featured: true,
    },
    {
      icon: UserGroupIcon,
      title: 'Contractor Partnership Program',
      description: 'NEW: Partner with us for Act 144 compliance. We handle the claims professionally while you focus on repairs.',
      link: '/contractor-partners',
      badge: 'Act 144 Solution',
    },
    {
      icon: ScaleIcon,
      title: 'Residential Claims',
      description: 'Fighting for homeowners to get fair settlements. We document, negotiate, and maximize your insurance claim payout.',
      link: '/book-appointment',
    },
    {
      icon: DocumentCheckIcon,
      title: 'Denied & Underpaid Claims',
      description: "Don't accept NO for an answer. We review and reopen claims that were wrongfully denied or underpaid.",
      link: '/book-appointment',
    },
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Act 144 Compliant',
      description: 'Fully licensed and compliant with Louisiana\'s new insurance laws.',
    },
    {
      icon: ChartBarIcon,
      title: 'Professional Advocacy',
      description: 'Expert negotiation and documentation to pursue fair settlements for our clients.',
    },
    {
      icon: BoltIcon,
      title: 'Fast Response',
      description: '24/7 emergency response. We document damage immediately to protect your claim.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Act144Banner />
      <StatsSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Professional Claims Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a business owner, contractor, or homeowner, we have the expertise 
              and legal authority to handle your insurance claims the right way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card ${service.featured ? 'border-2 border-cj-red' : ''} relative overflow-hidden group`}
              >
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div className="flex items-start">
                  <service.icon className="h-12 w-12 text-cj-red flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Link 
                      to={service.link}
                      className="text-cj-red font-semibold hover:text-cj-dark transition-colors inline-flex items-center"
                    >
                      Learn More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Louisiana Trusts CJ Claim Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience serving Louisiana property owners, 
              we provide professional public adjusting services with integrity and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-cj-red/10 rounded-full mb-4">
                  <benefit.icon className="h-10 w-10 text-cj-red" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cj-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Get the Settlement You Deserve?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let insurance companies undervalue your claim. 
              Get a free consultation with Louisiana's trusted public adjusters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-appointment" 
                className="bg-white text-cj-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <a 
                href="tel:504-555-0100" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now: 504-555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;