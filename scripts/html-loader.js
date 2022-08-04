const GDT_PEERS_PATH = "./mods/gdt-peers"

async function loadHTMLString(url) {
    const response = await fetch(url);
    const text = await response.text();
    return `<div>${text}</div>`;
}

async function loadHTMLElement(url) {
    const response = await fetch(url);
    const text = await response.text();
    const element = document.createElement("div");
    element.innerHTML = text;
    return element;
}

async function loadComponent(component, dir) {
    const path = dir || `${GDT_PEERS_PATH}/components/${component}`;
    const elUrl = `${path}/${component}.html`;
    const scriptUrl = `${path}/${component}.js`;
    // Add the script to the document's body
    const script = document.createElement("script");
    script.src = scriptUrl;
    document.body.appendChild(script);
    // Load the component's HTML file as an element
    const element = await loadHTMLElement(elUrl);
    // Return the loaded element
    return element;
}
