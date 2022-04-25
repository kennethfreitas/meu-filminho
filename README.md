## Projeto Meu Filminho - Treinamento Node.js

---

### - Instalação do Node.js
- [Node.js](https://nodejs.org/en/download/)
- [NVM - Unix](https://github.com/nvm-sh/nvm)
- [NVM - Windows](https://github.com/coreybutler/nvm-windows)

** *NVM in nutshell, Node Version Manager, permite trocar diferentes versões do Node.js facilmente, para instalar uma versão use `nvm install 12` (instala o Node.js 12, por exemplo) e `nvm use 12` para utilizar a versão 12 baixada.*

---

### - Pacote maroto para usar no VSCode para desenvolver com Node.js
<https://marketplace.visualstudio.com/items?itemName=kennethfreitas.node-developer>

---

### - API usada no projeto:
[OMDb API - The Open Movie Database](https://www.omdbapi.com/)

---

### - Cheat Sheet NPM essencial
| Comando              | O que faz                                                                                                   | Exemplo                                                       |
|----------------------|:-----------------------------------------------------------------------------------------------------------:|--------------------------------------------------------------:|
| `npm init`           | Inicializa um pacote NPM                                                                                    | `npm init -y` # Inicia um pacote com as configurações padrão  |
| `npm i`              | Instala todas dependências                                                                                  | `npm i` # Instala todas dependências listadas no package.json |
| `npm i PACKAGE_NAME` | Instala um pacote como dependências                                                                         | `npm i express@4` # Instala o Express na versão 4             |
| `npm r PACKAGE_NAME` | Remove um pacote                                                                                            | `npm r rxjs` # Remove o rxjs da lista de dependências         |
| `npm ci`             | Mesma coisa que `npm install`, porém feito para ambientes automatizados                                     | `npm ci`                                                      |
| `npm run SCRIPT`     | Permite rodar um comando definito no package.json                                                           | `npm run dev` # Roda o comando associado com o script "dev"   |
| `npx PACKAGE_NAME`   | Permite rodar comandos diretamente de um pacote, similar ao `npm run`, porém sem a necessidade de um escopo | `npx cowsay "Hello"`                                          |

** *Dependências podem ser instaladas globalmente usando a flag `-g` ou como dev devDependencies utilizando a flag `-D` ao utilizar o `npm i` em algum pacote.*
** *Você pode usar a flag `--production` com `npm i` para não instalar as devDependencies.*

---

## - Documentações oficiais:
- [Node.js](https://nodejs.org/en/docs/)
- [NPM](https://docs.npmjs.com/)