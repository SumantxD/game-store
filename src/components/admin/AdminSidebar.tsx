
import React from 'react';
import { Button } from '@/components/ui/button';
import { Package, Users, X } from 'lucide-react';

interface AdminSidebarProps {
  currentView: 'orders' | 'riders';
  onViewChange: (view: 'orders' | 'riders') => void;
  isOpen: boolean;
  onClose: () => void;
}

export const AdminSidebar = ({ currentView, onViewChange, isOpen, onClose }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'orders', label: 'Orders', icon: Package, href: '/admin' },
    { id: 'riders', label: 'Riders', icon: Users, href: '/riders' },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.id !== currentView) {
      window.location.href = item.href;
    }
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        min-h-screen p-4
      `}>
        {/* Mobile close button */}
        <div className="flex justify-end md:hidden mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-300 hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map(({ id, label, icon: Icon, href }) => (
            <Button
              key={id}
              variant={currentView === id ? "default" : "ghost"}
              className={`w-full justify-start ${
                currentView === id 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => handleMenuClick({ id, label, icon: Icon, href })}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
};
