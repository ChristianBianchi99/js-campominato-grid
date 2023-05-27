PROBLEMA : L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1 - START
2 - Creo la struttura base html;
3 - Creo le classi di stile utili a stilizzare gli elementi già presenti e quelli che verranno poi generati da js;
4 - Creo la logica js ;
    4.1 - Dichiaro le varabili che mi serviranno più avanti;
    4.2 - Creo la funzione utile a generare la griglia;
        4.2.1 - Imposto un ciclo che generi numeri fino ad un tetto massimo;
        4.2.2 - Imposto nel ciclo la generazione di "quadrati" all'interno del dom;
    4.3 - Imposto i click;
        4.3.1 - Imposto il click per la generazione della tabella;
        4.3.2 - Imposto il click sui quadrati della tabella, in modo che quest'ultimi si colorino d'azzurro e stampino il numero a cui sono associati in console;
5 - FINISH