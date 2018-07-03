# num2str
Convert numbers to different radix

## Api

**toStringN(radix: number) -> string**  
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

**toString2 -> string**  
*== toString(2)*
```javascript
(123456789).toString2()
"111010110111100110100010101"
```
**toString8 -> string**  
*== toString(8)*
```javascript
(123456789).toString8()
"726746425"
```
**toString16 -> string**  
*== toString(16)*
```javascript
(123456789).toString16()
"75bcd15"
```
**toString32 -> string**  
*== toString(32)*
```javascript
(123456789).toString32()
"3lnj8l"
```
**toString36 -> string**  
*== toString(36)*
```javascript
(123456789).toString36()
"21i3v9"
```
**toString62 -> string**  
*== toStringN(62)*
```javascript
(123456789).toString62()
"8m0Kx"
```
**toString64 -> string**  
*== toStringN(64)*
```javascript
(123456789).toString64()
"7mYQl"
```
**toString128 -> string**  
*== toStringN(128)*
```javascript
(123456789).toString128()
"WႢql"
```
**toString256 -> string**  
*== toStringN(256)*
```javascript
(123456789).toString256()
"7Ⅵᛚl"
```
**toString512 -> string**  
*== toStringN(512)*
```javascript
(123456789).toString512()
"䷖䷦ᛗ"
```