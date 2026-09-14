import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const districtsData = JSON.parse(fs.readFileSync(path.join(root, "src/_data/districts.json"), "utf8"));
const councils = districtsData.flatMap((district) => district.councils.map((council) => ({ ...council, district: district.number })));
const numbers = councils.map((council) => council.councilNumber);
const expectedDistricts = Array.from({ length: 21 }, (_, index) => 94 + index);

if (districtsData.length !== 21) throw new Error(`Expected 21 districts, found ${districtsData.length}`);
if (councils.length !== 74) throw new Error(`Expected 74 listed councils, found ${councils.length}`);
if (new Set(numbers).size !== numbers.length) throw new Error("Council numbers must be unique");
if (councils.filter((council) => council.locationVerified).length !== 64) throw new Error("Expected 64 verified approximate map locations");
if (districtsData.some((district) => !district.deputy || !Array.isArray(district.councils))) throw new Error("Every district must include a deputy and council list");
for (const council of councils) {
  for (const field of ["district", "councilNumber", "city", "locationVerified"]) if (council[field] === undefined || council[field] === "") throw new Error(`Council ${council.councilNumber} is missing ${field}`);
  if (council.locationVerified && (!Number.isFinite(council.latitude) || !Number.isFinite(council.longitude))) throw new Error(`Council ${council.councilNumber} has an unverified map location`);
}
const districts = [...new Set(councils.map((council) => council.district))].sort((a, b) => a - b);
if (JSON.stringify(districts) !== JSON.stringify(expectedDistricts)) throw new Error(`Unexpected districts: ${districts.join(", ")}`);

const publicFiles = ["src/_data/districts.json", "_site/councils/index.html"];
for (const publicFile of publicFiles) {
  const contents = fs.readFileSync(path.join(root, publicFile), "utf8");
  for (const forbidden of ["membershipNumber", "phoneNumber", "emailAddress", "District 173"]) {
    if (contents.includes(forbidden)) throw new Error(`${publicFile} contains forbidden public data: ${forbidden}`);
  }
}

for (const required of ["index.html", "about/index.html", "leadership/index.html", "councils/index.html", "programs/index.html", "events/index.html", "announcements/index.html", "gallery/index.html", "resources/index.html", "join/index.html", "contact/index.html", "privacy/index.html", "404.html", "sitemap.xml", "robots.txt", "CNAME"]) {
  if (!fs.existsSync(path.join(root, "_site", required))) throw new Error(`Missing build output: ${required}`);
}

const eventPage = fs.readFileSync(path.join(root, "_site/events/district-deputy-mid-term-meeting-2027/index.html"), "utf8");
for (const requiredEventText of ["District Deputy Mid-Term Meeting", "January 8–10, 2027", "Visalia Convention Center", "Visalia, California"]) {
  if (!eventPage.includes(requiredEventText)) throw new Error(`Event page is missing: ${requiredEventText}`);
}
if (!fs.existsSync(path.join(root, "_site/assets/img/events/district-deputy-mid-term-meeting-2027.webp"))) throw new Error("Event flyer was not copied to the build");

console.log("Validated 21 districts, 74 unique listed councils, privacy rules, and all required build outputs.");
