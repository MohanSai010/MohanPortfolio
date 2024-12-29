import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Download, Code } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Web Developer', 'App Developer', 'React Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText((current) => {
        if (!isDeleting) {
          if (current.length === fullText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
            return current;
          }
          return fullText.substring(0, current.length + 1);
        } else {
          if (current.length === 0) {
            setIsDeleting(false);
            setLoopNum((prev) => prev + 1);
            return '';
          }
          return current.substring(0, current.length - 1);
        }
      });
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Mohan Sai
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 min-h-[1.5em]">
              A passionate{' '}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
              >
                Explore My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1f04L3p8ESjLR-Vv1kbThKyCkVzEjk71T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
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
              <a
                href="https://leetcode.com/u/kR9WR8P5FW/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
              >
                <Code size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
