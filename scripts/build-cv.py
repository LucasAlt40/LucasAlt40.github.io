#!/usr/bin/env python3
"""Gera os PDFs do currículo usados no site, SEM o telefone.

Lê os .tex originais (com telefone) em ~/Documents/curriculum, remove o
trecho do telefone, compila com o Tectonic numa pasta temporária e copia
os PDFs para assets/cv/. Os .tex originais não são alterados.

Uso:  python3 scripts/build-cv.py
"""
import pathlib, re, shutil, subprocess, tempfile

SRC = pathlib.Path.home() / "Documents" / "curriculum"
OUT = pathlib.Path(__file__).resolve().parent.parent / "assets" / "cv"
FILES = {
    "Lucas_Theodoro_PT_LaTeX_revisado.tex": "Lucas_Theodoro_Curriculo_PT.pdf",
    "Lucas_Theodoro_EN_LaTeX_revisado.tex": "Lucas_Theodoro_Resume_EN.pdf",
}
# Remove " $|$ {\faMobile} <número>" do cabeçalho
PHONE = re.compile(r" \$\|\$ \{\\faMobile\}[^}]*")

with tempfile.TemporaryDirectory() as tmp:
    for tex, pdf in FILES.items():
        text = (SRC / tex).read_text(encoding="utf-8")
        cleaned, n = PHONE.subn("", text)
        if n != 1:
            raise SystemExit(f"{tex}: esperava 1 telefone, achei {n}")
        work = pathlib.Path(tmp) / tex
        work.write_text(cleaned, encoding="utf-8")
        subprocess.run(["tectonic", "-X", "compile", str(work)], check=True,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.copy(work.with_suffix(".pdf"), OUT / pdf)
        print(f"ok  {OUT / pdf}")
