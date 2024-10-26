function redirectAfter4Seconds() {
  setTimeout(() => {
    window.location.href = "/linguagens/index.html";
}, 4000);
}

window.onload = redirectAfter4Seconds;

// motivo de ter criado isso: pq achei bonito 