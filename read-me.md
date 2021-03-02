# Google Maps Marcadores com Filtros

Este projeto simples é um exemplo de como implementar marcadores personalizados e filtrá-los utilizando a Api do Google Maps.

## Api do Google Maps
É necessário criar uma chave de api para a utilização do Maps.

### Criar API Key
1. Faça login no [console do Google](https://console.developers.google.com/apis/dashboard)
2. Selecione um projeto existente ou crie um novo
3. Em **Credenciais**, clique em `Criar credenciais` > `Chave de API`
4. Copie e salve a sua chave

### Ativar a Api do Maps
1. No menu lateral do Console, escolhe **Biblioteca**
2. Procute por `Maps JavaScript API` e clique em **Ativar**

Ao final deste processo a sua chave estará habilitada a utilizar a Api Javascript do Maps.

### Utilização da chave
Após clonar o projeto, abra o arquivo `index.html`, procure por `SUA_CHAVE_AQUI` e substitua pela sua chave.

## Instalação

Clone o projeto para a sua maquina:
```bash
git clone https://github.com/stefanosandes/google-maps-js-api-example.git
```

Entre na pasta do projeto
```bash
cd google-maps-js-api-example
```

Instale as dependências
```bash
yarn install
```

Inicialize o servidor
```bash
yarn serve
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)