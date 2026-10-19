let arquivos = ["trabalho_matematica.pdf","foto_faculdade.png","trabalho_historia.docx","foto_sala.jpg","prova_biologia.pdf","trabalho_portugues.docx","foto_amigos.png","resumo_quimica.pdf","trabalho_geografia.pdf","foto_biblioteca.jpg","atividade_fisica.docx","relatorio_faculdade.pdf"];
recebe = prompt("Procure o trabalho")
// Mostra todos os arquivos
console.log("Todos os arquivos:");
console.log(arquivos);

// Filtra os arquivos que terminam com .pdf
let pdf = arquivos.filter(arquivo => arquivo.endsWith(".pdf"));
console.log("Arquivos PDF:");
console.log(pdf);

// Filtra os arquivos que começam com a palavra foto
let fotos = arquivos.filter(arquivo => arquivo.startsWith("foto"));
console.log("Arquivos que começam com foto:");
console.log(fotos);

// Verifica se existe um arquivo com esse nome
let existe = arquivos.includes("trabalho_matematica.pdf")

// mostrando tudo na tela
console.log("O arquivo existe?");
console.log(existe);