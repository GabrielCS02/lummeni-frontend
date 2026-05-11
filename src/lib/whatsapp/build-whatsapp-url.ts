type BuildWhatsAppUrlParams = {
  phone: string;
  message: string;
  countryCode?: string;
};

export function buildWhatsAppUrl({ phone, message, countryCode = "55" }: BuildWhatsAppUrlParams) {
  const onlyNumbers = phone.replace(/\D/g, "");
  const normalizedPhone = onlyNumbers.startsWith(countryCode) ? onlyNumbers : `${countryCode}${onlyNumbers}`;
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
