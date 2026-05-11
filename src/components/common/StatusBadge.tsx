export type StatusBadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "accent";

type StatusBadgeProps = {
  label: string;
  variant?: StatusBadgeVariant;
};

export function StatusBadge({
  label,
  variant = "neutral",
}: StatusBadgeProps) {
  return (
    <span className={`lummeni-status-badge lummeni-status-badge--${variant}`}>
      {label}
    </span>
  );
}