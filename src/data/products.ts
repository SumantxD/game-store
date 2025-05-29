
import { Product } from '@/types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio.',
    price: 499.99,
    category: 'console',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    colors: ['White', 'Black'],
    sizes: ['Standard Edition', 'Digital Edition'],
    specifications: {
      'Storage': '825GB SSD',
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'Memory': '16GB GDDR6'
    },
    inStock: true
  },
  {
    id: '2',
    name: 'Xbox Series X',
    description: 'The fastest, most powerful Xbox ever. Experience next-gen speed and performance with Xbox Velocity Architecture.',
    price: 499.99,
    category: 'console',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    colors: ['Black', 'White'],
    sizes: ['Series X', 'Series S'],
    specifications: {
      'Storage': '1TB SSD',
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'Memory': '16GB GDDR6'
    },
    inStock: true
  },
  {
    id: '3',
    name: 'Nintendo Switch OLED',
    description: 'Meet the newest member of the Nintendo Switch family. Play at home on the TV or on-the-go with a vibrant OLED screen.',
    price: 349.99,
    category: 'console',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    colors: ['White', 'Neon Red/Blue'],
    sizes: ['OLED Model', 'Standard Model'],
    specifications: {
      'Storage': '64GB',
      'Screen': '7-inch OLED',
      'Battery': '4.5-9 hours',
      'Memory': '4GB RAM'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'DualSense Wireless Controller',
    description: 'Feel the power of PlayStation 5 with the revolutionary DualSense wireless controller.',
    price: 69.99,
    category: 'accessory',
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: ['White', 'Black', 'Cosmic Red', 'Midnight Black', 'Starlight Blue'],
    sizes: ['Standard'],
    specifications: {
      'Connectivity': 'Bluetooth 5.1',
      'Battery': 'Up to 12 hours',
      'Features': 'Haptic Feedback, Adaptive Triggers',
      'Audio': 'Built-in microphone'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Gaming Headset Pro',
    description: 'Premium wireless gaming headset with 7.1 surround sound and noise cancellation.',
    price: 199.99,
    category: 'accessory',
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: ['Black', 'White', 'Red'],
    sizes: ['Regular', 'Large'],
    specifications: {
      'Driver': '50mm',
      'Frequency': '20Hz-20kHz',
      'Battery': '30 hours',
      'Connectivity': 'Wireless 2.4GHz'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Elite Gaming Chair',
    description: 'Ergonomic gaming chair with lumbar support and premium materials for extended gaming sessions.',
    price: 299.99,
    category: 'accessory',
    images: ['/placeholder.svg', '/placeholder.svg'],
    colors: ['Black', 'Red', 'Blue'],
    sizes: ['Medium', 'Large', 'Extra Large'],
    specifications: {
      'Material': 'PU Leather',
      'Weight Capacity': '330 lbs',
      'Adjustability': '4D Armrests',
      'Recline': '90-180 degrees'
    },
    inStock: true
  }
];
