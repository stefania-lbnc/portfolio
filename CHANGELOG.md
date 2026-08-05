# Aggiornamento

## Bug corretto — index.html
`</div>` di troppo subito dopo il blocco commentato di Blindex, chiudeva .project-columns un colpo prima del dovuto e spingeva il pannello preview fuori dal contenitore a due colonne. Rimosso.

## Bug corretto — components.css (preesistente)
I selettori dello specimen tipografico (.menu .comfortaa, .type-alphabet .comfortaa) avevano uno spazio, quindi non facevano mai match con l'HTML reale (classi sullo stesso elemento, non annidate). Risultato: lo specimen di Blindex mostrava sempre Montserrat invece dei font veri. Corretto in selettori composti (.menu.comfortaa ecc.), aggiunte anche versioni standalone per uso più flessibile.

## Equipe — tipografia aggiunta
Specimen completo stile Blindex: Adobe Caslon Pro (sostituito con Libre Caslon Display, free/Google Fonts) per titoli, Montserrat per corpo testo. Font caricato nell'head.

## Frimm — tipografia aggiunta
Versione leggera: solo nome font + una riga di esempio nel font vero, niente alfabeto completo. Gill Sans sostituito con Lato (free/Google Fonts, l'alternativa più vicina secondo più fonti indipendenti).

## Terraviva — tipografia allineata
Tolte le immagini statiche font_comfortaa.webp/font_poppins.webp, sostituite con lo specimen dal vivo (stessa formula di Equipe/Blindex): Comfortaa Bold per i titoli, Poppins per il corpo. Font caricati nell'head.

## Tipografia — sezione isolata rimossa (Opzione C)
Tolto lo specimen tipografico da Equipe, Frimm, Terraviva e Blindex — il font ora si vede solo nei mockup applicati, non più come blocco a sé stante. Rimossi anche i font-import ormai inutilizzati (Libre Caslon Display, Lato, Comfortaa, Poppins, Source Sans 3) dalle rispettive pagine.

## In sospeso
Presentazione colore: in attesa di riferimento visivo (screenshot o descrizione) prima di modificare — Behance blocca l'accesso automatico alle immagini.

## Colore — blocchi grandi (rif. Behance/Kokkopi)
Sostituiti i quadratini piccoli con blocchi colore grandi (aspect-ratio 2:3), nome/hex in overlay, testo bianco o nero calcolato per contrasto su ogni colore. Applicato a Blindex, Equipe, Terraviva, Frimm. Løpe non toccato — resta il vecchio formato swatch, non è una pagina brand identity.

Nota: non ho replicato la fascia colore accento sotto ogni blocco (come nel riferimento) — richiede decidere quale colore accoppiare a quale come "secondario", e per Equipe/Terraviva non ho nomi/ruoli assegnati ai colori. Se la vuoi, dimmi gli abbinamenti.

## Fix — gap verticale tra le righe colore di Blindex
Il contenitore che impila la riga "anchor colors" e quella "breathing colors" non aveva un gap specificato, quindi ereditava i 3.2rem globali come spazio verticale. Impostato a 0.

## Fix — Blindex sforava sulla colonna info
`.color-block` aveva `flex:1` insieme ad `aspect-ratio`, senza `min-width:0` — un classico caso in cui i flex item non si restringono correttamente e il contenuto spinge oltre il contenitore. Aggiunto `min-width: 0`.

## Gap colonne — 3.2 → 1.6
`.project-columns` (gallery/sidebar, condiviso da tutte le pagine progetto) era ancora a 3.2rem nonostante `.presentation` fosse già stato ridotto. Allineato a 1.6rem.

## column-gap su mockup-container
Aggiunto `column-gap: 1.6rem` a `.mockup-container` (prima ereditava i 3.2rem globali).

## Fix — Blindex sforava ancora
Lo stesso bug del giro precedente, ma un livello più su: non solo `.color-block` aveva bisogno di `min-width:0`, anche `.mockup-container` (come grid item di `.presentation`) e `.color-blocks` (come flex item di `.mockup-container`) avevano lo stesso problema di default — nessuno dei tre si restringeva sotto la propria dimensione di contenuto. Aggiunto `min-width: 0` a tutti e tre i livelli.

## Fix — blocchi colore troppo alti a due
Sostituito `aspect-ratio: 2/3` con `height: 18rem` fissa su `.color-block` — ora l'altezza resta uguale che ci siano 2 o 6 blocchi nella riga, cambia solo la larghezza.
