// console.log("antes")

// setTimeout(() => {
//     console.log("meio")
// }, 3000)

// console.log("depois")

// ------

const timeoutWithPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sucesso")
        }, 3000)
    })
}

console.log("antes")

// timeoutWithPromise().then(value => {
//     console.log(value)
// }).catch(err => {
//     console.log("Algo deu errado: ", err)
// }).finally(() => {
//     console.log("finalizando....")
// })

// timeoutWithPromise().catch(err => {
//     console.log("apenas catch")
// })

// timeoutWithPromise().then(value => {
//     return 10;
// }).then(value => {
//     throw new Error("algo deu errado")
// }).catch(err => {
//     console.log(err)
// }).then(() => {
//     console.log("final")
// }).then(() => {
//     console.log("fina 2")
// })

// console.log("depois")

// timeoutWithPromise().then(value => {
//     console.log(value)
// })

const asyncTimeout = async () => {
    try {
        await findUserNovo()
        const teste2 = await timeoutWithPromise();
        console.log("findUser");
    } catch (error) {
        console.log(error)
    }
}

async function findUserNovo() {
    try {
        const result = await timeoutWithPromise()
    } catch (error) {
        console.log(error)
    }
}
