
import { Product } from '@/types/Product';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="bg-black/30 backdrop-blur-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer group hover:scale-105"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
              {product.category}
            </Badge>
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-400 text-sm line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border border-gray-600"
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
