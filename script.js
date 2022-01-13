/*
Basic idea of ROT-13 is to rotate the word after 13th word of alphabet
For example :- 
MATH
M = 13
A = 1
T = 20
H = 8

M + 13 i.e, 13 + 13 = 26 = Z
A + 13 i.e, 1 + 13 = 14 = N
T + 13 i.e, 20 + 13 = 33 --------> it crosses the limit i.e, 26 hance 33-26 = 7 = G
H + 13 i.e, 8 + 13 = 21 = U

Hence MATH is encrypted to ZNGU

Decryption is also same as encryption
Just subtract 13 where we have added 13 in encryption
if it goes negative, for example G = 7 and 7-13 = -6.....just do the following 26 - absoluteValueOf(-6) = 26-6 = 20 = T

Hence ZNGU is decrypted back to MATH

*/
function rot13(c) {
    return c.replace(/([a-m])|([n-z])/ig, function($0,$1,$2) {
        return String.fromCharCode($1 ? $1.charCodeAt(0) + 13 : $2 ? $2.charCodeAt(0) - 13 : 0) || $0;
    });
}
console.log(rot13("ABJURER nowhere"))