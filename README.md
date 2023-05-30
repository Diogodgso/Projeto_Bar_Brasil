<div align="center" style="background-color: #e6eaf4;">
    <img src="src/imagens/logo-faculdade-300.png" 
         alt="Texto alternativo" 
         title="Sistema de Controle de Acesso a Ambientes"/>
</div>
<br>
<br>
<br>
<div align="center">
    <img src="src/imagens/intro.jpg" alt="Texto alternativo" />
</div>
<br>
<h2> Sistema WEB para atendimento a clientes de Bares e Restaurantes </h2>
<h3> 1 - Visão Geral do Software </h3>

<p>
Vendo a necessidade dos bares e restaurantes da região de Goiânia de uma plataforma que apresente melhor seus cardápios, facilite e gerencie os pedidos com um custo mais barato, percebemos aí uma demanda de mercado do desenvolvimento de uma aplicação WEB que através do QR Code da mesa, o cliente consegue abrir o cardápio, realizar pedido e finalizar a conta. Lembrando que a ideia é desenvolver essa aplicação de forma mais ampla e que atenda a vários tipos de bares e restaurantes cobrando um custo baixo de implantação e uma mensalidade com preço acessível. Essa aplicação irá processar e armazenar todo o cardápio e pedidos realizados pelos clientes de forma digital com o banco de dados e gerenciamento de login.

</p>

<h4> 1.1 - Objetivo do Software </h4>

<p>
   O objetivo do Sistema WEB é apresentar melhor os produtos do cardápio, facilitando a realização dos pedidos e gerenciamento das mesas e pedidos, utilizando o acesso via QrCode da mesa ou login do funcionário mantendo o histórico com data e horário de todos os pedidos e atualização do sistema.
</p>
<div align="center">
    <img src="src/imagens/ambiente.png" alt="Texto alternativo" />
</div>

<h4> 1.2 - Escopo do Projeto e Requisitos de Software </h4>
<p>Os requisitos funcionais descrevem as funções, que o sistema deve executar e as tarefas que ele deve realizar. Neste documento, apresentaremos os requisitos funcionais do Sistema de Controle de Acesso a Ambientes, definidos a partir das necessidades do cliente vinculado a este projeto. Além das principais necessidades e requisitos funcionais,  apresentaremos uma descrição detalhada de como o modelo Entidade-Relacionamento (ER) foi desenvolvido para atender a esses requisitos, incluindo as entidades, relacionamentos e atributos necessários para armazenar e gerenciar as informações do sistema.</p>
<br>
<p>
Após diversas reuniões com o cliente, restringiu-se o escopo deste projeto a implementação de um aplicação web que contemple as necessidades detalhadas abaixo:
</p>
<br>
<ul>
<li> 
permitir o cadastro de clientes e funcionários de forma a dar permissões para realização de pedidos do cardápio;
</li>
<li>
permitir o cadastro de produtos com suas descrições, categoris, quantidade e preços;
</li>
<li>
validar os acessos via QrCode ou acesso de funcionários parar permitir a realização dos pedidos;
</li>
<li>
manter o histórico de pedidos de cada mesa, registrando-se data, horário e o funcionário que atendeu;
</li>

</ul>
<br>
<br>
<p> Levantando as necessidades com o cliente, foram identificados os seguintes requisitos funcionais :
<br>
<br>
<div align="center">
<table>
    <thead>
    <tr>
        <th>ID</>
        <th> Nome </th>
        <th>DESCRIÇÃO</>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>RF01</b></td>
            <td><b>Manter clientes</b></td>
            <td>O sistema deve permitir incluir, excluir, atualizar e buscar informações de cliente, como nome, cpf, celular e e-mail. A busca será realizada pelo e-mail e os dados persistidos em um banco de dados</td>
        </tr>
        <tr>
            <td><b>RF02</b></td>
            <td><b>Manter funcionário</b></td>
            <td>O sistema deve permitir incluir, excluir, atualizar e buscar informações de funcionario, como nome, cpf, endereço, celular e e-mail. A busca será realizada pelo e-mail e os dados persistidos em um banco de dados</td>
        </tr>
        <tr>
            <td><b>RF03</b></td>
            <td><b>Autenticar usuários</b></td>
            <td>A autenticação do usuário deve verificada ;</td>
        </tr>
        <tr>
            <td><b>RF04</b></td>
            <td><b>Manter produtos</b></td>
            <td>o sistema deve permitir incluir, excluir e atualizar os produtos conforme sua categoria, quantidade, e descrição;</td>
        </tr>
        <tr>
            <td><b>RF05</b></td>
            <td><b>Manter pedidos de produtos</b></td>
            <td>o sistema deve permitir selecionar prodtos, Selecionar quantidades, excluir pedidos com o registro de time dos eventos;</td>
        </tr>
        <tr>
            <td><b>RF06</b></td>
            <td><b>Manter pagamento</b></td>
            <td>o sistema deve permitir fechar a mesa,  calcular os pedidos, selecionar a forma de pagamento e finalizar;</td>
        </tr>
    </tbody>
