//計數器

const count = document.getElementById('count')

const sub = document.getElementById('sub')
const add = document.getElementById('add')

sub.addEventListener('click', function () {
  count.innerText = Number(count.innerText) - 1
})

add.addEventListener('click', function () {
  count.innerText = Number(count.innerText) + 1
})

//美金轉新台幣
const inputMoney = document.getElementById('inputMoney')

const twd = document.getElementById('twd')
const usd = document.getElementById('usd')
const result = document.getElementById('result')

twd.addEventListener('click', function () {
  result.innerText =
    '台幣轉美金:' + (Number(inputMoney.value) / 28.53).toFixed(2)
})

usd.addEventListener('click', function () {
  result.innerText =
    '美金轉台幣:' + (Number(inputMoney.value) * 28.53).toFixed(0)
})

//BMI計算
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const result1 = document.getElementById('result1')
const bmi = document.getElementById('bmi')

bmi.addEventListener('click', function () {
  result1.innerText =
    'BMI為:' +
    (Number(weight.value) / Math.pow(Number(height.value) / 100, 2)).toFixed(1)
})
