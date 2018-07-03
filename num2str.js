(() => {
    const numsys = (() => {
        const sys = []
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
        function addRange(from, to) {
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

    function toString2() { return this.toString(2) }
    function toString8() { return this.toString(8) }
    function toString16() { return this.toString(16) }
    function toString32() { return this.toString(32) }
    function toString36() { return this.toString(36) }

    function numsys2n(size) {
        function num2(num, m, n) {
            if (num == 0) {
                return '0'
            }
            if (num < 0) {
                return `-${num2(-num)}`
            }
            if (num < 1) {
                const f = num * size
                const i = parseInt(f)
                const s = numsys[i]
                if (typeof m != 'number' || m < 0) m = num.toString().length - 2
                if (typeof n != 'number' || n < 0) n = 0
                n += i.toString().length
                if (n == m) return `0.${numsys[i]}`
                return `0.${numsys[i]}${num2(f - i, m, n).substr(2)}`
            }
            const intNum = parseInt(num)
            if (num - intNum != 0) {
                return `${num2(intNum)}${num2(num - intNum).substr(1)}`
            }
            const mod = numsys[num % size]
            if (num >= size) {
                return `${num2(parseInt(num / size))}${mod}`
            }
            return mod
        }
        return num2
    }

    const numsys_2_62 = numsys2n(62)
    function toString62() { return numsys_2_62(this) }
    const numsys_2_64 = numsys2n(64)
    function toString64() { return numsys_2_64(this) }
    const numsys_2_128 = numsys2n(128)
    function toString128() { return numsys_2_128(this) }
    const numsys_2_256 = numsys2n(256)
    function toString256() { return numsys_2_256(this) }
    const numsys_2_512 = numsys2n(512)
    function toString512() { return numsys_2_512(this) }

    function toStringN(radix) {
        if (typeof radix != 'number') return this.toString()
        if (radix < 2 || radix > numsys.length) throw new RangeError(`toStringN() radix argument must be between 2 and ${numsys.length}`)
        return numsys2n(radix)(this)
    }

    Object.defineProperties(Number.prototype, {
        toString2: { value: toString2 },
        toString8: { value: toString8 },
        toString16: { value: toString16 },
        toString32: { value: toString32 },
        toString36: { value: toString36 },
        toString62: { value: toString62 },
        toString64: { value: toString64 },
        toString128: { value: toString128 },
        toString256: { value: toString256 },
        toString512: { value: toString512 },
        toStringN: { value: toStringN },
    })
})()