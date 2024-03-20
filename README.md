# Documentação da Linguagem de Programação Nanocode

## Introdução
Nanocode é uma linguagem de programação simples e intuitiva, projetada para facilitar o desenvolvimento de scripts e programas. Ela oferece comandos básicos para manipular dados, controlar fluxo e interagir com o ambiente.

Instale a versão mais recente aqui [ https://github.com/WebEngineProjects/Nanocode/tree/main/versions ]

Para programar você deve abrir a pasta nanocode e abrir o index.nan em seu editor de códigos.

## Comandos Básicos
### Echo
O comando `echo` é usado para exibir texto no console. Não é necessário usar aspas ou aspas duplas para strings. O fim da linha indica o término do comando. Exemplo:

```
echo Olá, mundo!
```

### Def
O comando `def` é usado para definir ou criar variáveis. Variáveis devem ser prefixadas com `%` no início e no final de seus nomes, mas apenas quando utilizadas em textos. Exemplo:

```
def nome = Nanocode
def idade = 25
```

### Clear
O comando `clear` é usado para limpar o console. Exemplo:

```
clear
```

### Key
O comando `key` é usado para criar uma função de uma linha. Ele permite criar uma chave e adicionar um código a ela para reutilização posterior. Exemplo:

```
key minha_funcao : echo Olá mundo!
minha_funcao()
```

### Info
O comando `info` é usado para mostrar informações sobre a linguagem instalada. Exemplo:

```
info
```

### Repeat
O comando `repeat` é usado para executar um certo comando com uma determinada quantidade de vezes. Exemplo :

```
repeat 5 : echo oi
```

### While
O comando `while` é usado para executar um certo comando enquanto uma condição é falsa. Exemplo :

```
while %count% < 10 : echo menor que 10
```

### If
O comando `if é usado para executar um certo comando caso algo seja verdadeiro. Exemplo :

```
if true : echo oi
```

### Input
O comando `input` é usado para para fazer uma pergunta no programa e guardar em uma variável. Exemplo :

```
Input %nome% : Digite seu nome :
```

### Comentários
Comentários podem ser feitos com `//` para criar textos que não fazem parte do script. Exemplo :

```
// Isso é um comentário
```

### Formatações
Formatações são usadas para colocar complexidade em seus scripts, aqui as formatações :

$R - retorna um número aleatório de 0 a 1.

## Exemplos de Programas
Aqui estão alguns exemplos de como utilizar os comandos da linguagem Nanocode para criar programas simples:

### Exemplo 1: Saudação

```
program Saudação

def nome = Nanocode

echo Olá, + %nome%!
```

### Exemplo 2: Calculadora de IMC

```
program Calculadora de IMC

def peso = 70
def altura = 1.75

def imc = %peso% / %altura% * %altura%

echo Seu IMC é: + %imc%

if %imc% < 18.5 echo Você está abaixo do peso
if %imc% >= 18.5 && %imc% < 24.9 : echo Seu peso está normal
if %imc% >= 24.9 && %imc% < 29.9 : echo Você está com sobrepeso
if %imc% >= 29.9 && %imc% < 34.9 : echo Você está com obesidade grau + 1
if %imc% >= 34.9 && %imc% < 39.9 : echo Você está com obesidade grau + 2
if %imc% >= 39.9 : echo Você está com obesidade grau + 3 + (mórbida)
```

# Conclusão
A linguagem Nanocode é uma ferramenta poderosa para desenvolver scripts e pequenos programas de forma rápida e eficiente. Com uma sintaxe simples e intuitiva, é ideal para iniciantes e para tarefas simples do dia a dia. Espero que esta documentação seja útil para começar a programar com Nanocode!
