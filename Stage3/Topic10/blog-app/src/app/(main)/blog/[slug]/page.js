export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;

  // fetch data
  const blog = await fetch(`https://.../${slug}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    authors: blog.authors,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  console.log('slug', slug);

  return (
    <div>
      <h1 className="text-lime-50">BlogDetail {slug}</h1>
    </div>
  );
}
