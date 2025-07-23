import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import React from 'react';
import matter from 'gray-matter';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown-dark.css';

export const metadata: Metadata = {
  title: 'Blog Details | Aspect Blueprints',
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'public', 'blog', `${slug}.md`);
  let content = '';
  let data: any = {};
  try {
    const file = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(file);
    content = await marked.parse(parsed.content);
    data = parsed.data;
  } catch (e) {
    notFound();
  }

  return (
    <section className="pt-[120px] pb-[80px] bg-gray-50 dark:bg-gray-dark min-h-screen">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          {slug === 'c4-architecture-model' && (
            <img
              src="/images/blog/c4-architecture-hero.jpg"
              alt="Digital Transformation Hero"
              className="w-full max-h-96 object-cover rounded-lg mb-8"
            />
          )}
          {slug === 'togaf-scaled-agile-digital-programs' && (
            <img
              src="/images/blog/togaf-scaled-agile-hero.jpg"
              alt="Enterprise Architecture Hero"
              className="w-full max-h-96 object-cover rounded-lg mb-8"
            />
          )}
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            {data.title || slug.replace(/-/g, ' ')}
          </h1>
          {data.subtitle && (
            <h2 className="mb-4 text-xl md:text-2xl font-medium text-primary leading-tight">
              {data.subtitle}
            </h2>
          )}
          <div className="mb-8 flex flex-wrap items-center text-sm text-body-color dark:text-body-color-dark gap-4">
            {data.author && (
              <span className="font-semibold">By {data.author}</span>
            )}
            {data.date && (
              <span className="">{typeof data.date === 'string' ? data.date : data.date.toLocaleDateString()}</span>
            )}
          </div>
          <article className="markdown-body">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        </div>
      </div>
    </section>
  );
}
