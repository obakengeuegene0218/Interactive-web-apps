import {
    createOrderData,
    updateDragging
  } from "./data.js";
  
  import {
    createOrderHtml,
    html,
    updateDraggingHtml
  } from "./view.js";
  
  const handleHelpToggle = (event) => {
    const overlay = html.help.overlay;
    overlay.show();
    if (event.target === html.help.cancel) {
      overlay.close();
    }
  };
  
  const handleAddToggle = (e) => {
    html.other.add.focus();
    const overlay = html.add.overlay;
    overlay.show();
    if (e.target === html.add.cancel) {
      overlay.close();
      html.add.form.reset();
    }
  };
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const overlay = html.add.overlay;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const append = document.querySelector('[data-area="ordered"]');
    e.target.reset();
    overlay.close();
    append.appendChild(htmlData);
  };
  
  const handleEditToggle = (e) => {
    const overlay = html.edit.overlay;
    const cancelBtn = html.edit.cancel;
    const input = html.edit.title;
    const select = html.edit.table;
    const option = html.edit.column;
  
    e.target.dataset.id ? overlay.show() : undefined;
  
    const id = e.target.dataset.id ? e.target.dataset.id : undefined;
  
    input.value = e.target.dataset.id
      ? e.target.querySelector(".order__title").textContent
      : undefined;
  
    select.value = e.target.dataset.id
      ? e.target.querySelector(".order__value").textContent
      : undefined;
  
    let section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
  
    if (e.target === cancelBtn) {
      overlay.close();
    }
  
    html.edit.delete.id = id;
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const idRemove = html.edit.delete.id;
    const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
    orderDelete.remove();
    const overlay = html.edit.overlay;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const appended = document.querySelector(`[data-area="${newData.column}"]`);
    appended.appendChild(htmlData);
    e.target.reset();
    overlay.close();
  };
  
  const handleDelete = (e) => {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(
      `[data-id="${idToBeDeleted}"]`
    );
    const overlay = html.edit.overlay;
    orderToBeDeleted.remove();
    overlay.close();
  };
  
  html.add.cancel.addEventListener("click", handleAddToggle);
  html.other.add.addEventListener("click", handleAddToggle);
  html.add.form.addEventListener("submit", handleAddSubmit);
  html.other.grid.addEventListener("click", handleEditToggle);
  html.edit.cancel.addEventListener("click", handleEditToggle);
  html.edit.form.addEventListener("submit", handleEditSubmit);
  html.edit.delete.addEventListener("click", handleDelete);
  html.help.cancel.addEventListener("click", handleHelpToggle);
  html.other.help.addEventListener("click", handleHelpToggle);
  
  //Dragging events
  // Dragging events
const handleDragOver = (e) => {
    e.preventDefault();
    const path = e.path || e.composedPath();
    let column = null;

    for (const element of path) {
        const { area } = element.dataset;
        if (area) {
            column = area;
            break;
        }
    }
}
  
  /**
   * A handler that fires when a user drags over any element inside a column. In
   * order to determine which column the user is dragging over the entire event
   * bubble path is checked with `event.path` (or `event.composedPath()` for
   * browsers that*/