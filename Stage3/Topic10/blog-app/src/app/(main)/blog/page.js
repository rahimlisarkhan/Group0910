import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
  //   const posts = await getPosts();

  return (
    <div>
      <h1 className="text-lime-50">
        Blog
        {/* {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))} */}
      </h1>

      {/* <img
        src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&fit=700,466"
        alt="Flower"
      /> */}
      <br />

      <Image
        width={500}
        height={500}
        src="https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&fit=700,466"
        alt="Flower"
      />
    </div>
  );
}
