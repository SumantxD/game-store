
import React from 'react';

interface OrderStatusBadgeProps {
  status: 'paid' | 'shipped' | 'delivered' | 'undelivered';
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'paid':
        return 'bg-yellow-500 text-yellow-900';
      case 'shipped':
        return 'bg-blue-500 text-blue-900';
      case 'delivered':
        return 'bg-green-500 text-green-900';
      case 'undelivered':
        return 'bg-red-500 text-red-900';
      default:
        return 'bg-gray-500 text-gray-900';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
