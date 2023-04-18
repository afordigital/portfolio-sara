module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/resume': { page: '/resume' }
      // Agrega tus rutas aquí
    }
  }
}
