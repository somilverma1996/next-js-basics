export async function getBlogPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
  
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error fetching blog posts:', error.message);
      return []; // Return an empty array or handle the error as appropriate for your application
    }
  }