import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;
app.use(bodyParser.json());

let Lista = [];    // tu pohranjujemo obavijesti

app.post("/dodajObavijest", (req, res) => {   // za dodavanje obavijesti

    let obavijest = req.body; 
    obavijest.id= uuidv4()

    obavijest.datum = new Date().toUTCString();


    Lista.push(obavijest)

    res.send(obavijest); //prikazuje jednu obavijest u insomoniji
    console.log(Lista) // prikazuje sve obavijesti

});
app.get("/vratiObavijesti", (req, res) => {
    res.send(Lista);
});


app.patch("/izmjeniObavijest/:id", (req, res) => { 
    let { id } = req.params;

    let { sadrzaj } = req.body; 

    let odabranaObavijest = lista.find(item => item.id == id);
    // iz liste filtriramo obavijest koja ima id koji smo unesli
    // provjerava jeli za svaku obavijest taj id isti


    odabranaObavijest.sadrzaj = sadrzaj

    res.send(odabranaObavijest);
});







app.listen(port); //uvijek na dno