function _UIChatBoxToggle() {
    // Grab elements that should be toggled (toggle button won't be)
    let messages = document.querySelector("#UIChatBoxMessages");
    let input = document.querySelector("#UIChatBoxInput");
    // Change visibility of elements (make them all match messages div, just for consistency)
    messages.style.display = messages.style.display == "none" ? "block" : "none";
    input.style.display = messages.style.display;
    // Toggle the size of the chat box so it doesn't take up excessive space
    document.querySelector("#UIChatBox").style.height = messages.style.display == "none" ? "auto" : "35%";
}