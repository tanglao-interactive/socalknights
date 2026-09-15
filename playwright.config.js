import { defineConfig } from "@playwright/test";

const externalBaseUrl = process.env.A11Y_BASE_URL?.replace(/\/$/, "");

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [["line"]],
  use: {
    baseURL: externalBaseUrl || "http://127.0.0.1:8080",
    trace: "retain-on-failure",
  },
  webServer: externalBaseUrl ? undefined : {
    command: "npm run start -- --port=8080",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
