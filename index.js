const { ipcRenderer } = require('electron')


let button_launch
let button_kill

function init () {
    document.getElementById('node_version')
        .innerHTML = process.versions.node
    document.getElementById('chrome_version')
        .innerHTML = process.versions.chrome
    document.getElementById('electron_version')
        .innerHTML = process.versions.electron

    button_launch = document.getElementById('button_launch')

    button_launch.addEventListener('click', () => {
        ipcRenderer.send('launch-workspace')
    })
}

document.addEventListener('DOMContentLoaded', init)
