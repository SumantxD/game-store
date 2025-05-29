
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductGrid } from '@/components/ProductGrid';
import { Cart } from '@/components/Cart';
import { ProductDetail } from '@/components/ProductDetail';
import { Footer } from '@/components/Footer';
import { Product, CartItem } from '@/types/Product';
import { products } from '@/data/products';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product, variant: { color: string; size: string }) => {
    const existingItem = cartItems.find(
      item => item.product.id === product.id && 
      item.variant.color === variant.color && 
      item.variant.size === variant.size
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item === existingItem 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { product, variant, quantity: 1 }]);
    }
  };

  const removeFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }
    setCartItems(cartItems.map((item, i) =>
      i === index ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header 
        cartItemCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GameZone Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the latest gaming consoles and accessories. Level up your gaming experience with premium hardware.
          </p>
        </div>

        <ProductGrid 
          products={products} 
          onProductClick={openProductDetail}
        />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={closeProductDetail}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Index;
