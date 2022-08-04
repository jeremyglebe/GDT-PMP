// Simple wrapping functions for peer.js to be used in the mod.

// Whether or not this client has connected to the brokering server.
var isPeerJSConnected = false;
// PeerJS connection of this client.
var peerSelf = null;
// PeerJS debug levels stored for easy reference
const PDEBUG = {
    NONE: 0,
    ERRORS: 1,
    WARNINGS: 2,
    VERBOSE: 3
}

// Function to initialize peerjs multiplayer
function connectToBroker() {
    // Connect to the PeerJS brokering server.
    peerSelf = new Peer(generateID(), { key: 'peerjs', debug: PDEBUG.WARNINGS });
    peerSelf.on('open', (id) => {
        // We've connected to the server.
        isPeerJSConnected = true;
        const chatBox = document.querySelector("#UIChatBoxMessages");
        chatBox.innerHTML += (`<p>Connected to brokering server as ${id}</p>`);
        // Callback for when a new peer connects to this client.
        peerSelf.on('connection', onPeerConnected);
    });
}

function onPeerConnected(conn) {
    console.log("GDT Peers:", conn);
}

function generateID() {
    const length = 6;
    const prefix = "gdtpeers-";
    const numeric = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
    return prefix + numeric;
}