
  function filterDishes(type) {
    const cards = document.querySelectorAll(".main-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="filterDishes('${type}')"]`).classList.add("active");

    cards.forEach(card => {
      if (type === "all" || card.classList.contains(type)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function openModal(dish) {
    document.getElementById("modal-title").innerText = dish;
    document.getElementById("modal-desc").innerText = `Includes salad, raita, papad & mini dessert with ${dish}. Add any drink for ₹40 extra.`;
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  // Optional: Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) modal.style.display = "none";
  };
