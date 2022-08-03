
function UIChatBox() {
    return `
    <style>
        #UIChatBox {
            position: absolute;
            bottom: 50px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            height: 35%;
            width: 50%;
            overflow: hidden;
            text-align: center;
        }
        #UIChatBoxCloseButton {
            width: 100%;
        }
        #UIChatBoxMessages {
            width: 100%;
            height: 90%;
            overflow-y: scroll;
            text-align: left;
            padding: 0px 10px 0px 10px;
        }
        #UIChatBoxInput {
            width: 95%;
        }
    </style>
    <div id="UIChatBox" class="tallWindow windowBorder">
        <button id="UIChatBoxCloseButton" onclick="_UIChatBoxToggle()">Toggle Chat Visibility</button>
        <div id="UIChatBoxMessages"></div>
        <input type="text" id="UIChatBoxInput" />
    </div>
    `
}

function _UIChatBoxToggle() {
    // Grab elements that should be toggled (toggle button won't be)
    let messages = $("#UIChatBoxMessages")[0];
    let input = $("#UIChatBoxInput")[0];
    // Change visibility of elements (make them all match messages div, just for consistency)
    messages.style.display = messages.style.display == "none" ? "block" : "none";
    input.style.display = messages.style.display;
    // Toggle the size of the chat box so it doesn't take up excessive space
    $("#UIChatBox")[0].style.height = messages.style.display == "none" ? "auto" : "35%";
}
