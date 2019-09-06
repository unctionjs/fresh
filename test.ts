/* eslint-disable no-magic-numbers */
import { of } from "most";
import {empty} from "most";
import streamSatisfies from "@unction/streamsatisfies";

import fresh from "./index";

test("Array (filled)", () => {
  expect(fresh(["a"])).toEqual([]);
});

test("Object (filled)", () => {
  expect(fresh({aaa: "aaa"})).toEqual({});
});

test("Set (filled)", () => {
  expect(fresh(new Set([1, 2, 3]))).toEqual(new Set());
});

test("Map (filled)", () => {
  expect(fresh(new Map([["a", "b"]]))).toEqual(new Map());
});

test("String (filled)", () => {
  expect(fresh("a")).toBe("");
});

test("Array (empty)", () => {
  expect(fresh([])).toEqual([]);
});

test("Object (empty)", () => {
  expect(fresh({})).toEqual({});
});

test("Set (empty)", () => {
  expect(fresh(new Set())).toEqual(new Set());
});

test("Map (empty)", () => {
  expect(fresh(new Map())).toEqual(new Map());
});

test("String (empty)", () => {
  expect(fresh("")).toBe("");
});

test("Stream (filled)", done => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => expect(given).toBe(expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      expect(length).toBe(size);
      done();
    }
  )(
    fresh(of("a"))
  );
});

test("Stream (empty)", done => {
  streamSatisfies(
    []
  )(
    (given) => (expected) => expect(given).toBe(expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      expect(length).toBe(size);
      done();
    }
  )(
    fresh(empty())
  );
});


test(() => {
  expect(() => fresh(0)).toThrowError(new Error("fresh doesn't know how to handle Number"));
});
