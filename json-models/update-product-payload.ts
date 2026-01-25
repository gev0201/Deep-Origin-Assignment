import {RandomUtil} from "../helpers/random-util";

export const UPDATED_PRODUCT_STATIC_DATA = {
    title: 'KIA Sorento Updated',
    price: 6000,
    description: 'A new model of KIA Sorento'
};

export const UPDATED_PRODUCT_DYNAMIC_DATA = {
    title: RandomUtil.generateRandomString(10),
    price: RandomUtil.generateRandomNumber(4),
    description: `DESCRIPTION ${RandomUtil.generateRandomString(10)}`
};
