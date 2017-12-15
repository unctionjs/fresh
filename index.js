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
    case "Set": {
      return new Set()
    }
    case "Stream": {
      return xstream.empty()
    }
    case "MemoryStream": {
      return xstream.empty().remember()
    }
    default: {
      throw new Error(`fresh doesn't know how to handle ${type(value)}`)
    }
  }
}
