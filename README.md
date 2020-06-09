<h1 align="center">BludataTest</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51340552/83945112-cbae5680-a7de-11ea-9038-fe0680845f34.png"
</p>

**TESTE DE CONHECIMENTO EM C#**
<p>Criar uma listagem de fornecedores relacionado a uma empresa.
    <ul>Requisitos: <li>O campo ‘Empresa’ será um cadastro a parte;</li>
                <li>Caso a empresa seja do Paraná, não permitir cadastrar um fornecedor pessoa física menor de idade;</li>
                <li>Caso o fornecedor seja pessoa física, também é necessário cadastrar o RG e a data de nascimento;</li>
                <li>A listagem de fornecedores deverá conter filtros por Nome, CPF/CNPJ e data de cadastro.</li>
      </ul>
</p>

<p> O Projeto consiste de back-end, feito em C#, utilizando uma WEBAPI com APIRest, enquanto o front-end é feito em React, consumindo a API através do AXIOS.</p>
<p>O <b>back-end</b> é construído em 3 camadas, a camada de interface de comunicação(Controllers), lógica e validações(Service) e acesso a dados(Repository).    Na solução, há também testes unitários que estão na pasta "UnitTets".</p>
<p> As exceções estão sendo filtradas através do Middleware IExceptionFilter: filtrando entre as validações e as exceções. Caso seja uma exceção(inesperada), retorna-se uma resposta genérica, e os detalhes serão registrados no log.txt, através da classe logger.</p>
<p>Nos models, temos as Entidades(tabelas no banco), Enums(DocumentType que é mapeado para string através do SupplierMapping, no repoitório), ResposneModels(responsável por traduzir o supplier em objeto(JSon) esperado pelo front-end) e ValueObject(Document, pois é necessário o tipo de documento(CPF/CNPJ) e não somente o valor).</p>
<p>Tanto o repósitório de fornecedor,quanto o de empresa, herdam do repositório genérico, implementado para evitar a repetição de código e facilitar na manutenção.</p>
<p>O Shared guarda as classes utilitárias.</p>

<p>O <b>Banco de dados</b> é construído por Migrations. Antes de criar as migrations é necessário inserir o caminho do seu banco de dados na connection string no arquivo AppSetings.Json do Projeto Application.</p>

**Injeção de dependência**:<p>Utilizei a injeção de dependência para depender da interface e não das classes, pois assim a classe conhece somente a interface e não a implementação e também para a comunicação entre camadas(controllers, service, repository), foi implementada por construtores registrando-as no Startup pelo meio do 'services.AddTransient', que instancia a classe quando a interface é chamada e em seguida, desaloca essa instância.</p> 

**Testes Unitários**:<p>Para os testes unitários, utilizei o XUnit e NSubstitute(para mockar classes que não deveriam ser testadas).</p>

<p>No <b>front-end</b> está dividido em: pages,que contém duas páginas que se utilizam de componentes que estão na pasta components, e services que possui as validações, configura a API com axios e tem as funções responsáveis pelas requisições ao backend.
<p>Para subir o React, é necessário executar o comando "npm install" ou "yarn install" parav baixaras dependências; e em seguida, rodar com "npm run start" ou "yarn start".</p> 
  
<ul>Tecnologias utilizadas no back-end
   <li>.NetCore</li>
   <li>EntityFrameworkCore</li>
   <li>SQLServer</li>
   <li>WebAPI2</li>
  </ul>
  
<ul>Tecnologias utilizadas no front-end
   <li>React</li>
   <li>React Router DOM</li>
   <li>Material-UI(para a tabela)</li>
   <li>SweetAlert</li>
    <li>ReactLoading</li>
  </ul>
