const form = document.querySelector(".contacts__form form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: form.querySelector("input[type='text']").value,
      email: form.querySelector("input[type='email']").value,
      message: form.querySelector("textarea").value,
      date: new Date().toISOString()
    };

    const messages =
      JSON.parse(localStorage.getItem("contact_messages")) || [];

    messages.push(data);
    localStorage.setItem("contact_messages", JSON.stringify(messages));

    alert("Повідомлення збережено локально");
    form.reset();
  });
}
