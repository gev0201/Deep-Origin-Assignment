const CATEGORIES = [
    'smartphones',
    'laptops',
    'furniture',
];

export const TEST_PRODUCT_STATIC_DATA = {
    title: 'furniture',
    description: 'The Sofa',
    price: 5000,
    discountPercentage: 20,
    rating: 7,
    stock: 3,
    brand: 'IKEA',
    category: 'furniture',
    thumbnail: 'NONE'
};

// TODO: it will be good to create separate utils method under helpers directory, to generate random data

export const TEST_PRODUCT_DYNAMIC_DATA = {
    title: `${Math.random().toString(36).substring(2, 10)}`,
    description: `DESCRIPTION ${Math.random().toString(36).substring(2, 15)}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    discountPercentage: Math.floor(Math.random() * 30),
    rating: Math.floor(Math.random() * 10) + 1,
    stock: Math.floor(Math.random() * 100) + 1,
    brand: Math.random().toString(36).substring(2, 8).toUpperCase(),
    category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
    thumbnail: Math.random().toString(36).substring(2, 12)
};
