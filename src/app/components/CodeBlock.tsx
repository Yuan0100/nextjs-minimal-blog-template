import { codeToHtml } from 'shiki';
import styles from './markdown-renderer.module.scss';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default async function CodeBlock({ children, className }: CodeBlockProps) {
  try {
    // 提取語言
    const language = className?.replace('language-', '') || 'text';
    
    // 使用新的 API 直接高亮代碼
    const highlighted = await codeToHtml(children.trim(), {
      lang: language,
      theme: 'nord',
    });

    return (
      <div 
        className={styles.shikiCodeBlock}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    );
  } catch (error) {
    console.error('Error highlighting code:', error);
    // 如果高亮失敗，使用原始代碼
    return (
      <pre className={styles.codeBlock}>
        <code>{children}</code>
      </pre>
    );
  }
}
