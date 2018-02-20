@echo on
cls

echo Removendo a versao antiga do Angular-Cli
call npm uninstall -g angular-cli
call npm uninstall -g @angular/cli
call npm uninstall --save-dev angular-cli
call npm cache clean --force
call npm cache verify
rmdir /S/Q node_modules
del /F/Q package-lock.json

echo Instalando a nova versao do Angular-Cli
call npm install rxjs@latest zone.js@latest core-js@latest
call npm install @angular/cli@latest @angular/cdk@latest @angular/core@latest @angular/common@latest @angular/compiler@latest @angular/animations@latest 
call npm install @angular/http@latest @angular/router@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/forms@latest
call npm install typescript@'>=2.4.2 <2.7.0'
call npm install -g @angular/cli@latest

echo Instalando Dependencias
call npm install --save-dev @angular/cli@latest @angular/core@latest @angular/compiler-cli@latest @angular/language-service@latest
call npm install --save-dev codelyzer@latest @types/node@latest tslint@latest ts-node@latest typescript@latest

echo Instalando componentes adicionais
echo Socket.io
call npm install --save-dev socket.io@latest socket.io-client@latest

echo Material Angular
call npm install --save-dev @angular/material@latest

echo Material Material-Design-Icons
call npm install --save-dev material-design-icons@latest

echo Flex-Layout
call npm install --save-dev @angular/flex-layout@latest

