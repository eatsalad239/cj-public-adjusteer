import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  CameraIcon,
  BookOpenIcon,
  ArrowDownTrayIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const guides = [
    {
      title: "Property Damage Documentation Checklist",
      icon: ClipboardDocumentCheckIcon,
      description: "Step-by-step guide to properly document property damage for your claim",
      items: [
        "Take photos from multiple angles BEFORE any cleanup",
        "Document serial numbers of damaged items",
        "Keep all damaged materials until adjuster visit",
        "Create a detailed inventory with purchase dates and values",
        "Save all receipts for emergency repairs",
        "Document water lines and moisture readings"
      ],
      downloadable: true
    },
    {
      title: "What to Photograph After a Loss",
      icon: CameraIcon,
      description: "Visual evidence is crucial for your claim success",
      items: [
        "Wide shots showing overall damage",
        "Close-ups of specific damage points",
        "Water marks and moisture indicators",
        "Damaged personal property",
        "Structural damage from multiple angles",
        "Date-stamped photos with measuring tape for scale"
      ],
      downloadable: true
    },
    {
      title: "Understanding Your Insurance Policy",
      icon: BookOpenIcon,
      description: "Key terms and coverage explained in plain language",
      items: [
        "Dwelling Coverage vs. Personal Property",
        "Additional Living Expenses (ALE)",
        "Deductibles and how they work",
        "Replacement Cost vs. Actual Cash Value",
        "Coverage limits and exclusions",
        "Your duties after a loss"
      ]
    },
    {
      title: "Emergency Response Checklist",
      icon: ExclamationTriangleIcon,
      description: "Immediate steps to take after property damage",
      items: [
        "Ensure safety of all occupants",
        "Call CJ Claim Services: (504) 252-8204",
        "Document everything BEFORE cleanup",
        "Mitigate further damage (tarp roof, turn off water)",
        "Keep all receipts for emergency expenses",
        "Do NOT sign anything from insurance company"
      ],
      urgent: true
    }
  ];

  const commonMistakes = [
    {
      mistake: "Throwing away damaged items too quickly",
      consequence: "Loss of evidence for your claim",
      solution: "Keep everything until documented and adjuster approves disposal"
    },
    {
      mistake: "Accepting the first settlement offer",
      consequence: "Potentially thousands in underpayment",
      solution: "Have a licensed public adjuster review your claim"
    },
    {
      mistake: "Not understanding your policy",
      consequence: "Missing covered damages",
      solution: "Get professional help interpreting coverage"
    },
    {
      mistake: "Signing a contractor's AOB before claim approval",
      consequence: "Legal complications and potential Act 144 violations",
      solution: "Work with a licensed public adjuster for claims"
    },
    {
      mistake: "Waiting too long to file",
      consequence: "Missing deadlines and statute limitations",
      solution: "Document and file immediately"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between a public adjuster and insurance adjuster?",
      answer: "An insurance company adjuster works for the insurance company. A public adjuster works exclusively for YOU, the policyholder, to ensure you receive a fair settlement."
    },
    {
      question: "When should I call a public adjuster?",
      answer: "Immediately after any significant property damage. The sooner we document the damage, the stronger your claim. Call us before cleanup or repairs begin."
    },
    {
      question: "What does 'no-cost inspection' mean?",
      answer: "We inspect and evaluate your damage at no charge. We only get paid when your claim is successfully settled - a percentage of the settlement amount."
    },
    {
      question: "Can my contractor handle my insurance claim?",
      answer: "No. Louisiana Act 144 prohibits contractors from adjusting claims. They can provide repair estimates, but only licensed public adjusters can handle claim documentation and presentation."
    },
    {
      question: "What if my claim was already denied?",
      answer: "Many denied claims can be reopened with proper documentation and supplementation. We review denials and often find coverage that was overlooked."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-cj-dark to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Claim Resources & <span className="gradient-text">Guides</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Free resources to help you understand and document your property insurance claim. 
              Knowledge is power when dealing with insurance companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Section */}
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
              Essential Claim Guides
            </h2>
            <p className="text-xl text-gray-600">
              Download our free guides or call us for personalized assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card ${guide.urgent ? 'border-2 border-red-500' : ''}`}
              >
                {guide.urgent && (
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    URGENT - ACT NOW
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <guide.icon className="h-12 w-12 text-cj-red flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <ul className="space-y-2">
                      {guide.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cj-red mr-2">✓</span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {guide.downloadable && (
                      <button className="mt-4 inline-flex items-center text-cj-red font-semibold hover:text-cj-dark">
                        <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                        Download PDF Guide
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
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
              Avoid These Costly Mistakes
            </h2>
            <p className="text-xl text-gray-600">
              Learn from others' experiences to protect your claim
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start space-x-4">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      ❌ Mistake: {item.mistake}
                    </h4>
                    <p className="text-red-600 text-sm mb-2">
                      → {item.consequence}
                    </p>
                    <p className="text-green-600 text-sm font-medium">
                      ✓ Solution: {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 pb-8 border-b border-gray-200 last:border-0"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <LightBulbIcon className="h-6 w-6 text-cj-red mr-3 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cj-red to-cj-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ShieldCheckIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Need Help With Your Claim?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't navigate the insurance process alone. Get expert help from licensed professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-appointment" 
                className="btn-primary !bg-white !text-cj-dark hover:!bg-gray-100"
              >
                Schedule Free Inspection
              </Link>
              <a 
                href="tel:504-252-8204" 
                className="btn-outline !border-white !text-white hover:!bg-white hover:!text-cj-dark"
              >
                Call (504) 252-8204
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;