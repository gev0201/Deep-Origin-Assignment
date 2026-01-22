export const UPDATED_PRODUCT_STATIC_DATA = {
    title: 'KIA Sorento Updated',
    price: 6000,
    description: 'A new model of KIA Sorento'
};

// TODO: it will be good to create separate utils method under helpers directory, to generate random data

export const UPDATED_PRODUCT_DYNAMIC_DATA = {
    title: `${Math.random().toString(36).substring(2, 10)}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    description: `DESCRIPTION ${Math.random().toString(36).substring(2, 15)}`
};
