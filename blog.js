const loading = document.querySelector("#loading")
const containerPost = document.querySelector("#container-posts")
const url ="https://jsonplaceholder.typicode.com/posts"

async function pegarPost () {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data);

    loading.classList.add("esconder")

    data.map((i)=>{
        const titulo = document.createElement("h2")
        const text = document.createElement("p")
        const link = document.createElement("a")
        const div = document.createElement("div")

        titulo.innerText = i.title
        text.innerText = i.body
        link.innerText = "Ler post"
        link.setAttribute("href", `/post.html?id=${i.id}`)

        div.appendChild(titulo)
        div.appendChild(text)
        div.appendChild(link)
         containerPost.appendChild(div)


    })
    
}
pegarPost()

// criando a variável que armazena o nosso id pelo URLSearchParams

const buscarParametro = new URLSearchParams(window.location.search)
const postId = buscarParametro.get('id')
// agora postId contam o id do nosso post

if(!postId){
    pegarPost()
}else{
    pegarUmPost(postId)
}
async function pegarUmPost(id) {
    const [ConteudoPost,comentarioPost] = awaitpromise.all([fetch(`${url}/${id}`),
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/coments`)
    ])

    const datapost = await ConteudoPost.json();
    console.log(datapost)

    //preenchendo o conteudo do container-post que esta la no post.html

    const titulo = document.createElement("h1")
    titulo.innerText = datapost.title
    postContainer.appendChild(titulo)

    const texto = document.createElement("p")
    texto.innerText = datapost.body
    postContainer.appendChild(texto)

    const dataComments = await comentarioPost.jason()
    console.log(dataComments)

    dataComments.map((comment)=>{
        //criando o autor
        const autor = document.createElement("h3")
        autor.innerText = comment.email
        containerComentarios.appendChild(autor)
        //criando conteudo do comentario
        const textComment = document.createElement("p")
        textComment.innerText = comentarioPost.body
        containerComentarios.appendChild(textComment)
        //that's all, folks!
    
    
    
    })


}