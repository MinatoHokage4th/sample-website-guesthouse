export default function WhatsAppButton() {
  console.log('WhatsApp floating button rendered');
  return (
    <a
      href="https://wa.me/62812XXXX?text=Halo, saya ingin tanya sewa kamar ExclusiveKost"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" width="28" height="28" />
    </a>
  );
}