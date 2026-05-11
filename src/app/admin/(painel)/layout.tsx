import type { ReactNode } from "react";
import { AdminLayout } from "@/components/layouts/AdminLayout";

export default function PainelLayout({ children }: { children: ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
