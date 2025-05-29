
import React, { useState, useEffect } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { OrdersPanel } from '@/components/admin/OrdersPanel';
import { RidersPanel } from '@/components/admin/RidersPanel';
import { AdminLogin } from '@/components/admin/AdminLogin';

type AdminView = 'orders' | 'riders';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<AdminView>('orders');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          currentView={currentView} 
          onViewChange={setCurrentView}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 p-4 md:p-6 transition-all duration-300 overflow-x-auto">
          {currentView === 'orders' ? <OrdersPanel /> : <RidersPanel />}
        </main>
      </div>
    </div>
  );
}
