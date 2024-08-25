# Estudo de Aplicações Web  

Este repositório foi criado com o objetivo de estudar HTML, CSS e JavaScript, tanto de forma isolada quanto em conjunto, para o desenvolvimento front-end de aplicações web. Nele, são explorados conceitos e técnicas fundamentais para a construção de páginas web responsivas e dinâmicas, utilizando exemplos práticos para melhor demonstração das funcionalidades das linguagens estudadas.

## Instalação

1. Clone o repositório e abra-o no Visual Studio Code.
2. Instale o [Node.js](https://nodejs.org/), um ambiente de execução de JavaScript no lado do servidor que permite a execução de código JavaScript fora de um navegador.
3. Abra um terminal e execute o comando `node -v`. Se a versão do Node.js for exibida, a instalação foi concluída com sucesso.

Com isso, os arquivos JavaScript podem ser executados escrevendo o comando `node caminho_do_arquivo` no terminal do VSCode.

**Obs**: Para visualizar as páginas criadas pelos arquivos HTML, abra um navegador e insira o caminho completo do arquivo HTML na barra de navegação. 

## Estruturação do repositório

**Obs**: Para um melhor entendimento das linguagens e de como são criadas as páginas web, consulte as partes do repositório na ordem em que serão apresentados abaixo.  

- **Raiz:**

    - /html-estudo - Conceitos e recursos do HTML5, a versão atual e moderna da linguagem de marcação padrão usada para 
    criar e estruturar conteúdo de páginas web.
    
    - /css-estudo - Conceitos e recursos do CSS, linguagem de estilo usada para definir a aparência e o layout de páginas web.
    
    - /javascript-estudo - Conceitos e recursos do JavaScript, linguagem de programação amplamente utilizada para adicionar interatividade e controlar o comportamento de páginas web.
    
    - /javascript-web - Funcionalidades que o JavaScript disponibiliza para o desenvolvimento de aplicações web interativas.
    
    - /aplicacao-web-ex - uma aplicação web simples, com uma única página de registro, que demonstra e utiliza os principais recursos apresentados nos outros diretórios.
    
    - `README.md` - Descrição e instruções do repositório.

- **/html-estudo:**

    - `estrutura.html` - Explicação do que é HTML, como funciona e suas principais tags estruturais, como header, nav, main, entre outras.

    - `textos-e-links.html` - Apresentação das principais tags de textos, e os principais atributos e aplicações de links.

    - `midias.html` - Descrição de como imagens, áudios e vídeos podem ser exibidos em páginas web, além de como criar gráficos vetoriais descritos por formas geométricas (SVG).

    - `dados-estruturados.html` - Descrição das tags de listas, tabelas e mapas.

    - `formularios.html` - Explicação dos formulários e seus elementos, uma das principais estruturas do HTML. 

    - `outras-tags.html` - Listagem das tags do HTML5 que não foram explicadas nos outros arquivos, mas que podem ter importância dependendo do tipo de projeto em que serão aplicadas.

    - `base.css` - Folha de estilo usado nas páginas deste diretório.

    - /midias - Mídias de exemplo utilizadas, principalmente no arquivo `midias.html`, incluindo imagens, áudios e vídeos para ilustrar o uso de mídias em páginas web.

- **/css-estudo:**

    - `introducao.css` - Apresentação da linguagem, incluindo o significado de box model.

    - `seletores.css` - Apresentação das principais formas de estilizar elementos.

    - `position.css` - Explicação dos tipos de posicionamento que um elemento da página pode ter.

    - `display.css` - Explicação dos tipos de comportamento que um elemento pode ter em relação aos outros.

    - `unidadesDeMedida.css` - Explicação das principais unidades de medida usadas nas propriedades CSS. 

    - `variaveisEImports.css` - Definição de imports e váriaveis, recursos não fundamentais, mas que em grandes projetos podem ser de extrema importância. 

    - `transicoes.css` - Descrição do conceito e funcionamento de transições personalizadas para aspectos dos elementos HTML.

    - `animacoes.css` - Explicação de como criar e aplicar animações a elementos da página web.

    - `mediaQueries.css` - Explicação de como criar um design que se adapte ao tamanho das telas de diferentes tipos de dispositivos.

    - `propriedades.css` - Listagem de grande parte das propriedades disponíveis no CSS3, organizadas por categoria.  

- **/javascript-estudo:**

    - /conceitos-basicos - Explicação dos conceitos descritos nos arquivos abaixo:
        - `Variaveis.js` - Variáveis e tipos de dados.
        - `EstruturasCondicionais.js` - Estruturas que executam código dependendo da satisfação de uma condição.
        - `LoopsEFuncoes.js` - Loops de execução de código e tipos de funções.

    - /metodos - Listagem e explicação dos métodos que podem ser usados por tipos de dados específicos. Os métodos são apresentados nos arquivos:
        - `Number.js`.
        - `String.js`.
        - `Array.js`.

    - /classes-e-modulos - Definição de classes e módulos, suas estruturas e funcionalidades nos arquivos seguintes:
        - `Pessoa.mjs` - Explicação de classes, propriedades, métodos e como exportar funcionalidades de arquivos. 
        - `Funcionario.js` - Explicação de herança, no contexto de classes, e como importar funcionalidades de outros arquivos 
        - `Main.js` - Explicação de instâncias e como acessar propriedades e métodos de uma classe, além da descrição do sistema de módulos ES.

    - `Testes.mjs` - Explicação básica de testes automáticos utilizando o módulo assert.
    
- **/javascript-web:**
    
    - /propriedades-window - Explicação do objeto global window, usado para interajir com páginas web:

    - /manipulacao-DOM - Explicação do DOM (Document Object Model), interface de programação que fornece uma representação estruturada do documento HTML.
        - /selecao-manipulacao-elementos - Explicação de como selecionar e manipular elementos das páginas web.
        - /eventos - Explicação de eventos no contexto de javascript, usados para criar respostas às ações do usuário ou à mudanças no estado da página.

    **Obs**: Todos os diretórios acima possuem os seguintes arquivos: 
    1. `script.js` - Conteúdo explicativo.
    2. `pagina.html.` - Página de exemplo para demonstração do que foi apresentado no script.

- **/aplicacao-web-ex:**

    Criação de uma página de registro responsiva e interativa, que faz uso de todos os principais fundamentos das linguagens estudadas nas outras seções do repositório, sem comentários explicativos, pois o objetivo é fornecer um exemplo de fácil entendimento de como essas três linguagens são utilizadas em conjunto em contextos reais. 

- **README.md:**
    - Descrição do repositório:
        - Motivo.
        - Instalação.
        - Estruturação do repositório.
        - Observações.
        - Contato.

## Observações

Em todos os arquivos de estudo, há comentários explicativos que detalham cada recurso de cada linguagem de forma indivídual. Para o estudo do HTML e JavaScript em aplicações web, abra os arquivos .html em um navegador, assim, enquanto os elementos da linguagem estão sendo estudados, um lugar onde é possível ver as demonstrações desses elementos está disponível, aumentando a compreensão do conteúdo. Lembre-se de visualizar os arquivos na ordem em que foram listados na seção acima.

## Contato

Caso tenha dúvidas, entre em contato:

- Nome: Paulo Henrique Barbosa do Prado Pereira
- E-mail: pereirapaulo436@gmail.com
- LinkedIn: [Paulo Barbosa](https://www.linkedin.com/in/paulo-barbosa-61a860303/)
- GitHub: [2007paulohenrique](https://github.com/2007paulohenrique)