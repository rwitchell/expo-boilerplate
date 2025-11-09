import type { StorybookConfig } from '@storybook/react-native-web-vite';

import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  //return dirname(require.resolve(join(value, 'package.json')))
  return value
}
const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-docs')
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-native-web-vite'),
    "options": {}
  },
  viteFinal: async (config, { configType }) => {
    // Configure esbuild to handle JSX in .mjs files for dev mode (optimizeDeps)
    if (config.optimizeDeps) {
      config.optimizeDeps.esbuildOptions = {
        ...config.optimizeDeps.esbuildOptions,
        loader: {
          '.js': 'jsx',
          '.mjs': 'jsx',
          ...config.optimizeDeps.esbuildOptions?.loader,
        },
      }
    } else {
      config.optimizeDeps = {
        esbuildOptions: {
          loader: {
            '.js': 'jsx',
            '.mjs': 'jsx',
          },
        },
      }
    }

    // Use default babel config without custom plugins to avoid conflicts

    // Configure CSS processing for Tailwind
    config.css = {
      ...config.css,
      postcss: {
        plugins: [
          require('tailwindcss')({
            config: join(__dirname, '../tailwind.config.js')
          }),
          require('autoprefixer')
        ],
      },
    }

    // Ensure React Native components work properly with React Native Web
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'react-native$': 'react-native-web',
      },
    }

    return config
  }
};
export default config;