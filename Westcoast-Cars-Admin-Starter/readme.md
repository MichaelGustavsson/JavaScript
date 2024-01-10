# REST API

För att kunna köra applikation så måste vi köra npm install för att installera json-server.
Öppna upp terminalfönstret i VSCode och skriv in följande kommando:

`npm install`

Innan applikation kan visa bilarna måste vi starta json-server och det gör vi genom att öppna terminal fönstret i VSCode och skriver följande kommando:

`json-server --watch vehicles.json`

Om ett felmeddelande som säger att json-server inte är känt kommando, så kan vi prova att köra följande kommando:

`npx json-server --watch vehicles.json`
