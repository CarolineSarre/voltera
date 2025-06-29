<script>
  import '$lib/styles/whatsapp-button.css';
  
  export let phone = '5521986384755';
  export let message = 'Parabéns Ana Caroline, Você é a nova dev Front da Voltera';
  export let position = 'right';

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
</script>

<a
  class="whatsapp-fab {position}"
  href={link}
  target="_blank"
  rel="noopener"
  aria-label="Enviar mensagem no WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
  >
    <path
      fill="#25D366"
      d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 5 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5z"
    />
    <path
      fill="#fff"
      d="M24.1 21.1c-.3.8-1.5 1.4-2.2 1.5-.6.1-1.3.1-2.2-.2-.5-.2-1.1-.4-1.9-.8-3.3-1.5-5.5-4.8-5.7-5-.2-.3-1.4-1.9-1.4-3.6 0-1.8 1-2.7 1.4-3.1.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6.3.7.9 2.2 1 2.3.1.2.1.3 0 .5-.2.4-.5.9-.7 1.1-.1.1-.2.2-.1.4.1.2.4.7.9 1.2.6.7 1.2 1.1 1.3 1.2.2.1.3.1.5-.1.2-.2.8-1 1-1.3.2-.3.4-.3.6-.2.2.1 1.3.6 1.5.7.2.1.4.2.5.3.2.3.2 1 .1 1.4z"
    />
  </svg>
</a>