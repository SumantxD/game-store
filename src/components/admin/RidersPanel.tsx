
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Rider {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'available' | 'busy';
  assignedOrders: Array<{
    orderId: string;
    customerName: string;
    status: string;
  }>;
}

export const RidersPanel = () => {
  const [riders, setRiders] = useState<Rider[]>([]);

  useEffect(() => {
    const mockRiders: Rider[] = [
      {
        id: 'rider1',
        name: 'Mike Johnson',
        email: 'mike@example.com',
        phone: '+1234567890',
        status: 'busy',
        assignedOrders: [
          { orderId: 'ORD-002', customerName: 'Jane Smith', status: 'shipped' }
        ]
      },
      {
        id: 'rider2',
        name: 'Sarah Davis',
        email: 'sarah@example.com',
        phone: '+1234567891',
        status: 'available',
        assignedOrders: [
          { orderId: 'ORD-003', customerName: 'Bob Wilson', status: 'delivered' }
        ]
      },
      {
        id: 'rider3',
        name: 'Tom Wilson',
        email: 'tom@example.com',
        phone: '+1234567892',
        status: 'available',
        assignedOrders: []
      }
    ];
    setRiders(mockRiders);
  }, []);

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg md:text-xl">Rider Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Rider ID</TableHead>
                  <TableHead className="text-gray-300">Name</TableHead>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Phone</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Assigned Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riders.map((rider) => (
                  <TableRow key={rider.id} className="border-gray-700">
                    <TableCell className="text-white font-medium">{rider.id}</TableCell>
                    <TableCell className="text-white">{rider.name}</TableCell>
                    <TableCell className="text-gray-300">{rider.email}</TableCell>
                    <TableCell className="text-gray-300">{rider.phone}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rider.status === 'available' 
                          ? 'bg-green-500 text-green-900' 
                          : 'bg-yellow-500 text-yellow-900'
                      }`}>
                        {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {rider.assignedOrders.length > 0 ? (
                        <div className="space-y-1">
                          {rider.assignedOrders.map((order) => (
                            <div key={order.orderId} className="text-sm">
                              <div className="font-medium">{order.orderId}</div>
                              <div className="text-gray-400">{order.customerName}</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">None</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
