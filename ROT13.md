## ROT13 - Cipher Encryption and Decryption algorithm

### LHD Build : Day 4

### Basic idea of ROT-13 is to rotate the word after 13th word of alphabet.

`For example :-`

```js
MATH
M = 13
A = 1
T = 20
H = 8
```
`Encryption implementation`

```js
M + 13 i.e, 13 + 13 = 26 = Z
A + 13 i.e, 1 + 13 = 14 = N
T + 13 i.e, 20 + 13 = 33 --------> it crosses the limit i.e, 26 hance 33-26 = 7 = G
H + 13 i.e, 8 + 13 = 21 = U
```
`Result`

**Hence MATH is encrypted to ZNGU**

`Decryption implementation`
```js
Decryption is also same as encryption
Just subtract 13 where we have added 13 in encryption
if it goes negative, for example G = 7 and 7-13 = -6.....just do the following 26 - absoluteValueOf(-6) = 26-6 = 20 = T
```

`Result`

**Hence ZNGU is decrypted back to MATH**