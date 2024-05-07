<img src="./github/images/banner.png" />

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Contributors](https://img.shields.io/badge/contributors-1-orange)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### <a target="_blank" href="https://www.raulalbuquerque.com/">www.raulalbuquerque.com</a>

#### Documentation | Documentação:
- [English](#portfolio)
- [Português](#portfólio)
<br><br>

# <img src="./github/icons/en.svg" /> Portfolio 

* This is my portfolio and it was developed with Next.js to improve my knowledges about this framework.

* This application have many features like dark & light theme, language switch between english & portuguese, responsive layout and components with visual feedback.

## Techs:
[![Techs](https://skillicons.dev/icons?i=html,css,ts,next,react,m&perline=8)](https://skillicons.dev)

## Responsive Layout

<table style="border: none;">
    <tr>
        <th style="text-align: center;">Mobile Layout</th>
        <th style="text-align: center;">Tablet Layout</th>
    </tr>
    <tr>
        <td>
            <img src="./github/images/mobile.png" />
        </td>
        <td>
            <img src="./github/images/tablet.png" />
        </td>
    </tr>
</table>

## Routes

- **"/"** : home page with the name and tech stack of developer.
- **"/about"**: page with informations about the developer.
- **"/projects"**: page with the developer's main projects.
- **"/freelances"**: page with the most revelant real projects as a freelancer.
- **"/contacts"**: contact page.

## Installation

### Fork this repository

<img src="https://servidor-estatico-eight-murex.vercel.app/fork.jpg" /> 

### Customize it with your data

The application has two features to render the data:
    
- Getting your data from a [Static File](#static-file)
- Getting your data from a [API REST](#api-rest)

### Static file

1. **Clone the "main" branch**

    ```shell
    git clone git@github.com:Raul-Albuquerque/portfolio-2.0.git . --branch  main --single-branch
    ```

2. **Install dependencies**

    ```shell
    npm install
    ```

3. **Access the models folder**

    <img src="./github/images/models.png" /> 

4. **Update the models with your informations**

    <img src="./github/images/allModels.png" />

5. **Replace the static images**

    <img src="./github/images/static.png" /> 

6. **Start the development server**

    ```shell
    npm run dev
    ```
7. Open [http://localhost:3000](http://localhost:3000) in your browser.

### API REST

In order to get your data from an API REST you have to use the "rest-api" branch.

1. **Clone the "rest-api" branch**

    ```shell
    git clone git@github.com:Raul-Albuquerque/portfolio-2.0.git . --branch 
    rest-api --single-branch
    ```
2. **Install dependencies**

    ```shell
    npm install
    ```

3. **Access the api folder and open the index.ts file**

    <img src="./github/images/services.png" />

4. **Replace the baseURL within index.ts file**

    ```javascript
    import axios from 'axios'

    const api = axios.create({
    baseURL: 'https://api-portfolio-2-0.onrender.com',
    })

    export default api
    ``` 
5. **Open the files within hooks folder**

    <img src="./github/images/hooks.png" />

6. **Check the endpoints** 
    ```javascript
    const fetchData = async (): Promise<DeveloperResponse> => {
    const response = await api.get<DeveloperResponse>('/developers')
    return response.data
    }

    // Make sure that the endpoint of your REST API matches the endpoint of your hooks.
    ``` 
7. **Start the development server**

    ```shell
    npm run dev
    ```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contribution

Contributions are welcome! Feel free to open a PR or report issues.

If you found this project helpful, consider dropping a star (⭐) on the repo to help it grow!

## Author
This project was created by [Raul Albuquerque](http://localhost:3000).

## Contact
For more information of collaborations on the project, please contact [raulmalbuquerque2014@gmail.com](mailto:raulmalbuquerque2014@gmail.com).
<br><br>
<hr>
<br><br>

<img src="./github/icons/br.svg" /> 

# Portfólio
Esse é o meu portfolio e ele foi desenvolvido com Next.js para aprimorar meus conhecimentos nesse framework.

Esta aplicação tem diversas funcionalidades como temas claro e escuro, mudança de idioma entre inglês e português, layout responsivo e components com feedback visual.

## Tecnologias:
[![Techs](https://skillicons.dev/icons?i=html,css,ts,next,react,m&perline=8)](https://skillicons.dev)

## Layout responsivo

<table style="border: none;">
    <tr>
        <th style="text-align: center;">Layout no celular</th>
        <th style="text-align: center;">Layout no tablet</th>
    </tr>
    <tr>
        <td>
            <img src="./github/images/mobile.png" />
        </td>
        <td>
            <img src="./github/images/tablet.png" />
        </td>
    </tr>
</table>

## Rotas

- **"/"** : página inicial com o nome e a stack do desenvolvedor(a).
- **"/about"**: página com informações sobre o desenvolvedor(a).
- **"/projects"**: página com os principais projetos do desenvolvedor(a).
- **"/freelances"**: página com os projetos reais mais revelantes como freelancer.
- **"/contacts"**: página de contato.

## Instalação

### Fork o repositório

<img src="https://servidor-estatico-eight-murex.vercel.app/fork.jpg" /> 

### Personalize com seus dados

A aplicação possui duas funcionalidades para renderizar os dados:
    
- Consumindo dados de um [Arquivo Estático](#arquivo-estático)
- Consumindo dados de uma [API REST](#rest-api)

### Arquivo Estático

1. **Clone a branch "main"**

    ```shell
    git clone git@github.com:Raul-Albuquerque/portfolio-2.0.git . --branch  main --single-branch
    ```

2. **Instale as dependências**

    ```shell
    npm install
    ```

3. **Acesse a pasta models**

    <img src="./github/images/models.png" /> 

4. **Atualize os modelos com suas informações**

    <img src="./github/images/allModels.png" />

5. **Substitua as images estáticas**

    <img src="./github/images/static.png" /> 

6. **Inicie o servidor de desenvolvimento**

    ```shell
    npm run dev
    ```
7. Abra [http://localhost:3000](http://localhost:3000) em seu browser.

### REST API

Para exibir seus dados consumindo uma API REST você tem que usar a branch "rest-api".

1. **Clone a branch "rest-api"**

    ```shell
    git clone git@github.com:Raul-Albuquerque/portfolio-2.0.git . --branch 
    rest-api --single-branch
    ```
2. **Instale as dependências**

    ```shell
    npm install
    ```

3. **Acesse a pasta "api" e abra o arquivo index.ts**

    <img src="./github/images/services.png" />

4. **Substitua a baseURL no arquivo index.ts**

    ```javascript
    import axios from 'axios'

    const api = axios.create({
    baseURL: 'https://api-portfolio-2-0.onrender.com',
    })

    export default api
    ``` 
5. **Abra os arquivos dentro da pasta hooks**

    <img src="./github/images/hooks.png" />

6. **Confira os endpoints** 
    ```javascript
    const fetchData = async (): Promise<DeveloperResponse> => {
    const response = await api.get<DeveloperResponse>('/developers')
    return response.data
    }

    // Verifique se o endpoint da sua REST API é igual ao endpoint dos seus hooks.
    ``` 
7. **Inicie o servidor de desenvolvimento**

    ```shell
    npm run dev
    ```
8. Abra [http://localhost:3000](http://localhost:3000) em seu browser.

## Contribuições
Contribuições são bem-vindas! Sinta-se livre para abrir um PR ou informar erros.

Se esse projeto ajudou você, considere deixar uma estrela (⭐) neste respositório para ajudá-lo a crescer.

## Autor
Este projeto foi criado por [Raul Albuquerque](http://localhost:3000).

## Contato
Para mais informações ou colaborações com o projeto, entre em contato por [raulmalbuquerque2014@gmail.com](mailto:raulmalbuquerque2014@gmail.com).
