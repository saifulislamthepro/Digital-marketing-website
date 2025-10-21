/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.smartgenbd.net', // Replace with your actual domain
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard'],
};