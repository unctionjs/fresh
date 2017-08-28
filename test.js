/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import xstream from "xstream"

import fresh from "./index"

test(({same, end}) => {
  same(
    fresh({aaa: "aaa"}),
    {}
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(["a"]),
    []
  )

  end()
})

test(({same, end}) => {
  same(
    fresh("a"),
    ""
  )

  end()
})

test(({same, end}) => {
  same(
    fresh({}),
    {}
  )

  end()
})

test(({same, end}) => {
  same(
    fresh([]),
    []
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(""),
    ""
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(new Set([1, 2, 3])),
    new Set()
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(xstream.of("a")),
    xstream.never()
  )

  end()
})

test(({same, end}) => {
  same(
    fresh(new Map([["a", "b"]])),
    new Map()
  )

  end()
})

test(({throws, end}) => {
  throws(
    () => fresh(0)
  )

  end()
})
