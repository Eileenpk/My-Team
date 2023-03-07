export default function ToggleClass (element, classToToggle, id) {
    const selectedElement = element.getElementById(id)
    selectedElement.classList.toggle(classToToggle)
}