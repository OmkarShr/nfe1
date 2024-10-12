import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import EmailModal from './components/EmailModal';

function App() {
  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#1E1E1E] text-white">
      <Sidebar 
        currentChat={currentChat} 
        setCurrentChat={setCurrentChat} 
        onEmailClick={() => setIsEmailModalOpen(true)}
      />
      <ChatInterface currentChat={currentChat} />
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}

export default App;