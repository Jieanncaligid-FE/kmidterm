export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl shadow-md border bg-white dark:bg-gray-900 ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props} />
  );
}