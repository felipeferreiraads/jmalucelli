export default {
  quote (cnpj) {
    return new Promise((resolve, reject) => setTimeout(() => {
      if(cnpj === '12345678/000123') {
        resolve({
          data: {
            cnpj: '12345678/000123'
          }
        })
      } else {
        reject({
          error: 'CNPJ não encontrado'
        })
      }
    }, 500))
  }
}