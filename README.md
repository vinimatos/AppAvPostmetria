# Informações de instalação, execução e estrutura do projeto
 
 Este projeto está definido com uma API em `Laravel v6.2`, front-end com `Angular v11.2` e um `script` de importação onde provem dados de uma API pública. 
 
 A seguir as instruções de instalação de suas dependências que ficarão localizadas em `vendor/` para o projeto API e `node_modules/` para o front-end.
 
- Importe o `app_teste.sql` que está na pasta raiz para gerar sua base de dados

# Laravel API

- composer install

- Configure o banco de dados no arquivo `.env.exemple` e renomeie o mesmo para  `.env`

- php artisan serve 

# Angular Front-End

 - npm install
 - ng serve 
   
   Após a execução do comando `ng serve` a aplicação estará disponível em: `http://localhost:4200/` 

## Dados de acesso
 - Login: test@mail.com
 - Senha: 12345678

# Script

##  Acesse o diretório `script/` localizado na pasta raiz.

- Defina suas configurações de acesso a base dados no arquivo ` Conn/connection.php`

- Execute o seguinte comando: `php script.php` para realizar a importação da API pública (Aqui utilizamos [Json Placeholder](https://jsonplaceholder.typicode.com/))


# Estrutura back-end

## Diretório raiz da API
- `app\Models` - Contém todos os modelos `Eloquent` 
- `app/Http/Controllers` - Contém todos os controladores da API 
- `config` - Contém todos os arquivos de configuração do aplicativo 
- `database/migrations` - Contém arquivos para gerar o banco de dados, que pode ser efeito através do comando:  `php artisan migrate` (Só execute esse comando em caso de não importação do `app_teste.sql` localizado na pasta raiz do projeto.)
- `routes` - Contém as rotas de acesso da API, para mais informações:  `php artisan route:list`
- `Kernel.php` onde podemos definir os `middlewares`. Nele validamos regras especificas da aplicação, como no caso o uso de autenticação com `token` (`JWT - Json Web Token` para lidar com autenticação de acesso do usuário e permissão de acesso às rotas da API)

# Estrutura front-end

- `app-routing.module` - Onde gerimos nossas rotas de navegação

## Diretório raiz `src/app`

 - `app.module.ts`  - Nesse módulo gerenciamos nossos componentes, importação e exportação de outros componentes ou módulos para uso de forma global em toda aplicação 

 - `app.component.ts` - Relaciona os componentes utilizados no projeto

 - `user.ts` - Arquivo `TypeScript` que tem como garantir a tipagem de dados enviado pelo front-end até a API.(Utilizado no cadastro de um novo usuário)

## Diretório `src/app/admin/`

 - Pensando em uma arquitetura `MVC`, `*.component.ts` seria um `controller`. Nele podemos definir: seletores específicos, funções ou métodos

 - Na aplicação o `admin.dashboard.component.ts` faz uma instância com `admin.service.ts` para obter uma lista de dados provida da API

 - Os templates da aplicação está definido nos arquivos com final de extensão `.html`


# Observações finais
  Demais diretório, components e arquivos tem como objetivo complementação de uso da aplicação em modo geral, como:

- Registro de usuário
- Login / Logout
- Gerenciamento de Cookies