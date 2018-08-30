export declare function toString2(num: number): string;
export declare function toString8(num: number): string;
export declare function toString16(num: number): string;
export declare function toString32(num: number): string;
export declare function toString36(num: number): string;
export declare function toString62(num: number): string;
export declare function toString64(num: number): string;
export declare function toString128(num: number): string;
export declare function toString256(num: number): string;
export declare function toString512(num: number): string;
export declare function toStringN(num: number, radix?: number): string;
export declare function enablePrototype(): void;
export interface Number {
    toString2(): string;
    toString8(): string;
    toString16(): string;
    toString32(): string;
    toString36(): string;
    toString62(): string;
    toString64(): string;
    toString128(): string;
    toString256(): string;
    toString512(): string;
    toStringN(radix?: number): string;
}
