// Define required javascript files for the mod.
const requirements = [
    "lib/peerjs.js",
    "scripts/peer-wrap.js",
    "scripts/html-loader.js"
]
// Load PeerJS and then initialize the mod.
GDT.loadJs(requirements, initialize, null);

function initialize() {
    createUI();
    connectToBroker();
}

// Create all necessary UI components for the mod.
function createUI() {
    // Get a reference to Game Dev Tycoon's UI container element.
    const uiContainer = document.querySelector("#gameUIContainer");
    // Small nested helper function to add an element to the UI container.
    const addEl = (el) => uiContainer.appendChild(el);
    // Load HTML components and append them to the container.
    loadComponent("UIPeerButton").then(addEl);
    loadComponent("UIChatBox").then(addEl);
}
