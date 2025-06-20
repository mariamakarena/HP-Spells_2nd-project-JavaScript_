const data = [
  {
    id: "c76a2922-ba4c-4278-baab-44defb631236",
    name: "Aberto",
    description: "Opens locked doors",
  },
  {
    id: "06485500-d023-4799-93fd-77f2c3341aa3",
    name: "Accio",
    description: "Summons objects",
  },
  {
    id: "acbc0ae1-12e1-4813-b51e-09d22de40475",
    name: "Aguamenti",
    description: "Summons water",
  },
  {
    id: "c9d2f389-a419-4f7e-8d3d-254959638019",
    name: "Alohomora",
    description: "Unlocks objects",
  },
  {
    id: "018429a5-15d5-41af-bf8f-98a966733d77",
    name: "Anapneo",
    description: "Clears someone's airway",
  },
  {
    id: "c828685c-52d2-466d-bcc6-fbcd8376cfb5",
    name: "Aparecium",
    description: "Reveals secret written messages",
  },
  {
    id: "7fdd393c-2608-4ef3-9fd0-f691ad6f8b88",
    name: "Apparate",
    description:
      "A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and appear at another location (disapparate is the opposite)",
  },
  {
    id: "73886d47-2808-4861-ae40-956f4cb56272",
    name: "Ascendio",
    description: "Propells someone into the air",
  },
  {
    id: "9a6b6854-8858-4b21-b761-12526a154597",
    name: "Avada Kedavra",
    description:
      "Also known as The Killing Curse, the most evil spell in the Wizarding World; one of three Unforgivable Curses; Harry Potter is the only known witch or wizard to survive it",
  },
  {
    id: "b6f20bba-c0db-4ad2-8ac6-2a375a596287",
    name: "Avis",
    description: "Conjures a small flock of birds",
  },
  {
    id: "48edfe4d-ddfc-49ac-8065-bd7e73c73778",
    name: "Bat",
    description: "Bogey Hex - Turns the target's boogers into bats",
  },
  {
    id: "6bd8d5c1-9375-4b70-8d6e-ad019176c7a2",
    name: "Bombardo",
    description: "Creates an explosion",
  },
  {
    id: "8fc19d10-3130-4b85-95c1-f2a51ba5ee3c",
    name: "Brackium Emendo",
    description: "Heals broken bones",
  },
  {
    id: "f08c17fa-7bf9-49bf-9fba-a7806815bc80",
    name: "Capacious Extremis",
    description:
      "Known as the Extension Charm, it's a complicated spell that can greatly expand or extend the capacity of an object or space without affecting it externally",
  },
  {
    id: "55dec867-ac07-4975-94c7-090f6fd25c86",
    name: "Confundo",
    description:
      "Known as the Confundus Charm, it causes confusion of the target",
  },
  {
    id: "816d9fee-b78f-47b4-be46-b48626c013f9",
    name: "Conjunctivitis Curse",
    description: "Affects the eyes and sight of a target",
  },
  {
    id: "58b8727a-6c0c-469c-b91d-8ac0cc0dd2d8",
    name: "Crinus Muto",
    description: "Changes hair color and style",
  },
  {
    id: "f1e91049-e866-4f6f-9d87-d6fd366aecbf",
    name: "Crucio",
    description:
      "One of three Unforgivable Curses, it causes unbearable pain in the target",
  },
  {
    id: "7324e645-8f41-4c83-a367-0d10a72906ff",
    name: "Diffindo",
    description: "Used to precisely cut an object",
  },
  {
    id: "638072b9-b7ac-405d-914b-d9293c5f9d25",
    name: "Disillusionment Charm",
    description:
      "Causes the target to take on the appearance of its surroundings",
  },
  {
    id: "b7643e32-ef9c-41b8-83f2-03f6b5015e04",
    name: "Disapparate",
    description:
      "A non-verbal transportation spell that allows a witch or wizard to instantly travel on the spot and leave for another location (apparate is the opposite)",
  },
  {
    id: "20476c31-4f27-49ac-876f-a4c4028f1b5b",
    name: "Engorgio",
    description: "Causes rapid growth in the targeted object",
  },
  {
    id: "ecb9a882-d6d7-495e-9958-a1a06902bb65",
    name: "Episkey",
    description: "Heals minor injuries",
  },
  {
    id: "317ff981-ad65-421e-92fb-5f6647d95232",
    name: "Expecto patronum",
    description:
      "The Patronus Charm is a powerful projection of hope and happiness that drives away Dementors; a corpeal Patronus takes the the respective animal form of the caster, while a non-corpeal appears as a wisp of light; at 13, Harry Potter was the youngest known witch or wizard to prouduce a corpeal Patronus",
  },
  {
    id: "60149246-91cf-44a5-8885-78a7acc4bf90",
    name: "Erecto",
    description: "Allows a witch or wizard to build a structure, like a tent",
  },
  {
    id: "6d8138c3-0773-4c23-b0bf-aab0e5c6fd95",
    name: "Evanesco",
    description: "Vanishes objects",
  },
  {
    id: "678474e6-fb30-4bf0-a18c-228f6b36592d",
    name: "Expelliarmus",
    description: "Forces an opponent to drop whatever's in their possession",
  },
  {
    id: "31b38b6c-4775-4e20-815d-dbf302433de6",
    name: "Ferula",
    description: "A healing charm that conjures wraps and bandages for wounds",
  },
  {
    id: "37d262c9-28ab-408f-9576-acf54ce50203",
    name: "Fidelius Charm",
    description:
      'A complex charm that conceals a secret into the soul of a chosen "Secret Keeper". If a location is the subject of concealment, it becomes undetectable to others',
  },
  {
    id: "9121b557-0ebf-4b60-a119-9d1c5ff05dee",
    name: "Fiendfyre Curse",
    description: "Conjures destructive, enormous enchanted flames",
  },
  {
    id: "de23025f-5e6a-4ec3-b827-5c526a922a89",
    name: "Finite Incantatem",
    description:
      "A general counter-spell that's used to reverse or counter already cast charms",
  },
  {
    id: "d536cbe5-bc0f-49e5-b063-e02c231a3988",
    name: "Furnunculus Curse",
    description: "A jinx that causes a breakout of boils or pimples",
  },
  {
    id: "7915b07a-d26e-4057-9083-e457643e57a6",
    name: "Geminio",
    description: "Duplicates objects",
  },
  {
    id: "2a942514-7a19-4f0e-9353-171c573abcba",
    name: "Glisseo",
    description: "Transforms a staircase into a slide",
  },
  {
    id: "a42028b6-67f5-463b-b759-452103533227",
    name: "Homenum Revelio",
    description: "Reveals the presence of another person",
  },
  {
    id: "552cd4ee-2c67-48fd-ae20-a83773262a8a",
    name: "Homonculus Charm",
    description:
      "Detects anyone's true identity and location on a piece of parchment; used to create the Marauder's Map",
  },
  {
    id: "2dfca7d2-ec9b-4150-b3f3-fd972a5fd1bc",
    name: "Immobulus",
    description: "Immobilises living targets",
  },
  {
    id: "a49300cc-ddbf-4ff4-b8c2-e8bddbbe4118",
    name: "Impedimenta",
    description: "A temporary jinx that slows the movement of the target",
  },
  {
    id: "e5c22d31-26f1-4c88-a586-d9c09cb88c1f",
    name: "Incarcerous",
    description: "Conjures ropes",
  },
  {
    id: "a53ad5be-00ee-4254-b3c0-4cec60b0c034",
    name: "Imperio",
    description:
      "One of the three Unforgivable Curses, it places the target under the complete control of the caster",
  },
  {
    id: "a3b34bf6-1ff7-4fe3-81ee-e617150f5da9",
    name: "Impervius",
    description: "Makes an object waterproof",
  },
  {
    id: "de048df0-b227-4376-a29b-90fe6878d950",
    name: "Incendio",
    description: "Conjures flames",
  },
  {
    id: "c4a4520b-b80d-49e8-9e5a-3ca0a7f376ca",
    name: "Langlock",
    description:
      "Causes the target's tongue to stick to the roof of their mouth",
  },
  {
    id: "0da7cb76-dabc-46ff-b8e9-c23a4f03caea",
    name: "Legilimens",
    description: "Invading or navigating another's mind",
  },
  {
    id: "723dd9c9-ee62-495b-9071-cddd16087b86",
    name: "Levicorpus",
    description: "Levitates the target by their ankle",
  },
  {
    id: "8add16ef-b4b1-4e2b-a91e-80aa194da438",
    name: "Locomotor Mortis",
    description: "The Leg-Locker curse bounds the target's legs",
  },
  {
    id: "3b7a10ce-3339-4a36-9493-292c8775e47b",
    name: "Lumos",
    description: "Illuminates the caster's wand",
  },
  {
    id: "832edaca-dbff-4a57-80c7-1d8a827c8416",
    name: "Morsmordre",
    description: "Conjures and projects Lord Voldemort's Dark Mark",
  },
  {
    id: "7f4b43e0-3356-43f9-9299-15ec37cfaf76",
    name: "Mucus Ad Nauseam",
    description: "Inflicts an extreme runny nose or cold",
  },
  {
    id: "f86bbf7e-94ea-4c22-89fb-809af8214a85",
    name: "Muffliato",
    description:
      "Creates a buzzing sound in the target's ears to prevent eavesdropping",
  },
  {
    id: "66be613d-532c-46d8-a3e9-f5a2d9cccf0c",
    name: "Nox",
    description: "Reverses the lumos charm, extinguishing a wand's light",
  },
  {
    id: "9e3c0217-652a-4763-82f8-5519026a1ea6",
    name: "Obliviate",
    description: "Erases the target's memory",
  },
  {
    id: "0af49753-c8ae-4748-87a7-b7cfc47d33a0",
    name: "Obscuro",
    description: "Conjures a blindfold",
  },
  {
    id: "67e838c1-4623-414e-9a91-12125631dbad",
    name: "Oculus Reparo",
    description: "Repairs eyeglasses",
  },
  {
    id: "12251f32-af9d-408f-a652-3a4cc9602bc0",
    name: "Oppugno",
    description: "Directs an object or person to attack a victim",
  },
  {
    id: "da9eab7b-2c7c-42de-861c-fb254bd9423c",
    name: "Petrificus Totalus",
    description: "Temporarily freezes or petrifies the body of the target",
  },
  {
    id: "3e5fd245-2ecf-40c4-937d-b2c2f9eee003",
    name: "Periculum",
    description: "Conjures flares/red sparks",
  },
  {
    id: "ad5685f8-6e05-49b1-a41c-d72786001d72",
    name: "Piertotum Locomotor",
    description:
      "Incantation used to bring to life inanimate objects and artifacts",
  },
  {
    id: "0a267162-0594-4372-a3d5-89382926f495",
    name: "Protean Charm",
    description: "Links objects together for better communication",
  },
  {
    id: "8808aa30-39f4-400c-a0e5-1dcbad657931",
    name: "Protego",
    description:
      "Casts an invisible shield around the caster, protecting against spells and objects (except for The Killing Curse)",
  },
  {
    id: "56742dd7-3c93-4085-bea3-971e88d81dc2",
    name: "Reducto",
    description: "Reduces the target to pieces",
  },
  {
    id: "2f177949-1f80-4663-9840-da8197411f2a",
    name: "Reducio",
    description: "Shrinks an enlarged object to its regular size",
  },
  {
    id: "358ecb3c-e684-492c-b706-47cbd1eae02e",
    name: "Renneverate",
    description: "Awakens or revives the target",
  },
  {
    id: "1b7a8a4c-8d4f-4001-8155-e68f1198ef72",
    name: "Reparifors",
    description: "Heals magical ailments like poisoning or paralysis",
  },
  {
    id: "799f31a3-799e-411f-b67c-a64e48a5f503",
    name: "Reparo",
    description: "Fixes broken objects",
  },
  {
    id: "32dbeb89-0978-4037-ab1b-413d62be02c3",
    name: "Rictusempra",
    description: "A charm that disarms an opponent by tickling them",
  },
  {
    id: "c9dc8bed-5834-4001-8fa1-852690d027f2",
    name: "Riddikulus",
    description:
      "Used to defeat a Boggart, the charm allows the scary creature to assume a comedic form, disarming it",
  },
  {
    id: "14c47e18-cbf3-4aec-afd3-5473d18ee7c0",
    name: "Scourgify",
    description: "Cleans objects",
  },
  {
    id: "3617c34c-e650-4e3b-a13a-651d18471225",
    name: "Sectumsempra",
    description: "Inflicts severe lacerations and haemorrhaging on the target",
  },
  {
    id: "53747fb8-bdab-466e-90fb-ca75c66f3dd9",
    name: "Serpensortia",
    description: "Conjures a live snake",
  },
  {
    id: "43d3d53e-7ab9-4145-bda7-d96be99c5d31",
    name: "Silencio",
    description: "Silences the target",
  },
  {
    id: "d5f71164-fa43-4566-b537-8852859bde01",
    name: "Sonorus",
    description: "Amplifies the witch or wizard's voice",
  },
  {
    id: "9ec3258c-bc2f-4427-8440-ebea450a44aa",
    name: "Spongify",
    description: "Softens the target",
  },
  {
    id: "37110a48-07e3-4fd7-9aae-ac1145161e1e",
    name: "Stupefy",
    description:
      "The Stunning spell freezes objects and renders living targets unconscious",
  },
  {
    id: "daeb6f2a-5aff-43e1-964a-a06da7f66a3c",
    name: "Tarantallegra",
    description: "Aimed at the legs, causes uncontrollable dancing movement",
  },
  {
    id: "4eaa6532-3ef2-428d-922f-101aee3d66ed",
    name: "Unbreakable Vow",
    description:
      "A magically binding contract that results in the death of whoever breaks it",
  },
  {
    id: "e23728b2-f6fd-4c70-a1d2-ce602940d873",
    name: "Wingardium Leviosa",
    description:
      "Causes an object to levitate; but remember what Hermione said: \"It's Wing-gar-dium Levi-o-sa, make the 'gar' nice and long.'\"",
  },
];
