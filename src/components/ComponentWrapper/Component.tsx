import { cn } from '@/lib/utils';

export const ComponentContainer = ({
  title,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<'div'> & {
  title: string;
  containerClassName?: string;
}) => {
  return (
    <div
      data-slot="component"
      className={cn(
        'mx-auto flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none select-none',
        containerClassName
      )}
      {...props}
    >
      <div className="text-muted-foreground px-1.5 py-2 text-xs font-medium shrink-0">{title}</div>
      <div
        data-slot="component-wrapper"
        className={cn(
          "bg-background text-foreground flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed rounded-md sm:p-6 *:[div:not([class*='w-'])]:w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
