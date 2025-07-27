import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap } from 'lucide-react';

const BookDemo = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleScheduleCall = async () => {
    if (!email) {
      alert('Please enter your email to schedule a call.');
      return;
    }

    const demoData = {
      email: email,
      timestamp: new Date().toISOString()
    };

    try {
      // Send notification to Slack
      const slackWebhookUrl = 'https://hooks.slack.com/services/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';
      const slackMessage = {
        text: `🎉 *New demo requested! By ${email}*\n\n*Source:* Obsydian Website\n\nRequested at ${new Date().toLocaleString()}`
      };

      console.log('Sending Slack message:', slackMessage);
      console.log('Webhook URL:', slackWebhookUrl);
      
      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        body: JSON.stringify(slackMessage)
      });

      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);
      
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (!response.ok) {
        console.error('Slack notification failed with status:', response.status);
        console.error('Response body:', responseText);
        
        // Still show success to user but log the error
        setShowSuccess(true);
        console.log('Demo request data (Slack failed):', demoData);
      }
      else {
        console.log('Slack notification sent successfully');
        setShowSuccess(true);
        console.log('Demo request data:', demoData);
      }
    
    setEmail('');
    
    } catch (error) {
      console.error('Error scheduling call:', error);
      
      // Show success message even if Slack fails
      setShowSuccess(true);
      console.log('Demo request data (error):', demoData);
      
      // Reset form
      setEmail('');
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              <Zap size={16} />
              Innovation in Motion
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Crafting the{' '}
              <span className="text-[#83B0D9]">autonomous</span>{' '}
              <span className="text-purple-600">brain</span>{' '}
              of the supply chain
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your supply chain operations with AI-powered intelligence. Discover how Obsydian revolutionizes logistics through autonomous decision-making.
            </p>

          </motion.div>

          {/* Right Column - Simple Booking Form */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Form Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Talk to an Expert
              </h3>
              <p className="text-gray-600 text-sm">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83B0D9] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleScheduleCall}
              disabled={!email}
              className={`
                w-full text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                ${email
                  ? 'bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg transform scale-105' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Submit
              <ArrowRight size={18} />
            </button>

            {/* Privacy Policy */}
            <p className="text-xs text-gray-600 text-center mt-4">
              By submitting, you agree to our{' '}
              <a href="#" className="text-[#83B0D9] hover:underline">
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
            className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Obsydian Logo */}
            <div className="flex items-center justify-center mx-auto mb-6">
              <div className="flex items-center">
                <span className="text-black text-2xl font-bold">Obsydian.</span>
                <div className="w-2 h-2 bg-[#83B0D9] rounded-full ml-1"></div>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thanks for your submit!
            </h3>
            <p className="text-gray-600 mb-6">
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

export default BookDemo; 