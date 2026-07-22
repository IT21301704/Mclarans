export const categories = [
  { id: 'all', label: 'All Cakes' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'chocolate', label: 'Chocolate' },
  { id: 'classic', label: 'Classic' },
  { id: 'cupcakes', label: 'Cupcakes & Treats' },
]

export const cakes = [
  {
    id: 'chocolate-fudge',
    name: 'Chocolate Fudge Cake',
    category: 'chocolate',
    emoji: '🍫',
    tint: '#8d5a3b',
    description:
      'Rich, moist chocolate layers with a silky fudge frosting — our best seller.',
    sizes: [
      { id: '500g', label: '500g', price: 2400 },
      { id: '1kg', label: '1kg', price: 4200 },
      { id: '2kg', label: '2kg', price: 7900 },
    ],
  },
  {
    id: 'ribbon-cake',
    name: 'Classic Ribbon Cake',
    category: 'classic',
    emoji: '🎀',
    tint: '#e2907f',
    description:
      'Soft vanilla sponge swirled with pink ribbon layers and buttercream.',
    sizes: [
      { id: '500g', label: '500g', price: 1900 },
      { id: '1kg', label: '1kg', price: 3400 },
      { id: '2kg', label: '2kg', price: 6400 },
    ],
  },
  {
    id: 'birthday-sprinkle',
    name: 'Birthday Sprinkle Cake',
    category: 'birthday',
    emoji: '🎂',
    tint: '#d64570',
    description:
      'Funfetti sponge with vanilla buttercream, sprinkles, and a free topper.',
    sizes: [
      { id: '1kg', label: '1kg', price: 4500 },
      { id: '1.5kg', label: '1.5kg', price: 6300 },
      { id: '2kg', label: '2kg', price: 8200 },
    ],
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cake',
    category: 'classic',
    emoji: '❤️',
    tint: '#b3273e',
    description:
      'Velvety cocoa sponge with a classic cream-cheese frosting finish.',
    sizes: [
      { id: '500g', label: '500g', price: 2600 },
      { id: '1kg', label: '1kg', price: 4800 },
      { id: '2kg', label: '2kg', price: 9000 },
    ],
  },
  {
    id: 'butter-cake',
    name: 'Traditional Butter Cake',
    category: 'classic',
    emoji: '🧈',
    tint: '#e0a93e',
    description:
      'The tea-time favourite — golden, buttery, and baked fresh every morning.',
    sizes: [
      { id: '500g', label: '500g', price: 1500 },
      { id: '1kg', label: '1kg', price: 2800 },
    ],
  },
  {
    id: 'chocolate-biscuit',
    name: 'Chocolate Biscuit Pudding Cake',
    category: 'chocolate',
    emoji: '🍪',
    tint: '#6b4226',
    description:
      'Layers of Marie biscuit and chocolate ganache, chilled to perfection.',
    sizes: [
      { id: '1kg', label: '1kg', price: 3800 },
      { id: '2kg', label: '2kg', price: 7200 },
    ],
  },
  {
    id: 'fresh-fruit-gateau',
    name: 'Fresh Fruit Gateau',
    category: 'birthday',
    emoji: '🍓',
    tint: '#c94f7c',
    description:
      'Light sponge with whipped cream and seasonal fresh fruit on top.',
    sizes: [
      { id: '1kg', label: '1kg', price: 4600 },
      { id: '2kg', label: '2kg', price: 8800 },
    ],
  },
  {
    id: 'cupcake-box',
    name: 'Cupcake Box',
    category: 'cupcakes',
    emoji: '🧁',
    tint: '#9c6bb3',
    description:
      'Assorted chocolate, vanilla, and red velvet cupcakes with swirl frosting.',
    sizes: [
      { id: 'box6', label: 'Box of 6', price: 1800 },
      { id: 'box12', label: 'Box of 12', price: 3400 },
    ],
  },
  {
    id: 'brownie-box',
    name: 'Fudgy Brownie Box',
    category: 'cupcakes',
    emoji: '🟫',
    tint: '#5d4037',
    description:
      'Gooey chocolate brownies with crackly tops — perfect for gifting.',
    sizes: [
      { id: 'box6', label: 'Box of 6', price: 1600 },
      { id: 'box12', label: 'Box of 12', price: 3000 },
    ],
  },
]
