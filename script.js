function salvarEmTxt(event) {
    // Impede o formulário de recarregar a página ao enviar
    event.preventDefault();

    // Captura o valor digitado no input
    const texto = document.getElementById('nomeSobrenome').value;

    // Cria um objeto Blob com o conteúdo em formato de texto puro
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });

    // Cria um link temporário na memória para fazer o download
    const linkTemporario = document.createElement('a');
    
    // Define o nome do arquivo que será baixado
    linkTemporario.download = 'dados_salvos.txt';
    
    // Cria a URL que aponta para o conteúdo do Blob
    linkTemporario.href = window.URL.createObjectURL(blob);
    
    // Força o clique no link invisível para iniciar o download
    linkTemporario.click();

    // Limpa o link da memória do navegador após o download
    window.URL.revokeObjectURL(linkTemporario.href);
}