import React from 'react';
import { PlusCircle, MessageSquare, Scale, BookOpen, Mail, LogOut } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  currentChat: string | null;
  setCurrentChat: (chat: string | null) => void;
  onEmailClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentChat, setCurrentChat, onEmailClick }) => {
  const chatHistory = [
    'Contract Review',
    'Legal Research',
    'Case Analysis',
  ];

  return (
    <aside className="w-64 bg-[#2A2A2A] flex flex-col text-gray-300">
      <div className="p-4 flex items-center space-x-2">
        <Logo size={32} />
        <h1 className="text-xl font-serif font-bold">Legal-Eaze</h1>
      </div>
      <button
        onClick={() => setCurrentChat(null)}
        className="m-4 p-3 bg-[#3A3A3A] text-white rounded-md hover:bg-[#4A4A4A] transition-colors flex items-center space-x-2 font-semibold"
      >
        <PlusCircle size={20} />
        <span>New chat</span>
      </button>
      <div className="flex-grow overflow-y-auto">
        {chatHistory.map((chat, index) => (
          <button
            key={index}
            onClick={() => setCurrentChat(chat)}
            className={`w-full p-3 text-left hover:bg-[#3A3A3A] transition-colors flex items-center space-x-2 ${
              currentChat === chat ? 'bg-[#3A3A3A]' : ''
            }`}
          >
            <MessageSquare size={20} />
            <span className="truncate">{chat}</span>
          </button>
        ))}
      </div>
      <div className="p-4 border-t border-gray-700 space-y-2">
        <button 
          onClick={onEmailClick}
          className="w-full p-2 hover:bg-[#3A3A3A] transition-colors rounded-md flex items-center space-x-2"
        >
          <Mail size={20} />
          <span>Email Summary</span>
        </button>
        <button className="w-full p-2 hover:bg-[#3A3A3A] transition-colors rounded-md flex items-center space-x-2">
          <Scale size={20} />
          <span>Legal Resources</span>
        </button>
        <button className="w-full p-2 hover:bg-[#3A3A3A] transition-colors rounded-md flex items-center space-x-2">
          <BookOpen size={20} />
          <span>Learn More</span>
        </button>
        <button className="w-full p-2 hover:bg-[#3A3A3A] transition-colors rounded-md flex items-center space-x-2">
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;