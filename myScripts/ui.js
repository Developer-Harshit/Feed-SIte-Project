function ham1Disable() {
    ham1Element.style.display = 'none'
    ham2Element.style.display = 'flex'
}

function ham2Disable() {
    ham2Element.style.display = 'none'
    ham1Element.style.display = 'flex'
}

// function hamDisable(event) {
//     event.target.style.display = 'none'
//     let hamNumber = event.target.dataset.hamnumber
//     if (hamNumber == 1) {
//         hamNumber = 2
//     } else if (hamNumber == 2) {
//         hamNumber = 1
//     }
//     document.querySelector('#ham' + hamNumber).style.display = 'flex'
// }