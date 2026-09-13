const currencyInfo = {
  AED: { country: "United Arab Emirates", currency: "UAE Dirham", symbol: "د.إ", countryCode: "AE" },
  AFN: { country: "Afghanistan", currency: "Afghan Afghani", symbol: "؋", countryCode: "AF" },
  XCD: { country: "Antigua and Barbuda", currency: "East Caribbean Dollar", symbol: "$", countryCode: "AG" },
  ALL: { country: "Albania", currency: "Albanian Lek", symbol: "L", countryCode: "AL" },
  AMD: { country: "Armenia", currency: "Armenian Dram", symbol: "֏", countryCode: "AM" },
  ANG: { country: "Netherlands Antilles", currency: "Netherlands Antillean Guilder", symbol: "ƒ", countryCode: "AN" },
  AOA: { country: "Angola", currency: "Angolan Kwanza", symbol: "Kz", countryCode: "AO" },
  AQD: { country: "Antarctica", currency: "Antarctican Dollar", symbol: "$", countryCode: "AQ" },
  ARS: { country: "Argentina", currency: "Argentine Peso", symbol: "$", countryCode: "AR" },
  AUD: { country: "Australia", currency: "Australian Dollar", symbol: "$", countryCode: "AU" },
  AZN: { country: "Azerbaijan", currency: "Azerbaijani Manat", symbol: "₼", countryCode: "AZ" },
  BAM: { country: "Bosnia and Herzegovina", currency: "Bosnia-Herzegovina Convertible Mark", symbol: "KM", countryCode: "BA" },
  BBD: { country: "Barbados", currency: "Barbadian Dollar", symbol: "$", countryCode: "BB" },
  BDT: { country: "Bangladesh", currency: "Bangladeshi Taka", symbol: "৳", countryCode: "BD" },
  XOF: { country: "Belgium", currency: "West African CFA Franc", symbol: "CFA", countryCode: "BE" },
  BGN: { country: "Bulgaria", currency: "Bulgarian Lev", symbol: "лв", countryCode: "BG" },
  BHD: { country: "Bahrain", currency: "Bahraini Dinar", symbol: ".د.ب", countryCode: "BH" },
  BIF: { country: "Burundi", currency: "Burundian Franc", symbol: "FBu", countryCode: "BI" },
  BMD: { country: "Bermuda", currency: "Bermudian Dollar", symbol: "$", countryCode: "BM" },
  BND: { country: "Brunei", currency: "Brunei Dollar", symbol: "$", countryCode: "BN" },
  BOB: { country: "Bolivia", currency: "Bolivian Boliviano", symbol: "Bs.", countryCode: "BO" },
  BRL: { country: "Brazil", currency: "Brazilian Real", symbol: "R$", countryCode: "BR" },
  BSD: { country: "Bahamas", currency: "Bahamian Dollar", symbol: "$", countryCode: "BS" },
  NOK: { country: "Bouvet Island", currency: "Norwegian Krone", symbol: "kr", countryCode: "BV" },
  BWP: { country: "Botswana", currency: "Botswanan Pula", symbol: "P", countryCode: "BW" },
  BYR: { country: "Belarus", currency: "Belarusian Ruble", symbol: "Br", countryCode: "BY" },
  BZD: { country: "Belize", currency: "Belize Dollar", symbol: "$", countryCode: "BZ" },
  CAD: { country: "Canada", currency: "Canadian Dollar", symbol: "$", countryCode: "CA" },
  CDF: { country: "DR Congo", currency: "Congolese Franc", symbol: "FC", countryCode: "CD" },
  XAF: { country: "Central African Republic", currency: "Central African CFA Franc", symbol: "FCFA", countryCode: "CF" },
  CHF: { country: "Switzerland", currency: "Swiss Franc", symbol: "CHF", countryCode: "CH" },
  CLP: { country: "Chile", currency: "Chilean Peso", symbol: "$", countryCode: "CL" },
  CNY: { country: "China", currency: "Chinese Yuan", symbol: "¥", countryCode: "CN" },
  COP: { country: "Colombia", currency: "Colombian Peso", symbol: "$", countryCode: "CO" },
  CRC: { country: "Costa Rica", currency: "Costa Rican Colón", symbol: "₡", countryCode: "CR" },
  CUP: { country: "Cuba", currency: "Cuban Peso", symbol: "$", countryCode: "CU" },
  CVE: { country: "Cape Verde", currency: "Cape Verdean Escudo", symbol: "$", countryCode: "CV" },
  CYP: { country: "Cyprus", currency: "Cypriot Pound", symbol: "£", countryCode: "CY" },
  CZK: { country: "Czech Republic", currency: "Czech Koruna", symbol: "Kč", countryCode: "CZ" },
  DJF: { country: "Djibouti", currency: "Djiboutian Franc", symbol: "Fdj", countryCode: "DJ" },
  DKK: { country: "Denmark", currency: "Danish Krone", symbol: "kr", countryCode: "DK" },
  DOP: { country: "Dominican Republic", currency: "Dominican Peso", symbol: "RD$", countryCode: "DO" },
  DZD: { country: "Algeria", currency: "Algerian Dinar", symbol: "دج", countryCode: "DZ" },
  ECS: { country: "Ecuador", currency: "Ecuadorian Sucre", symbol: "S/.", countryCode: "EC" },
  EEK: { country: "Estonia", currency: "Estonian Kroon", symbol: "kr", countryCode: "EE" },
  EGP: { country: "Egypt", currency: "Egyptian Pound", symbol: "£", countryCode: "EG" },
  ETB: { country: "Ethiopia", currency: "Ethiopian Birr", symbol: "Br", countryCode: "ET" },
  EUR: { country: "France", currency: "Euro", symbol: "€", countryCode: "FR" },
  FJD: { country: "Fiji", currency: "Fijian Dollar", symbol: "$", countryCode: "FJ" },
  FKP: { country: "Falkland Islands", currency: "Falkland Islands Pound", symbol: "£", countryCode: "FK" },
  GBP: { country: "United Kingdom", currency: "British Pound", symbol: "£", countryCode: "GB" },
  GEL: { country: "Georgia", currency: "Georgian Lari", symbol: "₾", countryCode: "GE" },
  GGP: { country: "Guernsey", currency: "Guernsey Pound", symbol: "£", countryCode: "GG" },
  GHS: { country: "Ghana", currency: "Ghanaian Cedi", symbol: "₵", countryCode: "GH" },
  GIP: { country: "Gibraltar", currency: "Gibraltar Pound", symbol: "£", countryCode: "GI" },
  GMD: { country: "Gambia", currency: "Gambian Dalasi", symbol: "D", countryCode: "GM" },
  GNF: { country: "Guinea", currency: "Guinean Franc", symbol: "FG", countryCode: "GN" },
  GTQ: { country: "Guatemala", currency: "Guatemalan Quetzal", symbol: "Q", countryCode: "GT" },
  GYD: { country: "Guyana", currency: "Guyanaese Dollar", symbol: "$", countryCode: "GY" },
  HKD: { country: "Hong Kong", currency: "Hong Kong Dollar", symbol: "$", countryCode: "HK" },
  HNL: { country: "Honduras", currency: "Honduran Lempira", symbol: "L", countryCode: "HN" },
  HRK: { country: "Croatia", currency: "Croatian Kuna", symbol: "kn", countryCode: "HR" },
  HTG: { country: "Haiti", currency: "Haitian Gourde", symbol: "G", countryCode: "HT" },
  HUF: { country: "Hungary", currency: "Hungarian Forint", symbol: "Ft", countryCode: "HU" },
  IDR: { country: "Indonesia", currency: "Indonesian Rupiah", symbol: "Rp", countryCode: "ID" },
  ILS: { country: "Israel", currency: "Israeli New Shekel", symbol: "₪", countryCode: "IL" },
  INR: { country: "India", currency: "Indian Rupee", symbol: "₹", countryCode: "IN" },
  IQD: { country: "Iraq", currency: "Iraqi Dinar", symbol: "ع.د", countryCode: "IQ" },
  IRR: { country: "Iran", currency: "Iranian Rial", symbol: "﷼", countryCode: "IR" },
  ISK: { country: "Iceland", currency: "Icelandic Króna", symbol: "kr", countryCode: "IS" },
  JMD: { country: "Jamaica", currency: "Jamaican Dollar", symbol: "$", countryCode: "JM" },
  JOD: { country: "Jordan", currency: "Jordanian Dinar", symbol: "د.ا", countryCode: "JO" },
  JPY: { country: "Japan", currency: "Japanese Yen", symbol: "¥", countryCode: "JP" },
  KES: { country: "Kenya", currency: "Kenyan Shilling", symbol: "KSh", countryCode: "KE" },
  KGS: { country: "Kyrgyzstan", currency: "Kyrgystani Som", symbol: "с", countryCode: "KG" },
  KHR: { country: "Cambodia", currency: "Cambodian Riel", symbol: "៛", countryCode: "KH" },
  KMF: { country: "Comoros", currency: "Comorian Franc", symbol: "CF", countryCode: "KM" },
  KPW: { country: "North Korea", currency: "North Korean Won", symbol: "₩", countryCode: "KP" },
  KRW: { country: "South Korea", currency: "South Korean Won", symbol: "₩", countryCode: "KR" },
  KWD: { country: "Kuwait", currency: "Kuwaiti Dinar", symbol: "د.ك", countryCode: "KW" },
  KYD: { country: "Cayman Islands", currency: "Cayman Islands Dollar", symbol: "$", countryCode: "KY" },
  KZT: { country: "Kazakhstan", currency: "Kazakhstani Tenge", symbol: "₸", countryCode: "KZ" },
  LAK: { country: "Laos", currency: "Laotian Kip", symbol: "₭", countryCode: "LA" },
  LBP: { country: "Lebanon", currency: "Lebanese Pound", symbol: "ل.ل", countryCode: "LB" },
  LKR: { country: "Sri Lanka", currency: "Sri Lankan Rupee", symbol: "₨", countryCode: "LK" },
  LRD: { country: "Liberia", currency: "Liberian Dollar", symbol: "$", countryCode: "LR" },
  LSL: { country: "Lesotho", currency: "Lesotho Loti", symbol: "L", countryCode: "LS" },
  LTL: { country: "Lithuania", currency: "Lithuanian Litas", symbol: "Lt", countryCode: "LT" },
  LVL: { country: "Latvia", currency: "Latvian Lats", symbol: "Ls", countryCode: "LV" },
  LYD: { country: "Libya", currency: "Libyan Dinar", symbol: "ل.د", countryCode: "LY" },
  MAD: { country: "Morocco", currency: "Moroccan Dirham", symbol: "د.م.", countryCode: "MA" },
  MDL: { country: "Moldova", currency: "Moldovan Leu", symbol: "L", countryCode: "MD" },
  MGA: { country: "Madagascar", currency: "Malagasy Ariary", symbol: "Ar", countryCode: "MG" },
  MKD: { country: "North Macedonia", currency: "Macedonian Denar", symbol: "ден", countryCode: "MK" },
  MMK: { country: "Myanmar", currency: "Myanmar Kyat", symbol: "K", countryCode: "MM" },
  MNT: { country: "Mongolia", currency: "Mongolian Tugrik", symbol: "₮", countryCode: "MN" },
  MOP: { country: "Macau", currency: "Macanese Pataca", symbol: "MOP$", countryCode: "MO" },
  MRO: { country: "Mauritania", currency: "Mauritanian Ouguiya", symbol: "UM", countryCode: "MR" },
  MTL: { country: "Malta", currency: "Maltese Lira", symbol: "₤", countryCode: "MT" },
  MUR: { country: "Mauritius", currency: "Mauritian Rupee", symbol: "₨", countryCode: "MU" },
  MVR: { country: "Maldives", currency: "Maldivian Rufiyaa", symbol: "Rf", countryCode: "MV" },
  MWK: { country: "Malawi", currency: "Malawian Kwacha", symbol: "MK", countryCode: "MW" },
  MXN: { country: "Mexico", currency: "Mexican Peso", symbol: "$", countryCode: "MX" },
  MYR: { country: "Malaysia", currency: "Malaysian Ringgit", symbol: "RM", countryCode: "MY" },
  MZN: { country: "Mozambique", currency: "Mozambican Metical", symbol: "MT", countryCode: "MZ" },
  NAD: { country: "Namibia", currency: "Namibian Dollar", symbol: "$", countryCode: "NA" },
  XPF: { country: "New Caledonia", currency: "CFP Franc", symbol: "₣", countryCode: "NC" },
  NGN: { country: "Nigeria", currency: "Nigerian Naira", symbol: "₦", countryCode: "NG" },
  NIO: { country: "Nicaragua", currency: "Nicaraguan Córdoba", symbol: "C$", countryCode: "NI" },
  NPR: { country: "Nepal", currency: "Nepalese Rupee", symbol: "₨", countryCode: "NP" },
  NZD: { country: "New Zealand", currency: "New Zealand Dollar", symbol: "$", countryCode: "NZ" },
  OMR: { country: "Oman", currency: "Omani Rial", symbol: "ر.ع.", countryCode: "OM" },
  PAB: { country: "Panama", currency: "Panamanian Balboa", symbol: "B/.", countryCode: "PA" },
  PEN: { country: "Peru", currency: "Peruvian Sol", symbol: "S/", countryCode: "PE" },
  PGK: { country: "Papua New Guinea", currency: "Papua New Guinean Kina", symbol: "K", countryCode: "PG" },
  PHP: { country: "Philippines", currency: "Philippine Peso", symbol: "₱", countryCode: "PH" },
  PKR: { country: "Pakistan", currency: "Pakistani Rupee", symbol: "₨", countryCode: "PK" },
  PLN: { country: "Poland", currency: "Polish Złoty", symbol: "zł", countryCode: "PL" },
  PYG: { country: "Paraguay", currency: "Paraguayan Guarani", symbol: "₲", countryCode: "PY" },
  QAR: { country: "Qatar", currency: "Qatari Rial", symbol: "ر.ق", countryCode: "QA" },
  RON: { country: "Romania", currency: "Romanian Leu", symbol: "lei", countryCode: "RO" },
  RSD: { country: "Serbia", currency: "Serbian Dinar", symbol: "дин.", countryCode: "RS" },
  RUB: { country: "Russia", currency: "Russian Ruble", symbol: "₽", countryCode: "RU" },
  RWF: { country: "Rwanda", currency: "Rwandan Franc", symbol: "FRw", countryCode: "RW" },
  SAR: { country: "Saudi Arabia", currency: "Saudi Riyal", symbol: "﷼", countryCode: "SA" },
  SBD: { country: "Solomon Islands", currency: "Solomon Islands Dollar", symbol: "$", countryCode: "SB" },
  SCR: { country: "Seychelles", currency: "Seychellois Rupee", symbol: "₨", countryCode: "SC" },
  SDG: { country: "Sudan", currency: "Sudanese Pound", symbol: "£", countryCode: "SD" },
  SEK: { country: "Sweden", currency: "Swedish Krona", symbol: "kr", countryCode: "SE" },
  SGD: { country: "Singapore", currency: "Singapore Dollar", symbol: "$", countryCode: "SG" },
  SKK: { country: "Slovakia", currency: "Slovak Koruna", symbol: "Sk", countryCode: "SK" },
  SLL: { country: "Sierra Leone", currency: "Sierra Leonean Leone", symbol: "Le", countryCode: "SL" },
  SOS: { country: "Somalia", currency: "Somali Shilling", symbol: "S", countryCode: "SO" },
  SRD: { country: "Suriname", currency: "Surinamese Dollar", symbol: "$", countryCode: "SR" },
  STD: { country: "São Tomé and Príncipe", currency: "São Tomé & Príncipe Dobra", symbol: "Db", countryCode: "ST" },
  SVC: { country: "El Salvador", currency: "Salvadoran Colón", symbol: "$", countryCode: "SV" },
  SYP: { country: "Syria", currency: "Syrian Pound", symbol: "£", countryCode: "SY" },
  SZL: { country: "Eswatini", currency: "Swazi Lilangeni", symbol: "L", countryCode: "SZ" },
  THB: { country: "Thailand", currency: "Thai Baht", symbol: "฿", countryCode: "TH" },
  TJS: { country: "Tajikistan", currency: "Tajikistani Somoni", symbol: "SM", countryCode: "TJ" },
  TMT: { country: "Turkmenistan", currency: "Turkmenistani Manat", symbol: "m", countryCode: "TM" },
  TND: { country: "Tunisia", currency: "Tunisian Dinar", symbol: "د.ت", countryCode: "TN" },
  TOP: { country: "Tonga", currency: "Tongan Paʻanga", symbol: "T$", countryCode: "TO" },
  TRY: { country: "Turkey", currency: "Turkish Lira", symbol: "₺", countryCode: "TR" },
  TTD: { country: "Trinidad and Tobago", currency: "Trinidad & Tobago Dollar", symbol: "$", countryCode: "TT" },
  TWD: { country: "Taiwan", currency: "New Taiwan Dollar", symbol: "NT$", countryCode: "TW" },
  TZS: { country: "Tanzania", currency: "Tanzanian Shilling", symbol: "TSh", countryCode: "TZ" },
  UAH: { country: "Ukraine", currency: "Ukrainian Hryvnia", symbol: "₴", countryCode: "UA" },
  UGX: { country: "Uganda", currency: "Ugandan Shilling", symbol: "USh", countryCode: "UG" },
  USD: { country: "United States", currency: "US Dollar", symbol: "$", countryCode: "US" },
  UYU: { country: "Uruguay", currency: "Uruguayan Peso", symbol: "$", countryCode: "UY" },
  UZS: { country: "Uzbekistan", currency: "Uzbekistani Som", symbol: "so'm", countryCode: "UZ" },
  VEF: { country: "Venezuela", currency: "Venezuelan Bolívar", symbol: "Bs", countryCode: "VE" },
  VND: { country: "Vietnam", currency: "Vietnamese Dong", symbol: "₫", countryCode: "VN" },
  VUV: { country: "Vanuatu", currency: "Vanuatu Vatu", symbol: "VT", countryCode: "VU" },
  YER: { country: "Yemen", currency: "Yemeni Rial", symbol: "﷼", countryCode: "YE" },
  ZAR: { country: "South Africa", currency: "South African Rand", symbol: "R", countryCode: "ZA" },
  ZMK: { country: "Zambia", currency: "Zambian Kwacha", symbol: "ZK", countryCode: "ZM" },
  ZWD: { country: "Zimbabwe", currency: "Zimbabwean Dollar", symbol: "Z$", countryCode: "ZW" },
};

