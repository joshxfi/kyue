import Link, { LinkProps } from "next/link";

type ButtonProps<T extends string | (() => void)> = {
  dark?: boolean;
  action: T;
  className?: string;
  children: React.ReactNode;
} & (T extends string
  ? Omit<LinkProps, "href">
  : React.ButtonHTMLAttributes<HTMLButtonElement>);

export function Button<T extends string | (() => void)>({
  dark,
  action,
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  return (
    <div className={className}>
      {typeof action === "function" ? (
        <button
          onClick={action}
          type="button"
          className={`rounded-md lg:px-8 lg:py-4 px-6 py-3 font-medium ${
            dark
              ? "bg-zinc-900 text-white border border-zinc-800"
              : "bg-white text-zinc-800"
          }`}
          {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      ) : (
        typeof action === "string" && (
          <Link
            href={action}
            className={`rounded-md lg:px-8 lg:py-4 px-6 py-3 font-medium ${
              dark
                ? "bg-zinc-900 text-white border border-zinc-800"
                : "bg-white text-zinc-800"
            }`}
            {...(rest as Omit<LinkProps, "href">)}
          >
            {children}
          </Link>
        )
      )}
    </div>
  );
}
