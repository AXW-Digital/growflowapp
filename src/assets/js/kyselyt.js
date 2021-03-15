const kyselyt = [
    {
      id: "1",
      tyyppi: "custom",
      kyselyTitle: "PlaceholderTitle",
      kysymykset: [
        {
          num: 1,
          group: "Asiointi",
          title: "kuinka usein käyt ravintolassa lounaalla",
          type: "single",
          choices: [
            "a: Useammin kuin kerran viikossa",
            "b: Kerran viikossa",
            "c: 2 kertaa kuukaudessa",
            "d: 1 kerran kuukaudessa",
            "e: Kerran 2 kuukaudessa",
            "f: Kerran",
            "g: En käy lounaalla ravintolassa"
          ]
        },
  
        {
          num: 2,
          group: "Asiointi",
          title: "kuinka usein käyt ravintolassa illallisella arkisin",
          type: "single",
          choices: [
            "a: Useammin kuin kerran viikossa",
            "b: Kerran viikossa",
            "c: 2 kertaa kuukaudessa",
            "d: 1 kerran kuukaudessa",
            "e: Kerran 2 kuukaudessa",
            "f: Kerran",
            "g: En käy lounaalla asdf"
          ]
        },
        {
          num: 3,
          group: "Asiointi",
          title: "kuinka usein käyt ravintolassa illallisella viikonloppuisin",
          type: "single",
          choices: [
            "a: Useammin kuin kerran viikossa",
            "b: Kerran viikossa",
            "c: 2 kertaa kuukaudessa",
            "d: 1 kerran kuukaudessa",
            "e: Kerran 2 kuukaudessa",
            "g: En käy ravintolassa"
          ]
        },
  
        {
          num: 4,
          group: "Asiointi",
          title: "Millaisissa tilanteissa käyt ravintolassa",
          type: "multi",
          choices: ["a: Placeholder1", "b: Juhlapäivinä", "c: Placeholder2"]
        },
  
        {
          num: 5,
          group: "Ruokalista",
          title: "Kumpi on sinulle mieluisampi",
          type: "single",
          choices: ["a: Suppea ruokalista", "b: Laaja ruokalista", "c: Ei väliä"]
        },
  
        {
          num: 6,
          group: "Ruokalista",
          title:
            "Tutustutko ruokalistaan etukäteen netissä ennen ravintolan valintaa",
          type: "single",
          choices: ["a: Kyllä", "b: En", "c: Joskus"]
        }
      ]
    }
  ];



export default kyselyt



// ,

//     {
//         'id': '2',
//         'tyyppi': 'daily',
//         'kyselyTitle':'Päivittäinen ravintola-arvostelu',
//         'kysymykset':
//         {
//             '1':
//             {
//                 'title':'Missä kävit tänään?',
//                 'type': 'text' 
                
//             },
//             '2':
//             {
//                 'title': 'Mitä söit?',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Lounas',
//                     'b': 'Illallinen',
//                     'c': 'Välipala',
//                     'd': 'Aamiainen',
//                 }
//             },
//             '3':
//             {
//                 'title': 'Mitä söit?',
//                 'type': 'text'
//             },
//             '4':
//             {
//                 'title': 'Yleisarvosana',
//                 'type': 'range',
//                 'min': 1,
//                 'max': 5
//             },
//             '5':
//             {
//                 'title': 'Mikä oli hyvää?',
//                 'type': 'multi',
//                 'choices': 
//                 {
//                     'a':'maku',
//                     'b':'hinta',
//                     'c':'laatu',
//                     'd':'annoskoko'
//                 }
//             },
//             '6':
//             {
//                 'title': 'Mitä voisi kehittää?',
//                 'type': 'multi',
//                 'choices': 
//                 {
//                     'a':'maku',
//                     'b':'hinta',
//                     'c':'laatu',
//                     'd':'annoskoko'
//                 }
//             },
//             '7':
//             {
//                 'title': 'Lisäkommentit',
//                 'type': 'text'
//             },
//         }
//     },
    
