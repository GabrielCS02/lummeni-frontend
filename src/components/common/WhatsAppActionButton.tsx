import { buildWhatsAppUrl } from "@/lib/whatsapp/build-whatsapp-url";

type WhatsAppActionButtonProps = {
  phone: string;
  message: string;
  label?: string;
};

export function WhatsAppActionButton({
  phone,
  message,
  label = "WhatsApp",
}: WhatsAppActionButtonProps) {
  const whatsappUrl = buildWhatsAppUrl({
    phone,
    message,
  });

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="lummeni-whatsapp-button"
    >
      {label}
    </a>
  );
}