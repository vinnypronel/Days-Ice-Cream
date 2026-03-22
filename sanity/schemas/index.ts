import { type SchemaTypeDefinition } from "sanity";
import flavorCategory from "./flavorCategory";
import flavor from "./flavor";
import toppingCategory from "./toppingCategory";
import topping from "./topping";
import hours from "./hours";
import event from "./event";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, hours, flavorCategory, flavor, toppingCategory, topping, event],
};
