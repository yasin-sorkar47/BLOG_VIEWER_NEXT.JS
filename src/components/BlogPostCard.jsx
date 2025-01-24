import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg transition hover:shadow-2xl hover:scale-105 transform bg-white">
      <Link href={`/blog/${post.id}`}>
        <div className="cursor-pointer space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition capitalize">
            {post.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 line-clamp-3 capitalize">
            {post.body}
          </p>
        </div>
      </Link>
    </div>
  );
}
