document.addEventListener("DOMContentLoaded", () => {
  // Modal Effect
  const toggleModal = (modalSelector, action) => {
    const modal = document.querySelector(`[data-modal="${modalSelector}"]`);
    if (modal) {
      if (action === "show") {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("visible"), 10);
      } else if (action === "hide") {
        modal.classList.remove("visible");
        setTimeout(() => (modal.style.display = "none"), 300);
      }
    } else {
      console.error(
        `Modal with selector [data-modal="${modalSelector}"] not found`
      );
    }
  };

  document.querySelectorAll("[data-modal-trigger]").forEach((trigger) => {
    console.log("Found modal trigger:", trigger);
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal-trigger");
      console.log("Button clicked for modal:", modalId);
      toggleModal(modalId, "show");
    });
  });

  document.querySelectorAll(".custom__modal-container").forEach((modal) => {
    console.log("Found modal container:", modal);
    modal.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("custom__modal-container") ||
        e.target.classList.contains("notice__btn--cancel")
      ) {
        const modalId = modal.getAttribute("data-modal");
        console.log("Closing modal:", modalId);
        toggleModal(modalId, "hide");
      }
    });
  });

  // Dropdown Toggle
  document.addEventListener("click", (event) => {
    const isButton = event.target.closest(".custom__dropdown-btn");
    const isDropdown = event.target.closest(".custom__dropdown");
    const dropdowns = document.querySelectorAll(".custom__dropdown");

    if (isButton) {
      const parent = isButton.parentElement;
      const dropdown = parent.querySelector(".custom__dropdown");
      dropdown.classList.toggle("hidden");

      // Hide other dropdowns if one is opened
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.add("hidden");
        }
      });
    } else if (!isDropdown) {
      // Close all dropdowns when clicking outside both button and dropdown
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    }
  });

  // Tooltip Plugin
  tippy(".tooltip-btn", {
    theme: "custom",
    maxWidth: "170px",
  });

  // Swiper JS Slider
  var swiper = new Swiper(".swiper--updates", {
    slidesPerView: 3.5,
    spaceBetween: 16,
    centeredSlides: false,
    navigation: {
      nextEl: ".recent-updates__arrow--next",
      prevEl: ".recent-updates__arrow--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      991: {
        slidesPerView: 2.5,
      },
      1300: {
        slidesPerView: 3.5,
      },
    },
  });
});