</table>
</div>
<br>
<h4> 1.4 - Modelo de Domínio </h2>
<p>A documentação do modelo Entidade-Relacionamento (ER) é uma etapa crucial no processo de desenvolvimento de um sistema de informação. O modelo ER é usado para representar a estrutura do banco de dados, incluindo as entidades, relacionamentos e atributos. A partir desse modelo, é possível criar um esquema de banco de dados que possa ser implementado em um sistema de gerenciamento de banco de dados (SGBD). Neste documento, apresentaremos o modelo ER para Sistema de Controle de Acesso a Ambientes que contém a descrição detalhada dessa estrutura, incluindo as entidades, relacionamentos, chaves primárias e estrangeiras.</p>
<div align="center">
    <img src="src/imagens/Arquitetura_angular-spring-boot-postgresql.png" alt="Texto alternativo" />
</div>
<br>
<h3> 2 - Arquitetura do Software </h2>
<p> A arquitetura de software de uma aplicação é o conjunto de decisões de design que definem como os diferentes componentes do sistema se relacionam e interagem entre si. Ela é responsável por garantir que a aplicação seja escalável, segura e capaz de lidar com as demandas dos usuários de forma eficiente. A documentação técnica da arquitetura de software é uma parte fundamental do processo de desenvolvimento, pois ajuda a equipe a entender como o sistema funciona e como cada componente se relaciona com os demais. Neste documento, serão descritos os principais componentes da arquitetura da aplicação, como eles se comunicam e quais são as suas responsabilidades. Além disso, serão apresentadas as principais tecnologias utilizadas na implementação da arquitetura, assim como as decisões de design que levaram à escolha dessas tecnologias.</p>

<div align="center">
    <img src="src/imagens/Diagrama_Estrutura_Dados_Bar_Brasil.jpg" alt="Texto alternativo" />
</div>
<h4> 1.2 - Tecnologias da implementação </h2>
<br>
<p>A definição das tecnologias ao implementar um aplicativo web é crucial para garantir eficiência, escalabilidade, segurança e uma boa experiência do usuário. A escolha adequada das tecnologias alinhadas aos requisitos do projeto, integração com outros sistemas, segurança avançada e interfaces responsivas é fundamental para o sucesso do desenvolvimento. Além disso, a seleção de tecnologias populares e bem suportadas agiliza o processo, permite maior interoperabilidade e facilita a resolução de problemas. Dentro deste contexto, definiu-se o uso das tecnologias abaixo para que se alcance com êxito a escalabilidade, eficiência, segurança e usabilidade do aplicativo web em desenvolvimento.</p>
<br>
<ul>
<li><b>Angular:</b> Angular é um framework de desenvolvimento web front-end mantido pelo Google. Ele permite a criação de aplicações web dinâmicas e responsivas por meio do uso de componentes reutilizáveis. Com recursos como data binding, injeção de dependência e roteamento, o Angular simplifica o desenvolvimento de interfaces de usuário complexas.
</li>
<li><b>Spring Boot:</b> Spring Boot é um framework de desenvolvimento de aplicativos Java que simplifica a criação de aplicativos autônomos e prontos para produção. Ele fornece uma configuração rápida e automática de componentes comuns do ecossistema Spring, permitindo que os desenvolvedores se concentrem na lógica de negócios em vez de configurar e integrar diferentes camadas do aplicativo.
</li>
<li><b>PostgreSQL:</b> PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e altamente escalável. Ele oferece suporte a recursos avançados, como consultas complexas, transações ACID, replicação e extensibilidade. O PostgreSQL é amplamente utilizado em aplicações que exigem um banco de dados confiável e poderoso, fornecendo uma sólida base para armazenamento e manipulação de dados.</li>
</ul>
<br>
<h3> Referências </h3>
<br>
<ol>
<li>Docker. Disponível em: https://www.docker.com/. Acesso em: 05 maio 2023.</li>
<li>Angular. Disponível em: https://angular.io/. Acesso em: 05 maio 2023.</li>
<li>Spring Boot. Disponível em: https://spring.io/projects/spring-boot. Acesso em: 05 maio </li>
<li>PostgreSQL. Disponível em: https://www.postgresql.org/. Acesso em: 05 maio 2023.</li>
<li>TypeScript. Disponível em: https://www.typescriptlang.org/. Acesso em: 05 maio 2023.</li>
<li>Java. Disponível em: https://www.java.com/. Acesso em: 05 maio 2023.</li>
</ol>
<br>
<h3> Contatos </h3>
<br>
<li>Diogo Souza de Oliveira E-mail: eng.eletricista.diogo@gmail.com</li>
<li>Adeilton Borges Moreira</li>
<li>Erlan Dias Miranda</li>
<li>Henrique Batista Coelho</li>

