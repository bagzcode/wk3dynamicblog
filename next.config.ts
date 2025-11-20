import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves the correct workspace root when multiple lockfiles are present
  // This points Turbopack to the repository root directory.
  turbopack: {
    root: path.resolve(__dirname)
  } as unknown as NextConfig['turbopack'],
};

export default nextConfig;
