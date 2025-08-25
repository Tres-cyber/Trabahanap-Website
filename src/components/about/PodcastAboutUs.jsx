import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PodcastAboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-10 md:items-start">
          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Team collaborating in an office" 
              className="rounded-2xl shadow-md object-cover w-full h-56 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Coworkers discussing roles" 
              className="rounded-2xl shadow-md object-cover w-full h-44"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Professional interview" 
              className="rounded-2xl shadow-md object-cover w-full h-44 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Hiring discussion" 
              className="rounded-2xl shadow-md object-cover w-full h-56"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              variants={fadeUp}
            />
          </div>

          {/* Right Column - Text and Buttons */}
          <motion.div className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="bg-yellow-300 px-1">TrabaHanap</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-['Lato']">
              TrabaHanap is a job-matching platform that connects skilled professionals with trustworthy employers. We help candidates discover roles that fit their skills and aspirations, and enable companies to hire faster with quality matches.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-['Lato']">
              With smart recommendations, verified listings, and career tools, TrabaHanap simplifies the job search and hiring journey—from creating profiles and applying, to shortlisting and onboarding.
            </p>

            {/* Accordion */}
            <div className="space-y-3 mb-8">
              <div>
                <button 
                  onClick={() => toggleAccordion(0)}
                  className="flex justify-between w-full font-semibold dark:text-purple-400"
                >
                  Our Vision
                  <span>{activeAccordion === 0 ? '−' : '+'}</span>
                </button>
                {activeAccordion === 0 && (
                  <motion.p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-['Lato']"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                  >
                    Empower every jobseeker to find meaningful, dignified work quickly and fairly, while helping employers build strong, diverse teams.
                  </motion.p>
                )}
              </div>
              <div>
                <button 
                  onClick={() => toggleAccordion(1)}
                  className="flex justify-between w-full font-semibold text-gray-900 dark:text-gray-100"
                >
                  Our Mission
                  <span>{activeAccordion === 1 ? '−' : '+'}</span>
                </button>
                {activeAccordion === 1 && (
                  <motion.p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-['Lato']"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                  >
                    Match people to the right opportunities using transparent information, ethical hiring standards, and human‑centered design across the entire recruitment flow.
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <motion.img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Team collaborating in an office" 
              className="rounded-2xl shadow-md object-cover w-full h-36 mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Coworkers discussing roles" 
              className="rounded-2xl shadow-md object-cover w-full h-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Professional interview" 
              className="rounded-2xl shadow-md object-cover w-full h-28 mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              variants={fadeUp}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop&auto=format&q=80" 
              alt="Hiring discussion" 
              className="rounded-2xl shadow-md object-cover w-full h-36"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              variants={fadeUp}
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="bg-yellow-300 px-1">TrabaHanap</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-['Lato']">
              TrabaHanap is a job-matching platform that connects skilled professionals with trustworthy employers. We help candidates discover roles that fit their skills and aspirations, and enable companies to hire faster with quality matches.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-['Lato']">
              With smart recommendations, verified listings, and career tools, TrabaHanap simplifies the job search and hiring journey—from creating profiles and applying, to shortlisting and onboarding.
            </p>

            {/* Accordion */}
            <div className="space-y-3 mb-8">
              <div>
                <button 
                  onClick={() => toggleAccordion(0)}
                  className="flex justify-between w-full font-semibold text-purple-600 dark:text-purple-400"
                >
                  Our Vision
                  <span>{activeAccordion === 0 ? '−' : '+'}</span>
                </button>
                {activeAccordion === 0 && (
                  <motion.p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-['Lato']"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                  >
                    Empower every jobseeker to find meaningful, dignified work quickly and fairly, while helping employers build strong, diverse teams.
                  </motion.p>
                )}
              </div>
              <div>
                <button 
                  onClick={() => toggleAccordion(1)}
                  className="flex justify-between w-full font-semibold text-gray-900 dark:text-gray-100"
                >
                  Our Mission
                  <span>{activeAccordion === 1 ? '−' : '+'}</span>
                </button>
                {activeAccordion === 1 && (
                  <motion.p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-['Lato']"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                  >
                    Match people to the right opportunities using transparent information, ethical hiring standards, and human‑centered design across the entire recruitment flow.
                  </motion.p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <motion.button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
              >
                Browse Jobs
              </motion.button>
              <motion.button className="flex items-center gap-2 text-black dark:text-white font-medium hover:underline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                Post a Job
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastAboutUs;
