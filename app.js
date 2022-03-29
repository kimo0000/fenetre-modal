const modalContainer = document.querySelector(".modal_container");
const modalTrigger = document.querySelectorAll(".modal_trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", () => {
    modalContainer.classList.toggle("active");
}))