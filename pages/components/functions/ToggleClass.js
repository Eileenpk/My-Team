export default function ToggleClass (id, classToAdd) {
    const element = document.getElementById(id);
console.log(element)
    if (element.classList.contains(classToAdd)) {
      element.classList.remove(classToAdd);
      console.log(element.classList)
    } else {
      element.classList.add(classToAdd);
      console.log(element.classList)
    }
}