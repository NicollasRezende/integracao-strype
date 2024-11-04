# Projeto de Integração de Pagamento com Stripe

Este projeto é uma integração simples de pagamento com a [Stripe](https://stripe.com/), usando HTML, CSS, JavaScript, Node e Express. Ele permite que os usuários façam um pagamento seguro através de uma interface de checkout.


---

## Visão Geral do Projeto

O projeto é uma aplicação web que utiliza o servidor Node e o framework Express para lidar com a lógica do pagamento. Ele possui um front-end mínimo em HTML, CSS e JavaScript, que interage com a API da Stripe para iniciar um checkout seguro. O objetivo é fornecer uma experiência de pagamento simplificada, onde o usuário pode iniciar um pagamento clicando em um botão e, caso o pagamento seja bem-sucedido, visualizar uma página de sucesso. Em caso de cancelamento, o usuário é redirecionado para uma página de notificação.

---

## Estrutura de Arquivos e Organização

A estrutura do projeto é composta pelos seguintes arquivos:

- `index.js`: Este arquivo é o ponto de entrada do servidor, onde o Express é configurado para gerenciar as rotas e interações com a Stripe.
- `public/`: Diretório que contém os arquivos estáticos do front-end, incluindo:
  - `index.html`: Página principal que exibe o botão de pagamento.
  - `styles.css`: Estilos CSS que definem a aparência do layout da página.
  - `script.js`: Código JavaScript que conecta a página de pagamento com a API da Stripe.
  - `success.html` e `cancel.html`: Páginas para notificar o usuário sobre o sucesso ou cancelamento do pagamento.

A estrutura de pastas é simples, com foco na organização clara dos arquivos para fácil manutenção e entendimento.

---

## Variáveis de Ambiente e Segurança

Para manter as chaves de API da Stripe seguras, elas são armazenadas em um arquivo `.env` que não é incluído no repositório de código, garantindo que dados sensíveis fiquem protegidos. A aplicação utiliza a biblioteca `dotenv` para carregar as variáveis de ambiente e configurá-las automaticamente. No ambiente de desenvolvimento, são usadas as chaves de teste fornecidas pela Stripe (`STRIPE_SECRET_KEY` e `STRIPE_PUBLIC_KEY`). Esse método protege a chave secreta, uma vez que a chave pública é a única exposta ao front-end.

---

## Implementação do Servidor com Express

No arquivo `index.js`, o servidor Express é configurado para servir os arquivos estáticos na pasta `public` e para lidar com as solicitações de pagamento. A integração com a Stripe acontece na rota `/create-checkout-session`, que inicia uma sessão de checkout.

### Rota de Pagamento `/create-checkout-session`

Quando o usuário clica no botão de pagamento, uma solicitação POST é enviada para `/create-checkout-session`. Nesta rota, o servidor chama a API de criação de sessão da Stripe, especificando os detalhes do pagamento, como:

- **Tipo de pagamento**: Definido para `card`, aceitando apenas cartões.
- **Detalhes do item**: O nome do produto, quantidade, e valor são especificados para simular uma compra de um item fictício.
- **URLs de redirecionamento**: São definidos URLs de sucesso e cancelamento (`success.html` e `cancel.html`), para onde o usuário é direcionado conforme o resultado do pagamento.

Essas configurações da sessão são importantes para garantir que o fluxo de pagamento ocorra conforme esperado e para redirecionar o usuário após a conclusão do processo.

---

## Implementação do Front-End

O front-end usa HTML, CSS e JavaScript, com o objetivo de proporcionar uma interface simplificada para o pagamento.

### Arquivo `index.html`

O arquivo `index.html` serve como a página principal do projeto, onde o botão de pagamento é exibido. Ele carrega a biblioteca `Stripe.js` e o arquivo `script.js` que contém a lógica de integração do front-end.

### Script de Pagamento (`script.js`)

O arquivo `script.js` é responsável por conectar o botão de pagamento ao serviço de checkout da Stripe. O código JavaScript obtém a chave pública da Stripe e configura o evento de clique no botão, que envia uma requisição para o servidor iniciar a sessão de pagamento. A biblioteca Stripe redireciona automaticamente o usuário para o fluxo de checkout da Stripe, que garante a segurança e a criptografia do pagamento.

### Estilos Visuais (`styles.css`)

O CSS define uma interface minimalista e acessível, centralizando o conteúdo e aplicando estilo ao botão de pagamento. O objetivo é manter a aparência limpa, com um botão estilizado para facilitar a interação do usuário.

### Páginas de Sucesso e Cancelamento (`success.html` e `cancel.html`)

As páginas de `success.html` e `cancel.html` informam o status do pagamento ao usuário. A `success.html` exibe uma mensagem de agradecimento quando o pagamento é concluído com sucesso, enquanto a `cancel.html` notifica o usuário em caso de cancelamento, oferecendo a opção de tentar novamente.

---

## Configurações de Preço e Moeda

O valor do pagamento é configurado em centavos para manter a precisão nos cálculos (o preço do item é definido como 2000 centavos, o que corresponde a $20,00). A moeda é configurada para `usd` (dólar americano), mas pode ser alterada conforme a necessidade. Esta configuração ocorre na rota do servidor (`/create-checkout-session`) e pode ser modificada para outros valores e moedas suportados pela Stripe.

---

## Considerações de Segurança e Ambiente de Teste

Este projeto foi desenvolvido com as práticas recomendadas para ambientes de desenvolvimento e teste. Para o checkout, são usadas as chaves de teste fornecidas pela Stripe, o que permite realizar pagamentos fictícios. Em produção, é essencial trocar essas chaves para as chaves de produção da Stripe e adotar HTTPS para garantir a segurança dos dados dos usuários.

> **Nota:** A Stripe oferece uma série de cartões de teste (ex: `4242 4242 4242 4242`) que podem ser utilizados para simular pagamentos e verificar se a integração está funcionando corretamente.

> **Modo de Teste**: As chaves de API usadas são para testes. Use-as em ambiente de desenvolvimento e teste com cartões fornecidos pela Stripe (ex.: `4242 4242 4242 4242` com uma data de validade futura e qualquer CVC).

> **Segurança**: Em produção, sempre use HTTPS para proteger os dados dos usuários.

> **Chaves de Produção**: Quando estiver pronto para o ambiente de produção, atualize as chaves da Stripe no arquivo `.env` para as chaves de produção.

---

## Recursos e Documentação da Stripe

Para entender mais sobre as APIs da Stripe e suas funcionalidades, acesse a [Documentação Stripe para Checkout](https://stripe.com/docs/checkout) e [Stripe API Reference](https://stripe.com/docs/api). Esses recursos são fundamentais para expandir o uso da API em futuras implementações.

---

## Conclusão

Este projeto de integração com a Stripe é um exemplo funcional de como configurar um checkout seguro e personalizável para aplicações web. A separação entre front-end e back-end, além da utilização de variáveis de ambiente para chaves sensíveis, garante segurança e modularidade. Este modelo serve como base para adicionar funcionalidades mais avançadas, como a definição de múltiplos produtos e métodos de pagamento alternativos.

--- 

## Recursos

- [Documentação Stripe para Checkout](https://stripe.com/docs/checkout)
- [Documentação Express.js](https://expressjs.com/)
- [Stripe API Reference](https://stripe.com/docs/api)

---

## Licença

***Este projeto é livre para uso e modificação.***
