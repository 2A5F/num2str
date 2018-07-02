(() => {
    const numsys = (() => {
        const sys = {}
        for (let i = 0; i < 36; i++) {
            sys[i] = i.toString(36)
        }
        for (let i = 10; i < 36; i++) {
            sys[i + 26] = i.toString(36).toUpperCase()
        }
        sys[62] = '<'
        sys[63] = '>'
        sys[64] = '!'
        sys[65] = '@'
        sys[66] = '#'
        sys[67] = '$'
        sys[68] = '%'
        sys[69] = '^'
        sys[70] = '&'
        sys[71] = '*'
        sys[73] = '?'
        sys[74] = '['
        sys[75] = ']'
        sys[76] = '{'
        sys[77] = '}'
        sys[78] = '_'
        sys[79] = '~'
        sys[80] = '|'
        sys[81] = '/'
        sys[82] = '\\'
        sys[83] = ':'
        sys[84] = ";"
        sys[85] = '('
        sys[86] = ')'
        sys[87] = '﹢'
        sys[88] = '﹣'
        sys[89] = '·'
        sys[90] = '÷'
        sys[91] = 'Ⅰ'
        sys[92] = 'Ⅱ'
        sys[93] = 'Ⅲ'
        sys[94] = 'Ⅳ'
        sys[95] = 'Ⅴ'
        sys[96] = 'Ⅵ'
        sys[97] = 'Ⅶ'
        sys[98] = 'Ⅷ'
        sys[99] = 'Ⅸ'
        sys[100] = '±'
        sys[101] = '∅'
        sys[102] = 'δ'
        sys[103] = 'ζ'
        sys[104] = 'λ'
        sys[105] = 'μ'
        sys[106] = 'ω'
        sys[107] = 'ξ'
        sys[108] = 'φ'
        sys[109] = 'ψ'
        sys[110] = '∈'
        sys[111] = '∩'
        sys[112] = '∪'
        sys[113] = '∧'
        sys[114] = '∨'
        sys[115] = '∨'
        sys[116] = '⊕'
        sys[117] = '⊙'
        sys[118] = '∫'
        sys[119] = '∬'
        sys[120] = '∭'
        sys[121] = '∮'
        sys[122] = '∯'
        sys[123] = '∰'
        sys[124] = '‰'
        sys[125] = '♯'
        sys[126] = '♭'
        sys[127] = '♮'
        sys[128] = '⑨'
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

    function toStringN(radix) {
        if (typeof radix != 'number') return this.toString()
        if (radix < 2 || radix > 128) throw new RangeError('toStringN() radix argument must be between 2 and 128')
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
        toStringN: { value: toStringN },
    })
})()