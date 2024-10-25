import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(
    async () =>
      (await import("./components/navigation/NavigationItem")).NavigationItem
  ),
  {
    name: "NavigationItem",
    inputs: [
      {
        name: "href",
        type: "string",
        required: true,
      },
      {
        name: "icon",
        type: "string",
        required: true,
      },
      {
        name: "isActive",
        type: "boolean",
      },
      {
        name: "label",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(
    async () => (await import("./components/navigation/Navigation")).Navigation
  ),
  {
    name: "Navigation",
  }
);

Builder.registerComponent(
  dynamic(
    async () =>
      (await import("./components/navigation/UserProfile")).UserProfile
  ),
  {
    name: "UserProfile",
    inputs: [
      {
        name: "avatarUrl",
        type: "string",
        required: true,
      },
      {
        name: "settingsIconUrl",
        type: "string",
        required: true,
      },
    ],
  }
);
