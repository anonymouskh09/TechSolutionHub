interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-muted pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
