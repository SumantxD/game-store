
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface Rider {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'available' | 'busy';
}

interface RiderAssignmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (riderId: string, riderName: string) => void;
}

export const RiderAssignmentDialog = ({ isOpen, onClose, onAssign }: RiderAssignmentDialogProps) => {
  const [riders, setRiders] = useState<Rider[]>([]);
  const [selectedRider, setSelectedRider] = useState<string>('');

  // Mock riders data
  useEffect(() => {
    const mockRiders: Rider[] = [
      { id: 'rider1', name: 'Mike Johnson', email: 'mike@example.com', phone: '+1234567890', status: 'available' },
      { id: 'rider2', name: 'Sarah Davis', email: 'sarah@example.com', phone: '+1234567891', status: 'available' },
      { id: 'rider3', name: 'Tom Wilson', email: 'tom@example.com', phone: '+1234567892', status: 'busy' },
    ];
    setRiders(mockRiders);
  }, []);

  const handleAssign = () => {
    const rider = riders.find(r => r.id === selectedRider);
    if (rider) {
      onAssign(rider.id, rider.name);
    }
  };

  const availableRiders = riders.filter(rider => rider.status === 'available');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle>Assign Rider</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label className="text-gray-300">Select Available Rider:</Label>
            <div className="space-y-2 mt-2">
              {availableRiders.map((rider) => (
                <div key={rider.id} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={rider.id}
                    name="rider"
                    value={rider.id}
                    checked={selectedRider === rider.id}
                    onChange={(e) => setSelectedRider(e.target.value)}
                    className="text-purple-600"
                  />
                  <label htmlFor={rider.id} className="text-gray-300 cursor-pointer">
                    <div>
                      <div className="font-medium">{rider.name}</div>
                      <div className="text-sm text-gray-400">{rider.email}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-2 pt-4">
            <Button 
              onClick={handleAssign} 
              disabled={!selectedRider}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Assign Rider
            </Button>
            <Button variant="outline" onClick={onClose} className="border-gray-600">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
