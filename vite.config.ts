import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixPWA } from '@remix-pwa/dev'

export default defineConfig({
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths(), remixPWA()],
});
