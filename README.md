# Portfolio — pacchetto per il branch NewAnimation

Tutto vanilla: HTML, CSS, JS. Niente build, niente dipendenze.

## Cosa c'è

- `index.html` — home unica: hero, Manifesto, What I do, indice lavori, Get in touch
- `magazine.html`, `blindex.html`, `equipe.html`, `lope.html`, `terraviva.html`, `iccrom.html`, `frimm.html` — pagine progetto
- `styles/style.css`, `styles/components.css`, `styles/media-queries.css` — sostituiscono i tre file attuali
- `main.js` — home (sostituisce `components.js` sulla home)
- `project.js` — pagine progetto
- `transition.js` — passaggio home ↔ progetto
- `assets/` — solo i file nuovi o modificati (le altre immagini restano quelle già nel repo)

## Passaggi

1. Copia il contenuto di questa cartella nella root del branch `NewAnimation`, sovrascrivendo.
2. Elimina i file non più usati:
   - `contacts.html` (la card contatti ora è in `index.html#contact`)
   - `components.js`, `works-page-layout.js` (sostituiti da `main.js` e `project.js`)
   - i doppioni in root: `components.css`, `media-queries.css`, `style.css` (quelli validi sono in `styles/`)
3. Controlla che esistano `assets/yellow-fav-icon.svg` e tutte le immagini già presenti in `assets/` (i percorsi non sono cambiati).
4. Commit, push, attendi GitHub Pages. Prova:
   - home → clic su un progetto → la pagina sale con la diagonale
   - "Home" nel footer progetto → la home rientra e torna all'indice
   - link condiviso su LinkedIn/WhatsApp → anteprima con la card del progetto
     (per forzare l'aggiornamento: linkedin.com/post-inspector)

## File nuovi o modificati in `assets/`

- `og/` — 8 immagini 1200×630 (home + 7 progetti)
- `lope/lope-logo-dark.svg` — logo chiaro su #02011C
- `lope/01-font.webp` — già nel repo, ora usato nella pagina
- `frimm/frimm-logo-group.svg`, `frimm/frimm-logo-real-estate.svg` — colori aggiunti (#8E8F94, #711135)
- `terraviva/terraviva-preview-v2.webp` — nuova anteprima indice
- `iccrom/iccrom-og-poster.jpg` — anteprima indice
- `signature-floral.png` — firma
- `Stefania Lo Bianco Resume.pdf`

## Note

- **Footer delle pagine progetto:** è generato da `project.js` (array `PROJECTS` in cima al file). Per aggiungere un progetto, rinominare una voce o cambiare l'ordine si modifica solo lì; nell'HTML resta un footer minimo (Home · Works · Contact) per chi non ha JavaScript.
- **SEO:** ogni pagina ha `title`, `description`, `canonical`, Open Graph e dati strutturati (Person in home, CreativeWork nei progetti). `sitemap.xml` e `robots.txt` vanno nella root; poi aggiungi la sitemap in Google Search Console.
- Movimento ridotto (impostazione di sistema): niente intro automatica sull'hero e nessuna transizione tra pagine.
- Il passaggio tra pagine usa anche `@view-transition` (Chrome, Edge, Safari 18.2+): dove non è supportato il resto funziona uguale.
- `og:image` usa l'URL assoluto `https://stefania-lbnc.github.io/portfolio/`. Se cambi dominio, aggiorna i `<meta property="og:image">`.
