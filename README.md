# Assignment da 2 semana Gama Experience

## Hackers
#### Blog para geração de leads utilizando o Firebase como plataforma de persistência dos dados gerados.

### Orientações para hackers:

Codar um blog para captação de leads com formulário qualitativo. Não é permitido utilizar qualquer plataforma de geração de formulários, você deve implementar o blog  e o sistema de formulário. 

Desenvolver o blog de acordo com o layout dos hipsters. Você deve persistir os dados de formulário de validação e leads utilizando Firebase (https://firebase.google.com). 

No final do assignment deve ser entregue um arquivo .csv, um contendo todos os leads com: Nome completo, email válido, IP*, data e hora de criação do cadastro* (*: dados que não precisam ser captados por meio de formulário). 

### REGRAS PARA CSV:

O padrão de data hora deve ser YYYY-MM-DD hh:mm:ss.

O ip deve ser IPv4 ou IPv6 formatado no padrão de cada um.

Os tipos permitidos são B2B (em caixa alta).

Os dados devem ser separados por vírgula.

O .csv de leads deve conter os dados na seguinte ordem: email, nome, ip, tipo, data_hora. Esta ordem não pode ser alterada. Exemplo:

### REGRAS PARA ENTREGA:

Frameworks/bibliotecas/plugins para facilitar desenvolvimento são permitidos (Angular, Bootstrap, jQuery, Foundation, Materialize, React e Sass). Caso queira utilizar outro framework consultar o @savedra no slack.

O blog deve estar hospedado em algum servidor que permita deploy por ssh/git (Heroku, AWS, Digital Ocean, GitHub Pages, Firebase Hosting). Caso queira outro perguntar por DM para o @savedra no slack.

Seu blog deverá ter domínio .com.br. Nós faremos reembolso para domínios comprados na plataforma registro.br no valor de até R$40,00.

Você deve disponibilizar um repositório público em algum SCM (GitHub, Bitbucket, GitLab ou qualquer outro) para que a equipe técnica da Gama possa confirmar se não houve a utilização de ferramentas “PROIBIDAS”, não será verificada a formulário, qual frameworks foram utilizados e qual foi a estratégia de desenvolvimento (Exemplo: Carol cuidou do desenvolvimento do layout com bootstrap e jquery e Matheus fez a persistência de dados no Firebase utilizando o plugin deles).

Todos os hackers DEVEM commitar no repositório do grupo! (Compartilhamento de código por dropbox/drive/onedrive/email ou qualquer outro meio que não mostre publicamente que a pessoa auxiliou não serão avaliados e isso afetará diretamente na avaliação do integrante). Não é permitido o commit por pessoas que não fazem parte do grupo e muito menos do Gama Experience!

### CRITÉRIOS DE AVALIAÇÃO

Deploy da home e formulário até o horário de hipster [Entregável: histórico do servidor]

Critérios de acessibilidade implementados [Entregável: passar na ferramenta de correção]  

Critérios de SEO implementados [Entregável: Correção do código]
