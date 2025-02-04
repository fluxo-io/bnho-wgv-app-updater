const neowisQi_survey_data = {
  questions: [
    {
      id: "patient_neowisQi_ueberwStat", // nachträglich ergänzt
      title: "",
      description: "",
      question: {
        text: "Ist/war die Patientin/der Patient lediglich für eine Überweisung in den stationären Sektor vorstellig?",
        kind: "yesNo",
      },
    },
    {
      id: "patient_neowisQi_nsclcDiagn",
      title: "",
      description: "",
      question: {
        text: "Leidet/litt die Patientin/der Patient an einem nichtkleinzelligen Lungenkarzinom (NSCLC-Diagnose)?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
      ],
    },
    {
      id: "patient_neowisQi_nsclcStad",
      title: "",
      description: "",
      question: {
        text: "Handelt/handelte es sich um eine NSCLC-Diagnose mit Stadium 3b oder höher?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_ueberwBhndl", // nachträglich ergänzt
      title: "",
      description: "",
      question: {
        text: "Wurde die Patientin/der Patient an einen anderen Behandler überwiesen?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_nsclcErst",
      title: "",
      description: "",
      question: {
        text: "Handelt/handelte es sich um eine NSCLC-Erstdiagnose?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
      ],
    },
    {
      id: "patient_neowisQi_erstDiagn_month",
      title: "",
      description: "",
      question: {
        text: "Bitte nennen Sie das Datum der Erstdiagnose (Monat und Jahr)",
        kind: "dropdown",
        answers: [
          { value: '01', label: 'Januar' },
          { value: '02', label: 'Februar' },
          { value: '03', label: 'März' },
          { value: '04', label: 'April' },
          { value: '05', label: 'Mai' },
          { value: '06', label: 'Juni' },
          { value: '07', label: 'Juli' },
          { value: '08', label: 'August' },
          { value: '09', label: 'September' },
          { value: '10', label: 'Oktober' },
          { value: '11', label: 'November' },
          { value: '12', label: 'Dezember' }
        ],
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_erstDiagn_year",
      title: "",
      description: "",
      question: {
        text: "",
        kind: "dropdown",
        answers: [
          { value: '2024', label: '2024' },
          { value: '2023', label: '2023' },
          { value: '2022', label: '2022' },
          { value: '2021', label: '2021' },
          { value: '2020', label: '2020' },
          { value: '2019', label: '2019' },
          { value: '2018', label: '2018' },
          { value: '2017', label: '2017' },
          { value: '2016', label: '2016' },
          { value: '2015', label: '2015' },
          { value: '2014', label: '2014' },
          { value: '2013', label: '2013' },
          { value: '2012', label: '2012' },
          { value: '2011', label: '2011' },
          { value: '2010', label: '2010' },
          { value: '2009', label: '2009' },
          { value: '2008', label: '2008' },
          { value: '2007', label: '2007' },
          { value: '2006', label: '2006' },
          { value: '2005', label: '2005' }
      ],
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_nsclcRez",
      title: "",
      description: "",
      question: {
        text: "Sie haben angegeben, dass es sich bei dem Fall <u>nicht</u> um eine Erstdiagnose handelt. Liegt/lag demnach ein Rezidiv vor?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "nein",
        },
      ],
    },
    {
      id: "patient_neowisQi_Logikfehler",
      title: "Bitte vorhergehende Fragen erneut bearbeiten",
      description: "Sie haben angegeben, dass es sich weder um eine Erstdiagnose, noch um ein Rezidiv handelt. Bitte korrigieren Sie Ihre Angaben.",
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcRez",
          answer: "nein",
        },
      ],
    },
    {
      id: "patient_neowisQi_RezDiagn_month",
      title: "",
      description: "",
      question: {
        text: "Bitte nennen Sie das Diagnosedatum des Rezidivs (Monat und Jahr)",
        kind: "dropdown",
        answers: [
          { value: '01', label: 'Januar' },
          { value: '02', label: 'Februar' },
          { value: '03', label: 'März' },
          { value: '04', label: 'April' },
          { value: '05', label: 'Mai' },
          { value: '06', label: 'Juni' },
          { value: '07', label: 'Juli' },
          { value: '08', label: 'August' },
          { value: '09', label: 'September' },
          { value: '10', label: 'Oktober' },
          { value: '11', label: 'November' },
          { value: '12', label: 'Dezember' }
        ],
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcRez",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_RezDiagn_year",
      title: "",
      description: "",
      question: {
        text: "",
        kind: "dropdown",
        answers: [
            { value: '2024', label: '2024' },
            { value: '2023', label: '2023' },
            { value: '2022', label: '2022' },
            { value: '2021', label: '2021' },
            { value: '2020', label: '2020' },
            { value: '2019', label: '2019' },
            { value: '2018', label: '2018' },
            { value: '2017', label: '2017' },
            { value: '2016', label: '2016' },
            { value: '2015', label: '2015' },
            { value: '2014', label: '2014' },
            { value: '2013', label: '2013' },
            { value: '2012', label: '2012' },
            { value: '2011', label: '2011' },
            { value: '2010', label: '2010' },
            { value: '2009', label: '2009' },
            { value: '2008', label: '2008' },
            { value: '2007', label: '2007' },
            { value: '2006', label: '2006' },
            { value: '2005', label: '2005' }
        ],
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcErst",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcRez",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_ngsDiagn",
      title: "",
      description: "",
      question: {
        text: "Hat/hatte die Patientin/der Patient eine molekulare Diagnostik (z.B. WGS, nNGM-Panel, weitere Panel) erhalten? (Ausgenommen: Einzelgentestung)",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
      ],
    },
    {
      id: "patient_neowisQi_ngsZentrum", // inhaltlich korrekt: _nNGMZentrum TODO: im Export anpassen
      title: "",
      description: "<a href=\"https://nngm.de/netzwerkzentren/\">Liste aller Netzwerkzentren</a>",
      question: {
        text: "Wurde die NGS-Diagnostik an einem nNGM Zentrum durchgeführt?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_ngsMuri",
      title: "",
      description: "<u><strong>M</u></strong>olek<u><strong>u</u></strong>lare-The<u><strong>r</u></strong>ap<u><strong>i</u></strong>e-Empfehlungen für <u><strong>L</u></strong>ungenkrebs bzw. das MURIEL-System ist eine Wissensmanagement-Datenbank (im nNGM), die qualitätsgesicherte biologische und klinische Informationen über genetische Varianten bei Lungenkrebs enthält und eine klinische Therapieinformation bereitstellt. Eine MURIEL-Therapieinformation liegt nur vor, wenn eine Therapie im Befund empfohlen wird.",
      question: {
        text: "Enthält der vorliegende Befund eine dokumentierte MURIEL Therapieinformation?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ngsZentrum",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_muriEmpf",
      title: "",
      description: "",
      question: {
        text: "Hat/hatte die Patientin/der Patient eine Therapie auf Basis der MURIEL Datenbank erhalten?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ngsZentrum",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ngsMuri",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_ksEin",
      title: "",
      description: "",
      question: {
        text: "Wurde die Patientin/der Patient in eine klinische Studie eingeschlossen?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_ksNngm",
      title: "",
      description: "",
      question: {
        text: "Handelt es sich bei der klinischen Studie um eine im nNGM-Netzwerk registrierte Studie? ",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ksEin",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_nsclcOff",
      title: "",
      description: "",
      question: {
        text: "Wird/wurde die Patientin/der Patient im Zusammenhang mit ihrer/seiner NSCLC-Erkrankung mit einer off-label Therapie behandelt?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rezRebio",
      title: "",
      description: "",
      question: {
        text: "Wird/wurde bei der Patientin/dem Patienten aufgrund eines Progresses/eines Rezidivs eine Rebiopsie durchgeführt?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioNngm",
      title: "",
      description: "",
      question: {
        text: "Wurde die Rebiopsie in einem nNGM Zentrum analysiert?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rezRebio",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioNngm_zentrum",
      title: "",
      description: "",
      question: {
        text: "Drop Down: nNGM-Zentrum",
        kind: "dropdown",
        answers: [
          {
            value: 0,
            label: "Bitte wählen",
          },
          {
            value: 1,
            label: "Berlin Charite",
          },
          {
            value: 2,
            label: "Berlin Helios Heckeshorn",
          },
          {
            value: 3,
            label: "Berlin Vivantes",
          },
          {
            value: 4,
            label: "Dresden",
          },
          {
            value: 5,
            label: "Düsseldorf",
          },
          {
            value: 6,
            label: "Erlangen",
          },
          {
            value: 7,
            label: "Essen",
          },
          {
            value: 8,
            label: "Frankfurt",
          },
          {
            value: 9,
            label: "Freiburg",
          },
          {
            value: 10,
            label: "Gießen/Marburg",
          },
          {
            value: 24,
            label: "Göttingen / Hannover MHH",
          },
          {
            value: 11,
            label: "Halle (Saale)",
          },
          {
            value: 12,
            label: "Hamburg",
          },
          {
            value: 13,
            label: "Hannover KRH",
          },
          {
            value: 14,
            label: "Heidelberg",
          },
          {
            value: 15,
            label: "Köln/Bonn",
          },
          {
            value: 16,
            label: "Lübeck",
          },
          {
            value: 17,
            label: "Mainz",
          },
          {
            value: 18,
            label: "München",
          },
          {
            value: 19,
            label: "Oldenburg",
          },
          {
            value: 20,
            label: "Regensburg",
          },
          {
            value: 21,
            label: "Tübingen/Stuttgart",
          },
          {
            value: 22,
            label: "Ulm",
          },
          {
            value: 23,
            label: "Würzburg",
          },
        ],
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rezRebio",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rebioNngm",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioMuri",
      title: "",
      description: "",
      question: {
        text: "Enthält der Rebiopsie-Befund eine MURIEL Therapieinformation?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rezRebio",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rebioNngm",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioMuriEmpf",
      title: "",
      description: "",
      question: {
        text: "Hat die Patientin/der Patient nach der Rebiopsie eine Therapie auf Basis der MURIEL Datenbank erhalten?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rezRebio",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rebioNngm",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rebioMuri",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_solMtb",
      title: "",
      description: "",
      question: {
        text: "Wurde die Patientin/der Patient an einem MTB angemeldet?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_mtbDis",
      title: "",
      description: "",
      question: {
        text: "Wurde der Fall der Patientin/des Patienten in einem nNGM-/NeoWis-angebundenen molekularen Tumorboard (MTB) diskutiert?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_mtbEmpf",
      title: "",
      description: "",
      question: {
        text: "Wurde im Rahmen des MTB eine zielgerichtete Therapieempfehlung <u>ausgesprochen</u>?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_mtbDis",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_mtbUm",
      title: "",
      description: "",
      question: {
        text: "Wurde im Rahmen des MTB eine zielgerichtete Therapieempfehlung <u>umgesetzt</u>?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_mtbDis",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_mtbEmpf",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_RebioNeueDiag",
      title: "",
      description: "",
      question: {
        text: "Wurde bei Therapieversagen eine Rebiopsie/erneute Diagnostik durchgeführt?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_mtbDis",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_mtbEmpf",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioZug",
      title: "",
      description: "",
      question: {
        text: "Hat die Patientin/hat der Patient nach der Rebiopsie eine zielgerichtete, molekular gesteuerte sequenzielle Therapie mit einem zugelassenen Medikament erhalten?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_rezRebio",
          answer: "ja",
        },
        [
          {
            id: "patient_neowisQi_RebioNeueDiag",
            answer: "ja",
          },
          {
            id: "patient_neowisQi_mtbEmpf",
            answer: "nein",
          },
          {
            id: "patient_neowisQi_mtbDis",
            answer: "nein",
          },
        ],
      ],
    },
    {
      id: "patient_neowisQi_rebioOff",
      title: "",
      description: "",
      question: {
        text: "Hat die Patientin/hat der Patient nach der Rebiopsie eine zielgerichtete, molekular gesteuerte sequenzielle Therapie mit einem off-label Medikament erhalten?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_RebioNeueDiag",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_rebioStud",
      title: "",
      description: "",
      question: {
        text: "Hat die Patientin/hat der Patient nach der Rebiopsie eine zielgerichtete, molekular gesteuerte sequenzielle Therapie innerhalb einer Studie erhalten?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_RebioNeueDiag",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_followUp",
      title: "",
      description: "",
      question: {
        text: "Wurde für die Patientin/den Patienten eine Follow-Up Dokumentation angelegt und an das nNGM-Zentrum/die nNGM-Datenbank übermittelt?",
        kind: "yesNo",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },
    {
      id: "patient_neowisQi_final",
      title: "Vielen Dank",
      description: "",
      question: {
        text: "Sie haben alle Fragen für diesen Patienten beantwortet.",
        kind: "hidden",
      },
      requirements: [
        {
          id: "patient_neowisQi_ueberwStat",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_nsclcDiagn",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_nsclcStad",
          answer: "ja",
        },
        {
          id: "patient_neowisQi_ueberwBhndl",
          answer: "nein",
        },
        {
          id: "patient_neowisQi_ngsDiagn",
          answer: "ja",
        },
      ],
    },  
    {
      id: "patient_neowisQi_final2",
      title: "Vielen Dank für Ihre Dateneingabe",
      description: "",
      question: {
        text: "Auf Grund Ihrer Auswahl ist die QI-Erfassung an dieser Stelle beendet.",
        kind: "hidden",
      },
      requirements: [
        [
          {
            id: "patient_neowisQi_ueberwStat",
            answer: "ja",
          },
          {
            id: "patient_neowisQi_nsclcDiagn",
            answer: "nein",
          },
          {
            id: "patient_neowisQi_nsclcStad",
            answer: "nein",
          },
          {
            id: "patient_neowisQi_ueberwBhndl",
            answer: "ja",
          },
          {
            id: "patient_neowisQi_ngsDiagn",
            answer: "nein",
          },
        ]
      ],
    },
    {
      id: "patient_neowisQi_status",
      title: "",
      description: "",
      question: {
        text: "",
        kind: "hidden",
      },
    },
  ],
};

export { neowisQi_survey_data };
