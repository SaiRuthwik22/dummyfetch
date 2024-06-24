const PromiseAPI1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch("https://dummyjson.com/posts")
                .then((res)=>{
                    if(!res.ok){
                        throw new Error("some error in posts")
                    }
                    return res.json()})
                .then((res)=>resolve(JSON.stringify(res)))
                .catch((err)=>reject(err))
        },1000)
    })
}
const PromiseAPI2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch("https://dummyjson.com/products")
                .then((res)=>{
                    if(!res.ok){
                        throw new Error("some error in products")
                    }
                    return res.json()})
                .then((res)=>resolve(JSON.stringify(res)))
                .catch((err)=>reject(err))
        },2000)
    })
}
const PromiseAPI3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch("https://dummyjson.com/todos")
                .then((res)=>{
                    if(!res.ok){
                        throw new Error("some error in todos")
                    }
                    return res.json()})
                .then((res)=>resolve(JSON.stringify(res)))
                .catch((err)=>reject(err))
        },3000)
    })
}

function clicked(){
    let posts = document.getElementById("posts")
    let products = document.getElementById("products")
    let todos = document.getElementById("todos")
    PromiseAPI1()
        .then((res)=>{
            posts.textContent=res
            return PromiseAPI2()
        }).then((res)=>{
            products.textContent=res
            return PromiseAPI3()
        }).then((res)=>{
            todos.textContent=res
        }).catch((err)=>console.log(err))
}