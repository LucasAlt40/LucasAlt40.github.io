# Portfólio · Lucas Theodoro

Site pessoal em HTML, CSS e JavaScript puros, sem build. Publicado em https://lucasalt40.github.io.

## Como atualizar

- **Textos** (PT e EN): edite `content.js`.
- **Currículo em PDF**: edite os `.tex` em `~/Documents/curriculum` e rode `python3 scripts/build-cv.py`. O script gera as versões do site sem o telefone em `assets/cv/`.
- **Cores**: as paletas ficam no fim de `styles.css`. A padrão é o roxo, definido em "Tokens".
- **Imagem de prévia do link**: modelo em `scripts/og.html` (o comando para gerar está no topo do arquivo).

Para ver localmente: `python3 -m http.server 5173` e abra http://localhost:5173.

Depois de editar, faça commit e push na `main`: o GitHub Pages publica sozinho.
