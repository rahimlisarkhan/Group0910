export default function BlogLayout({ children }) {
  return (
    <section>
      <div className="text-emerald-300">Hello Blog</div>
      <nav></nav>
      {children}
    </section>
  );
}
