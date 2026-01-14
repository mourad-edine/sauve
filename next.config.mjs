/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Cela active l'export statique
  trailingSlash: true,  // Optionnel mais recommandé pour les hôtes statiques
  images: {
    unoptimized: true  // Désactive l'optimisation d'images Next.js (sinon ça nécessite un serveur)
  }
};

export default nextConfig;
