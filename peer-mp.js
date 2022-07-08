// Load PeerJS and then initialize the mod.
GDT.loadJs(["peerjs.js"], initialize, null);

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
    myConnection = new Peer({ key: 'peerjs', debug: 3 });
    myConnection.on('open', (id) => {
        // We've connected to the server.
        isPeerJSConnected = true;
        $("#_UIChatBoxMessages").append(`<p>Connected to brokering server as ${id}</p>`);
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
    $('#gameUIContainer').append(_UIButtonAddPeer());
    $('#gameUIContainer').append(_UIChatBox());
}

function _UIButtonAddPeer() {
    return `
    <style>
        #_UIButtonAddPeer {
            position: absolute;
            top: 0px;
            left: 0px;
        }
    </style>
    <button id="_UIButtonAddPeer">Add Peer</button>
    `
}

function _UIChatBox() {
    return `
    <style>
        #_UIChatBox {
            position: absolute;
            bottom: 50px;
            left: 0px;
            height: 35%;
            width: 15%;
            overflow: hidden;
            text-align: center;
        }
        #_UIChatBoxMessages {
            width: 95%;
            height: 90%;
            overflow-y: scroll;
        }
        #_UIChatBoxInput {
            width: 95%;
        }
    </style>
    <div id="_UIChatBox" class="tallWindow windowBorder">
        <div id="_UIChatBoxMessages"></div>
        <input type="text" id="_UIChatBoxInput" />
    </div>
    `
}