
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { OrderStatusBadge } from '@/components/admin/OrderStatusBadge';
import { RiderAssignmentDialog } from '@/components/admin/RiderAssignmentDialog';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: 'paid' | 'shipped' | 'delivered' | 'undelivered';
  products: Array<{
    name: string;
    quantity: number;
    color: string;
    size: string;
    price: number;
  }>;
  riderId?: string;
  riderName?: string;
  createdAt: string;
}

export const OrdersPanel = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showRiderDialog, setShowRiderDialog] = useState(false);
  const { toast } = useToast();

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockOrders: Order[] = [
      {
        id: 'ORD-001',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        total: 599.99,
        status: 'paid',
        products: [
          { name: 'PlayStation 5', quantity: 1, color: 'White', size: 'Digital', price: 599.99 }
        ],
        createdAt: '2024-01-15T10:30:00Z'
      },
      {
        id: 'ORD-002',
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        total: 129.98,
        status: 'shipped',
        products: [
          { name: 'DualSense Controller', quantity: 2, color: 'Black', size: 'Standard', price: 64.99 }
        ],
        riderId: 'rider1',
        riderName: 'Mike Johnson',
        createdAt: '2024-01-14T15:45:00Z'
      },
      {
        id: 'ORD-003',
        customerName: 'Bob Wilson',
        customerEmail: 'bob@example.com',
        total: 899.99,
        status: 'delivered',
        products: [
          { name: 'Xbox Series X', quantity: 1, color: 'Black', size: 'Standard', price: 899.99 }
        ],
        riderId: 'rider2',
        riderName: 'Sarah Davis',
        createdAt: '2024-01-13T09:20:00Z'
      }
    ];
    setOrders(mockOrders);
  }, []);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    if (newStatus === 'shipped') {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        setSelectedOrder(order);
        setShowRiderDialog(true);
      }
    } else {
      setOrders(prev => prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
      toast({
        title: "Order Updated",
        description: `Order ${orderId} status changed to ${newStatus}`,
      });
    }
  };

  const handleRiderAssignment = (riderId: string, riderName: string) => {
    if (selectedOrder) {
      setOrders(prev => prev.map(order => 
        order.id === selectedOrder.id 
          ? { ...order, status: 'shipped' as const, riderId, riderName }
          : order
      ));
      toast({
        title: "Order Shipped",
        description: `Order ${selectedOrder.id} assigned to ${riderName}`,
      });
      setSelectedOrder(null);
      setShowRiderDialog(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg md:text-xl">Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-300">Order ID</TableHead>
                  <TableHead className="text-gray-300">Customer</TableHead>
                  <TableHead className="text-gray-300">Total</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-300">Rider</TableHead>
                  <TableHead className="text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="border-gray-700">
                    <TableCell className="text-white font-medium">{order.id}</TableCell>
                    <TableCell className="text-gray-300">
                      <div>
                        <div className="font-medium">{order.customerName}</div>
                        <div className="text-sm text-gray-400">{order.customerEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-white">${order.total}</TableCell>
                    <TableCell>
                      <OrderStatusBadge status={order.status} />
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {order.riderName || '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {order.status === 'paid' && (
                          <Button
                            size="sm"
                            onClick={() => handleStatusChange(order.id, 'shipped')}
                            className="bg-blue-600 hover:bg-blue-700 text-xs"
                          >
                            Ship Order
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <RiderAssignmentDialog
        isOpen={showRiderDialog}
        onClose={() => setShowRiderDialog(false)}
        onAssign={handleRiderAssignment}
      />
    </div>
  );
};
