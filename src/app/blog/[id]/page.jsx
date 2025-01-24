import BlogPostCard from "@/components/BlogPostCard";
import { fetchPostById } from "@/lib/api";
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { id } = await params;
  const post = await fetchPostById(id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 bg-white">
        <h1 className="text-xl text-black font-bold">Post not found</h1>
        <p>
          It seems like the post you are looking for does not exist or could not
          be fetched.
        </p>
      </div>
    );
  }

  return (
    <div className="container bg-white mx-auto px-4 py-8">
      <h1 className="text-3xl mb-8 font-bold text-center ">Blog Details</h1>
      <BlogPostCard post={post} />
    </div>
  );
}