//     {
//         'id': '3',
//         'tyyppi': 'custom',
//         'kyselyTitle': 'PlaceholderTitle',
//         'kysymykset':
//         {
//             '1':
//             {
//                 'group' : 'Asiointi',
//                 'title': 'kuinka usein käyt ravintolassa lounaalla',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Useammin kuin kerran viikossa',
//                     'b': 'Kerran viikossa',
//                     'c': '2 kertaa kuukaudessa',
//                     'd': '1 kerran kuukaudessa',
//                     'e': 'Kerran 2 kuukaudessa',
//                     'f': 'Kerran',
//                     'g': 'En käy lounaalla ravintolassa'
//                 }
//             },
//             '2':
//             {
//                 'group' : 'Asiointi',
//                 'title': 'kuinka usein käyt ravintolassa illallisella arkisin',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Useammin kuin kerran viikossa',
//                     'b': 'Kerran viikossa',
//                     'c': '2 kertaa kuukaudessa',
//                     'd': '1 kerran kuukaudessa',
//                     'e': 'Kerran 2 kuukaudessa',
//                     'g': 'En käy ravintolassa'
//                 }
//             },
//             '3':
//             {
//                 'group' : 'Asiointi',
//                 'title': 'kuinka usein käyt ravintolassa illallisella viikonloppuisin',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Useammin kuin kerran viikossa',
//                     'b': 'Kerran viikossa',
//                     'c': '2 kertaa kuukaudessa',
//                     'd': '1 kerran kuukaudessa',
//                     'e': 'Kerran 2 kuukaudessa',
//                     'g': 'En käy ravintolassa'
//                 }
//             },
//             '4':
//             {
//                 'group' : 'Asiointi',
//                 'title': 'Millaisissa tilanteissa käyt ravintolassa',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a': 'Placeholder1',
//                     'b': 'Juhlapäivinä',
//                     'c': 'Placeholder2',
//                 }
//             },
//             '5':
//             {
//                 'group' : 'Ruokalista',
//                 'title': 'Kumpi on sinulle mieluisampi',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Suppea ruokalista',
//                     'b': 'Laaja ruokalista',
//                     'c': 'Ei väliä',
//                 }
//             },
//             '6':
//             {
//                 'group' : 'Ruokalista',
//                 'title': 'Tutustutko ruokalistaan etukäteen netissä ennen ravintolan valintaa',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a': 'Kyllä',
//                     'b': 'En',
//                     'c': 'Joskus',
//                 }
//             },
//             '7':
//             {
//                 'group' : 'Ruokalista',
//                 'title': 'Ketjuravintola vs. yksityisomisteinen',
//                 'type': 'single',
//                 'choices':
//                 {
//                     'a':'Vältän ketjuravintoloita',
//                     'b': 'Suosin ketjuravintoloita',
//                     'c':'Ravintolan omistajuudella ei ole minulle väliä'
//                 }
//             },
//             '8':
//             {
//                 'group' : 'Ruokalista',
//                 'title': 'Mitä yleensä syöt ravintolassa, valitse n. 3-5',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a':	'Kana',
//                     'b':	'Liha',
//                     'c':	'Kala',
//                     'd':	'Kasvisruoka',
//                     'e':	'Pasta',
//                     'f':	'Pizza',
//                     'g':	'Texmex',
//                     'h':	'Keitto',
//                     'i':	'Salaatti',
//                     'j':	'Aasialainen',
//                     'k':	'Burgeri'
//                 }
//             },
//             '9':
//             {
//                 'group' : 'Ruokalista',
//                 'title': 'Millainen ravintola on mieleesi',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a': 'Fine dining',
//                     'b': 'Italialainen',
//                     'c': 'Texmex',
//                     'd': 'Burgeri',
//                     'e': '"Jokaiselle jotakin"-paikka, eli sellainen, josta saa kaikkea'
//                 }
//             },
//             '10':
//             {
//                 'group' : 'Mikä vaikuttaa ravintolan valintaan',
//                 'title': 'Mikä vaikuttaa ravintolan valintaan',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a': 'Ruokalista',
//                     'b': 'Sijainti',
//                     'c': 'Hinta-laatu-suhde',
//                     'd': 'Arvostelut ja suositukset'
//                 }
//             },
//             '11':
//             {
//                 'group' : 'Mikä vaikuttaa ravintolan valintaan',
//                 'title': 'Kuinka paljon ravintolaruokailu saa maksaa?',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a': 'Alle 30€',
//                     'b': '31-50€',
//                     'c': '51€'
//                 }
//             },
//             '13':
//             {
//                 'group' : 'Mikä vaikuttaa ravintolan valintaan',
//                 'title': 'Ruokajuomaksi minulle maistuu',
//                 'type': 'multi',
//                 'choices':
//                 {
//                     'a': 'Vesi',
//                     'b': 'Limsa',
//                     'c': 'Olut',
//                     'd': 'Siideri',
//                     'e': 'Viini'
//                 }
//             },
//         }      
//     }
