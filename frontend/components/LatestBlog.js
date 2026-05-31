'use client';

import { useEffect, useState } from 'react';

export default function LatestBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setBlogs((data.data || []).slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with fitness tips, nutrition advice, and gym news
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogs.map((blog) => (
              <article key={blog._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-accent text-white px-3 py-1 rounded-full capitalize">
                      {blog.category.replace('-', ' ')}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                  <a href={`/blog/${blog.slug}`} className="text-accent font-bold hover:underline">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center">
          <a href="/blog" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition font-bold">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
