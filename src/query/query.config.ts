export async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
}


export async function postData(data: object) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

    return res.json()
}