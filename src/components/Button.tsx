export const Button = ({
  children,
  color = 'orange',
  className,
  onClick
}: {
  children: string,
  color?: "orange" | "black",
  className?: string,
  onClick?: () => void 
}) => {
  const colorClass = color === "orange" ? "bg-orange-400" : "bg-black";

  return (
    <button
      className={`text-white px-4 py-2 rounded-full ${colorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
  }