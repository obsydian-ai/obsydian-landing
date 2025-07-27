import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap } from 'lucide-react';
import MetricsList from './MetricsList';

const ContactSection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const metrics = [
    { value: '35%', description: 'Faster Customs Clearance' },
    { value: '90%', description: 'Reduction in Manual Data Sync Tasks' },
    { value: '+72%', description: 'Increase in Claims Recovered' },
    { value: '8+ Hours', description: 'Saved per Week per Operator' }
  ];

  const handleSubmit = async () => {
    if (!email) {
      alert('Please enter your email to get in touch.');
      return;
    }

    const contactData = {
      email: email,
      timestamp: new Date().toISOString()
    };

    try {
      // Send notification to Slack via webhook
      const slackWebhookUrl = 'https://hooks.slack.com/services/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';
      const slackMessage = {
        text: `🎉 *New contact request from ${email}*\n\n*Source:* Obsydian Website\n\nRequested at ${new Date().toLocaleString()}`
      };

      console.log('Sending Slack message:', slackMessage);
      
      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        body: JSON.stringify(slackMessage)
      });

      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      
      if (!response.ok) {
        console.error('Slack notification failed with status:', response.status);
        // Still show success to user but log the error
        setShowSuccess(true);
        console.log('Contact request data (Slack failed):', contactData);
      }
      else {
        console.log('Slack notification sent successfully');
        setShowSuccess(true);
        console.log('Contact request data:', contactData);
      }
    
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting contact:', error);
      
      // Show success message even if Slack fails
      setShowSuccess(true);
      console.log('Contact request data (error):', contactData);
      
      // Reset form
      setEmail('');
    }
  };

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              <Zap size={16} />
              Automatizando la logística
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              <span className="text-[#0ea5e9]">Auditoría</span>{' '}
              fácil y rentable
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Obsydian automatiza la auditoría de facturas, detecta errores y gestiona reclamaciones para maximizar tus ahorros logísticos.
            </p>

            {/* Metrics List */}
            <MetricsList metrics={metrics} />

          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-lg h-full flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Talk to an Expert
              </h3>
              <p className="text-gray-400 text-sm">
                Get personalized insights for your supply chain challenges
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!email}
              className={`
                w-full text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                ${email
                  ? 'bg-[#0ea5e9] hover:bg-[#0284c7] shadow-lg transform scale-105' 
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Submit
              <ArrowRight size={18} />
            </button>

            {/* Privacy Policy */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you agree to our{' '}
              <a href="#" className="text-[#0ea5e9] hover:underline">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 max-w-md mx-4 text-center border border-gray-700"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Obsydian Logo */}
            <div className="flex items-center justify-center mx-auto mb-6">
              <div className="flex items-center">
                <span className="text-white text-2xl font-bold">Obsydian.</span>
                <div className="w-2 h-2 bg-[#83B0D9] rounded-full ml-1"></div>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-white mb-4">
              Thanks for your submit!
            </h3>
            <p className="text-gray-300 mb-6">
              You will be contacted by the Obsydian's team!
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#83B0D9] text-white px-6 py-2 rounded-lg hover:bg-[#6B9BC9] transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection; 