import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
              Mohan Sai
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building amazing web experiences
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/MohanSai010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/d-mohan-sai-kumar-08aa97260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/DMohansaikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:dmohansaikumar@gmail.com"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohan Sai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}