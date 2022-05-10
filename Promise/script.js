let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success')
    }else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch '+ message)
})

// use callbacks
const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallback(callback, errorcallback) {
    if(userLeft) {
        errorcallback({
            name: 'User Left',
            message: ':('
        })
    }else if (userWatchingCatMeme) {
        errorcallback({
            name: 'User Watching Cat Meme',
            message: 'me < Cat'
        })
    }else{
        callback('Thumbs up and Subscribe')
    }
}
watchTutorialCallback((message) => {
    console.log('Success: '+message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})

// change the code above to promise
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'me < Cat'
            })
        }else{
            resolve('Thumbs up and Subscribe')
        }
    })
}
watchTutorialPromise().then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})


// Promise.all
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
.then((message) => console.log(message)) // sends back an array with the results.