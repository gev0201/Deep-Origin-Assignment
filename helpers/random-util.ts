export class RandomUtil {

    static generateRandomString(length: number): string {
        return Math.random().toString(36).substring(2, length);
    }

    static generateRandomNumber(length: number): number {
        return Math.floor(Math.random() * Math.pow(10, length));
    }

    static generateRandomNumberInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // TODO add method to generate any random values!
}
