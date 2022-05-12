var zodiacs = [
  {
    name: "Aries",
    image: "/images/aries.jpg",
    month: "March 21-April 20",
    description:
      "Aries (♈︎) (Greek: Κριός [Kriós]) is the first astrological sign in the zodiac, spanning the first 30 degrees of celestial longitude (0°≤ λ <30°), and originates from the constellation of the same name. Under the tropical zodiac, the Sun transits this sign from approximately March 20 to April 21 each year.[2] This time duration is exactly the first month of the Solar Hijri calendar",
  },
  {
    name: "Taurus",
    image: "/images/taurus.jpg",
    month: "April 20-May 20",
    description:
      "Taurus (♉︎) is the second astrological sign in the modern zodiac. It spans from 30° to 60° of the zodiac. This sign belongs to the Earth element or triplicity, and has a feminine or negative polarity, as well as a fixed modality, quality, or quadruplicity. It is a Venus-ruled sign along with Libra. The Moon is in its exaltation here at exactly 3°. The Sun transits this sign from approximately April 21 until May 20 in western astrology.[2] and from May 15- June 15 in sidereal astrology.",
  },
  {
    name: "Gemini",
    image: "/images/gemini.jpg",
    month: "May 21-June 20",
    description:
      "Gemini (♊︎) JEM-in-eye,[2]) is the third astrological sign in the zodiac. Under the tropical zodiac, the sun transits this sign between about May 21 to June 21. Under the sidereal zodiac, the sun transits this sign from about June 16 to July 16. Gemini is represented by the twins, Castor and Pollux,[4] known as the Dioscuri in Greek mythology. It is a positive, mutable sign. Gemini is associated with the Yang polarity (masculine) in the Yin Yang ancient Chinese concept.",
  },
  {
    name: "Cancer",
    image: "/images/cancer.jpg",
    month: "June 21- July 22",
    description:
      "Cancer (♋︎) () is the fourth astrological sign in the zodiac, originating from the constellation of Cancer. It spans from 90° to 120° celestial longitude. Under the tropical zodiac, the Sun transits this area between approximately June 22 and July 22, and under the sidereal zodiac, the Sun transits this area between approximately July 16 and August 17",
  },
  {
    name: "Leo",
    image: "/images/leo.jpg",
    month: "July 23-August 22",
    description:
      "Leo (♌︎) (Greek: Λέων, Leōn), Latin for Lion, is the fifth sign of the zodiac. It corresponds to the constellation Leo and comes after Cancer and before Virgo. The traditional Western zodiac associates Leo with the period between July 23 and August 22,and the sign spans the 120th to 150th degree of celestial longitude.",
  },
  {
    name: "Virgo",
    image: "/images/virgo.jpg",
    month: "August 22-September 23",
    description:
      "Virgo (♍︎) (Greek: Παρθένος, Parthenos) is the sixth astrological sign in the Zodiac. It spans the 150–180th degree of the zodiac. Under the tropical zodiac, the Sun transits this area, on average, between August 23 and September 22,[2] while the Sun transits the Virgo from approximately September 16 to October 30.[3] Individuals born during these dates, depending on the system of astrology in question, may be called Virgos or Virgoans. They are also represented in newspaper horoscopes with other astrological signs.[5] The symbol of the maiden is based on Astraea. In Greek mythology, she was the last immortal to abandon Earth at the end of the Silver Age when the gods fled to Olympus – hence the sign's association with Earth.",
  },
  {
    name: "Libra",
    image: "/images/libra.jpg",
    month: "September 23- October 22",
    description:
      "Libra (♎︎) is the seventh astrological sign in the zodiac. It spans 180°–210° celestial longitude.[2] The Sun transits this sign on average between September 23 (September equinox) and October 23.[3][4] Under the sidereal zodiac, the Sun currently transits the constellation of Libra from approximately October 31 to November 22.[5] The symbol of the scales is based on the Scales of Justice held by Themis, the Greek personification of divine law and custom.[6] She became the inspiration for modern depictions of Lady Justice. The ruling planet of Libra is Venus.[7][8] Libra is the only zodiac sign that is represented by an object; with the other eleven signs represented by either an animal or mythological character.",
  },
  {
    name: "Scorpio",
    image: "/images/Scorpio.jpg",
    month: "October 23- November 22",
    description:
      "Scorpio (♏︎) is the eighth astrological sign in the zodiac, originating from the constellation of Scorpius. It spans 210°–240° ecliptic longitude. Under the tropical zodiac (most commonly used in Western astrology), the Sun transits this sign on average from October 23 to November 22.[2] Under the sidereal zodiac (most commonly used in Hindu astrology), the Sun is in Scorpio from approximately November 16 to December 15.[3] Depending on which zodiac system one uses, someone born under the influence of Scorpio may be called a Scorpio or a Scorpion.",
  },
  {
    name: "Sagittarius",
    image: "/images/sagittarius.jpg",
    month: "November 22-December 21",
    description:
      "Sagittarius (♐︎) (Greek: Τοξότης Toxótēs, Latin: Sagittarius) is the ninth astrological sign, which is associated with the constellation Sagittarius and spans 240–270th degrees of the zodiac. Under the tropical zodiac, the sun transits this sign between approximately November 22 and December 21 and under the sidereal zodiac from December 18 - January 15. Greek mythology associates Sagittarius with the centaur Chiron, who mentored Achilles, a Greek hero of the Trojan War, in archery.",
  },
  {
    name: "Capricorn",
    image: "/images/capricorn.jpg",
    month: "December 22-January 19",
    description:
      "Capricorn (♑︎) is the tenth astrological sign in the zodiac out of twelve total zodiac signs, originating from the constellation of Capricornus, the horned goat.[2] It spans the 270–300th degree of the zodiac, corresponding to celestial longitude. Under the tropical zodiac, the sun transits this area from about December 21 to January 21 the following year,[3] and under the sidereal zodiac, the sun transits the constellation of Capricorn from approximately January 16 to February 16. In astrology, Capricorn is considered an earth sign, negative sign,[4][5] and one of the four cardinal signs. Capricorn is said to be ruled by the planet Saturn.",
  },
  {
    name: "Aquarius",
    image: "/images/aquarius.jpg",
    month: "January 20-February 18",
    description:
      "Aquarius (♒︎) is the eleventh astrological sign in the zodiac, originating from the constellation Aquarius. Under the tropical zodiac, the Sun is in the Aquarius sign between about January 21 and about February 20,[2][3] while under the sidereal Zodiac, the sun is in Aquarius from approximately February 15 to March 14, depending on the leap year.",
  },
  {
    name: "Pisces",
    image: "/images/pices.jpg",
    month: "February 19-March 20",
    description:
      "Pisces (♓︎) Ancient Greek: Ἰχθύες Ikhthyes) is the twelfth and final astrological sign in the zodiac. It is a negative, mutable sign. It spans 330° to 360° of celestial longitude. Under the tropical zodiac, the sun transits this area between February 19 and March 20.[a] In sidereal astrology, the Sun currently transits the constellation of Pisces from approximately March 12 to April 18.[4][5] In classical interpretations, the symbol of the fish is derived from the ichthyocentaurs, who aided Aphrodite when she was born from the sea.",
  },
];

function getData() {
  var userSearch = document.getElementById("user-search").value.toLowerCase();
  for (var i = 0; i < zodiacs.length; i++) {
    if (userSearch === zodiacs[i].name.toLowerCase()) {
      document.getElementById("name").innerHTML = zodiacs[i].name;
      document.getElementById("date").innerHTML = zodiacs[i].month;
      document.getElementById("img").src = zodiacs[i].image;
      document.getElementById("text-result").innerHTML = zodiacs[i].description;
    }
  }
}
