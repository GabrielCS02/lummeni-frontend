import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";

type WhatsAppButtonProps = {
  phone: string;
  message: string;
  label?: string;
};

export function WhatsAppButton({ phone, message, label = "Enviar WhatsApp" }: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl({ phone, message })}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-xl bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
    >
      {label}
    </a>
  );
}
