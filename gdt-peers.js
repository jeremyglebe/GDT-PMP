// Define required javascript files for the mod.
const requirements = [
    "lib/peerjs.js",
    "lib/peer-wrap.js",
    "ui/UIChatBox.js",
    "ui/UIPeerButton.js"
]
// Load PeerJS and then initialize the mod.
GDT.loadJs(requirements, initialize, null);

function initialize() {
    createUI();
    connectToBroker();
}

// Create all necessary UI components for the mod.
function createUI() {
    $('#gameUIContainer').append(UIPeerButton());
    $('#gameUIContainer').append(UIChatBox());
}
