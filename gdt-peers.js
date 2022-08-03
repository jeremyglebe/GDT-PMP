const requirements = [
    "lib/peerjs.js",
    "ui/UIChatBox.js"
]

// Load PeerJS and then initialize the mod.
GDT.loadJs(requirements, initialize, null);

// Whether or not this client has connected to the brokering server.
var isPeerJSConnected = false;
// PeerJS connection of this client.
var myConnection = null;

function initialize() {
    createUI();
    connectToBroker();
}

// Function to initialize peerjs multiplayer
function connectToBroker() {
    // Connect to the PeerJS brokering server.
    myConnection = new Peer(generateID(), { key: 'peerjs', debug: 3 });
    myConnection.on('open', (id) => {
        // We've connected to the server.
        isPeerJSConnected = true;
        $("#UIChatBoxMessages").append(`<p>Connected to brokering server as ${id}</p>`);
        // Callback for when a new peer connects to this client.
        myConnection.on('connection', onPeerConnected);
    });
}

function onPeerConnected(conn) {
    console.log(conn);
}

function addPeer() {
    let id = prompt("Enter peer ID");
    // Connect to the peer with the given ID.
    let conn = myConnection.connect(id);
    console.log(conn);
}

// Create all necessary UI components for the mod.
function createUI() {
    $('#gameUIContainer').append(UIButtonAddPeer());
    $('#gameUIContainer').append(UIChatBox());
}

function UIButtonAddPeer() {
    return `
    <style>
        #UIButtonAddPeer {
            position: absolute;
            top: 0px;
            left: 0px;
        }
    </style>
    <button id="UIButtonAddPeer">Add Peer</button>
    `
}

function generateID() {
    const length = 6;
    const prefix = "gdtmp-";
    const numeric = parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
    return prefix + numeric;
}