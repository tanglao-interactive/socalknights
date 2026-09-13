export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("eventDate", (value) =>
    new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "America/Los_Angeles" }).format(new Date(`${value}T12:00:00`))
  );

  eleventyConfig.addCollection("upcomingEvents", (collectionApi) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return collectionApi.getFilteredByTag("event")
      .filter((item) => new Date(`${item.data.date}T23:59:59`) >= today)
      .sort((a, b) => a.data.date.localeCompare(b.data.date));
  });

  eleventyConfig.addCollection("pastEvents", (collectionApi) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return collectionApi.getFilteredByTag("event")
      .filter((item) => new Date(`${item.data.date}T23:59:59`) < today)
      .sort((a, b) => b.data.date.localeCompare(a.data.date));
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
