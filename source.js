import type from "@unction/type"
import xstream from "xstream"

export default function fresh (value: mixed): mixed {
  switch (type(value)) {
    case "String": {
      return ""
    }
    case "Array": {
      return []
    }
    case "Object": {
      return {}
    }
    case "Map": {
      return new Map()
    }
    case "WeakMap": {
      return new WeakMap()
    }
    case "Set": {
      return new Set()
    }
    case "WeakSet": {
      return new WeakSet()
    }
    case "Stream": {
      return xstream.never()
    }
    default: {
      throw new Error(`fresh doesn't know how to handle ${type(value)}`)
    }
  }
}
