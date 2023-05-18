const mySpellApi =[
    {
        name: "Aberto",
        description: "Opens locked doors",
        traduction_fr: "Ouvre les portes verrouillées",
    },

    {
        name: "Accio",
        description: "Summons objects",
        traduction_fr: "Invoque des objets",
    },

    {
        name: "Aguamenti",
        description: "Summons water",
        traduction_fr: "Appelle l'eau",
    },

    {
        name: "Alohomora",
        description: "Unlocks objects",
        traduction_fr: "Déverrouille les objets",
    },

    {
        name: "Anapneo",
        description: "Clears someone's airway",
        traduction_fr: "Libère les voies respiratoires de quelqu'un",
    },

    {
        name: "Aparecium",
        description: "Reveals secret written messages",
        traduction_fr: "Révèle les messages écrits secrets",
    },

    {
        name: "Apparate",
        description: "A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot "
            + "and appear at another location (disapparate is the opposite)",
        traduction_fr: "Un sort de transport non verbal qui permet à un sorcier ou une sorcière de voyager " +
            "instantanément sur place et d'apparaître à un autre endroit (disparaître est le contraire).",
    },

    {
        name: "Ascendio",
        description: "Propells someone into the air",
        traduction_fr: "Propulse quelqu'un dans les airs.",
    },

    {
        name: "Avada Kedavra",
        description: "Also known as The Killing Curse, the most evil spell in the Wizarding World; " +
            "one of three Unforgivable Curses; Harry Potter is the only known witch or wizard to survive it",
        traduction_fr: "Egalement connu sous le nom de malédiction mortelle, le sort le plus maléfique du monde " +
            "des sorciers ; l'une des trois malédictions impardonnables ; " +
            "Harry Potter est le seul sorcier ou sorcière connu à y avoir survécu",
    },

    {
        name: "Avis",
        description: "Conjures a small flock of birds",
        traduction_fr: "Conjure une petite volée d'oiseaux",
    },

    {
        name: "Bat-Bogey Hex",
        description: "Turns the target's boogers into bats",
        traduction_fr: "Transforme les crottes de nez de la cible en chauves-souris",
    },

    {
        name: "Bombardo",
        description: "Creates an explosion",
        traduction_fr: "Crée une explosion",
    },

    {
        name: "Brackium Emendo",
        description: "Heals broken bones",
        traduction_fr: "Guérit les os brisés",
    },

    {
        name: "Capacious Extremis",
        description: "Known as the Extension Charm, it's a complicated spell that can greatly expand or extend " +
            "the capacity of an object or space without affecting it externally",
        traduction_fr: "Connu sous le nom de charme d'extension, c'est un sort compliqué qui permet d'augmenter " +
            "ou d'étendre considérablement la capacité d'un objet ou d'un espace sans l'affecter extérieurement",
    },

    {
        name: "Confundo",
        description: "Known as the Confundus Charm, it causes confusion of the target",
        traduction_fr: "Connu sous le nom de Confundus Charm, il provoque la confusion de la cible",
    },

    {
        name: "Conjunctivitis Curse",
        description: "Affects the eyes and sight of a target",
        traduction_fr: "Affecte les yeux et la vue d'une cible",
    },

    {
        name: "Crinus Muto",
        description: "Changes hair color and style",
        traduction_fr: "Change la couleur et le style des cheveux",
    },

    {
        name: "Crucio",
        description: "One of three Unforgivable Curses, it causes unbearable pain in the target",
        traduction_fr: "L'un des trois maléfices impardonnables, il provoque une douleur insupportable chez " +
            "la personne visée",
    },

    {
        name: "Diffindo",
        description: "Used to precisely cut an object",
        traduction_fr: "Permet de découper un objet avec précision",
    },

    {
        name: "Disapparate",
        description: "A non-verbal transportation spell that allows a witch or wizard to instantly travel on " +
            "the spot and leave for another location (apparate is the opposite)",
        traduction_fr: "Un sort de transport non verbal qui permet à un sorcier ou une sorcière de voyager " +
            "instantanément sur place et de partir vers un autre endroit (apparate est le contraire)",
    },

    {
        name: "Engorgio",
        description: "Causes rapid growth in the targeted object",
        traduction_fr: "Provoque une croissance rapide de l'objet ciblé",
    },

    {
        name: "Episkey",
        description: "Heals minor injuries",
        traduction_fr: "Guérit les blessures mineures",
    },

    {
        name: "Expecto patronum",
        description: "The Patronus Charm is a powerful projection of hope and happiness that drives away Dementors;" +
            " a corpeal Patronus takes the the respective animal form of the caster, while a non-corpeal appears " +
            "as a wisp of light; at 13, Harry Potter was the youngest known witch or wizard to prouduce a " +
            "corpeal Patronus",
        traduction_fr: "Le charme Patronus est une puissante projection d'espoir et de bonheur qui fait fuir " +
            "les Détraqueurs ; un Patronus corpeal prend la forme animale du lanceur, tandis qu'un Patronus " +
            "non corpeal apparaît sous la forme d'un filet de lumière ; à 13 ans, Harry Potter était le plus" +
            " jeune sorcier ou magicien connu à produire un Patronus corpeal.",
    },

    {
        name: "Erecto",
        description: "Allows a witch or wizard to build a structure, like a tent",
        traduction_fr: "Permet à un sorcier ou une sorcière de construire une structure, comme une tente.",
    },

    {
        name: "Evanesco",
        description: "Vanishes objects",
        traduction_fr: "fait disparaître les objets",
    },

    {
        name: "Expelliarmus",
        description: "Forces an opponent to drop whatever's in their possession",
        traduction_fr: "oblige un adversaire à laisser tomber ce qu'il a en sa possession",
    },

    {
        name: "Ferula",
        description: "A healing charm that conjures wraps and bandages for wounds",
        traduction_fr: "Charme de guérison qui fait apparaître des enveloppes et des bandages pour les blessures",
    },

    {
        name: "Fiendfyre Curse",
        description: "Conjures destructive, enormous enchanted flames",
        traduction_fr: "Un charme complexe qui dissimule un secret dans l'âme d'un \"Gardien du secret\" choisi." +
            " Si un endroit fait l'objet d'une dissimulation, il devient indétectable pour les autres",
    },

    {
        name: "Finite Incantatem",
        description: "A general counter-spell that's used to reverse or counter already cast charms",
        traduction_fr: "Un contre-sort général utilisé pour annuler ou contrer des charmes déjà lancés",
    },

    {
        name: "Furnunculus Curse",
        description: "A jinx that causes a breakout of boils or pimples",
        traduction_fr: "Malédiction qui provoque une éruption de furoncles ou de boutons",
    },

    {
        name: "Geminio",
        description: "Duplicates objects",
        traduction_fr: "Duplique les objets",
    },

    {
        name: "Glisseo",
        description: "Transforms a staircase into a slide",
        traduction_fr: "Transforme un escalier en toboggan",
    },

    {
        name: "Homonculus Charm",
        description: "Detects anyone's true identity and location on a piece of parchment; " +
            "used to create the Marauder's Map",
        traduction_fr: "Détecte la véritable identité et l'emplacement d'une personne sur un morceau de parchemin ;" +
            " utilisé pour créer la carte du Maraudeur",
    },

    {
        name: "Immobulus",
        description: "Immobilises living targets",
        traduction_fr: "Immobilise les cibles vivantes",
    },

    {
        name: "Impedimenta",
        description: "A temporary jinx that slows the movement of the target",
        traduction_fr: "Une poisse temporaire qui ralentit le mouvement de la cible",
    },

    {
        name: "Incarcerous",
        description: "Conjures ropes",
        traduction_fr: "Conjure des cordes",
    },

    {
        name: "Imperio",
        description: "One of the three Unforgivable Curses, it places the target under the complete control" +
            " of the caster",
        traduction_fr: "L'une des trois malédictions impardonnables, elle place la cible sous le contrôle total " +
            "du lanceur de sorts.",
    },

    {
        name: "Impervius",
        description: "Makes an object waterproof",
        traduction_fr: "Rend un objet imperméable",
    },

    {
        name: "Incendio",
        description: "Conjures flames",
        traduction_fr: "Conjure des flammes",
    },

    {
        name: "Langlock",
        description: "Causes the target's tongue to stick to the roof of their mouth",
        traduction_fr: "Fait en sorte que la langue de la cible se colle au palais",
    },

    {
        name: "Legilimens",
        description: "Invading or navigating another's mind",
        traduction_fr: "envahir ou naviguer dans l'esprit d'autrui",
    },

    {
        name: "Levicorpus",
        description: "Levitates the target by their ankle",
        traduction_fr: "Fait léviter la cible par la cheville",
    },

    {
        name: "Locomotor Mortis",
        description: "The Leg-Locker curse bounds the target's legs",
        traduction_fr: "La malédiction du Leg-Locker lie les jambes de la cible",
    },

    {
        name: "Lumos",
        description: "Illuminates the caster's wand",
        traduction_fr: "Illumine la baguette du lanceur de sorts",
    },

    {
        name: "Morsmordre",
        description: "Conjures and projects Lord Voldemort's Dark Mark",
        traduction_fr: "Conjure et projette la marque sombre de Lord Voldemort",
    },

    {
        name: "Mucus Ad Nauseam",
        description: "Inflicts an extreme runny nose or cold",
        traduction_fr: "Inflige un écoulement nasal ou un rhume extrême",
    },

    {
        name: "Muffliato",
        description: "Creates a buzzing sound in the target's ears to prevent eavesdropping",
        traduction_fr: "Crée un bourdonnement dans les oreilles de la cible pour l'empêcher d'écouter",
    },

    {
        name: "Nox",
        description: "Reverses the lumos charm, extinguishing a wand's light",
        traduction_fr: "Inverse le charme lumos, éteignant la lumière d'une baguette",
    },

    {
        name: "Obliviate",
        description: "Erases the target's memory",
        traduction_fr: "Efface la mémoire de la cible",
    },

    {
        name: "Obscuro",
        description: "Conjures a blindfold",
        traduction_fr: ":Conjure un bandeau pour les yeux",
    },

    {
        name: "Oculus Reparo",
        description: "Repairs eyeglasses",
        traduction_fr: "Répare les lunettes",
    },

    {
        name: "Oppugno",
        description: "Directs an object or person to attack a victim",
        traduction_fr: "Dirige un objet ou une personne pour qu'elle attaque une victime",
    },

    {
        name: "Petrificus Totalus",
        description: "Temporarily freezes or petrifies the body of the target",
        traduction_fr: "Gèle ou pétrifie temporairement le corps de la cible",
    },

    {
        name: "Periculum",
        description: "Conjures flares/red sparks",
        traduction_fr: "Conjure des fusées/étincelles rouges",
    },

    {
        name: "Piertotum Locomotor",
        description: "Incantation used to bring to life inanimate objects and artifacts",
        traduction_fr: "Incantation utilisée pour donner vie à des objets inanimés et à des artefacts",
    },

    {
        name: "Protean Charm",
        description: "Links objects together for better communication",
        traduction_fr: "Relie des objets entre eux pour une meilleure communication",
    },

    {
        name: "Protego",
        description: "Casts an invisible shield around the caster, protecting against spells and objects " +
            "(except for The Killing Curse)",
        traduction_fr: "Crée un bouclier invisible autour du lanceur de sorts, le protégeant des sorts " +
            "et des objets (à l'exception de The Killing Curse)",
    },

    {
        name: "Reducto",
        description: "Reduces the target to pieces",
        traduction_fr: "Réduit la cible en morceaux",
    },

    {
        name: "Reducio",
        description: "Shrinks an enlarged object to its regular size",
        traduction_fr: "Réduit un objet agrandi à sa taille normale",
    },

    {
        name: "Renneverate",
        description: "Awakens or revives the target",
        traduction_fr: "réveille ou ranime la cible",
    },

    {
        name: "Reparifors",
        description: "Heals magical ailments like poisoning or paralysis",
        traduction_fr: "Guérit les maux magiques tels que l'empoisonnement ou la paralysie",
    },

    {
        name: "Reparo",
        description: "Fixes broken objects",
        traduction_fr: "Répare les objets cassés",
    },

    {
        name: "Rictusempra",
        description: "A charm that disarms an opponent by tickling them",
        traduction_fr: "Charme qui désarme un adversaire en le chatouillant",
    },

    {
        name: "Riddikulus",
        description: "Used to defeat a Boggart, the charm allows the scary creature to assume a comedic " +
            "form, disarming it",
        traduction_fr: "Utilisé pour vaincre un Boggart, ce charme permet à l'effrayante créature de prendre" +
            " une forme comique et de la désarmer.",
    },

    {
        name: "Scourgify",
        description: "Cleans objects",
        traduction_fr: "Nettoie les objets",
    },

    {
        name: "Sectumsempra",
        description: "Inflicts severe lacerations and haemorrhaging on the target",
        traduction_fr: "Inflige de graves lacérations et hémorragies à la cible",
    },

    {
        name: "Serpensortia",
        description: "Conjures a live snake",
        traduction_fr: "Conjure un serpent vivant",
    },

    {
        name: "Silencio",
        description: "Silences the target",
        traduction_fr: "Réduit la cible au silence",
    },

    {
        name: "Sonorus",
        description: "Amplifies the witch or wizard's voice",
        traduction_fr: "Amplifie la voix du sorcier ou de la sorcière",
    },

    {
        name: "Spongify",
        description: "Softens the target",
        traduction_fr: "Adoucit la cible",
    },

    {
        name: "Stupefy",
        description: "The Stunning spell freezes objects and renders living targets unconscious",
        traduction_fr: "Stupéfaction c'est le sort Stunning (Étourdissement) gèle les objets et rend" +
            " les cibles vivantes inconscientes.",
    },

    {
        name: "Tarantallegra",
        description: "Aimed at the legs, causes uncontrollable dancing movement",
        traduction_fr: "Vise les jambes et provoque des mouvements de danse incontrôlables",
    },

    {
        name: "Unbreakable Vow:",
        description: "A magically binding contract that results in the death of whoever breaks it",
        traduction_fr: "Vœu incassable c'est le contrat magique qui entraîne la mort de celui qui le rompt",
    },

    {
        name: "Wingardium Leviosa",
        description: "Causes an object to levitate; but remember what Hermione said: " +
            "\"It's Wing-gar-dium Levi-o-sa, make the 'gar' nice and long.'",
        traduction_fr: "Fait léviter un objet ; mais souvenez-vous de ce qu'a dit Hermione : " +
            "\"C'est Wing-gar-dium Levi-o-sa, fais en sorte que le 'gar' soit bien long.'",
    },
];
export default mySpellApi;