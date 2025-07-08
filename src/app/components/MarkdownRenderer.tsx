import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Components } from 'react-markdown';
import styles from './markdown-renderer.module.scss';
import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// 自定義組件樣式
const markdownComponents: Components = {
  // 標題
  h1: ({ children }) => (
    <h1 className={styles.h1}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className={styles.h2}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className={styles.h3}>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className={styles.h4}>
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className={styles.h5}>
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className={styles.h6}>
      {children}
    </h6>
  ),

  // 段落
  p: ({ children }) => (
    <p className={styles.paragraph}>
      {children}
    </p>
  ),

  // 連結
  a: ({ href, children }) => (
    <a 
      href={href}
      className={styles.link}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  // 列表
  ul: ({ children }) => (
    <ul className={styles.unorderedList}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className={styles.orderedList}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className={styles.listItem}>
      {children}
    </li>
  ),

  // 引用
  blockquote: ({ children }) => (
    <blockquote className={styles.blockquote}>
      {children}
    </blockquote>
  ),

  // 程式碼
  code: ({ children, className }) => {
    const isBlock = className?.includes('language-');
    
    if (isBlock) {
      return (
        <CodeBlock className={className}>
          {String(children)}
        </CodeBlock>
      );
    }
    
    return (
      <code className={styles.inlineCode}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => {
    // 如果是代碼塊，讓 CodeBlock 組件處理
    return <>{children}</>;
  },

  // 表格
  table: ({ children }) => (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className={styles.tableHead}>
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className={styles.tableBody}>
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr>
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className={styles.tableHeaderCell}>
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className={styles.tableCell}>
      {children}
    </td>
  ),

  // 分隔線
  hr: () => (
    <hr className={styles.horizontalRule} />
  ),

  // 圖片
  img: ({ src, alt }) => (
    <img 
      src={src} 
      alt={alt} 
      className={styles.image}
    />
  ),

  // 刪除線（GFM）
  del: ({ children }) => (
    <del className={styles.strikethrough}>
      {children}
    </del>
  ),
};

export default function MarkdownRenderer({ 
  content, 
  className = "" 
}: MarkdownRendererProps) {
  return (
    <div className={`${styles.markdownRenderer} ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
