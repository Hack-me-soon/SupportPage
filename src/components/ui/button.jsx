export function Button({ children, className = '', ...props }) {
  return (
    <button className={`bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 ${className}`} {...props}>
      {children}
    </button>
  );
}