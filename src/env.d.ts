declare namespace NodeJS {
  interface ProcessEnv {
    readonly ANALYZE?: string;
    readonly LOGTO_APP_ID?: string;
    readonly LOGTO_APP_SECRET?: string;
    readonly LOGTO_BASE_URL?: string;
    readonly LOGTO_COOKIE_SECRET?: string;
    readonly LOGTO_ENDPOINT?: string;
  }
}
