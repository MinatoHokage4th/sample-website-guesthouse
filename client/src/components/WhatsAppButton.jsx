export default function WhatsAppButton() {
  //console.log("WhatsApp floating button rendered");
  return (
    <a
      href="https://wa.me/+6289699600572?text=Halo%20Marviano%20bisakah%20saya%20dapat%20info%20ketersediaan%20kamar%20kost?"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <img src="./icon/whatsapp.svg" alt="WhatsApp" width="40" height="40" />
    </a>
  );
}
