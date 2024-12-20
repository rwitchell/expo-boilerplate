// eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
const { getDefaultConfig } = require('expo/metro-config')
// eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
const path = require('path')

// Find the project and workspace directories
// eslint-disable-next-line no-undef
const projectRoot = __dirname
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot]
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
]

// eslint-disable-next-line no-undef
module.exports = config
