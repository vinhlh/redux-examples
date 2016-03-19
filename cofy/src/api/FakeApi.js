import coffeeShops from './coffeeShops.json'

const TIMEOUT = 100

const randomBool = () => {
    return Math.random() > 0.5
}

const FakeApi = {
    loadCoffeeShops: (callback) => {
        setTimeout(() => (callback({ success: true, data: coffeeShops })), TIMEOUT)
    },
    loadCoffeeShopDetail: (id, callback) => {
        setTimeout(() => (callback({ success: true, data: coffeeShops[id] })), TIMEOUT)
    }
}

export default FakeApi