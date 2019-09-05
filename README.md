# @unction/fresh

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> A => A

Takes a value and returns an empty fresh version of that value.

``` javascript
fresh({aaa: "aaa"}) // {}
fresh(["aaa"]) // []
fresh({}) // {}
fresh([]) // []
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/fresh.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/fresh.svg?maxAge=2592000&style=flat-square
