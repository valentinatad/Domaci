let cena = 800;
let budzet = 500;
let razlika = budzet - cena;
if( razlika < 0)
 { console.log('Nemate dovoljno novca');
      console.log(`Imate na kartici ukupno:${budzet} dinara.`)}
  else {console.log('Uspesno ste kupili ovaj proizvod');
  console.log(`Na racunu vam je ostalo ukupno ${razlika} dinara.`)
      }