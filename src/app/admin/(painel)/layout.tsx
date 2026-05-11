import { AdminLayout } from "@/components/layouts/AdminLayout";

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}