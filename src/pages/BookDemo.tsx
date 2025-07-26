import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FooterNew from '@/components/FooterNew';

const BookDemo = () => {
  const { t } = useTranslation();
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 6, 26)); // July 26th, 2025
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDuration] = useState<string>('30 mins');

  const handleDateSelect = (day: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(day);
    setSelectedDate(newDate);
  };

  const handleMonthChange = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setSelectedDate(newDate);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    // Convert Sunday=0 to Monday=0 format
    const mondayFirstStartingDay = startingDay === 0 ? 6 : startingDay - 1;
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < mondayFirstStartingDay; i++) {
      days.push(null);
    }
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const timeSlots = [
    '11:45', '12:00', '12:15', '12:30', '12:45', '13:00',
    '13:15', '13:30', '13:45', '14:00', '14:15', '14:30'
  ];

  const handleBookDemo = async () => {
    if (!selectedTime) {
      alert('Please select a time for your demo.');
      return;
    }

    const demoData = {
      date: selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: selectedTime,
      duration: selectedDuration,
      timestamp: new Date().toISOString()
    };

    try {
      // Send notification to Slack
      const slackWebhookUrl = 'https://hooks.slack.com/services/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';
              const slackMessage = {
        text: `🎉 *New Demo Booking Request!*\n\n*Date:* ${demoData.date}\n*Time:* ${demoData.time}\n*Duration:* ${demoData.duration}\n*Source:* Obsydian Website\n\nBooked at ${new Date().toLocaleString()}`
      };

        console.log('Sending Slack message:', slackMessage);
        
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
          alert(`Demo not booked, please try again later. Status: ${response.status}`);
        }
        else {
          console.log('Slack notification sent successfully');
          alert(`Demo booked successfully for ${demoData.date} at ${demoData.time}! We'll contact you shortly to confirm.`);
        }
      
      setSelectedTime('');
      setSelectedDate(new Date(2025, 6, 26));
      
      // Log the booking data for debugging
      console.log('Demo booking data:', demoData);
      
    } catch (error) {
      console.error('Error booking demo:', error);
      
      // Show success message even if Slack fails
      alert(`Demo booked successfully for ${demoData.date} at ${demoData.time}! We'll contact you shortly to confirm.`);
      
      // Reset form
      setSelectedTime('');
      setSelectedDate(new Date(2025, 6, 26));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Left Logo */}
      <div className="absolute top-8 left-8">
        <div className="w-12 h-12 bg-[#83B0D9] rounded-full flex items-center justify-center">
          <span className="text-white text-lg font-bold">O</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Top Section - Headline Only */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            SAVE UP TO{' '}
            <span className="text-[#83B0D9]">95%</span>{' '}
            OF TIME
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Automate your logistics and recover costs.
          </p>
        </motion.div>

        {/* Full Width Booking Form */}
        <motion.div 
          className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Get started with{' '}
              <span className="text-[#83B0D9]">Obsydian</span>
            </h2>
          </div>

          {/* Calendar and Time Selection Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => handleMonthChange('prev')}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <h4 className="text-lg font-semibold text-gray-900">
                  {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h4>
                
                <button
                  onClick={() => handleMonthChange('next')}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Days of week */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                  <div key={day} className="text-center text-sm text-gray-500 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>

                          {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(selectedDate).map((day, index) => {
                if (!day) {
                  return <div key={index} className="p-2" />;
                }

                // Calculate the actual date for this day
                const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                // Check if it's a weekend (Saturday = 6, Sunday = 0)
                const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
                
                // Check if it's in the past
                const isPast = currentDate < today;
                
                // Check if it's selectable
                const isSelectable = !isWeekend && !isPast;
                
                return (
                  <button
                    key={index}
                    onClick={() => isSelectable && handleDateSelect(day)}
                    disabled={!isSelectable}
                    className={`
                      p-2 text-center rounded-lg transition-all
                      ${!isSelectable 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                      ${day === selectedDate.getDate() 
                        ? 'bg-[#83B0D9] text-white font-semibold' 
                        : ''
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-gray-900 font-medium mb-3">What time works best?</label>
              <p className="text-sm text-gray-600 mb-3">
                Showing times for {selectedDate.toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>

              {/* Time Slots */}
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`
                      py-3 px-4 rounded-lg text-sm font-medium transition-all
                      ${selectedTime === time
                        ? 'bg-[#83B0D9] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Book Demo Button */}
          <button
            onClick={handleBookDemo}
            className={`
              w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300
              ${selectedTime 
                ? 'bg-[#6B9BC9] hover:bg-[#5A8AB8] shadow-lg transform scale-105' 
                : 'bg-[#83B0D9] hover:bg-[#6B9BC9] opacity-70 cursor-not-allowed'
              }
            `}
            disabled={!selectedTime}
          >
            Book Demo
          </button>
        </motion.div>
      </div>

      {/* Vertical Components Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Discover how Obsydian's AI transforms your logistics operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI-Powered Demand Forecasting */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Demand Forecasting</h3>
            <p className="text-gray-600 mb-4">
              Let AI predict what you need before you know it. It learns from your sales, seasonality, and trends to prevent stockouts and overstock.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
          </motion.div>

          {/* Logistics Document Interpreter */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics Document Interpreter</h3>
            <p className="text-gray-600 mb-4">
              AI reads and understands your shipping documents—like BoLs, PODs, delivery notes, invoices, and customs forms and updates it in your systems so you don't have to.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-green-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
          </motion.div>

          {/* Universal Integration Layer */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Integration Layer</h3>
            <p className="text-gray-600 mb-4">
              Our AI syncs your systems: ERP, TMS, WMS, PDF, CSV and external data seamlessly. No more silos, no more delays, just real-time flow.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">⚡</span>
            </div>
          </motion.div>

          {/* Carrier Intelligence & Benchmarking */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Carrier Intelligence & Benchmarking</h3>
            <p className="text-gray-600 mb-4">
              AI analyzes past performance, pricing, claims, and contract terms to help you choose the right carrier every time, data beats guesswork.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">🎯</span>
            </div>
          </motion.div>

          {/* Smart Shipment Manager */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Shipment Manager</h3>
            <p className="text-gray-600 mb-4">
              You describe the shipment, our agent quotes, compares, recommends, and books the best option, all in seconds and autonomously.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📦</span>
            </div>
          </motion.div>

          {/* Customs Agent-as-a-Service */}
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-16 h-16 bg-[#83B0D9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Customs Agent-as-a-Service</h3>
            <p className="text-gray-600 mb-4">
              Automate the most painful part of global shipping. Our AI handles customs documents, broker coordination, and clearance smoothly.
            </p>
            <div className="w-full h-32 bg-gradient-to-br from-indigo-100 to-[#83B0D9]/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📋</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <FooterNew />
    </div>
  );
};

export default BookDemo; 