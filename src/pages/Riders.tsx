
import React, { useState, useEffect } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { RidersPanel } from '@/components/admin/RidersPanel';

export default function Riders() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if admin is logged in (simple localStorage check for demo)
  useEffect(() => {
    const adminAuth = localStorage.getItem('admin_authenticated');
    setIsAuthenticated(adminAuth === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem('admin_authenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AdminHeader onLogout={handleLogout} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex">
        <AdminSidebar 
          currentView="riders" 
          onViewChange={(view) => {
            if (view === 'orders') {
              window.location.href = '/admin';
            }
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 p-4 md:p-6 transition-all duration-300 overflow-x-auto">
          <RidersPanel />
        </main>
      </div>
    </div>
  );
}
