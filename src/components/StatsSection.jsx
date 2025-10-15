import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../utils/CountUp';

const StatsSection = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Claims Handled', prefix: '' },
    { value: 12.5, suffix: 'M', label: 'Recovered for Clients', prefix: '$' },
    { value: 40, suffix: '%', label: 'Higher Settlements', prefix: '+' },
    { value: 98, suffix: '%', label: 'Success Rate', prefix: '' },
  ];

  return (
    <section className="py-16 bg-cj-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </div>
              <div className="text-white/80 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;