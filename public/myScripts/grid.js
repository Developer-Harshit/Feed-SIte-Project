function addFeeds() {

    const newList = document.createElement('li')
    newList.classList.add('new-feed')
    newList.classList.add('feed-item')
    newList.innerHTML = '<article><div class="feed-text"><p></p></div><div class="feed-title"><h3></h3></div></article>'

    randomNum = Math.floor(Math.random() * 12)
    const feedText = textArray[randomNum]

    randomNum = Math.floor(Math.random() * 3)
    const feedTitle = titleArray[randomNum]

    wrapperUL.append(newList)


    document.querySelector('.new-feed p').textContent = feedText
    document.querySelector('.new-feed h3').textContent = feedTitle
    newList.classList.remove('new-feed')
    console.log('hi')
}


function feedColor() {
    const feedItems = document.querySelectorAll('.feed-item')
    for (let feedItem of feedItems) {
        console.log('bye')
        feedItem.classList.add(colorList[colorNum])
        feedItem.classList.add('feedSize' + randomNum)
        randomNum = Math.floor(Math.random() * 12)
        colorNum++
        if (colorNum === 5) {
            colorNum = 0
        }
    }
}