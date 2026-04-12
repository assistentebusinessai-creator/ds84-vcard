const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:DS84OFFICINE
N:DS84OFFICINE;;;;
ORG:DS84OFFICINE
TEL;TYPE=CELL,VOICE:+393203166040
TEL;TYPE=WHATSAPP:+393203166040
ADR;TYPE=WORK:;;Corso Susa\\, 228/A;Rivoli;;10098;Italy
URL:https://sites.google.com/view/ds84officine
NOTE:Officina autoriparazioni - Rivoli (TO)
END:VCARD`;

app.get('/contact.vcf', (req, res) => {
  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="DS84OFFICINE.vcf"');
  res.send(vcfContent);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('DS84 vCard server running on port ' + PORT);
});