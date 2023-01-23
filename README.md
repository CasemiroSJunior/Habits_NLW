# NLW SETUP | Habits

## NLW SETUP é um projeto fornecido pela [**RocketSeat**](https://app.rocketseat.com.br) com o objetivo de desenvolver um calendário de Hábitos.

Tabela de conteúdos
=================
   * [Sobre](#tecnologias)
   * [Tecnologias](#tecnologias)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Projeto](#projeto)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Server Local](#local-server)
      * [Web](#web)
      * [Mobile](#mobile)
      * [Iniciação](#iniciacao)
   * [layout](#layout)


![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000) 

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Figma
- Typescript
- React e ReactNative
- Prisma
- Fastify
- Axios
- Tailwind

## 💻 Projeto

O projeto Habits é um aplicativo que possibilita criar novos hábitos e te ajuda à acompanha-los.

## Instalação
você pode instalar as dependências necessárias do projeto entrando nas pastas e instando com o *Npm*
```bash
cd mobile
-npm install
cd..
```
```bash
cd server
-npm install
cd..
```
```bash
cd web
-npm install
cd..
```

Dentro da pasta *server*, dê inicio à criação do Banco de Dados a partir do Prisma utilizando o seguinte comando: 

```bash
-npx prisma migrate dev
```

## Como usar:
### Pre-Requisitos:
  altere para seu IP local dentro da pasta 
   *mobile/src/lib/axios.ts*
    Altere "baseURL: 'https://123.456.789.10:3107' para seu ip.
      ex.: baseURL: 'https://192.168.0.182:3107'


**OBS:** O mesmo pode ser feito em *web* , atualmente ele está usando o IP local da sua máquina, então por padrão, não há necessidade.

### Inicialização
#### Servidor:
 Dentro da pasta server, inicie ele com *npm run dev*

#### Web:
 Dentro da pasta web, inicie ele com *npm run dev*

#### mobile:
 Dentro da pasta server, inicie ele com *npx expo start*


## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/file/le2W8NFA9RIl7meUay6lEf/Habits-(i)-(Community)?node-id=6%3A343&t=7Xsv9DSI3ka6A5Fk-0). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

#### Status: concluído

## Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/rocketseat)
