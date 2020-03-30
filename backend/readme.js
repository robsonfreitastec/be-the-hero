/* 

npm node init -y 
criar packed.json

iniciar projeto no ternminal 
node index.js

Command Shift P - Install Code

sudo npm install nodemon -D
instalar atualizador de servidor 

no package.json mudar teste em script para start com valor nodemon index.js. 
Se o index.js estiver na src, alterar no package.json o caminho do start

No banco de dados utilizamos o driver knex (sudo npm install knex) e esolhesmos a extensão de sqlLite
depois de instalado o banco de dados de preferencia, criamos um package do knex com o codigo npx knex init

knex tem comandos para criar tabela ex:
sudo npx knex migrate:make create_nomedatablea
depois do arquivo criado , colocar os parametros e rodar npx knex migrate:latest

sudo npm install cors
determina quem pode acessar o codigo

sudo npm install react-icons
instala todos os icons do react

RectNative
sudo npm install -g expo-cli

criar projeto
sudo expo init mobile


*/

/*
/ Rota
/users Recurso
*/

/*
Metodos HTTP

Get => Busca uma informação no back-end
Post => Cria uma informação no back-end
Put => Altera uma informação no back-end
Delete => Deleta uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros. paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utiizado para criar ou alterar recursos
 */


 expo routes
 sudo npm install @react-navigation/native

 expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

expo install expo-mail-composer