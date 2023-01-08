ham2Element.style.display = 'none'
ham1Element.addEventListener('click', ham1Disable)
ham2Element.addEventListener('click', ham2Disable)

asideElement.addEventListener('click', asideDisable)

for (i = 0; i < feedCount; i++) {
    addFeeds()
}


feedColor()