import BlogPostCard from "@/components/BlogPostCard";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <>
      <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold underline mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 10).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
