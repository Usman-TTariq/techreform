import BlogBlocksRenderer, { TableFromMarkdown } from "../blog-blocks-renderer";

const proseClass =
  "prose prose-invert prose-lg max-w-none font-britanicaRegular text-gray-300 text-[20px]";

function BlogBlocks({ blocks, className = "" }) {
  if (!blocks?.length) return null;
  return (
    <div className={`${proseClass} ${className}`}>
      <BlogBlocksRenderer blocks={blocks} />
    </div>
  );
}

function BlogTable({ markdown, className = "" }) {
  if (!markdown) return null;
  return <TableFromMarkdown markdown={markdown} className={className} />;
}

/**
 * Renders blog body in Strapi field order:
 * Desc → table → secondDesc → table2 → thirdDesc → table3 → forthDesc
 */
export default function BlogArticleBody({ article }) {
  const hasLegacyStringContent =
    article.content && !Array.isArray(article.content);

  return (
    <>
      {hasLegacyStringContent && (
        <div className={proseClass}>
          <div className="whitespace-pre-line">{article.content}</div>
        </div>
      )}
      {!hasLegacyStringContent && (
        <BlogBlocks blocks={article.content} />
      )}
      <BlogTable markdown={article.table} />
      <BlogBlocks blocks={article.secondDesc} className="mt-8" />
      <BlogTable markdown={article.table2} className="mt-8" />
      <BlogBlocks blocks={article.thirdDesc} className="mt-8" />
      <BlogTable markdown={article.table3} className="mt-8" />
      <BlogBlocks blocks={article.forthDesc} className="mt-8" />
    </>
  );
}
