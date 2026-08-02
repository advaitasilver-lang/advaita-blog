const API_URL = "https://public-api.wordpress.com/wp/v2/sites/advaitasilver.wordpress.com";

// If the above URL does not work, we can fallback to the standard REST API
// const API_URL = "https://advaitasilver.wordpress.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:term"?: Array<Array<{ name: string; slug: string; taxonomy: string }>>;
  };
}

export async function fetchPoems(): Promise<WPPost[]> {
  try {
    const res = await fetch(`${API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      console.error("Failed to fetch poems:", res.statusText);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching poems:", error);
    return [];
  }
}

export async function fetchPoemBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch poem:", res.statusText);
      return null;
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching poem by slug:", error);
    return null;
  }
}

export function extractReadingTime(content: string): string {
  const words = content.replace(/<[^>]*>?/gm, "").split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
