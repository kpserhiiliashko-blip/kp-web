import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import { defineConfig } from '11ty.ts';

export default defineConfig((eleventyConfig) => {
  // Include dirs in the final output build
  eleventyConfig.addPassthroughCopy({ 'src/_assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/_admin': 'admin' });
  eleventyConfig.ignores.add('src/_admin/**');

  // optimize images
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output formats
    formats: ['webp', 'auto'],
    // output widths
    widths: ['auto'],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
      pictureAttributes: {},
    },

    sharpOptions: {
      animated: true,
    },
  });

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter('isoDate', function (dateObj) {
    if (!dateObj) return '';
    const date = new Date(dateObj);
    return date.toISOString().split('T')[0];
  });

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
      .getFilteredByGlob('src/content/news/**/*.md')
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });
  eleventyConfig.addCollection('documents', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/content/documents/**/*.md')
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });
  eleventyConfig.addCollection('services', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/content/services/**/*.md')
      .sort((a, b) => a.data.name.localeCompare(b.data.name));
  });
  eleventyConfig.addCollection('tariffs', function (collectionApi) {
    return collectionApi
      .getFilteredByGlob('src/content/tariffs/**/*.md')
      .sort((a, b) => a.data.name.localeCompare(b.data.name));
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
