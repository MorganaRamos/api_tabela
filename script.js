const buscarUsuarios = async () => {
    const retorno = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const usuarios = await retorno.json()
    return usuarios
}

const usuarioToRowHTML = (usuario) =>{
    return`<tr>
           <td>${usuario.id}</td>
           <td>${usuario.name}</td>
           <td>${usuario.email}</td>
           <td>${usuario.username}</td>
           <td>${usuario.website}</td>
        </tr>`
}

const mostrarDados = async () =>{

        const usuarios = await buscarUsuarios()

        const content = document.getElementById('content')
        
        const usuariosHTML = usuarios.map(usuarioToRowHTML)
    
    usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
    }










// const mostrarDados = async () =>{

//     const content = document.getElementById('content')
//     const retorno = await fetch (`https://jsonplaceholder.typicode.com/users`)
//     const usuarios = await retorno.json()
//     const usuariosHTML = usuarios.map(element =>
        
//  `<tr>
//       <td>${element.id}</td>
//       <td>${element.name}</td>
//       <td>${element.email}</td>
//       <td>${element.username}</td>
//       <td>${element.website}</td>
// </tr>`
// )

// usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
// }




// const mostrarDados = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => response.json())
//     .then(json => {

//         let dados = ''

//         json.forEach(usuario => {
//         dados += `<tr>
//             <td>${usuario.id}</td>
//             <td>${usuario.name}</td>
//             <td>${usuario.email}</td>
//           </tr>`
//         })
//         // usar no for each sempre a estrutura do que será requisitado logo depois da iteração
//     } 
// )}

// //chamada da função - caso seja chamada na tag d html não é necessário chamar aqui
// mostrarDados()