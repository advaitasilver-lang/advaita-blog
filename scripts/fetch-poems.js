import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = "https://dev-advaitasilver.pantheonsite.io/wp-json/wp/v2";

async function fetchPoems() {
  try {
    console.log("Fetching poems from WordPress...");
    const res = await fetch(`${API_URL}/posts?_embed&per_page=100`);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch poems: ${res.statusText}`);
    }

    let posts = await res.json();
    posts = posts.filter(post => post.title.rendered !== "Hello world!");
    console.log(`Fetched ${posts.length} poems.`);

    const dataPath = path.resolve(__dirname, "../src/data/poems.json");
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(posts, null, 2));

    console.log("Successfully saved poems to src/data/poems.json");
  } catch (error) {
    console.error("Error fetching poems:", error);
    process.exit(1);
  }
}

fetchPoems();
