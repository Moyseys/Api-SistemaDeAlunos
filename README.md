# Api-SistemaDeAlunos (Em desenvolvimento)
Esta é uma api feita com NodeJs que é consumida pelo [App Alunos](https://github.com/Moyseys/App-SistemaDeAlunos), ela presta serviços como gerenciamento de usuário, gerenciamneto de alunos, gerenciamento de fotos de perfil e faz autenticação utilizando JWT.

# Como iniciar 

## Instale os pacotes necessários.
~~~
  npm i
~~~~
## Após isso crie um arquivo na raiz do projeto chamado ".env".
Dentro desse aquivo você deve prencher as variaveis de ambiente.
> Caso tenha o docker e o docker compose instalado você pode rodar "Docker compose up -d", assim será criado um contêiner mysql e um contêiner node onde rodara a api.
> Após isso será necessário somente executar a migração, para isso siga os tópicos abaixo. 
~~~ .env
  DATABASE='api_database'
  DATABASE_HOST='127.0.0.1'
  DATABASE_PORT=3306
  DATABASE_USERNAME='root'
  DATABASE_PASSWORD='root'
  
  TOKEN_SECRET='sua_secret_key_aqui'
  TOKEN_EXPIRATION=7d
  
  APP_PORT=3001
  APP_URL=http://localhost:3001
~~~~
## Fazendo a migração das tabelas para sua instancia do mysql.
Para isso é preciso somente executar o comando abaixo, lembrando que caso os dados de conexão com o banco de dados não estejam corretos retornara um erro.
~~~~
npm run migrate
~~~~
> Somente lembrando que caso tenha usado o comando do docker você deve colocar o nome host como o nome do serviço do contêiner mysql o mesmo também serve para
a porta do contêiner a senha e o usuário, para verificar essas informações é necessário consultar o arquivo "docker-cmopose.yaml" na raiz do projeto.

# Agora com todo o ambiente configurado você deve executar o script de inicialização.
~~~~
npm run dev
~~~~


# Tecnologias principais
- **Express** (framework)
- **Json web token** (JWT)
- **Multer** (Biblioteca)
- **Sequelize** (ORM)

# Proxima Atualização 
- Gerenciamento de notas dos alunos
