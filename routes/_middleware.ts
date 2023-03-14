import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 605,
  site: "teste2",
  domains: ["teste2.deco.site"],
});