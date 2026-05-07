import { defineConfig } from '11ty.ts';

export default defineConfig((eleventyConfig) => {
  // Копіюємо assets та admin папки в output
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');

  // Додаємо фільтр для дати
  eleventyConfig.addFilter('ukDateFormat', function (dateObj) {
    const date = new Date(dateObj);
    return date.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Додаємо фільтр для сортування по даті
  eleventyConfig.addFilter('sortByDate', function (collection) {
    if (!collection) return [];
    return collection.sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date),
    );
  });

  // Додаємо колекцію для новин
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
