import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Chat Summary');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulated email sending
    setTimeout(() => {
      setSending(false);
      alert('Email sent successfully!');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#2A2A2A] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Email Summary</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 bg-[#3A3A3A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-2 bg-[#3A3A3A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#4A4A4A] text-white p-2 rounded-lg hover:bg-[#5A5A5A] transition-colors disabled:bg-gray-600"
          >
            {sending ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;