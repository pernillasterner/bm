type HeadingProps = {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  as?: "h1" | "h2" | "h3";
  className?: string
}


export default function Heading({
  children,
  size = "lg",
  as: Tag = "h1",
  className = "",
} : HeadingProps) {
  const sizeClasses = {
    lg: "text-7xl sm:text-[5rem] tracking-[0.03em] leading-[1]",
    md: "text-4xl sm:text-[2.5] leading-tight",
    sm: "text-2xl",
  }

  return (
    <Tag className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Tag>
  )
};
