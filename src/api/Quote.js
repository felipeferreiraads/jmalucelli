const data = [
  '30833772000175',
  '33062394000161',
  '78917581000118',
  '21478890000111'
]

export default {
  fetch (cnpj) {
    return new Promise(resolve => setTimeout(() => {
      const res = data.reduce((acumulator, nextValue) => {
        if(nextValue ===  cnpj) {
          acumulator = cnpj
        }

        return acumulator
      }, '')
      resolve(res)
    }, 500))
  }
}