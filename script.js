let favCount = 0

let botaoProdutos = document.querySelectorAll('.botaoProduto')
for(let i = 0; i <botaoProdutos.length; i++){
  let botao = botaoProdutos[i]

  botao.addEventListener('click', function(event){
    let elemento = event.target.id
    let id = parseInt(elemento.substring(4))
    
    let carro = procuraObjeto(id)
    
    if(!carro){
      alert('Carro inexistente!')
    }if(!verificaFavorito(carro.id)){
      insereFavorito(carro)
    }else{
      alert('Ja consta o carro na lista de favoritos!')
    }
  })
}
function verificaFavorito(id){
  let elemento = document.getElementById(`fav_${id}`)
  if(elemento == null){
    return false
  }else{
    return true
  }
}
function procuraObjeto(id){
  for(let j = 0; j <carros.length; j++){
    let carro = carros[j]
    if(carro.id == id){
      return carro
    }
  }
  return false
}
function insereFavorito(carro){
  favCount++
  document.getElementById('favQuantidade').innerHTML = `(${favCount})`

  let listaFavoritos = document.getElementById('listaFavoritos')

  let li = document.createElement('li')
  let img = document.createElement('img')
  let p = document.createElement('p')
  let button = document.createElement('button')

  li.id = `item_${carro.id}`
  img.src = carro.imagem
  p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`
  button.innerHTML = 'Remover'
  button.id = `fav_${carro.id}`

  button.addEventListener('click', function(event){

    let li = document.getElementById(`item_${carro.id}`)
    li.remove()

    favCount--
    document.getElementById('favQuantidade').innerHTML = `(${favCount})`
  })
  li.append(img, p, button)
  listaFavoritos.append(li)
}






















// let favCount = 0
// let botoesProduto = document.querySelectorAll('.productButton')

// for(let i = 0; i <botoesProduto.length; i++){
//   let botao = botoesProduto[i]

//   botao.addEventListener('click', function(event){
//     let elemento = event.target.id
//     let id = Number(elemento.substring(4))
   
//     let carro = procuraObj(id)
//     if(!carro){
//       alert('Este veículo não existe na lista!')
//     }if(!verificaFavorito(carro.id)){
//       insereFavorito(carro)
//     }else{
//       alert('Carro ja foi adicionado nos favoritos!')
//     }
//   })
// }
// function verificaFavorito(id){
//   let elemento = document.getElementById(`fav_${id}`)
//   if(elemento == null){
//     return false
//   }else{
//     return true
//   }
// }
// function procuraObj(id){
//   for(let j = 0; j <carros.length; j++){
//     let carro = carros[j]
//     if(carro.id == id){
//       return carro
//     }
//   }
//       return false
// }
// function insereFavorito(carro){
//   favCount++
//   document.getElementById('favQuantidade').innerHTML = `(${favCount})`

//   let listaFavoritos = document.getElementById('listaFavoritos')

//   let li = document.createElement('li')
//   let img = document.createElement('img')
//   let p = document.createElement('p')
//   let button = document.createElement('button')

//   li.id = `item_${carro.id}`
//   img.src = carro.imagem
//   p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`
//   button.innerHTML = 'Remover'
//   button.id = `fav_${carro.id}`

//   button.addEventListener('click', function(event){
//     let li = document.getElementById(`item_${carro.id}`)
//     li.remove()
//     favCount--
//     document.getElementById('favQuantidade').innerHTML = `(${favCount})`
//   })
//     li.append(img, p, button)
//     listaFavoritos.append(li)
// }




// let favCount = 0

// let botoesProduto = document.getElementsByClassName('productButton')
// for(let i = 0; i <botoesProduto.length; i++){
//   let botao = botoesProduto[i]

//   botao.addEventListener('click', function(event){
//     let elemento = event.target.id
//     let id = parseInt(elemento.substring(4))
    
//     let carro = procuraObj(id)

//     if(!carro){
//       alert('Veículo não consta na lista de produtos!')
//     }
//     if(!verificaFavorito(carro.id)){
//       insereFavorito(carro)
//     }else{
//       alert('Carro ja foi adicionado nos favoritos!')
//     }
//   })
// }
// function verificaFavorito(id){
//   let elemento = document.getElementById(`fav_${id}`)
//   if(elemento == null){
//     return false
//   }else{
//     return true
//   }
// }
// function procuraObj(id){
//   for(let j = 0; j < carros.length; j++){
//     let carro = carros[j]
//     if(carro.id == id){
//     return carro
//     }
//   }
//     return false
// }
// function insereFavorito(carro){
//   favCount++
//   document.getElementById('favQuantidade').innerHTML = `(${favCount})`

//   let listaFavoritos = document.getElementById('listaFavoritos')

//   let li = document.createElement('li')
//   let img = document.createElement('img')
//   let p = document.createElement('p')
//   let button = document.createElement('button')

//   li.id = `item_${carro.id}`
//   img.src = carro.imagem
//   p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`
//   button.innerHTML = 'Remover'
//   button.id = `fav_${carro.id}`

//   button.addEventListener('click', function(event){
//     let li = document.getElementById(`item_${carro.id}`)
//     li.remove()
//     favCount--
//     document.getElementById('favQuantidade').innerHTML = `(${favCount})`
//   })

//   li.append(img, p, button)
//   listaFavoritos.append(li)
// }



// favCount = 0
// let botoesProduto = document.getElementsByClassName('productButton')
// for(let i = 0; i <botoesProduto.length; i++){
//   let botao = botoesProduto[i]

//   botao.addEventListener('click', function(event){
//     let elemento = event.target.id
//     let id = Number(elemento.substring(4))
    
//     let carro = procuraObj(id)

//     if(!carro){
//       alert('Veículo inexistente!')
//     }
//     if(!verificaFavorito(carro.id)){
//       insereFavorito(carro)
//     }else{
//       alert('Carro ja existe nos favoritos!')
//     }
//   })
// }
// function verificaFavorito(id){
//   let elemento = document.getElementById(`fav_${id}`)
//   if(elemento == null){
//     return false
//   }else{
//     return true
//   }
// }
// function procuraObj(id){
//   for(let j = 0; j <carros.length; j++){
//     let carro = carros[j]
//     if(carro.id == id){
//       return carro
//     }
//   }
//   return false
// }
// function insereFavorito(carro){
//   favCount++
//   document.getElementById('favQuantidade').innerHTML = `(${favCount})`

//   let listaFavoritos = document.getElementById('listaFavoritos')

//   let li = document.createElement('li')
//   let img = document.createElement('img')
//   let p = document.createElement('p')
//   let button = document.createElement('button')

//   li.id = `item_${carro.id}`
//   img.src = carro.imagem
//   p.innerHTML = `${carro.marca} ${carro.modelo} ${carro.ano}`
//   button.innerHTML = 'Remover'
//   button.id = `fav_${carro.id}`

//   button.addEventListener('click', function(event){
//     let li = document.getElementById(`item_${carro.id}`)
//     li.remove()

//     favCount--
//     document.getElementById('favQuantidade').innerHTML = `(${favCount})`
//   })
//   li.append(img, p, button)
//   listaFavoritos.append(li)
// }