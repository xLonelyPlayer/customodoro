
## Aplicativo estilo pomodoro com timer
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
### Dashboard
* Histórico de sessões
* Resumo do dia anterior e/ou dia atual com gráficos
### Settings
* Modo minimalista para esconder label das telas principais
## Para desenvolvedores
```
npm install // Instalar os pacotes
npm start // Desenvolver em localhost
npm run electron-build // Testar aplicativo
npm run package // Gerar pasta com executável final
```
