import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillIcon } from '../Skills/SkillIcon';

const skills = [
  'React/React Native',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'MongoDB',
  'AWS',
  'Docker',
  'CI/CD',
] as const;

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
          <motion.a
            href="https://drive.google.com/file/d/1f04L3p8ESjLR-Vv1kbThKyCkVzEjk71T/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-purple-600" size={24} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold">Bachelor of Technology</h4>
                <p className="text-purple-600 dark:text-purple-400">Vishnu Institute of Technology</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Currently Pursuing</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold">Intermediate</h4>
                <p className="text-purple-600 dark:text-purple-400">Sri Chaitanya Jr College</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Completed</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold">Secondary Education</h4>
                <p className="text-purple-600 dark:text-purple-400">S.C.B.P E.M High School</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-purple-600" size={24} />
              <h3 className="text-2xl font-semibold">Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-center text-purple-600 dark:text-purple-400 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillIcon skill={skill} />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}