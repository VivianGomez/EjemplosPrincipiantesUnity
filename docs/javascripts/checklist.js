/**
 * checklist.js – Checkboxes interactivos con feedback visual (sin persistencia).
 *
 * Funciona con pymdownx.tasklist (custom_checkbox: true) en MkDocs Material
 * y con <ul class="cf-checklist"> (HTML explícito).
 * Al marcar un ítem se ve tachado/atenuado; el estado NO se guarda entre recargas.
 * Compatible con navigation.instant de Material (re-ejecuta en navegación SPA
 * suscribiéndose a document$ una vez que Material lo expone).
 */

(function () {
  "use strict";

  /** Inicializa o reinicializa todos los checkboxes de la página. */
  function initChecklist() {
    // Tasklist de pymdownx
    var taskItems = document.querySelectorAll(".task-list-item input[type='checkbox']");
    taskItems.forEach(function (checkbox) {
      checkbox.removeAttribute("disabled");
      checkbox.removeEventListener("change", checkbox._checklistHandler);
      checkbox._checklistHandler = function () {
        markTaskParent(this, this.checked);
      };
      checkbox.addEventListener("change", checkbox._checklistHandler);
    });

    // CF Checklist (HTML explícito)
    var cfItems = document.querySelectorAll(".cf-checklist input[type='checkbox']");
    cfItems.forEach(function (checkbox) {
      checkbox.removeEventListener("change", checkbox._cfChecklistHandler);
      checkbox._cfChecklistHandler = function () {
        markCfParent(this, this.checked);
      };
      checkbox.addEventListener("change", checkbox._cfChecklistHandler);
    });

    // Insertar botón de reset una sola vez por página (para ambos tipos)
    var allItems = Array.prototype.slice.call(taskItems).concat(Array.prototype.slice.call(cfItems));
    if (allItems.length) injectResetButton(allItems);
  }

  /** Agrega/quita la clase CSS de ítem completado al <li> padre (tasklist). */
  function markTaskParent(checkbox, checked) {
    var li = checkbox.closest(".task-list-item");
    if (!li) return;
    if (checked) {
      li.classList.add("task-checked");
    } else {
      li.classList.remove("task-checked");
    }
  }

  /** Agrega/quita la clase CSS de ítem completado al <li> padre (cf-checklist). */
  function markCfParent(checkbox, checked) {
    var li = checkbox.closest("li");
    if (!li) return;
    if (checked) {
      li.classList.add("cf-checked");
    } else {
      li.classList.remove("cf-checked");
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
        markTaskParent(checkbox, false);
        markCfParent(checkbox, false);
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
