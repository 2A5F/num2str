const numsys = (() => {
    const sys: string[] = []
    for (let i = 0; i < 36; i++) {
        sys[i] = i.toString(36)
    }
    for (let i = 10; i < 36; i++) {
        sys[i + 26] = i.toString(36).toUpperCase()
    }
    sys.push(
        '!',
        '#',
        '$',
        '%',
        '&',
        '^',
        '(',
        ')',
        '/',
        '\\',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '@',
        '[',
        ']',
        '{',
        '}',
        '|',
        '<',
        '>',
    )
    function addRange(from: number, to: number) {
        for (let i = from; i <= to; i++) {
            sys.push(String.fromCharCode(i))
        }
    }
    addRange(8544, 8555)
    addRange(3840, 3850)
    addRange(4256, 4293)
    addRange(5792, 5866)
    addRange(5792, 5866)
    addRange(9312, 9449)
    addRange(12258, 12270)
    addRange(19904, 19967)
    return sys
})()

export function toString2(num: number): string { return num.toString(2) }
export function toString8(num: number): string { return num.toString(8) }
export function toString16(num: number): string { return num.toString(16) }
export function toString32(num: number): string { return num.toString(32) }
export function toString36(num: number): string { return num.toString(36) }

function numsys2n(size: number) {
    function num2(num: number | string, m?: number, n?: number): string {
        if (num == 0) {
            return '0'
        }
        if (num < 0) {
            return `-${num2(-num)}`
        }
        if (num < 1) {
            const f = num as any * size
            const i = parseInt(f as any)
            if (typeof m != 'number' || m < 0) m = num.toString().length - 2
            if (typeof n != 'number' || n < 0) n = 0
            n += i.toString().length
            if (n == m) return `0.${numsys[i]}`
            return `0.${numsys[i]}${num2(f - i, m, n).substr(2)}`
        }
        const intNum = parseInt(num as any)
        if (num as any - intNum != 0) {
            return `${num2(intNum)}${num2(num as any - intNum).substr(1)}`
        }
        const mod = numsys[num as any % size]
        if (num >= size) {
            return `${num2(parseInt(num as any / size as any))}${mod}`
        }
        return mod
    }
    return num2
}

const numsys_2_62 = numsys2n(62)
export function toString62(num: number): string { return numsys_2_62(num) }
const numsys_2_64 = numsys2n(64)
export function toString64(num: number): string { return numsys_2_64(num) }
const numsys_2_128 = numsys2n(128)
export function toString128(num: number): string { return numsys_2_128(num) }
const numsys_2_256 = numsys2n(256)
export function toString256(num: number): string { return numsys_2_256(num) }
const numsys_2_512 = numsys2n(512)
export function toString512(num: number): string { return numsys_2_512(num) }

export function toStringN(num: number, radix?: number): string {
    if (typeof radix != 'number') return num.toString()
    if (radix < 2 || radix > numsys.length) throw new RangeError(`toStringN() radix argument must be between 2 and ${numsys.length}`)
    return numsys2n(radix)(num)
}

function StoString2(): string { return this.toString(2) }
function StoString8(): string { return this.toString(8) }
function StoString16(): string { return this.toString(16) }
function StoString32(): string { return this.toString(32) }
function StoString36(): string { return this.toString(36) }

function StoString62(): string { return numsys_2_62(this) }
function StoString64(): string { return numsys_2_64(this) }
function StoString128(): string { return numsys_2_128(this) }
function StoString256(): string { return numsys_2_256(this) }
function StoString512(): string { return numsys_2_512(this) }

function StoStringN(radix?: number): string { return toStringN(this, radix) }

let isprototype = false
export function enablePrototype() {
    if (isprototype) return
    Object.defineProperties(Number.prototype, {
        toString2: { value: StoString2 },
        toString8: { value: StoString8 },
        toString16: { value: StoString16 },
        toString32: { value: StoString32 },
        toString36: { value: StoString36 },
        toString62: { value: StoString62 },
        toString64: { value: StoString64 },
        toString128: { value: StoString128 },
        toString256: { value: StoString256 },
        toString512: { value: StoString512 },
        toStringN: { value: StoStringN },
    })
    isprototype = true
}

declare global {
    interface Number {
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
}