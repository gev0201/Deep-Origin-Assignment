import {RandomUtil} from "../helpers/random-util";

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

export const TEST_PRODUCT_DYNAMIC_DATA = {
    title: `${RandomUtil.generateRandomString(10)}`,
    description: `DESCRIPTION ${RandomUtil.generateRandomString(15)}`,
    price: RandomUtil.generateRandomNumber(4),
    discountPercentage: RandomUtil.generateRandomNumber(2),
    rating: RandomUtil.generateRandomNumber(1),
    stock: RandomUtil.generateRandomNumber(2),
    brand: RandomUtil.generateRandomString(8).toUpperCase(),
    category: CATEGORIES[RandomUtil.generateRandomNumberInRange(0, CATEGORIES.length - 1)]
};
