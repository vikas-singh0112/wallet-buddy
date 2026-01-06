import type { NextConfig } from "next";
const localOrigin = process.env.ALLOWED_ORIGIN_local || "http://localhost:3000"

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [localOrigin],
};

export default nextConfig;
