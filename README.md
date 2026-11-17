# ALQ Serviços Executivos

Site institucional e páginas dos motoristas, com prioridade para celulares.

| URL | Conteúdo |
| --- | --- |
| https://alq.me/ | Home institucional da ALQ |
| https://alq.me/francisco | Francisco Neto |
| https://alq.me/shirley | Shirley Guiralde |

## Publicação

Hospedado na Hostinger em `alq.me`, com implantação automática da branch `main` do `alqsvex/alq-DRIVERS` no diretório `public_html`. O redirecionamento antigo para o catálogo do WhatsApp foi removido.

Site estático sem dependências. Execute `npm run build`; a pasta de saída é `dist`.
Também pode ser servido diretamente da raiz do repositório. Cada página tem seu próprio `index.html`; o servidor deve servir diretórios para `/francisco` e `/shirley`.

## Conteúdo

Estilos originais compartilhados em `style.css`; ajustes das páginas em `pages.css`; tema institucional em `company.css`. Fotos e marca em `images/`.

Os botões de agendamento abrem o WhatsApp correspondente a cada página. WhatsApp ALQ/Francisco: +55 12 99626-8356. WhatsApp Shirley Guiralde: +55 12 99685-0833.

A fotografia de Shirley Guiralde recebeu ajuste de fundo e enquadramento. As galerias dos veículos são compartilhadas: Honda City e Toyota Yaris com cinco fotos cada (Exterior, Frente, Lateral, Cabine e Banco traseiro).

O site anterior e o repositório `FRANCISCODRIVER` foram preservados.

## Última atualização — 17/11/2026

Todos os 24 links de agendamento que apontavam para o Smärtt foram substituídos por links diretos de WhatsApp: Home e Francisco → +55 12 99626-8356; Shirley → +55 12 99685-0833. As orientações de agendamento foram ajustadas ao contato pelo WhatsApp. Aparência e demais destinos preservados.

Atualização de imagem — 17/11/2026: foto externa do Honda City com placa CITY026, aplicada aos banners, galerias e referências de compartilhamento que usam essa imagem. Arquivo: `images/honda-city-exterior-city026.webp`.
