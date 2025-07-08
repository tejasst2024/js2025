const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise ");
        reject()
    }, 5000)
    resolve({username:"Tejas", married: false})
})

promiseOne.then((resolve) => {
    console.log("Then After promise ", resolve);
    
}).catch(() => {
    console.log("Catch after promise ");
    
})


const promiseTwo =  new Promise((resolve, reject) => {
    console.log("PRomise two");
    
    setTimeout(() =>{
        let error = true;
        if(!error) {
            resolve({username:"Tejas", married: false})
        } else {
            reject("ERROR: Something Went Wrong")
        }
    }, 1000)
})

promiseTwo.then((user) => {
    console.log(user);
    
    return user.username;
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error);
    
}).finally(() => {
    console.log("Rejected, Resolved");
    
})


const promiseThree =  new Promise((resolve, reject) => {
    console.log("PRomise three");
    
    setTimeout(() =>{
        let error = true;
        if(!error) {
            resolve({username:"Tejas", married: false})
        } else {
            reject("ERROR: Something Went Wrong")
        }
    }, 1000)
})

async function consumerPromise() {
    try {
        const resp = await promiseThree;
        console.log(resp);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumerPromise()


async function consumerPromiseFetch() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await resp.json()
        console.log('JSON: ', json);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumerPromiseFetch()



fetch('https://jsonplaceholder.typicode.com/users')
.then((resp) => {
    return resp.json()
})
.then((users) => {
    console.log(users)
})
.catch((error) => {
    console.log("Error: ", error);  
})