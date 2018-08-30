# num2str
Convert numbers to different radix

## Usage
```typescript
import { toStringN } from 'num2str'

toStringN(Math.PI, 62)
//> "3.8MhuCIRz21"
```
or
```typescript
import { enablePrototype } from 'num2str'
enablePrototype()

Math.PI.toStringN(62)
//> "3.8MhuCIRz21"
```
In the browser
```html
<script src="./path/to/num2str.js"></script>
<script>
    console.log(num2str.toStringN(32, 32))
    //> "10"
    num2str.enablePrototype()
    console.log(Math.PI.toStringN(62))
    //> "3.8MhuCIRz21"
</script>
```
## Api

**enablePrototype -> void**  
Add a function to the prototype of Number

---

**toStringN(num: number, radix: number) -> string**  
- *`radix` < 512 or `radix` > 2*
```javascript
toStringN((Math.PI, 36)
"3.53i5ab8p5fc"

toStringN((Math.PI, 62)
"3.8MhuCIRz21"

toStringN((Math.PI, 64)
"3.93ZGy8mz"

toStringN(Math.PI, 128)
"3.ifႠE(m/"

toStringN(123456789, 62)
"8m0Kx"

toStringN(123456789, 123)
"&GxⅤ"

toStringN(123456789, 256)
"7Ⅵᛚl"
```

**toString2(num: number) -> string**  
*== toString(2)*
```javascript
toString2(123456789)
"111010110111100110100010101"
```
**toString8(num: number) -> string**  
*== toString(8)*
```javascript
toString8(123456789)
"726746425"
```
**toString16(num: number) -> string**  
*== toString(16)*
```javascript
toString16(123456789)
"75bcd15"
```
**toString32(num: number) -> string**  
*== toString(32)*
```javascript
toString32(123456789)
"3lnj8l"
```
**toString36(num: number) -> string**  
*== toString(36)*
```javascript
toString36(123456789)
"21i3v9"
```
**toString62(num: number) -> string**  
*== toStringN(62)*
```javascript
toString62(123456789)
"8m0Kx"
```
**toString64(num: number) -> string**  
*== toStringN(64)*
```javascript
toString64(123456789)
"7mYQl"
```
**toString128(num: number) -> string**  
*== toStringN(128)*
```javascript
toString128(123456789)
"WႢql"
```
**toString256(num: number) -> string**  
*== toStringN(256)*
```javascript
toString256(123456789)
"7Ⅵᛚl"
```
**toString512(num: number) -> string**  
*== toStringN(512)*
```javascript
toString512(123456789)
"䷖䷦ᛗ"
```
---

**Number.rototype.toStringN(radix: number) -> string**  
- *`radix` < 512 or `radix` > 2*
```javascript
Math.PI.toStringN(36)
"3.53i5ab8p5fc"

Math.PI.toStringN(62)
"3.8MhuCIRz21"

Math.PI.toStringN(64)
"3.93ZGy8mz"

Math.PI.toStringN(128)
"3.ifႠE(m/"

(123456789).toStringN(62)
"8m0Kx"

(123456789).toStringN(123)
"&GxⅤ"

(123456789).toStringN(256)
"7Ⅵᛚl"
```

**Number.rototype.toString2 -> string**  
*== toString(2)*
```javascript
(123456789).toString2()
"111010110111100110100010101"
```
**Number.rototype.toString8 -> string**  
*== toString(8)*
```javascript
(123456789).toString8()
"726746425"
```
**Number.rototype.toString16 -> string**  
*== toString(16)*
```javascript
(123456789).toString16()
"75bcd15"
```
**Number.rototype.toString32 -> string**  
*== toString(32)*
```javascript
(123456789).toString32()
"3lnj8l"
```
**Number.rototype.toString36 -> string**  
*== toString(36)*
```javascript
(123456789).toString36()
"21i3v9"
```
**Number.rototype.toString62 -> string**  
*== toStringN(62)*
```javascript
(123456789).toString62()
"8m0Kx"
```
**Number.rototype.toString64 -> string**  
*== toStringN(64)*
```javascript
(123456789).toString64()
"7mYQl"
```
**Number.rototype.toString128 -> string**  
*== toStringN(128)*
```javascript
(123456789).toString128()
"WႢql"
```
**Number.rototype.toString256 -> string**  
*== toStringN(256)*
```javascript
(123456789).toString256()
"7Ⅵᛚl"
```
**Number.rototype.toString512 -> string**  
*== toStringN(512)*
```javascript
(123456789).toString512()
"䷖䷦ᛗ"
```