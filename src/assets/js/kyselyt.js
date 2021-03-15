const kyselyt = [
    {
      id: "1",
      tyyppi: "custom",
      kyselyTitle: "PlaceholderTitle",
      kysymykset: [
        {
          num: 1,
          group: "Asiointi",
          title: "Kuinka usein käyt ravintolassa lounaalla",
          type: "single",
          choices: [
            "Useammin kuin kerran viikossa",
            "Kerran viikossa",
            "2 kertaa kuukaudessa",
            "1 kerran kuukaudessa",
            "Kerran 2 kuukaudessa",
            "Kerran",
            "En käy lounaalla ravintolassa"
          ]
        },
  
        {
          num: 2,
          group: "Asiointi",
          title: "Kuinka usein käyt ravintolassa illallisella arkisin",
          type: "single",
          choices: [
            "Useammin kuin kerran viikossa",
            "Kerran viikossa",
            "2 kertaa kuukaudessa",
            "1 kerran kuukaudessa",
            "Kerran 2 kuukaudessa",
            "Kerran",
            "En käy lounaalla asdf"
          ]
        },
        {
          num: 3,
          group: "Asiointi",
          title: "Kuinka usein käyt ravintolassa illallisella viikonloppuisin",
          type: "single",
          choices: [
            "Useammin kuin kerran viikossa",
            "Kerran viikossa",
            "2 kertaa kuukaudessa",
            "1 kerran kuukaudessa",
            "Kerran 2 kuukaudessa",
            "En käy ravintolassa"
          ]
        },
  
        {
          num: 4,
          group: "Asiointi",
          title: "Millaisissa tilanteissa käyt ravintolassa",
          type: "multi",
          choices: ["Placeholder1", "Juhlapäivinä", "Placeholder2"]
        },
  
        {
          num: 5,
          group: "Ruokalista",
          title: "Kumpi on sinulle mieluisampi",
          type: "single",
          choices: ["Suppea ruokalista", "Laaja ruokalista", "Ei väliä"]
        },
  
        {
          num: 6,
          group: "Ruokalista",
          title:
            "Tutustutko ruokalistaan etukäteen netissä ennen ravintolan valintaa",
          type: "single",
          choices: ["Kyllä", "En", "Joskus"]
        }
        ,
        {
            num: 7,
            group: "Ruokalista",
            title: "Ketjuravintola vs. yksityisomisteinen",
            type: "single",
            choices: [
              "Vältän ketjuravintoloita",
              "Suosin ketjuravintoloita",
              "Ravintolan omistajuudella ei ole minulle väliä"
            ]
        },
         
        {   num: 8,
            group: "Ruokalista",
            title: "Mitä yleensä syöt ravintolassa, valitse n. 3-5",
            type: "multi",
            choices: [
              "Kana",
              "Liha",
              "Kala",
              "Kasvisruoka",
              "Pasta",
              "Pizza",
              "Texmex",
              "Keitto",
              "Salaatti",
              "Aasialainen",
              "Burgeri"
            ]
          },
          {
           num: 9,   
            group: "Ruokalista",
            title: "Millainen ravintola on mieleesi",
            type: "multi",
            choices: [
              "Fine dining",
              "Italialainen",
              "Texmex",
              "Burgeri",
              '"Jokaiselle jotakin"-paikka, eli sellainen, josta saa kaikkea'
            ]
          },

          {
              num: 10,
            group: "Mikä vaikuttaa ravintolan valintaan",
            title: "Mikä vaikuttaa ravintolan valintaan",
            type: "multi",
            choices: [
              "Ruokalista",
              "Sijainti",
              "Hinta-laatu-suhde",
              "Arvostelut ja suositukset"
            ]
          
        },
          
        {
            num: 11,
            group: "Mikä vaikuttaa ravintolan valintaan",
            title: "Kuinka paljon ravintolaruokailu saa maksaa?",
            type: "multi",
            choices: [
              "Alle 30€",
              "31-50€",
              "51€"
            ]
        },

          { num: 12,
            group: "Mikä vaikuttaa ravintolan valintaan",
            title: "Ruokajuomaksi minulle maistuu",
            type: "multi",
            choices: [
              "Vesi",
              "Limsa",
              "Olut",
              "Siideri",
              "Viini"
            ]
        }
      ]
    },

    {
        id: "2",
        tyyppi: "daily",
        kyselyTitle: "Päivittäinen ravintola-arvostelu",
        kysymykset: [
          { num: 1,
            title: "Missä kävit tänään?",
            type: "text"
          },
          { num:2 ,
            title: "Mitä söit?",
            type: "single",
            choices: [
              "Lounas",
              "Illallinen",
              "Välipala",
              "Aamiainen"
            ]
          },
          { num:3,
            title: "Mitä söit?",
            type: "text"
          },
          { num: 4,
            title: "Yleisarvosana",
            type: "range",
            min: 1,
            max: 5
          },
          { num : 5,
            title: "Mikä oli hyvää?",
            type: "multi",
            choices: [
              "maku",
              "hinta",
              "laatu",
              "annoskoko"
            ]
          },
          { num: 6,
            title: "Mitä voisi kehittää?",
            type: "multi",
            choices: [
              "maku",
              "hinta",
              "laatu",
              "annoskoko"
            ]
          },
          { num: 7,
            title: "Lisäkommentit",
            type: "text"
          }
        ]
      }
  ];



export default kyselyt



