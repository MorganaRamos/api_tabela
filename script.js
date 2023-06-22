const mostrarDados = async () =>{

    const content = document.getElementById('content')
    const retorno = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const usuarios = await retorno.json()
    const usuariosHTML = usuarios.map(element =>
        
 `<tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.username}</td>
      <td>${element.website}</td>
</tr>`
)

usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)
}

// mostrarDados()


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