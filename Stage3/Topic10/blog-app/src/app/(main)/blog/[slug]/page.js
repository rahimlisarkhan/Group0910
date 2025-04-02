export default async function BlogDetail({ params }) {
  const { slug } = await params;

  console.log('slug', slug);

  return (
    <div>
      <h1 className="text-lime-50">BlogDetail {slug}</h1>
    </div>
  );
}
