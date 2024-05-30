
## Aplicativo estilo pomodoro

Inicialmente é básico com um cronômetro de 25 minutos e outro 5 minutos.

## TODO

### Geral
* Ajustar menu lateral para exibir ícones ao estar minimizado. Hoje há inconsistência do jeito que o sidenav foi configurado.
* Imagem de background legal. Também ajustar a cor do sidenav pra dar match com a nova imagem.

### Customodoro
* Fazer a duração do pomodoro ser salva ao navegar entre outras abas
	* Talvez exibir um modo minimizado do pomodoro no canto da tela quando o customodoro não for o foco
* Adicionar mais ciclos (45:10, 60:15)
* Editar nome e duração do ciclo diretamente no pomodoro
* Adicionar opção para desativar as notificações
* Adicionar opção para desativar os sons das notificações

### Dashboard
* Histórico de sessões
* Resumo do dia anterior e/ou dia atual com gráficos

### Settings
* Modo minimalista para esconder label das telas principais

## Para desenvolvedores
```
// Instala os pacotes
npm install

// Primeiro execute esse comando em um terminal para iniciar o ng serve em localhost:4200
npm start
// Em seguida execute o electron que irá identificar que o app não está buildado e irá renderizar o localhost:4200
npm run electron // Testar aplicativo

// Compila o app para um .exe. Resultado é uma pasta chamada comodoro-win32-x64
npm run package
```
