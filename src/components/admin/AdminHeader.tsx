
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Menu } from 'lucide-react';

interface AdminHeaderProps {
  onLogout: () => void;
  onMenuToggle: () => void;
}

export const AdminHeader = ({ onLogout, onMenuToggle }: AdminHeaderProps) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="md:hidden text-gray-300 hover:bg-gray-700"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl md:text-2xl font-bold text-purple-400">
            GameZone Admin
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="hidden sm:flex text-gray-300 items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Admin User</span>
          </span>
          <Button 
            variant="outline" 
            onClick={onLogout}
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
