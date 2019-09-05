import type from "@unction/type";
import {empty} from "most";

export default function fresh<A> (value: A): A {
  switch (type(value)) {
    case "String": {
      return "";
    }

    case "Array": {
      return [];
    }

    case "Object": {
      return {};
    }

    case "Map": {
      return new Map();
    }

    case "Set": {
      return new Set();
    }

    case "Stream": {
      return empty();
    }

    default: {
      throw new Error(`fresh doesn't know how to handle ${type(value)}`);
    }
  }
}
