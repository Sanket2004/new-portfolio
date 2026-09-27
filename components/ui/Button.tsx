import { LoaderCircle } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

export type ButtonSize =
  | "default"
  | "sm"
  | "lg"
  | "icon"
  | "icon-sm"
  | "icon-lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-foreground text-background hover:opacity-85",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline:
    "border border-dashed border-border bg-accent/50 hover:bg-accent hover:text-accent-foreground",
  ghost: "bg-transparent text-foreground hover:bg-accent/60",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
  link: "h-auto px-0 text-foreground underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "size-10 p-0",
  "icon-sm": "size-8 p-0",
  "icon-lg": "size-12 p-0",
};

export default function Button({
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  leftIcon,
  loading = false,
  loadingText,
  rightIcon,
  size = "default",
  type = "button",
  variant = "default",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const content = loading ? (loadingText ?? children) : children;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {loading ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {content}
      {!loading && rightIcon}
    </button>
  );
}
