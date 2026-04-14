interface LoadingCardsProps {
  count?: number;
}

export function LoadingCards({ count = 3 }: LoadingCardsProps) {
  return (
    <div className="grid-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="surface-card skeleton min-h-[260px] rounded-[22px]" />
      ))}
    </div>
  );
}
