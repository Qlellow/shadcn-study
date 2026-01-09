import type { Components } from 'react-markdown';
import { cn } from '@/lib/utils';

export const markdownComponents: Components = {
  // 제목 태그들
  h1: ({ children, className, ...props }) => (
    <h1
      className={cn('text-2xl font-bold mt-6 mb-4 text-foreground', className)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2
      className={cn('text-xl font-semibold mt-5 mb-3 text-foreground', className)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3
      className={cn('text-lg font-semibold mt-4 mb-2 text-foreground', className)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4
      className={cn('text-base font-semibold mt-3 mb-2 text-foreground', className)}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5
      className={cn('text-sm font-semibold mt-3 mb-2 text-foreground', className)}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, className, ...props }) => (
    <h6
      className={cn('text-xs font-semibold mt-2 mb-1 text-foreground', className)}
      {...props}
    >
      {children}
    </h6>
  ),

  // 단락
  p: ({ children, className, ...props }) => (
    <p className={cn('my-2 text-foreground leading-relaxed', className)} {...props}>
      {children}
    </p>
  ),

  // 리스트
  ul: ({ children, className, ...props }) => (
    <ul
      className={cn('list-disc list-outside space-y-1 my-2 ml-6', className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }) => (
    <ol
      className={cn('list-decimal list-outside space-y-1 my-2 ml-6', className)}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }) => (
    <li className={cn('text-muted-foreground pl-2', className)} {...props}>
      {children}
    </li>
  ),

  // 인용구
  blockquote: ({ children, className, ...props }) => (
    <blockquote
      className={cn(
        'border-l-4 border-border pl-4 py-2 my-4 italic text-muted-foreground bg-muted/50 rounded-r',
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),

  // 코드
  code: ({ children, className, inline, ...props }: any) => {
    if (inline !== false) {
      // 인라인 코드
      return (
        <code
          className={cn(
            'px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-foreground break-words',
            className
          )}
          {...props}
        >
          {children}
        </code>
      );
    }
    // 블록 코드 (pre 안에 있는 경우)
    return (
      <code
        className={cn(
          'block p-0 bg-transparent text-sm font-mono text-foreground',
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, className, ...props }) => (
    <pre
      className={cn(
        'p-4 rounded-lg bg-muted overflow-x-auto my-4 text-sm font-mono',
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),

  // 강조
  strong: ({ children, className, ...props }) => (
    <strong className={cn('font-semibold text-foreground', className)} {...props}>
      {children}
    </strong>
  ),
  em: ({ children, className, ...props }) => (
    <em className={cn('italic text-foreground', className)} {...props}>
      {children}
    </em>
  ),
  del: ({ children, className, ...props }) => (
    <del className={cn('line-through text-muted-foreground', className)} {...props}>
      {children}
    </del>
  ),

  // 링크
  a: ({ href, children, className, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('text-primary hover:underline', className)}
      {...props}
    >
      {children}
    </a>
  ),

  // 구분선
  hr: ({ className, ...props }) => (
    <hr className={cn('my-6 border-border', className)} {...props} />
  ),

  // 이미지
  img: ({ src, alt, className, ...props }) => (
    <img
      src={src}
      alt={alt}
      className={cn('max-w-full h-auto rounded-lg my-4', className)}
      {...props}
    />
  ),

  // 테이블
  table: ({ children, className, ...props }) => (
    <div className="overflow-x-auto my-4">
      <table
        className={cn('w-full border-collapse border border-border rounded-lg', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, className, ...props }) => (
    <thead className={cn('bg-muted', className)} {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, className, ...props }) => (
    <tbody className={cn('', className)} {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, className, ...props }) => (
    <tr className={cn('border-b border-border', className)} {...props}>
      {children}
    </tr>
  ),
  th: ({ children, className, ...props }) => (
    <th
      className={cn('px-4 py-2 text-left font-semibold text-foreground', className)}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, className, ...props }) => (
    <td className={cn('px-4 py-2 text-muted-foreground', className)} {...props}>
      {children}
    </td>
  ),

  // 줄바꿈
  br: ({ className, ...props }) => <br className={className} {...props} />,
};
