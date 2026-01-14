import { cn } from '@/lib/utils';

export const ComponentWrapper = ({
  title,
  className,
  ...props
}: React.ComponentProps<'div'> & { title?: string }) => {
  return (
    <div className="bg-background w-full max-w-screen min-w-0">
      {title && (
        <h2 className="text-2xl font-bold mx-auto px-4 sm:px-6 md:gap-8 lg:px-12 2xl:max-w-6xl">
          {title}
        </h2>
      )}
      <div
        data-slot="content-wrapper"
        className={cn(
          'mx-auto grid w-full max-w-5xl min-w-0 content-center items-start gap-8 p-6 pt-2 sm:gap-12 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-12 2xl:max-w-6xl',
          className
        )}
        {...props}
      />
    </div>
  );
};
