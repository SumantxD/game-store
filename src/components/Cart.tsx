
import { CartItem } from '@/types/Product';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
  totalPrice: number;
}

export const Cart = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem, 
  onUpdateQuantity, 
  totalPrice 
}: CartProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-black/90 backdrop-blur-xl border-purple-500/20 text-white w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-white text-xl">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 mt-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-white">
                          {item.product.name}
                        </h4>
                        
                        <div className="text-sm text-gray-400">
                          <div>Color: {item.variant.color}</div>
                          <div>Size: {item.variant.size}</div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                              className="w-8 h-8 p-0 bg-gray-700 border-gray-600 text-white"
                            >
                              -
                            </Button>
                            <span className="text-white">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                              className="w-8 h-8 p-0 bg-gray-700 border-gray-600 text-white"
                            >
                              +
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-white">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemoveItem(index)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t border-gray-700 pt-4 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Total:</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="lg"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
