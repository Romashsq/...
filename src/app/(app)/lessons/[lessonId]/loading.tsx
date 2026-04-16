function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-white/5 rounded-lg animate-pulse ${className ?? ""}`} />;
}

export default function LessonLoading() {
  return (
    <div className="max-w-4xl mx-auto">
      <Skeleton className="h-4 w-64 mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <article className="lg:col-span-3 space-y-4">
          <div className="flex gap-3 mb-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </article>
        <aside className="lg:col-span-1 space-y-4">
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </aside>
      </div>
    </div>
  );
}
