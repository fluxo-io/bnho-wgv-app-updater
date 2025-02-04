const mtbAnmeldung_survey_data = {
  questions: [
    {
      id: "title_1",
      title: "Übergeordnete Parameter",
      description: "",
    },
    {
      id: "patient_mtbAnmeldung_ecog",
      title: "",
      description: "",
      question: {
        text: "ECOG",
        comment: "",
        kind: "dropdown",
        answers: [
          {
            value: "ECOG 0",
            label: "ECOG 0 - normale, uneingeschränkte Aktivität, wie vor der Erkrankung",
          },
          {
            value: "ECOG 1",
            label: "ECOG 1 - Einschränkung bei körperlicher Anstrengung, gehfähig, leichte körperliche Arbeit möglich",
          },
          {
            value: "ECOG 2",
            label: "ECOG 2 - gefähig, Selbstversorgung möglich, aber nicht arbeitsfähig, kann mehr als 50% der Wachzeit aufstehen",
          },
          {
            value: "ECOG 3",
            label: "ECOG 3 - nur begrenzte Selbstversorgung möglich, 50% oder mehr der Wachzeit an Bett oder Stuhl gebunden",
          },
          {
            value: "ECOG 4",
            label: "ECOG 4 - völlig pflegebedürftig, keinerlei Selbstversorgung möglich, völlig an Bett oder Stuhl gebunden",
          },
          {
            value: "ECOG 5",
            label: "ECOG 5 - tot",
          },
          {
            value: "Unbekannt",
            label: "Unbekannt",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_koerpergroesse",
      title: "",
      description: "",
      question: {
        text: "Körpergröße",
        kind: "text",
        comment: "Bitte tragen Sie die Körpergröße <strong>in cm</strong> ein.",
      },
    },
    {
      id: "patient_mtbAnmeldung_gewicht",
      title: "",
      description: "",
      question: {
        text: "Gewicht",
        kind: "text",
        comment: "Bitte tragen Sie das Gewicht <strong>in kg</strong> ein.",
      },
    },
    {
      id: "patient_mtbAnmeldung_raucherstatus",
      title: "",
      description: "",
      question: {
        text: "Raucherstatus",
        comment: "",
        kind: "dropdown",
        answers: [
          {
            value: "LA18979-7",
            label: "Raucher",
          },
          {
            value: "LA15920-4",
            label: "Ex-Raucher",
          },
          {
            value: "LA18978-9",
            label: "Nieraucher",
          },
          {
            value: "unknown",
            label: "Unbekannt",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_nichtraucher_seit",
      title: "",
      description: "",
      question: {
        text: "Nichtraucher seit",
        kind: "text",
        comment: "Bitte geben Sie ganze Jahre ein.", // 99 ist maxímum
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_raucherstatus",
          answer: "LA15920-4",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_packyears",
      title: "",
      description: "",
      question: {
        text: "Pack years",
        kind: "text",
        comment: "",
      },
      requirements: [
        [
          {
            id: "patient_mtbAnmeldung_raucherstatus",
            answer: "LA18979-7",
          },
          {
            id: "patient_mtbAnmeldung_raucherstatus",
            answer: "LA15920-4",
          },
        ],
      ],
    },

    {
      id: "title_1",
      title: "0 - Diagnose",
      description: "",
    },
    {
      id: "patient_mtbAnmeldung_firstDiagnosisDate",
      title: "",
      description: "",
      question: {
        text: "Diagnosedatum",
        comment: "",
        kind: "date",
      },
    },
    {
      id: "patient_mtbAnmeldung_diagnosisType",
      title: "",
      description: "",
      question: {
        text: "Art der Diagnose",
        comment: "",
        kind: "dropdown",
        answers: [
          {
            value: "firstDiagnosis",
            label: "Erstdiagnose",
          },
          {
            value: "furtherDiagnosis",
            label: "Weitere Diagnose",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_cancerFirstDiagnosis",
      title: "",
      description: "",
      question: {
        text: "Wie lange liegt die Erstdiagnose der Krebserkrankung zurück?",
        comment: "Bitte geben Sie ganze Jahre ein.",
        kind: "text",
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_diagnosisType",
          answer: "furtherDiagnosis",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_localization",
      title: "",
      description: "",
      question: {
        text: "ICD-10",
        kind: "dropdown",
        answers: [
          {
            value: "C34.0",
            label: "C34.0 - Hauptbronchus",
          },
          {
            value: "C34.1",
            label: "C34.1 - Oberlappen",
          },
          {
            value: "C34.2",
            label: "C34.2 - Mittellappen",
          },
          {
            value: "C34.3",
            label: "C34.3 - Unterlappen",
          },
          {
            value: "C34.8",
            label: "C34.8 - Bronchus und Lunge, mehrere Teilbereiche überlappend",
          },
          {
            value: "C34.9",
            label: "C34.9 - Bronchus oder Lunge, nicht näher bezeichnet",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_classification",
      title: "",
      description: "",
      question: {
        text: "Klassifikation",
        kind: "dropdown",
        answers: [
          {
            value: "8140/3",
            label: "8140/3 - Adenokarzinom o.n.A.",
          },
          {
            value: "8140/6",
            label: "8140/6 - Adenokarzinom-Metastase o.n.A.",
          },
          {
            value: "8250/3",
            label: "8250/3 - Bronchiolo-alveoläres Adenokarzinom o.n.A.",
          },
          {
            value: "8551/3",
            label: "8551/3 - Azinuszell-Zystadenokarzinom",
          },
          {
            value: "8260/3",
            label: "8260/3 - Papilläres Adenokarzinom o.n.A.",
          },
          {
            value: "8265/3",
            label: "8265/3 - Mikropapilläres Karzinom o.n.A.",
          },
          {
            value: "8230/3",
            label: "8230/3 - Solides Karzinom o.n.A.",
          },
          {
            value: "8253/3",
            label: "8253/3 - Muzinöses bronchiolo-alveoläres Karzinom",
          },
          {
            value: "8254/3",
            label: "8254/3 - Gemischtes muzinöses und nichtmuzinöses bronchiolo-alveoläres Karzinom",
          },
          {
            value: "8480/3",
            label: "8480/3 - Muzinöses Adenokarzinom / Kolloidales Adenokarzinom",
          },
          {
            value: "8333/3",
            label: "8333/3 - Fetales Adenokarzinom",
          },
          {
            value: "8144/3",
            label: "8144/3 - Adenokarzinom vom intestinalen Typ",
          },
          {
            value: "8070/3",
            label: "8070/3 - Plattenepithelkarzinom o.n.A.",
          },
          {
            value: "8071/3",
            label: "8071/3 - Verhornendes Plattenepithelkarzinom o.n.A.",
          },
          {
            value: "8072/3",
            label: "8072/3 - Großzelliges nichtverhornendes Plattenepithelkarzinom o.n.A.",
          },
          {
            value: "8083/3",
            label: "8083/3 - Basaloides Plattenepithelkarzinom",
          },
          {
            value: "8041/3",
            label: "8041/3 - Kleinzelliges Karzinom o.n.A.",
          },
          {
            value: "8045/3",
            label: "8045/3 - Kombiniertes kleinzelliges Karzinom",
          },
          {
            value: "8013/3",
            label: "8013/3 - Großzelliges neuroendokrines Karzinom",
          },
          {
            value: "8240/3",
            label: "8240/3 - Karzinoidtumor o.n.A.",
          },
          {
            value: "8249/3",
            label: "8249/3 - Atypischer Karzinoidtumor",
          },
          {
            value: "8012/3",
            label: "8012/3 - Großzelliges Karzinom o.n.A.",
          },
          {
            value: "8560/3",
            label: "8560/3 - Adenosquamöses Karzinom",
          },
          {
            value: "8430/3",
            label: "8430/3 - Mukoepidermoid-Karzinom",
          },
          {
            value: "8200/3",
            label: "8200/3 - Adenoid-zystisches Karzinom",
          },
          {
            value: "8562/3",
            label: "8562/3 - Epithelial-myoepitheliales Karzinom",
          },
          {
            value: "8000/0",
            label: "8000/0 - Benigne Neoplasie o.n.A.",
          },
          {
            value: "8000/1",
            label: "8000/1 - Neoplasie fraglicher Dignität",
          },
          {
            value: "8000/3",
            label: "8000/3 - Maligne Neoplasie",
          },
          {
            value: "8000/6",
            label: "8000/6 - Neoplasie, Metastase",
          },
          {
            value: "8010/6",
            label: "8010/6 - Karzinom-Metastase o.n.A.",
          },
          {
            value: "C3812",
            label: "C3812 - Carcinoma of Unknown Primary",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_usedUiccVersion",
      title: "",
      description: "",
      question: {
        text: "Genutzte UICC Version",
        kind: "dropdown",
        answers: [
          {
            value: "version7",
            label: "Version 7",
          },
          {
            value: "version8",
            label: "Version 8",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_stageAtFirstDiagnosisV7",
      title: "",
      description: "",
      question: {
        text: "Bei UICC V7: Stadium bei Erstdiagnose",
        kind: "dropdown",
        answers: [
          {
            value: "0",
            label: "0",
          },
          {
            value: "IA",
            label: "IA",
          },
          {
            value: "IB",
            label: "IB",
          },
          {
            value: "IIA",
            label: "IIA",
          },
          {
            value: "IIB",
            label: "IIB",
          },
          {
            value: "IIIA",
            label: "IIIA",
          },
          {
            value: "IIIB",
            label: "IIIB",
          },
          {
            value: "IV",
            label: "IV",
          },
          {
            value: "unknown",
            label: "Unbekannt",
          },
        ],
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_usedUiccVersion",
          answer: "version7",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_stageAtFirstDiagnosisV8",
      title: "",
      description: "",
      question: {
        text: "Bei UICC V8: Stadium bei Erstdiagnose",
        kind: "dropdown",
        answers: [
          {
            value: "0",
            label: "0",
          },
          {
            value: "IA1",
            label: "IA1",
          },
          {
            value: "IA2",
            label: "IA2",
          },
          {
            value: "IA3",
            label: "IA3",
          },
          {
            value: "IB",
            label: "IB",
          },
          {
            value: "IIA",
            label: "IIA",
          },
          {
            value: "IIB",
            label: "IIB",
          },
          {
            value: "IIIA",
            label: "IIIA",
          },
          {
            value: "IIIB",
            label: "IIIB",
          },
          {
            value: "IIIC",
            label: "IIIC",
          },
          {
            value: "IVA",
            label: "IVA",
          },
          {
            value: "IVB",
            label: "IVB",
          },
          {
            value: "unknown",
            label: "Unbekannt",
          },
        ],
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_usedUiccVersion",
          answer: "version8",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_previousOtherCancerDiagnosed",
      title: "",
      description: "",
      question: {
        text: "Wurde in der Vergangenheit eine andere Krebserkrankung diagnostiziert?",
        comment: "",
        kind: "dropdown",
        answers: [
          {
            value: "yes",
            label: "Ja",
          },
          {
            value: "no",
            label: "Nein",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_cancerLocalization",
      title: "",
      description: "",
      question: {
        text: "Lokalisation der Krebserkrankung",
        comment: "Ist hier die andere Diagnose gemeint?",
        kind: "dropdown",
        answers: [
          {
            value: "mamma",
            label: "Mamma",
          },
          {
            value: "prostate",
            label: "Prostata",
          },
          {
            value: "intestine",
            label: "Darm",
          },
          {
            value: "liver",
            label: "Leber",
          },
          {
            value: "hematological",
            label: "Hämatologisch",
          },
          {
            value: "other",
            label: "Andere",
          },
        ],
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_previousOtherCancerDiagnosed",
          answer: "yes",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_otherCancerLocalization",
      title: "",
      description: "",
      question: {
        text: 'Bitte spezifizieren Sie "Andere"',
        comment: "",
        kind: "text",
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_previousOtherCancerDiagnosed",
          answer: "yes",
        },
        {
          id: "patient_mtbAnmeldung_cancerLocalization",
          answer: "other",
        },
      ],
    },
    {
      id: "patient_mtbAnmeldung_cancerSystemicTherapy",
      title: "",
      description: "",
      question: {
        text: "Erfolgt derzeit eine systemische Therapie der Krebserkrankung?",
        comment: "",
        kind: "dropdown",
        answers: [
          {
            value: "yes",
            label: "Ja",
          },
          {
            value: "no",
            label: "Nein",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_cancerLastSystemicTreatment",
      title: "",
      description: "",
      question: {
        text: "Wann erfolgte die letzte systemische Behandlung der Krebserkrankung?",
        comment: "Kommentar fehlt - was soll hier eingegeben werden? Jahre oder vielleicht ein Datum?",
        kind: "text",
      },
      requirements: [
        {
          id: "patient_mtbAnmeldung_cancerSystemicTherapy",
          answer: "no",
        },
      ],
    },
    {
      id: "title_2",
      title: "1 - Anforderung",
      description: "",
    },
    // {
    //   id: "patient_mtbAnmeldung_anforderung_id",
    //   title: "",
    //   description: "",
    //   question: {
    //     text: "Interne und eindeutige ID",
    //     comment: "Brauchen wir dieses Feld?",
    //     kind: "text",
    //   },
    // },
    {
      id: "patient_mtbAnmeldung_healthCoverage",
      title: "",
      description: "",
      question: {
        text: "Krankenkasse",
        kind: "dropdown",
        comment: "Bitte tippen Sie Ihre Antwort ein, damit Sie die passenden Optionen angzeigt bekommen",
        answers: [
          {
            value: "Allianz Private Krankenversicherung",
            label: "Allianz Private Krankenversicherung",
          },
          {
            value: "Alte Oldenburger Krankenversicherung",
            label: "Alte Oldenburger Krankenversicherung",
          },
          { value: "AOK Baden-Württemberg", label: "AOK Baden-Württemberg" },
          { value: "AOK Bayern", label: "AOK Bayern" },
          { value: "AOK Berlin", label: "AOK Berlin" },
          { value: "AOK Bremen/Bremerhaven", label: "AOK Bremen/Bremerhaven" },
          { value: "AOK Hessen", label: "AOK Hessen" },
          { value: "AOK Niedersachsen", label: "AOK Niedersachsen" },
          { value: "AOK Nordost", label: "AOK Nordost" },
          { value: "AOK Nordwest", label: "AOK Nordwest" },
          { value: "AOK PLUS", label: "AOK PLUS" },
          {
            value: "AOK Rheinland-Pfalz/Saarland",
            label: "AOK Rheinland-Pfalz/Saarland",
          },
          { value: "AOK Rheinland/Hamburg", label: "AOK Rheinland/Hamburg" },
          { value: "AOK Sachsen-Anhalt", label: "AOK Sachsen-Anhalt" },
          {
            value: "ARAG Allgemeine Versicherungs-AG",
            label: "ARAG Allgemeine Versicherungs-AG",
          },
          {
            value: "Axa Krankenversicherung",
            label: "Axa Krankenversicherung",
          },
          { value: "BAHN-BKK", label: "BAHN-BKK" },
          { value: "Barmenia", label: "Barmenia" },
          { value: "BARMER GEK", label: "BARMER GEK" },
          {
            value: "Bayerische Beamtenkrankenkasse",
            label: "Bayerische Beamtenkrankenkasse",
          },
          {
            value: "Berufsgenossenschaft Bauwirtschaft",
            label: "Berufsgenossenschaft Bauwirtschaft",
          },
          {
            value: "Berufsgenossenschaft Energie",
            label: "Berufsgenossenschaft Energie",
          },
          {
            value: "Berufsgenossenschaft Holz und Metall",
            label: "Berufsgenossenschaft Holz und Metall",
          },
          {
            value: "Berufsgenossenschaft Rohstoffe und chemische Industrie",
            label: "Berufsgenossenschaft Rohstoffe und chemische Industrie",
          },
          { value: "BG Energie", label: "BG Energie" },
          { value: "BGHW", label: "BGHW" },
          { value: "BIG - direkt gesund", label: "BIG - direkt gesund" },
          { value: "BKK 24", label: "BKK 24" },
          { value: "BKK ProVita", label: "BKK ProVita" },
          { value: "BKK Akzo Nobel Bayern", label: "BKK Akzo Nobel Bayern" },
          { value: "BKK Audi", label: "BKK Audi" },
          { value: "BKK B. Braun Aesculap", label: "BKK B. Braun Aesculap" },
          { value: "BKK Bertelsmann", label: "BKK Bertelsmann" },
          { value: "BKK BMW", label: "BKK BMW" },
          { value: "BKK Bosch", label: "BKK Bosch" },
          {
            value: "BKK BPW Bergische Achsen KG",
            label: "BKK BPW Bergische Achsen KG",
          },
          { value: "BKK Continentale", label: "BKK Continentale" },
          { value: "BKK Debeka", label: "BKK Debeka" },
          { value: "BKK Deutsche Bank AG", label: "BKK Deutsche Bank AG" },
          { value: "BKK Diakonie", label: "BKK Diakonie" },
          { value: "BKK Dürkopp Adler", label: "BKK Dürkopp Adler" },
          { value: "BKK EUREGIO", label: "BKK EUREGIO" },
          { value: "BKK evm", label: "BKK evm" },
          { value: "BKK EWE", label: "BKK EWE" },
          { value: "BKK exklusiv", label: "BKK exklusiv" },
          {
            value: "BKK Faber-Castell &amp; Partner",
            label: "BKK Faber-Castell &amp; Partner",
          },
          { value: "BKK firmus", label: "BKK firmus" },
          { value: "BKK Freudenberg", label: "BKK Freudenberg" },
          {
            value: "BKK Gildemeister + Seidensticker",
            label: "BKK Gildemeister + Seidensticker",
          },
          { value: "BKK Grillo Werke", label: "BKK Grillo Werke" },
          { value: "BKK Groz-Beckertasse", label: "BKK Groz-Beckertasse" },
          { value: "BKK Herkules", label: "BKK Herkules" },
          { value: "BKK KARL MAYER", label: "BKK KARL MAYER" },
          { value: "BKK Koenig &amp; Bauer", label: "BKK Koenig &amp; Bauer" },
          { value: "BKK Krones", label: "BKK Krones" },
          { value: "BKK Linde", label: "BKK Linde" },
          { value: "BKK MAHLE", label: "BKK MAHLE" },
          { value: "BKK Melitta HMR", label: "BKK Melitta HMR" },
          { value: "BKK MERCK", label: "BKK MERCK" },
          { value: "BKK mhplus", label: "BKK mhplus" },
          { value: "BKK Miele", label: "BKK Miele" },
          { value: "BKK Mobil", label: "BKK Mobil" },
          { value: "BKK MTU", label: "BKK MTU" },
          { value: "BKK PFAFF AG", label: "BKK PFAFF AG" },
          { value: "BKK Pfalz", label: "BKK Pfalz" },
          {
            value: "BKK PricewaterhouseCoopers (PwC)",
            label: "BKK PricewaterhouseCoopers (PwC)",
          },
          { value: "BKK provita", label: "BKK provita" },
          { value: "BKK Public", label: "BKK Public" },
          { value: "BKK R+V Versicherung", label: "BKK R+V Versicherung" },
          {
            value: "BKK Rieker.Ricosta.Weisser",
            label: "BKK Rieker.Ricosta.Weisser",
          },
          { value: "BKK Salus", label: "BKK Salus" },
          { value: "BKK Salzgitter", label: "BKK Salzgitter" },
          { value: "BKK SBH", label: "BKK SBH" },
          { value: "BKK Scheufelen", label: "BKK Scheufelen" },
          { value: "BKK SECURVITA", label: "BKK SECURVITA" },
          { value: "BKK SIEMAG", label: "BKK SIEMAG" },
          { value: "BKK SKD", label: "BKK SKD" },
          { value: "BKK STADT AUGSBURG", label: "BKK STADT AUGSBURG" },
          { value: "BKK Technoform", label: "BKK Technoform" },
          { value: "BKK Textilgruppe Hof", label: "BKK Textilgruppe Hof" },
          { value: "BKK TUI", label: "BKK TUI" },
          { value: "BKK VBU", label: "BKK VBU" },
          { value: "BKK VDN", label: "BKK VDN" },
          { value: "BKK VerbundPlus", label: "BKK VerbundPlus" },
          { value: "BKK VITAL", label: "BKK VITAL" },
          {
            value: "BKK Voralb HELLER*LEUZE*TRAUB",
            label: "BKK Voralb HELLER*LEUZE*TRAUB",
          },
          { value: "BKK Werra-Meissner", label: "BKK Werra-Meissner" },
          { value: "BKK Wieland-Werke AG", label: "BKK Wieland-Werke AG" },
          {
            value: "BKK Wirtschaft &amp; Finanzen",
            label: "BKK Wirtschaft &amp; Finanzen",
          },
          { value: "BKK WMF", label: "BKK WMF" },
          { value: "BKK Würth", label: "BKK Würth" },
          { value: "BKK ZF &amp; Partner", label: "BKK ZF &amp; Partner" },
          {
            value: "Central Krankenversicherung",
            label: "Central Krankenversicherung",
          },
          {
            value: "Cigna Global Health Options",
            label: "Cigna Global Health Options",
          },
          {
            value: "Concordia Krankenversicherung",
            label: "Concordia Krankenversicherung",
          },
          {
            value: "Continentale Krankenversicherung",
            label: "Continentale Krankenversicherung",
          },
          { value: "Daimler BKK", label: "Daimler BKK" },
          { value: "DAK-Gesundheit", label: "DAK-Gesundheit" },
          {
            value: "DBV Deutsche Beamtenversicherung Krankenversicherung",
            label: "DBV Deutsche Beamtenversicherung Krankenversicherung",
          },
          { value: "Debeka", label: "Debeka" },
          {
            value: "Deutsche Familienversicherung",
            label: "Deutsche Familienversicherung",
          },
          { value: "DEVK", label: "DEVK" },
          { value: "Die Bayerische", label: "Die Bayerische" },
          {
            value: "DIE BERGISCHE KRANKENKASSE",
            label: "DIE BERGISCHE KRANKENKASSE",
          },
          {
            value: "DKV Deutsche Krankenversicherung",
            label: "DKV Deutsche Krankenversicherung",
          },
          { value: "energie-BKK", label: "energie-BKK" },
          {
            value: "ENVIVAS Krankenversicherung",
            label: "ENVIVAS Krankenversicherung",
          },
          {
            value: "ERGO Versicherungsgruppe",
            label: "ERGO Versicherungsgruppe",
          },
          { value: "Ernst &amp; Young BKK", label: "Ernst &amp; Young BKK" },
          {
            value: "FREIE ARZT- UND MEDIZINKASSE",
            label: "FREIE ARZT- UND MEDIZINKASSE",
          },
          {
            value: "Gothaer Krankenversicherung",
            label: "Gothaer Krankenversicherung",
          },
          {
            value: "Hallesche Krankenversicherung",
            label: "Hallesche Krankenversicherung",
          },
          { value: "HanseMerkur", label: "HanseMerkur" },
          { value: "Heimat Krankenkasse", label: "Heimat Krankenkasse" },
          {
            value: "HEK - Hanseatische Krankenkasse",
            label: "HEK - Hanseatische Krankenkasse",
          },
          {
            value: "hkk - Handelskrankenkasse",
            label: "hkk - Handelskrankenkasse",
          },
          { value: "HUK-COBURG", label: "HUK-COBURG" },
          {
            value: "IKK Brandenburg und Berlin",
            label: "IKK Brandenburg und Berlin",
          },
          { value: "IKK classic", label: "IKK classic" },
          { value: "IKK gesund plus", label: "IKK gesund plus" },
          { value: "IKK Nord", label: "IKK Nord" },
          { value: "IKK Südwest", label: "IKK Südwest" },
          {
            value: "Inter Krankenversicherung",
            label: "Inter Krankenversicherung",
          },
          { value: "KKH", label: "KKH" },
          {
            value: "Knappschaft-Bahn-See [KBS]",
            label: "Knappschaft-Bahn-See [KBS]",
          },
          {
            value: "KRANKEN- &amp; STERBEKASSE 'Mathilde'",
            label: "KRANKEN- &amp; STERBEKASSE 'Mathilde'",
          },
          {
            value: "KUK der Berufsfeuerwehr Hannover",
            label: "KUK der Berufsfeuerwehr Hannover",
          },
          {
            value: "KV der Bundesbahnbeamten",
            label: "KV der Bundesbahnbeamten",
          },
          {
            value: "LIGA KV katholischer Priester",
            label: "LIGA KV katholischer Priester",
          },
          { value: "LKH Landeskrankenhilfe", label: "LKH Landeskrankenhilfe" },
          {
            value: "LVM Krankenversicherung",
            label: "LVM Krankenversicherung",
          },
          {
            value: "LZPD - Landesamt für Zentrale Polizeiliche Dienste",
            label: "LZPD - Landesamt für Zentrale Polizeiliche Dienste",
          },
          {
            value: "Mannheimer Krankenversicherung",
            label: "Mannheimer Krankenversicherung",
          },
          { value: "Mecklenburgische", label: "Mecklenburgische" },
          { value: "Münchener Verein", label: "Münchener Verein" },
          { value: "Novitas BKK", label: "Novitas BKK" },
          {
            value: "Nürnberger Krankenversicherung",
            label: "Nürnberger Krankenversicherung",
          },
          { value: "PAX-FAMILIENFÜRSORGE", label: "PAX-FAMILIENFÜRSORGE" },
          {
            value: "Postbeamtenkrankenkasse A",
            label: "Postbeamtenkrankenkasse A",
          },
          {
            value: "Postbeamtenkrankenkasse B",
            label: "Postbeamtenkrankenkasse B",
          },
          { value: "pronova BKK", label: "pronova BKK" },
          {
            value: "R+V Betriebskrankenkasse",
            label: "R+V Betriebskrankenkasse",
          },
          {
            value: "R+V Krankenversicherung",
            label: "R+V Krankenversicherung",
          },
          {
            value: "SBK - Siemens-Betriebskrankenkasse",
            label: "SBK - Siemens-Betriebskrankenkasse",
          },
          { value: "Signal Iduna", label: "Signal Iduna" },
          {
            value: "SONO Krankenversicherung",
            label: "SONO Krankenversicherung",
          },
          { value: "Sozialamt", label: "Sozialamt" },
          {
            value: "Sozialversicherung für Landwirtschaft Forsten und Gartenbau [SVLFG]",
            label: "Sozialversicherung für Landwirtschaft Forsten und Gartenbau [SVLFG]",
          },
          {
            value: "ST. MARTINUS Priesterverein",
            label: "ST. MARTINUS Priesterverein",
          },
          {
            value: "Süddeutsche Krankenversicherung (SDK)",
            label: "Süddeutsche Krankenversicherung (SDK)",
          },
          { value: "Südzucker-BKK", label: "Südzucker-BKK" },
          {
            value: "TK - Techniker Krankenkasse",
            label: "TK - Techniker Krankenkasse",
          },
          {
            value: "UKV Union Krankenversicherung",
            label: "UKV Union Krankenversicherung",
          },
          {
            value: "universa Krankenversicherung",
            label: "universa Krankenversicherung",
          },
          { value: "Vereinigte BKK", label: "Vereinigte BKK" },
          {
            value: "VGH / Provinzial Krankenversicherung Hannover",
            label: "VGH / Provinzial Krankenversicherung Hannover",
          },
          { value: "Viactiv Krankenkasse", label: "Viactiv Krankenkasse" },
          {
            value: "Vigo Krankenversicherung",
            label: "Vigo Krankenversicherung",
          },
          { value: "Vivida BKK", label: "Vivida BKK" },
          {
            value: "Württembergische Krankenversicherung",
            label: "Württembergische Krankenversicherung",
          },
          { value: "Unbekannt", label: "Unbekannt" },
          { value: "Selbstzahler", label: "Selbstzahler" },
        ],
      },
    },
    // {
    //   id: "patient_mtbAnmeldung_pkvTarifform",
    //   title: "",
    //   description: "",
    //   question: {
    //     text: "PKV-pkvTarifform",
    //     kind: "dropdown",
    //     answers: [
    //       { value: "voll", label: "Vollversichert" },
    //       { value: "standard", label: "Standardtarif" },
    //       { value: "basis", label: "Basistarif" },
    //     ],
    //   },
    // },
    {
      id: "patient_mtbAnmeldung_smokerStatus",
      title: "",
      description: "",
      question: {
        text: "Raucherstatus Onkologie",
        kind: "dropdown",
        answers: [
          { value: "LA18979-7", label: "Raucher" },

          { value: "LA15920-4", label: "Ex-Raucher" },

          { value: "LA18978-9", label: "Nieraucher" },

          { value: "unknown", label: "Unbekannt" },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_nonSmokerSince",
      title: "",
      description: "",
      question: {
        text: "Nichtraucher seit",
        kind: "text", // TODO: Slider für Integer 0 ... 99
      },
    },
    {
      id: "patient_mtbAnmeldung_packYears",
      title: "",
      description: "",
      question: {
        text: "Pack years",
        kind: "text", // TODO: Slider für Integer 0 ... 99
      },
    },
    {
      id: "patient_mtbAnmeldung_ecog",
      title: "",
      description: "",
      question: {
        text: "ECOG",
        kind: "dropdown",
        answers: [
          {
            value: "LA9622-7",
            label: "ECOG 0 - normale, uneingeschränkte Aktivität, wie vor der Erkrankung",
          },

          {
            value: "LA9623-5",
            label: "ECOG 1 - Einschränkung bei körperlicher Anstrengung, gehfähig, leichte körperliche Arbeit möglich",
          },

          {
            value: "LA9624-3",
            label: "ECOG 2 - gefähig, Selbstversorgung möglich, aber nicht arbeitsfähig, kann mehr als 50% der Wachzeit aufstehen",
          },

          {
            value: "LA9625-0",
            label: "ECOG 3 - nur begrenzte Selbstversorgung möglich, 50% oder mehr der Wachzeit an Bett oder Stuhl gebunden",
          },

          {
            value: "LA9626-8",
            label: "ECOG 4 - völlig pflegebedürftig, keinerlei Selbstversorgung möglich, völlig an Bett oder Stuhl gebunden",
          },

          { value: "LA9627-6", label: "ECOG 5 - tot" },

          { value: "unknown", label: "Unbekannt" },
        ],
      },
    },

    {
      id: "title_3",
      title: "1 - Tumorstadium",
      description: "Angaben zum Tumorstadium",
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_date",
      title: "",
      description: "",
      question: {
        text: "Datum",
        kind: "date",
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_firstDiagnosis",
      title: "",
      description: "",
      question: {
        text: "Erstdiagnose",
        kind: "dropdown",
        answers: [
          {
            value: "yes",
            label: "Ja",
          },
          {
            value: "no",
            label: "Nein",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_curativeOperable",
      title: "",
      description: "",
      question: {
        text: "Kurativ-operabel",
        kind: "dropdown",
        answers: [
          {
            value: "yes",
            label: "Ja",
          },
          {
            value: "no",
            label: "Nein",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_usedUiccVersion",
      title: "",
      description: "",
      question: {
        text: "Genutzte UICC Version",
        kind: "dropdown",
        answers: [
          {
            value: "version7",
            label: "Version 7",
          },
          {
            value: "version8",
            label: "Version 8",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_tnmPrefix",
      title: "",
      description: "",
      question: {
        text: "TNM-Klassifikation Präfix",
        kind: "dropdown",
        answers: [
          {
            value: "r",
            label: "r",
          },
          {
            value: "y",
            label: "y",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_tumorSize",
      title: "",
      description: "",
      question: {
        text: "Größe und Ausdehnung des Tumors",
        kind: "dropdown",
        answers: [
          {
            value: "TX",
            label: "TX",
          },
          {
            value: "Tis",
            label: "Tis",
          },
          {
            value: "T1",
            label: "T1",
          },
          {
            value: "T1mi",
            label: "T1mi",
          },
          {
            value: "T1a",
            label: "T1a",
          },
          {
            value: "T1b",
            label: "T1b",
          },
          {
            value: "T1c",
            label: "T1c",
          },
          {
            value: "T2",
            label: "T2",
          },
          {
            value: "T2a",
            label: "T2a",
          },
          {
            value: "T2b",
            label: "T2b",
          },
          {
            value: "T3",
            label: "T3",
          },
          {
            value: "T4",
            label: "T4",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_tumorPrefix",
      title: "",
      description: "",
      question: {
        text: "Tumor Präfix",
        kind: "dropdown",
        answers: [
          {
            value: "c",
            label: "c - klinisch gesichert",
          },
          {
            value: "p",
            label: "p - histopathologisch gesichert",
          },
          {
            value: "u",
            label: "u - Ultraschalldiagnostik",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_tumorSuffix",
      title: "",
      description: "",
      question: {
        text: "Tumor Suffix",
        kind: "dropdown",
        answers: [
          {
            value: "m",
            label: "m - multiple Tumore der gleichen Region",
          },
          {
            value: "is",
            label: "is - Carcinoma in situ",
          },
          {
            value: "cy",
            label: "cy - zytologisch",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_lymphNodesCount",
      title: "",
      description: "",
      question: {
        text: "Zahl und Lage der befallenen Lymphknoten",
        kind: "dropdown",
        answers: [
          {
            value: "NX",
            label: "NX",
          },
          {
            value: "N0",
            label: "N0",
          },
          {
            value: "N1",
            label: "N1",
          },
          {
            value: "N2",
            label: "N2",
          },
          {
            value: "N3",
            label: "N3",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_lymphNodesPrefix",
      title: "",
      description: "",
      question: {
        text: "Ggf. Lymphknoten Präfix",
        kind: "dropdown",
        answers: [
          {
            value: "c",
            label: "c - klinisch gesichert",
          },
          {
            value: "p",
            label: "p - histopathologisch gesichert",
          },
          {
            value: "u",
            label: "u - Ultraschalldiagnostik",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_metastasesState",
      title: "",
      description: "",
      question: {
        text: "Abwesenheit oder Vorhandensein von Metastasen",
        kind: "dropdown",
        answers: [
          {
            value: "MX",
            label: "MX",
          },
          {
            value: "M0",
            label: "M0",
          },
          {
            value: "M1",
            label: "M1",
          },
          {
            value: "M1a",
            label: "M1a",
          },
          {
            value: "M1b",
            label: "M1b",
          },
          {
            value: "M1c",
            label: "M1c",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_metastasesLocalisation",
      title: "",
      description: "",
      question: {
        text: "Ggf. Metastase Lokalisation",
        kind: "dropdown",
        comment: "Bitte tippen Sie Ihre Antwort ein, damit Sie die passenden Optionen angzeigt bekommen",
        answers: [
          {
            value: "bones",
            label: "Knochen",
          },
          {
            value: "liver",
            label: "Leber",
          },
          {
            value: "adrenalGland",
            label: "Nebenniere",
          },
          {
            value: "brain",
            label: "Gehirn",
          },
          {
            value: "pleura",
            label: "Pleura",
          },
          {
            value: "other",
            label: "Andere",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_otherMetastasesLocalisation",
      title: "",
      description: "",
      question: {
        text: 'Bitte spezifizieren Sie "Andere"',
        kind: "text",
      },
    },
    {
      id: "patient_mtbAnmeldung_tumorstadium_metastasesPrefix",
      title: "",
      description: "",
      question: {
        text: "Ggf. Metastase Präfix",
        kind: "dropdown",
        answers: [
          {
            value: "c",
            label: "c - klinisch gesichert",
          },
          {
            value: "p",
            label: "p - histopathologisch gesichert",
          },
          {
            value: "u",
            label: "u - Ultraschalldiagnostik",
          },
        ],
      },
    },
    {
      id: "title_4",
      title: "1 - Histologie",
      description: "Angaben zur Histologie",
    },
    {
      id: "patient_mtbAnmeldung_histology_biopsyID",
      title: "",
      description: "",
      question: {
        text: "Tumormaterial (Biopsie-ID/Eingangsnummer)",
        kind: "text",
        answers: [],
      },
    },
    // {
    //   id: "patient_mtbAnmeldung_histology_reference",
    //   title: "",
    //   description: "",
    //   question: {
    //     text: "Interne und eindeutige Id des Listeneintrags zum Refenzieren und Reidentifzieren in zukünftigen Importen",
    //     kind: "text",
    //     answers: [],
    //   },
    // },
    {
      id: "patient_mtbAnmeldung_histology_date",
      title: "",
      description: "",
      question: {
        text: "Datum",
        kind: "date",
        answers: [],
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_classification",
      title: "",
      description: "",
      question: {
        text: "Klassifikation",
        kind: "dropdown",
        comment: "Bitte tippen Sie Ihre Antwort ein, damit Sie die passenden Optionen angzeigt bekommen",
        answers: [
          {
            value: "8140/3",
            label: "8140/3 - Adenokarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8140/6",
            label: "8140/6 - Adenokarzinom-Metastase o.n.A.</xs:documentation",
          },
          {
            value: "8250/3",
            label: "8250/3 - Bronchiolo-alveoläres Adenokarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8551/3",
            label: "8551/3 - Azinuszell-Zystadenokarzinom</xs:documentation",
          },
          {
            value: "8260/3",
            label: "8260/3 - Papilläres Adenokarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8265/3",
            label: "8265/3 - Mikropapilläres Karzinom o.n.A.</xs:documentation",
          },
          {
            value: "8230/3",
            label: "8230/3 - Solides Karzinom o.n.A.</xs:documentation",
          },
          {
            value: "8253/3",
            label: "8253/3 - Muzinöses bronchiolo-alveoläres Karzinom</xs:documentation",
          },
          {
            value: "8254/3",
            label: "8254/3 - Gemischtes muzinöses und nichtmuzinöses bronchiolo-alveoläres Karzinom</xs:documentation",
          },
          {
            value: "8480/3",
            label: "8480/3 - Muzinöses Adenokarzinom / Kolloidales Adenokarzinom</xs:documentation",
          },
          {
            value: "8333/3",
            label: "8333/3 - Fetales Adenokarzinom</xs:documentation",
          },
          {
            value: "8144/3",
            label: "8144/3 - Adenokarzinom vom intestinalen Typ</xs:documentation",
          },
          {
            value: "8070/3",
            label: "8070/3 - Plattenepithelkarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8071/3",
            label: "8071/3 - Verhornendes Plattenepithelkarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8072/3",
            label: "8072/3 - Großzelliges nichtverhornendes Plattenepithelkarzinom o.n.A.</xs:documentation",
          },
          {
            value: "8083/3",
            label: "8083/3 - Basaloides Plattenepithelkarzinom</xs:documentation",
          },
          {
            value: "8041/3",
            label: "8041/3 - Kleinzelliges Karzinom o.n.A.</xs:documentation",
          },
          {
            value: "8045/3",
            label: "8045/3 - Kombiniertes kleinzelliges Karzinom</xs:documentation",
          },
          {
            value: "8013/3",
            label: "8013/3 - Großzelliges neuroendokrines Karzinom</xs:documentation",
          },
          {
            value: "8240/3",
            label: "8240/3 - Karzinoidtumor o.n.A.</xs:documentation",
          },
          {
            value: "8249/3",
            label: "8249/3 - Atypischer Karzinoidtumor</xs:documentation",
          },
          {
            value: "8012/3",
            label: "8012/3 - Großzelliges Karzinom o.n.A.</xs:documentation",
          },
          {
            value: "8560/3",
            label: "8560/3 - Adenosquamöses Karzinom</xs:documentation",
          },
          {
            value: "8430/3",
            label: "8430/3 - Mukoepidermoid-Karzinom</xs:documentation",
          },
          {
            value: "8200/3",
            label: "8200/3 - Adenoid-zystisches Karzinom</xs:documentation",
          },
          {
            value: "8562/3",
            label: "8562/3 - Epithelial-myoepitheliales Karzinom</xs:documentation",
          },
          {
            value: "8000/0",
            label: "8000/0 - Benigne Neoplasie o.n.A.</xs:documentation",
          },
          {
            value: "8000/1",
            label: "8000/1 - Neoplasie fraglicher Dignität</xs:documentation",
          },
          {
            value: "8000/3",
            label: "8000/3 - Maligne Neoplasie</xs:documentation",
          },
          {
            value: "8000/6",
            label: "8000/6 - Neoplasie, Metastase</xs:documentation",
          },
          {
            value: "8010/6",
            label: "8010/6 - Karzinom-Metastase o.n.A.</xs:documentation",
          },
          {
            value: "C3812",
            label: "C3812 - Carcinoma of Unknown Primary</xs:documentation",
          },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_localization",
      title: "",
      description: "",
      question: {
        text: "ICD-10",
        kind: "dropdown",
        comment: "Bitte tippen Sie Ihre Antwort ein, damit Sie die passenden Optionen angzeigt bekommen",
        answers: [
          {
            value: "C34.0",
            label: "C34.0 - Hauptbronchus</xs:documentation",
          },
          {
            value: "C34.1",
            label: "C34.1 - Oberlappen (-Bronchus)</xs:documentation",
          },
          {
            value: "C34.2",
            label: "C34.2 - Mittellappen (-Bronchus)</xs:documentation",
          },
          {
            value: "C34.3",
            label: "C34.3 - Unterlappen (-Bronchus)</xs:documentation",
          },
          {
            value: "C34.8",
            label: "C34.8 - Bronchus und Lunge, mehrere Teilbereiche überlappend</xs:documentation",
          },
          {
            value: "C34.9",
            label: "C34.9 - Bronchus oder Lunge, nicht näher bezeichnet</xs:documentation",
          },
          { value: "C22.0", label: "C22.0 - Leber</xs:documentation" },
          {
            value: "C22.1",
            label: "C22.1 - Intrahepatische Gallengänge</xs:documentation",
          },
          { value: "C42.2", label: "C42.2 - Milz</xs:documentation" },
          { value: "C70.0", label: "C70.0 - Hirnhäute</xs:documentation" },
          {
            value: "C70.1",
            label: "C70.1 - Rückenmarkhäute</xs:documentation",
          },
          {
            value: "C70.9",
            label: "C70.9 - Meningen o.n.A.</xs:documentation",
          },
          { value: "C71.0", label: "C71.0 - Cerebrum</xs:documentation" },
          { value: "C71.1", label: "C71.1 - Frontallappen</xs:documentation" },
          { value: "C71.2", label: "C71.2 - Temporallappen</xs:documentation" },
          { value: "C71.3", label: "C71.3 - Parietallappen</xs:documentation" },
          {
            value: "C71.4",
            label: "C71.4 - Okzipitallappen</xs:documentation",
          },
          {
            value: "C71.5",
            label: "C71.5 - Ventrikel o.n.A.</xs:documentation",
          },
          {
            value: "C71.6",
            label: "C71.6 - Kleinhirn o.n.A.</xs:documentation",
          },
          { value: "C71.7", label: "C71.7 - Hirnstamm</xs:documentation" },
          {
            value: "C71.8",
            label: "C71.8 - Gehirn, mehrere Teilbereiche überlappend</xs:documentation",
          },
          { value: "C71.9", label: "C71.9 - Gehirn o.n.A.</xs:documentation" },
          { value: "C72.0", label: "C72.0 - Rückenmark</xs:documentation" },
          { value: "C72.1", label: "C72.1 - Cauda equina</xs:documentation" },
          { value: "C72.2", label: "C72.2 - N. olfactorius</xs:documentation" },
          { value: "C72.3", label: "C72.3 - N. opticus</xs:documentation" },
          { value: "C72.4", label: "C72.4 - N. acusticus</xs:documentation" },
          {
            value: "C72.5",
            label: "C72.5 - Hirnnerven o.n.A.</xs:documentation",
          },
          {
            value: "C72.8",
            label: "C72.8 - Gehirn und andere Teile des Zentralnervensystems,  mehrere Teilbereiche überlappend</xs:documentation",
          },
          { value: "C72.9", label: "C72.9 - Nervensystem</xs:documentation" },
          {
            value: "C74.0",
            label: "C74.0 - Nebennierenrinde</xs:documentation",
          },
          {
            value: "C74.1",
            label: "C74.1 - Nebennierenmark</xs:documentation",
          },
          { value: "C74.9", label: "C74.9 - Nebenniere o.n.A." },
        ],
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_grading",
      title: "",
      description: "",
      question: {
        text: "Grading",
        kind: "dropdown",
        answers: [
          {
            value: "G0",
            label: "G0 - Grading nicht vorgesehen</xs:documentation",
          },
          { value: "G1", label: "G1 - gut differenziert</xs:documentation" },
          { value: "G2", label: "G2 - mäßig differenziert</xs:documentation" },
          {
            value: "G3",
            label: "G3 - schlecht / gering differenziert</xs:documentation",
          },
          {
            value: "G4",
            label: "G4 - undifferenzierter Tumor mit sehr hohem Malignitätsgrad</xs:documentation",
          },
          { value: "GX", label: "GX - nicht bestimmbar</xs:documentation" },
          { value: "U", label: "U - unbekannt</xs:documentation" },
          { value: "T", label: "T - trifft nicht zu" },
        ],
      },
    },
    {
      id: "subtitle_1",
      title: "Nähere histologische Beschreibung des Adenokarzinoms",
    },
    {
      id: "patient_mtbAnmeldung_histology_growthPatternLepidic",
      title: "",
      description: "",
      question: {
        text: "Wachstumsmuster bei Adenokarzinom lepidisch",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_growthPatternAcinary",
      title: "",
      description: "",
      question: {
        text: "Wachstumsmuster bei Adenokarzinom azinär",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_growthPatternPapillary",
      title: "",
      description: "",
      question: {
        text: "Wachstumsmuster bei Adenokarzinom papillär",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_growthPatternMicropapillary",
      title: "",
      description: "",
      question: {
        text: "Wachstumsmuster bei Adenokarzinom mikropapillär",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_growthPatternSolid",
      title: "",
      description: "",
      question: {
        text: "Wachstumsmuster bei Adenokarzinom solide",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "patient_mtbAnmeldung_histology_percentSignetRingCellCarcinoma",
      title: "",
      description: "",
      question: {
        text: "Anteil an Siegelringzellkarzinomen",
        kind: "text", // TODO: Slider für Integer 0 ... 100
      },
    },
    {
      id: "title_5",
      title: "1 - Rezidiv/Progress",
      description: "",
    },
    {
      id: "patient_mtbAnmeldung_rezidivProgress_date",
      title: "",
      description: "",
      question: {
        text: "Datum der Feststellung",
        kind: "date",
        answers: [],
      },
    },
    {
      id: "patient_mtbAnmeldung_rezidivProgress_state",
      title: "",
      description: "",
      question: {
        text: "Rezidiv/Progress",
        kind: "dropdown",
        answers: [
          {
            value: "yes",
            label: "Ja",
          },
          {
            value: "no",
            label: "Nein",
          },
        ],
      },
    },
  ],
};

export { mtbAnmeldung_survey_data };
