/**
 * checklist.js – Checkboxes interactivos con feedback visual (sin persistencia).
 *
 * Funciona con pymdownx.tasklist (custom_checkbox: true) en MkDocs Material.
 * Al marcar un ítem se ve tachado/atenuado; el estado NO se guarda entre recargas.
 * Compatible con navigation.instant de Material (re-ejecuta en navegación SPA
 * suscribiéndose a document$ una vez que Material lo expone).
 */

(function () {
  "use strict";

  /** Inicializa o reinicializa todos los checkboxes de la página. */
  function initChecklist() {
    var items = document.querySelectorAll(".task-list-item input[type='checkbox']");
    if (!items.length) return;

    items.forEach(function (checkbox) {
      // Hacer el checkbox clickeable
      checkbox.removeAttribute("disabled");

      // Evitar doble registro de eventos (por si se llama varias veces)
      checkbox.removeEventListener("change", checkbox._checklistHandler);
      checkbox._checklistHandler = function () {
        markParent(this, this.checked);
      };
      checkbox.addEventListener("change", checkbox._checklistHandler);
    });

    // Insertar botón de reset una sola vez por página
    injectResetButton(items);
  }

  /** Agrega/quita la clase CSS de ítem completado al <li> padre. */
  function markParent(checkbox, checked) {
    var li = checkbox.closest(".task-list-item");
    if (!li) return;
    if (checked) {
      li.classList.add("task-checked");
    } else {
      li.classList.remove("task-checked");
    }
  }

  /** Inyecta un botón "Reiniciar checklist" debajo de la última lista de tareas. */
  function injectResetButton(items) {
    if (!items.length) return;

    // Encontrar la lista <ul> que contiene el último checkbox
    var lastList = items[items.length - 1].closest("ul, ol");
    if (!lastList) return;

    // No insertar si ya existe
    if (lastList.nextElementSibling && lastList.nextElementSibling.classList.contains("checklist-reset-btn")) return;

    var btn = document.createElement("button");
    btn.textContent = "↺ Reiniciar checklist";
    btn.className = "checklist-reset-btn";
    btn.setAttribute("type", "button");
    btn.addEventListener("click", function () {
      items.forEach(function (checkbox) {
        checkbox.checked = false;
        markParent(checkbox, false);
      });
    });

    lastList.insertAdjacentElement("afterend", btn);
  }

  // --- Hooks de inicialización ---

  // Carga inicial (navegación normal o recarga)
  document.addEventListener("DOMContentLoaded", function () {
    initChecklist();

    // MkDocs Material con navigation.instant expone document$ (RxJS Observable).
    // Se subscribe aquí, dentro de DOMContentLoaded, para garantizar que Material
    // ya haya registrado document$ en el scope global antes de intentar usarlo.
    if (typeof document$ !== "undefined") {
      document$.subscribe(function () {
        initChecklist();
      });
    } else {
      // Fallback: esperar a window load e intentar de nuevo (Material puede
      // inicializar document$ ligeramente después de DOMContentLoaded).
      window.addEventListener("load", function () {
        if (typeof document$ !== "undefined") {
          document$.subscribe(function () {
            initChecklist();
          });
        } else {
          // Último fallback: popstate (navegación con historial del navegador)
          window.addEventListener("popstate", function () {
            setTimeout(initChecklist, 150);
          });
        }
      });
    }
  });
})();
