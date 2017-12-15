/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import xstream from "xstream"
import streamSatisfies from "@unction/streamsatisfies"

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

test(({equal, end}) => {
  equal(
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

test(({equal, end}) => {
  equal(
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
    fresh(new Map([["a", "b"]])),
    new Map()
  )

  end()
})

test("Stream", ({equal, end}) => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => equal(given, expected)
  )(
    end
  )(
    ({length}) => (size) => {
      equal(length, size)

      end()
    }
  )(
    fresh(xstream.of("a"))
  )
})

test("MemoryStream", ({equal, end}) => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => equal(given, expected)
  )(
    end
  )(
    ({length}) => (size) => {
      equal(length, size)

      end()
    }
  )(
    fresh(xstream.of("x").startWith("a"))
  )
})


test(({throws, end}) => {
  throws(() => fresh(0), new Error("fresh doesn't know how to handle Number"))

  end()
})
