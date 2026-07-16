const fs = require("fs");
const path = require("path");

const outputDir = path.join(process.cwd(), "src/content/test_news");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (let i = 1; i <= 200; i++) {
  const date = new Date(2026, 0, 1);
  date.setDate(date.getDate() + i - 1);

  const dateString = date.toISOString().split("T")[0];

  const content = `---
title: test${i}
date: ${dateString}
thumbnail:
---

これはテスト記事${i}です。


`;

  const fileName = `test${String(i).padStart(3, "0")}.md`;

  fs.writeFileSync(
    path.join(outputDir, fileName),
    content,
    "utf8"
  );
}

console.log("100 files generated.");
