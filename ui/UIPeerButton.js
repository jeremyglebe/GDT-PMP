function UIPeerButton() {
    return `
    <style>
        #UIButtonAddPeer {
            position: absolute;
            top: 0px;
            left: 0px;
        }
    </style>
    <button id="UIButtonAddPeer" onclick="_UIAddNewPeer()">Add Peer</button>
    `
}

function _UIAddNewPeer() {
    let prefix = "gdtpeers-";
    let numeric = prompt("Enter 6 Digit Peer Code");
    let id = prefix + numeric;
    // Establish a connection to the peer.
    let conn = peerSelf.connect(id);
    console.log("GDT Peers:", conn);
}
