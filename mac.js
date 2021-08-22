console.log("vjsdslv")
const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-cost')
const total = document.getElementById("total-price");
const macBookPrice = document.getElementById('best-price')

const promoInput = document.getElementById('promo-input')
const discountPriceText = document.getElementById('discount-price');

//   memory cost
document.getElementById('memory-8GB').addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    memoryCost.innerText = '180'
    updateTotal()
})
// storage cost
document.getElementById('storage-256GB').addEventListener('click', function () {
    storageCost.innerText = '0'
    updateTotal()
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    storageCost.innerText = '180'
    updateTotal()
})
// delivery cost
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCost.innerText = '0'
    updateTotal()
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    
    deliveryCost.innerText = '20'
    updateTotal()
})
document.getElementById('promo-btn').addEventListener('click', function () {
    discount()
})
function updateTotal() {
    const bestPrice = Number(macBookPrice.innerText)
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliveryCost = Number(deliveryCost.innerText)
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost
    total.innerText = grandTotal;
    discountPriceText.innerText = total.innerText
}
function discount(){
    let discountPrice = Number(discountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        discountPriceText.innerText = (total.innerText /100)*80
    }

    else (
        alert('you have enterd wrong promo code')
    )
    promoInput.value = ''
}