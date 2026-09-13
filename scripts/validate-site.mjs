import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const councils = JSON.parse(fs.readFileSync(path.join(root, "src/_data/councils.json"), "utf8"));
const numbers = councils.map((council) => council.councilNumber);
const expectedDistricts = [94, 95, 96, 97, 98, 99];

if (councils.length !== 24) throw new Error(`Expected 24 councils, found ${councils.length}`);
if (new Set(numbers).size !== numbers.length) throw new Error("Council numbers must be unique");
for (const council of councils) {
  for (const field of ["district", "councilNumber", "name", "city", "address", "latitude", "longitude", "mapsUrl", "source"]) {
    if (council[field] === undefined || council[field] === "") throw new Error(`Council ${council.councilNumber} is missing ${field}`);
  }
}
const districts = [...new Set(councils.map((council) => council.district))].sort();
if (JSON.stringify(districts) !== JSON.stringify(expectedDistricts)) throw new Error(`Unexpected districts: ${districts.join(", ")}`);

for (const required of ["index.html", "about/index.html", "leadership/index.html", "councils/index.html", "programs/index.html", "events/index.html", "announcements/index.html", "gallery/index.html", "resources/index.html", "join/index.html", "contact/index.html", "privacy/index.html", "404.html", "sitemap.xml", "robots.txt", "CNAME"]) {
  if (!fs.existsSync(path.join(root, "_site", required))) throw new Error(`Missing build output: ${required}`);
}

console.log("Validated 24 unique councils, Districts 94–99, and all required build outputs.");
