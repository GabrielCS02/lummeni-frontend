type BuildWhatsAppUrlParams = {
  phone: string;
  message: string;
};

export function buildWhatsAppUrl({
  phone,
  message,
}: BuildWhatsAppUrlParams) {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}