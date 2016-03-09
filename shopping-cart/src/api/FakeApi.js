import products from './products.json'

const TIMEOUT = 1000

const randomBool = () => {
    return Math.random() > 0.5
}

const FakeApi = {
    loadProducts: (callback) => {
        setTimeout(() => (callback({ success: randomBool(), data: products })), TIMEOUT)
    },

    checkout: (data, callback) => {
        const isSuccess = randomBool()
        console.log('checkout ' + (isSuccess ? 'success' : 'failure'), data)
        setTimeout(() => (callback({ success: isSuccess })), TIMEOUT)
    }
}

export default FakeApi