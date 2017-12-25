/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"
import {of} from "most"
import {empty} from "most"
import streamSatisfies from "@unction/streamsatisfies"

import fresh from "./index"

test("Array (filled)", ({same, end}) => {
  same(
    fresh(["a"]),
    []
  )

  end()
})

test("Object (filled)", ({same, end}) => {
  same(
    fresh({aaa: "aaa"}),
    {}
  )

  end()
})

test("Set (filled)", ({same, end}) => {
  same(
    fresh(new Set([1, 2, 3])),
    new Set()
  )

  end()
})

test("Map (filled)", ({same, end}) => {
  same(
    fresh(new Map([["a", "b"]])),
    new Map()
  )

  end()
})

test("String (filled)", ({equal, end}) => {
  equal(
    fresh("a"),
    ""
  )

  end()
})

test("Array (empty)", ({same, end}) => {
  same(
    fresh([]),
    []
  )

  end()
})

test("Object (empty)", ({same, end}) => {
  same(
    fresh({}),
    {}
  )

  end()
})

test("Set (empty)", ({same, end}) => {
  same(
    fresh(new Set()),
    new Set()
  )

  end()
})

test("Map (empty)", ({same, end}) => {
  same(
    fresh(new Map()),
    new Map()
  )

  end()
})

test("String (empty)", ({equal, end}) => {
  equal(
    fresh(""),
    ""
  )

  end()
})

test("Stream (filled)", ({equal, doesNotThrow, end}) => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => equal(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      equal(length, size)
      end()
    }
  )(
    fresh(of("a"))
  )
})

test("Stream (empty)", ({equal, doesNotThrow, end}) => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => equal(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      equal(length, size)
      end()
    }
  )(
    fresh(empty())
  )
})


test(({throws, end}) => {
  throws(() => fresh(0), new Error("fresh doesn't know how to handle Number"))

  end()
})
