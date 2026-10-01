export function partitionAnnouncements(items, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric", month: "2-digit", day: "2-digit"
  }).format(now);
  const current = [];
  const archived = [];
  for (const item of items) {
    const lastActiveDate = item.data.archiveAfter || item.data.date;
    (lastActiveDate >= today ? current : archived).push(item);
  }
  const byDate = (a, b) => a.data.date.localeCompare(b.data.date) || a.data.title.localeCompare(b.data.title);
  current.sort(byDate);
  archived.sort((a, b) => b.data.date.localeCompare(a.data.date) || a.data.title.localeCompare(b.data.title));
  return { current, archived };
}
