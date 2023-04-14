const editBtn = document.getElementById("edit-btn");
const form = document.querySelector("form");

function toggleEditSave() {
    const inputs = form.querySelectorAll("input");
    const isDisabled = inputs[0].disabled;

    inputs.forEach(input => input.disabled = !isDisabled);

    if (isDisabled) {
        editBtn.innerHTML = "Save";
    } else {
        editBtn.innerHTML = "Edit";
    }
}

editBtn.addEventListener("click", toggleEditSave);