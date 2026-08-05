# Aggiornamento — colori aggiunti

Equipe: swatch #414D75 / #EEB91D aggiunti dopo il logo.
Frimm: swatch Group #8E8F94 / Real Estate #711135 aggiunti come apertura della gallery.
Gap `.presentation` ridotto a 1.6rem (style.css).
Bottoni uniformati a bordo semplice, niente angoli (vedi risposta precedente).

Tipografia non ancora aggiunta: in attesa di conferma sui font sostitutivi (vedi chat).

# Aggiornamento — riepilogo

## Bug corretto
`works-page-layout.js` non renderizzava più lo slot "approach", ma blindex.html assegnava ancora contenuto vero a quello slot — la frase su "Dynamic Flow" sarebbe sparita dal sito pubblicato senza errori visibili. Corretto unendo quel contenuto nel campo "brief" di Blindex, stesso schema di tutte le altre pagine.

## Blindex
- Testo di brief unificato (brief + quote + approach uniti in un blocco solo)
- Tolti slot="quote" e slot="approach" — anche dal componente, dato che ora nessuna pagina li usa più
- Rimossi i paragrafi esplicativi dalla colonna immagini, mantenuti i quattro titoli-slogan brevi come marcatori tra le immagini

## Terraviva
- Rimossi i due paragrafi rimasti nella colonna immagini — il testo era già nel campo brief ma non era ancora stato tolto da lì, quindi la storia veniva raccontata due volte

## Løpe
- Testo aggiornato alla versione finale concordata, tolte le etichette interne "Main Problem / Our Goal / Concept Design"
- Bottone "See It in Action!" rinominato in "View prototype"

## Bottoni uniformati
- Back / All works / Next (sidebar pagine progetto) e "View prototype" (Løpe) hanno ora tutti lo stesso trattamento: bordo nero sottile 1px, angoli squadrati, niente parentesi decorative
- Tolte le parentesi d'angolo (corner-btn) da components.js (arrow-btn) e da lope.html
- Rimosse da components.css le regole ormai inutilizzate .corner-btn/.top-left/.bottom-right

## Non toccato
- Tutti gli altri file (equipe, frimm, iccrom, magazine, index, contacts) restano quelli che hai caricato

## Hero rimosso dalle pagine brand
Equipe, Terraviva, Blindex, Frimm: tolto l'hero-image in cima (era ridondante col Logo che ora apre comunque la gallery — Blindex ripeteva letteralmente lo stesso file due volte). Il componente ora nasconde lo spazio hero in modo pulito quando l'attributo non è presente, invece di lasciare un vuoto. Iccrom, A.D.E. Magazine e Løpe mantengono il loro hero, nessun conflitto lì.

## Frimm — placeholder logo
Aggiunto un blocco segnaposto come primo elemento della gallery (src="assets/frimm/LOGO-PLACEHOLDER.jpg", con commento HTML) — sostituiscilo con lo scatto vero del logo quando lo hai pronto.

## Hero rimosso ovunque
Tolto anche da Iccrom, A.D.E. Magazine e Løpe — ora nessuna pagina progetto ha l'hero in cima, tutte partono direttamente da titolo/descrizione e vanno alla gallery.
