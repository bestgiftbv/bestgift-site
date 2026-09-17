# bestgift.bv — site produs

Site static, mobile-first, pentru magazinul de cadouri handmade **bestgift.bv** (Brașov).

## Previzualizare

Din acest folder:

```bash
cd /workspace/bestgift-site
npx --yes serve -l 4173
```

Apoi deschide în browser: **http://localhost:4173**

Alternativ, fără dependențe:

```bash
cd /workspace/bestgift-site
python3 -m http.server 4173
```

## Structură

```
bestgift-site/
├── index.html          # Pagina principală (RO)
├── styles.css          # Stiluri — lemn, cream, roșu
├── script.js           # Nav mobil, galerii, lightbox
├── public/products/    # Foto produse
├── README.md
└── SUMMARY.md
```

## Conținut

- Hero, Produse (pixuri, mărțișoare/brelocuri, plăcuțe), Cum comand, Despre, Contact → Instagram
- Limba: română
- Comenzi: [instagram.com/bestgift.bv](https://instagram.com/bestgift.bv)
