export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>(".contact__form");

  if (!form) return;

  const button = form.querySelector<HTMLButtonElement>(".contact__button");

  const status = form.querySelector<HTMLElement>(".contact__status");

  if (!button || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    status.textContent = "Enviando solicitud...";

    button.disabled = true;

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al enviar.");
      }

      status.textContent = "Solicitud enviada correctamente.";

      form.reset();
      setTimeout(() => {
        status.textContent = "";
      }, 5000);
    } catch {
      status.textContent = "Ha ocurrido un error. Inténtelo nuevamente.";
    } finally {
      button.disabled = false;
    }
  });
}