const BASE_URL=
        "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".currency-box select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const convertedInput = document.getElementById("converted");
const msg = document.querySelector(".msg");
const countriesGrid = document.getElementById("countriesGrid");

for (let select of dropdowns) {
  for (let currCode in currencyInfo) {
    let newOption = document.createElement("option");
    newOption.innerText = `${currencyInfo[currCode].country} (${currCode})`;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
    try {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if (amtVal === "" || amtVal < 1) {
            amtVal = 1;
            amount.value = "1";
        }
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

        const response = await fetch(URL);
        const data = await response.json();

        const rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

        const finalAmount = amtVal * rate;
        convertedInput.value = finalAmount.toFixed(2);
        const from = currencyInfo[fromCurr.value];
        const to = currencyInfo[toCurr.value];

        msg.innerHTML = `<strong>${from.symbol}${amtVal}</strong> ${from.currency}
=<strong>${to.symbol}${finalAmount.toFixed(2)}</strong> ${to.currency}`;

        const now = new Date();
        const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};
        document.getElementById("lastUpdated").innerText =`🕒 Last Updated: ${now.toLocaleString()}`;
    } catch (err) {
        console.error(err);
        msg.innerText = "Unable to fetch exchange rates.";
    }
};

const updateFlag = (element) => {
    const currCode = element.value;
    const img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${currencyInfo[currCode].countryCode}/flat/64.png`;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let currency in currencyInfo) {

    countriesGrid.innerHTML += `
<div class="country-card">
    <img src="https://flagsapi.com/${currencyInfo[currency].countryCode}/flat/64.png">
    <h3>${currencyInfo[currency].country}</h3>
    <h3>${currency}</h3>
</div>
`;
}


