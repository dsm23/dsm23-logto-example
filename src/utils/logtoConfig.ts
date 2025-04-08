import type { LogtoNextConfig } from "@logto/next";

export const logtoConfig: LogtoNextConfig = {
  appId: process.env.LOGTO_APP_ID ?? "",
  appSecret: process.env.LOGTO_APP_SECRET,
  baseUrl: process.env.LOGTO_BASE_URL ?? "",
  // `sessionWrapper` or `encryptionKey` must be provided for `CookieStorage`. Truthy string required
  cookieSecret: process.env.LOGTO_COOKIE_SECRET ?? " ",
  cookieSecure: process.env.NODE_ENV === "production",
  endpoint: process.env.LOGTO_ENDPOINT ?? "",
};
