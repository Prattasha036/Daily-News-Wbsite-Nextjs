import { NewsItem } from "@/types/news";
import Image from "next/image";

// ISR (revalidate)
export const revalidate = 60;

// dynamic params allow
export const dynamicParams = true;

// Pre-generate some pages
export async function generateStaticParams() {
  const posts: NewsItem[] = await fetch(
    "https://news-portal-api-data.onrender.com/api/news",
  ).then((res) => res.json());

  return posts.slice(0, 5).map((post) => ({
    id: String(post._id),
  }));
}

// Main Page
const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const post = await fetch(
    `https://news-portal-api-data.onrender.com/api/news/${id}`,
    {
      cache: "no-store", // important for render free tier
    },
  ).then((res) => res.json());

  // Date fix
  const formattedDate = post?.published_at
    ? new Date(post.published_at).toLocaleDateString()
    : "Unknown Date";

  return (
    <section className="py-12 px-4">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        {/* Image */}
        {post?.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-md object-cover w-full h-100"
          />
        )}

        {/* Title + Meta */}
        <div className="my-5">
          <h2 className="text-3xl font-bold mb-4">{post?.title}</h2>

          <div className="flex justify-between items-center text-sm mb-4 text-gray-500">
            <p>{formattedDate}</p>
            <p>
              Source: <span>{post?.source || "Unknown"}</span>
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          {post?.categories?.map((category: string) => (
            <span
              key={category}
              className="bg-blue-100 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Content */}
        <p className="mb-2 text-lg">{post?.snippet}</p>
        <p className="mb-4 text-gray-700">{post?.description}</p>

        {/* Extra dummy content */}
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          fugit, adipisci commodi ea alias voluptatibus consequuntur neque nulla
          ex dicta reiciendis cupiditate quisquam quae. Vitae provident fugit
          officia fuga ipsam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam laboriosam perspiciatis ad labore repudiandae quis,
          accusamus inventore.
        </p>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
