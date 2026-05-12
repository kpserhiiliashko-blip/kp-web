import { defineConfig } from '11ty.ts';

export default defineConfig((eleventyConfig) => {
  // Include dirs in the final output build
  eleventyConfig.addPassthroughCopy({ 'src/_assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_admin': 'admin' });
  eleventyConfig.ignores.add('src/_admin/**');

  eleventyConfig.addFilter('dmyDateFormat', function (dateObj) {
    const date = new Date(dateObj);
    return date.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // hang out with data collections
  eleventyConfig.addCollection('news', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/news/**/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });
  eleventyConfig.addCollection('documents', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/documents/**/*.md')
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  return {
    dir: {
      data: '_data',
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
});
