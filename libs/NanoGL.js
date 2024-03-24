/*
Documentação da Biblioteca NanoGl

Introdução:
A biblioteca NanoGl é uma ferramenta que facilita a criação dinâmica de elementos HTML usando JavaScript de forma simplificada. Ela oferece funções para criar botões, textos, imagens e manipular propriedades desses elementos de maneira rápida e eficiente.

Inicialização:
Antes de utilizar os comandos da biblioteca NanoGl, é necessário inicializá-la. Para isso, utilize o comando `init`.

init

Comandos Disponíveis:

1. createButton nomeDoBotão - Cria um botão com o ID especificado ou um ID padrão caso não seja fornecido.

createButton meuBotao

2. createText novoTexto - Cria um texto com o ID especificado ou um ID padrão caso não seja fornecido.

createText meuTexto

3. createImage nomeDaImagem - Cria uma imagem com o ID especificado ou um ID padrão caso não seja fornecido.

createImage minhaImagem

4. setText nomeDoElemento : texto - Define o texto de um elemento. O parâmetro `nomeDoElemento` deve ser no formato "ID:texto".

setText meuTexto : Olá, mundo!

5. setSrc imagem.png - Define o atributo `src` de uma imagem. O parâmetro `imagem.png` deve ser no formato "ID:URL".

setSrc minhaImagem : https://exemplo.com/imagem.jpg

6. setWidth elemento : largura - Define a largura de um elemento. O parâmetro `elemento` deve ser no formato "ID:largura".

setWidth meuBotao : 200

7. setHeight elemento : altura - Define a altura de um elemento. O parâmetro `elemento` deve ser no formato "ID:altura".

setHeight meuBotao : 200

8. onClick elemento : codigo - Adiciona um evento de clique a um elemento. O parâmetro meuBotao deve ser no formato "ID:código".

onClick meuBotao : echo Hello, World

*/

var NGL_ELEMENTS = [];

tokens["init"] = ()=>{
  console.log("++openhtml");
  document.body.style.userSelect = "none";
  document.body.style.fontSyle = "Arial";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "start";
  document.body.style.outline = "none";
}

tokens["createButton"] = (en="newButton")=>{
  let btn = document.createElement("button");
  btn.id = en.trim();
  btn.innerText = math(en.trim());
  btn.style.cursor = "pointer";
  btn.style.background = "#ddd";
  btn.style.padding = "5px 10px";
  NGL_ELEMENTS.push(en.trim());
  document.body.appendChild(btn);
}

tokens["createText"] = (en="newButton")=>{
  let txt = document.createElement("span");
  txt.id = en.trim();
  txt.innerText = math(en.trim());
  NGL_ELEMENTS.push(en.trim());
  document.body.appendChild(txt);
}

tokens["createImage"] = (en="newButton")=>{
  let img = document.createElement("img");
  img.id = en.trim();
  NGL_ELEMENTS.push(en.trim());
  document.body.appendChild(img);
}

tokens["setText"] = (en)=>{
  if(en.includes(":"))
    {
      let data = [];
      data.push(en.substring(0, en.indexOf(":")));
      data.push(en.substring(en.indexOf(":")+1, en.length));
      
      if(NGL_ELEMENTS.includes(data[0].trim())) document.getElementById((data[0].trim())).innerText = math(data[1].trim());
    }else{
      console.error("Error : missing ( : )");
    }
}

tokens["setSrc"] = (en)=>{
  if(en.includes(":"))
    {
      let data = [];
      data.push(en.substring(0, en.indexOf(":")));
      data.push(en.substring(en.indexOf(":")+1, en.length));
      
      if(NGL_ELEMENTS.includes(data[0].trim())) document.getElementById((data[0].trim())).src = math(data[1].trim());
    }else{
      console.error("Error : missing ( : )");
    }
}

tokens["setWidth"] = (en)=>{
  if(en.includes(":"))
    {
      let data = [];
      data.push(en.substring(0, en.indexOf(":")));
      data.push(en.substring(en.indexOf(":")+1, en.length));
      
      if(NGL_ELEMENTS.includes(data[0].trim())) document.getElementById((data[0].trim())).style.width = math(data[1].trim() + "px");
    }else{
      console.error("Error : missing ( : )");
    }
}

tokens["setHeight"] = (en)=>{
  if(en.includes(":"))
    {
      let data = [];
      data.push(en.substring(0, en.indexOf(":")));
      data.push(en.substring(en.indexOf(":")+1, en.length));
      
      if(NGL_ELEMENTS.includes(data[0].trim())) document.getElementById((data[0].trim())).style.height = math(data[1].trim() + "px");
    }else{
      console.error("Error : missing ( : )");
    }
}

tokens["onClick"] = (en)=>{
  if(en.includes(":"))
    {
      let data = [];
      data.push(en.substring(0, en.indexOf(":")));
      data.push(en.substring(en.indexOf(":")+1, en.length));
      
      if(NGL_ELEMENTS.includes(data[0].trim())) document.getElementById((data[0].trim())).addEventListener("click",(e)=>{
        compile(math(data[1].trim()));
      });
    }else{
      console.error("Error : missing ( : )");
    }
}
