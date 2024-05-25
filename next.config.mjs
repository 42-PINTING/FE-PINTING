/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // node-loader 설정 추가
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // Node.js 네이티브 모듈을 번들에서 제외
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('canvas');
    }

    // 확장자 처리 추가
    config.resolve.extensions.push('.node');

    return config;
  },
};

export default nextConfig;
