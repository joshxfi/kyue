type Props = {
  className?: string;
  children: React.ReactNode;
};

export function Subtitle({ className, children }: Props) {
  return (
    <h2
      className={`font-bosch uppercase ml-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-100 to-60% ${className}`}
    >
      {children}
    </h2>
  );
}
