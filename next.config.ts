import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	images: {
		unoptimized: true, // Disable image optimization
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
