// ─── Bharath Auto Trainer — Car Knowledge Base ────────────────────────────────
// Each car has full brochure-extracted data. The app injects only the relevant
// car(s) data into the AI prompt based on the user's question.

const CAR_DATABASE = {

  // ── ALTO K10 ──────────────────────────────────────────────────────────────
  "alto k10": {
    name: "Alto K10",
    keywords: ["alto", "alto k10", "k10"],
    bodyType: "Hatchback",
    tagline: "Take Off With Fresh Looks",
    specs: {
      engine: "998cc K10C Dual Jet, Dual VVT (3-cylinder, 12-valve, Aluminium)",
      power: "68.5 PS @ 5600 rpm",
      torque: "91.1 Nm @ 3400 rpm",
      cngPower: "56.6 PS @ 5300 rpm (CNG mode)",
      cngTorque: "82.1 Nm @ 3400 rpm (CNG mode)",
      transmission: "5-speed MT / AGS (Auto Gear Shift)",
      fuelEfficiency: {
        petrolMT: "24.39 km/l",
        petrolAGS: "24.90 km/l",
        cng: "33.40 km/kg"
      },
      fuelTank: "27L petrol",
      dimensions: {
        length: "3530 mm",
        width: "1490 mm",
        height: "1520 mm",
        wheelbase: "2380 mm",
        groundClearance: "160 mm"
      },
      tyres: "145/80 R13",
      seating: "5",
      weight: "728–745 kg (petrol), 818–835 kg (CNG)",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: ["STD MT", "LXi MT", "LXi CNG", "VXi(O) MT", "VXi(O) CNG", "VXi+(O) MT", "VXi+(O) AGS"],
    colors: [
      "Metallic Silky Silver", "Metallic Sizzling Orange", "Pearl Arctic White",
      "Solid Fire Red", "Metallic Granite Grey", "Pearl Bluish Black",
      "Metallic Speedy Blue"
    ],
    exterior: {
      headlamps: "Youthful Contemporary Headlamps (Halogen)",
      tailLamps: "Rear Combination Lamps with Honeycomb Design",
      wheels: "145/80 R13 Tyres with Honeycomb Wheel Covers",
      grille: "Honeycomb Grille",
      antenna: "Shark Fin Antenna (not on all variants)",
      bodyColour: "Body Coloured Bumpers on VXi+(O)"
    },
    interior: {
      dashboard: "Contemporary Dashboard with Digital Speed Display",
      infotainment: "SmartPlay Studio with Smartphone Navigation (VXi+(O) only)",
      speakers: "4 Speakers (VXi+(O))",
      steeringControls: "Steering Mounted Audio and Voice Control (VXi+(O))",
      instrumentCluster: "Speedometer with Digital Speed Display",
      airConditioner: "Manual AC"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard on ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program (ESP) — VXi+(O) AGS only",
      hillHoldAssist: "Not available",
      reverseParking: "Reverse Parking Sensors — all variants",
      seatBeltReminder: "All occupants",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner & force limiter",
      immobiliser: "Engine Immobiliser — all variants",
      suzukiTECT: "Suzuki TECT Body"
    },
    featuresByVariant: {
      "STD MT": {
        infotainment: "None",
        speakers: "None",
        keylessEntry: "No",
        centralLocking: "No",
        powerWindows: "No",
        steeringControls: "No",
        alloyWheels: "No",
        esp: "No",
        rearDefogger: "No"
      },
      "LXi MT / LXi CNG": {
        infotainment: "None",
        speakers: "None",
        keylessEntry: "No",
        centralLocking: "Yes",
        powerWindows: "Front only",
        steeringControls: "No",
        alloyWheels: "No",
        esp: "No",
        rearDefogger: "No"
      },
      "VXi(O) MT / VXi(O) CNG": {
        infotainment: "None",
        speakers: "None",
        keylessEntry: "Yes",
        centralLocking: "Yes",
        powerWindows: "Front + Rear",
        steeringControls: "No",
        alloyWheels: "Wheel Covers",
        esp: "No",
        rearDefogger: "No"
      },
      "VXi+(O) MT / VXi+(O) AGS": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers",
        keylessEntry: "Yes",
        centralLocking: "Yes",
        powerWindows: "Front + Rear",
        steeringControls: "Audio + Voice Control",
        alloyWheels: "Alloy-Style Wheel Covers",
        esp: "ESP (AGS variant only)",
        rearDefogger: "No"
      }
    },
    suzukiConnect: "Not available",
    keyHighlights: [
      "6 Airbags standard across all variants — best-in-class safety",
      "K10C Dual Jet Dual VVT engine — fuel efficient & peppy",
      "AGS (Auto Gear Shift) available — automatic convenience without extra cost",
      "CNG option available from LXi onwards",
      "Honeycomb design theme — grille, tail lamps, wheel covers",
      "Most affordable Arena car — entry-level hatchback",
      "Ideal for: first-time buyers, city commuters, low-budget customers"
    ]
  },

  // ── S-PRESSO ──────────────────────────────────────────────────────────────
  "s-presso": {
    name: "S-Presso",
    keywords: ["s-presso", "spresso", "s presso", "mini suv"],
    bodyType: "Mini SUV (Tall Hatchback)",
    tagline: "Mini SUV with Big Attitude",
    specs: {
      engine: "998cc K10C Dual Jet, Dual VVT",
      power: "68.5 PS @ 5600 rpm",
      torque: "91.1 Nm @ 3400 rpm",
      cngPower: "56.6 PS @ 5300 rpm (CNG mode)",
      cngTorque: "82.1 Nm @ 3400 rpm (CNG mode)",
      transmission: "5-speed MT / AGS",
      fuelEfficiency: {
        petrolMT: "24.12 km/l",
        petrolAGS: "25.30 km/l",
        cng: "32.73 km/kg"
      },
      fuelTank: "27L",
      dimensions: {
        length: "3565 mm",
        width: "1520 mm",
        height: "1565 mm",
        wheelbase: "2380 mm",
        groundClearance: "180 mm"
      },
      tyres: "155/80 R14",
      seating: "5",
      bootSpace: "240L",
      weight: "748–762 kg (petrol), 828–842 kg (CNG)",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: ["Std MT", "LXi MT", "LXi CNG", "VXi(O) MT", "VXi(O) CNG", "VXi+(O) MT", "VXi+(O) AGS"],
    colors: [
      "Metallic Silky Silver", "Pearl Bluish Black", "Metallic Sizzling Orange",
      "Solid Fire Red", "Pearl Arctic White", "Metallic Granite Grey",
      "Speedy Blue", "Caffeine Brown"
    ],
    exterior: {
      headlamps: "Halogen Headlamps with DRL (projector on higher variants)",
      tailLamps: "LED Style Rear Combination Lamps",
      wheels: "Stylish 14-inch Alloy Wheels (VXi+(O))",
      grille: "Bold Front Grille with Chrome Accents",
      bodyColour: "Body Coloured Bumpers & ORVMs (VXi+(O))",
      orvm: "Body Coloured ORVMs (VXi+(O))",
      antenna: "Shark Fin Antenna"
    },
    interior: {
      dashboard: "Sporty Dashboard with SUV-inspired design",
      infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay (VXi+(O))",
      speakers: "4 Speakers (VXi+(O))",
      steeringControls: "Steering Mounted Audio + Voice Control (VXi+(O))",
      instrumentCluster: "Digital Instrument Cluster with Gear Shift Indicator",
      airConditioner: "Manual AC"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "ESP — AGS variants only",
      hillHoldAssist: "Not available",
      reverseParking: "Reverse Parking Sensors — all variants",
      seatBeltReminder: "Front seat belt reminder",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner & force limiter",
      immobiliser: "Engine Immobiliser — all variants"
    },
    featuresByVariant: {
      "Std MT": {
        infotainment: "None", speakers: "None", keylessEntry: "No",
        powerWindows: "No", alloyWheels: "No", esp: "No"
      },
      "LXi MT / LXi CNG": {
        infotainment: "None", speakers: "None", keylessEntry: "No",
        powerWindows: "Front only", alloyWheels: "No", esp: "No"
      },
      "VXi(O) MT / VXi(O) CNG": {
        infotainment: "None", speakers: "None", keylessEntry: "Yes",
        powerWindows: "Front + Rear", alloyWheels: "Steel with covers", esp: "No"
      },
      "VXi+(O) MT / VXi+(O) AGS": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers",
        steeringControls: "Audio + Voice Control",
        keylessEntry: "Yes",
        powerWindows: "Front + Rear",
        alloyWheels: "Alloy Wheels",
        bodyColouredORVM: "Yes",
        bodyColouredBumpers: "Yes",
        esp: "ESP on AGS only"
      }
    },
    suzukiConnect: "Not available",
    keyHighlights: [
      "Mini SUV design — 180mm high ground clearance, tall stance",
      "6 Airbags standard across ALL variants",
      "AGS available — city-friendly automatic driving",
      "CNG option from LXi onwards — great running cost savings",
      "Sporty SUV-inspired interiors with upright seating",
      "More ground clearance than Alto K10 (180mm vs 160mm)",
      "Ideal for: young buyers, SUV look on a budget, city + light off-road"
    ]
  },

  // ── CELERIO ──────────────────────────────────────────────────────────────
  "celerio": {
    name: "Celerio",
    keywords: ["celerio"],
    bodyType: "Hatchback",
    tagline: "Style That Never Stops",
    specs: {
      engine: "998cc K10C Dual Jet, Dual VVT (3-cylinder)",
      power: "68.5 PS @ 5600 rpm / CNG mode: 56.6 PS @ 5300 rpm",
      torque: "91.1 Nm @ 3400 rpm / CNG mode: 82.1 Nm",
      transmission: "5-speed MT / AGS",
      fuelEfficiency: {
        petrolMT_LXi: "25.24 km/l",
        petrolMT_ZXiPlus: "26.00 km/l (claimed India's most fuel-efficient car)",
        petrolAGS: "26.68 km/l (ZXi+ AGS)",
        cng: "34.43 km/kg (best CNG mileage in segment)"
      },
      fuelTank: "32L petrol / 60L water-equivalent CNG",
      dimensions: {
        length: "3695 mm",
        width: "1655 mm",
        height: "1555 mm",
        wheelbase: "2435 mm"
      },
      tyres: {
        steel: "165/70 R14",
        alloy: "175/60 R15 (ZXi+ variants)"
      },
      bootSpace: "292L",
      seating: "5",
      weight: "810–835 kg (petrol), 915 kg (CNG)",
      brakes: { front: "Ventilated Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: ["LXi MT", "VXi MT", "VXi CNG", "ZXi MT", "ZXi+ MT", "VXi AGS", "ZXi AGS", "ZXi+ AGS"],
    colors: [
      "Metallic Speedy Blue", "Metallic Silky Silver", "Solid Fire Red",
      "Metallic Glistening Grey", "Pearl Caffeine Brown", "Pearl Arctic White",
      "Pearl Bluish Black"
    ],
    exterior: {
      headlamps: "Animated Sweeping Headlamps (Halogen)",
      tailLamps: "Droplet-Styled Tail Lamps",
      wheels: "Urbane Black R15 (38.02cm) Alloy Wheels — ZXi+ variants only",
      grille: "Radiant Grille with Sharp Chrome Accents",
      orvm: "Electrically Foldable ORVM with Turn Indicators (ZXi+)",
      design: "3D Organic Sculpted Design"
    },
    interior: {
      dashboard: "Contemporary Dashboard — Stereoscopic Instrument Cluster",
      infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay (ZXi onwards)",
      speakers: "4 Speakers (ZXi and above)",
      steeringControls: "Steering Mounted Audio + Voice Control (ZXi and above)",
      instrumentCluster: "Stereoscopic Instrument Cluster with Tachometer (ZXi+)",
      illumination: "Reddish Amber instrument illumination",
      airConditioner: "Manual AC (Dial Type)",
      seats: "60:40 Split Rear Seats (ZXi+ only)",
      pushStart: "Engine Push Start/Stop with Smart Key (ZXi+)",
      idleStartStop: "Idle Start Stop — Petrol variants"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants — 1st in segment",
      abs: "ABS with EBD — all variants",
      esp: "ESP — ZXi and above only",
      hillHoldAssist: "Hill Hold Assist — AGS variants only — 1st in segment",
      reverseParking: "Reverse Parking Sensors — all variants",
      seatBeltReminder: "Front & Rear seat belt reminder",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner & force limiter",
      immobiliser: "Engine Immobiliser",
      heartect: "Suzuki HEARTECT Platform",
      rearWiper: "Rear Window Wiper & Washer (ZXi and above)",
      rearDefogger: "Rear Defogger (ZXi and above)"
    },
    featuresByVariant: {
      "LXi MT": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel R14",
        esp: "No", hillHold: "No", foldableORVM: "No", pushStart: "No",
        keylessEntry: "No", powerWindows: "Front only", rearWiper: "No"
      },
      "VXi MT / VXi CNG / VXi AGS": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel R14",
        esp: "No", hillHold: "AGS only", foldableORVM: "No",
        keylessEntry: "Yes", powerWindows: "Front + Rear",
        gearIndicator: "AGS variants get Gear Position Indicator"
      },
      "ZXi MT / ZXi AGS": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers", steeringControls: "Audio + Voice",
        alloyWheels: "Steel R14 (centre cap only)", esp: "Yes", hillHold: "AGS only",
        foldableORVM: "No", pushStart: "No", keylessEntry: "Yes",
        powerWindows: "Front + Rear", fogLamps: "Front Fog Lamps",
        rearWiper: "Yes", rearDefogger: "Yes"
      },
      "ZXi+ MT / ZXi+ AGS": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers", steeringControls: "Audio + Voice",
        alloyWheels: "Urbane Black R15 Alloy Wheels",
        esp: "Yes", hillHold: "AGS only",
        foldableORVM: "Electrically Foldable with Turn Indicators",
        pushStart: "Engine Push Start/Stop with Smart Key",
        keylessEntry: "Yes (Smart Key)", powerWindows: "Front + Rear",
        fogLamps: "Front Fog Lamps", rearWiper: "Yes", rearDefogger: "Yes",
        splitSeats: "60:40 Split Rear Seats", tiltSteering: "Yes",
        driverHeightAdjust: "Yes"
      }
    },
    suzukiConnect: "Not available",
    keyHighlights: [
      "India's most fuel-efficient car — 26.68 km/l (ZXi+ AGS)",
      "Best CNG mileage — 34.43 km/kg",
      "6 Airbags standard ALL variants — 1st in segment",
      "Hill Hold Assist — 1st in segment (AGS variants)",
      "292L boot space — largest in this segment",
      "Idle Start Stop — saves fuel in traffic",
      "Ideal for: fuel-conscious buyers, city driving, CNG users"
    ]
  },

  // ── WAGON R ──────────────────────────────────────────────────────────────
  "wagonr": {
    name: "WagonR",
    keywords: ["wagon r", "wagonr", "wagon-r"],
    bodyType: "Tall Boy Hatchback",
    tagline: "For Style That Never Stops",
    specs: {
      engine1L: "998cc K10C Dual Jet, Dual VVT",
      engine1_2L: "1197cc K12N Dual Jet, Dual VVT",
      power1L: "68.5 PS @ 5600 rpm",
      power1_2L: "90.9 PS",
      torque1L: "91.1 Nm @ 3400 rpm",
      torque1_2L: "113 Nm",
      cngPower: "56.6 PS @ 5300 rpm",
      transmission: "5-speed MT / AGS",
      fuelEfficiency: {
        petrolMT_1L: "24.35 km/l",
        petrolMT_1_2L: "24.43 km/l",
        petrolAGS: "25.19 km/l",
        cng: "33.47 km/kg"
      },
      fuelTank: "32L petrol / 60L water-equivalent CNG",
      dimensions: {
        length: "3655 mm",
        width: "1620 mm",
        height: "1675 mm",
        wheelbase: "2500 mm",
        groundClearance: "175 mm"
      },
      tyres: "175/60 R15 (alloy variants) / 165/70 R14 (steel variants)",
      bootSpace: "335L",
      seating: "5",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: [
      "LXi 1.0L MT", "LXi 1.0L CNG", "VXi 1.0L MT", "VXi 1.0L CNG",
      "VXi 1.0L AGS", "ZXi 1.0L AGS", "ZXi+ 1.0L AGS",
      "ZXi 1.2L MT", "ZXi+ 1.2L MT", "ZXi+ 1.2L AGS"
    ],
    colors: [
      "Pearl Arctic White", "Metallic Silky Silver", "Metallic Granite Grey",
      "Pearl Bluish Black", "Solid Fire Red", "Metallic Glistening Grey",
      "Speedy Blue — ZXi+ 1.2L only"
    ],
    exterior: {
      headlamps: "Halogen Projector Headlamps (lower variants) / LED with DRL (ZXi+)",
      tailLamps: "LED Tail Lamps (ZXi+)",
      wheels: "Alloy Wheels (ZXi+ variants) / Steel with wheel covers",
      orvm: "Retractable ORVMs (ZXi+ 1.2L)",
      design: "Tall Boy design for maximum cabin space"
    },
    interior: {
      dashboard: "Modern Dashboard — White Instrument Cluster (ZXi+ 1.2L)",
      infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay (ZXi+ onwards)",
      speakers: "4 Speakers (ZXi+)",
      steeringControls: "Steering Mounted Audio Controls (ZXi+)",
      instrumentCluster: "White Backlit Instrument Cluster (ZXi+ 1.2L)",
      airConditioner: "Manual AC",
      rearWiper: "Rear Wiper & Washer (ZXi+ 1.2L)"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "ESP — ZXi+ only",
      reverseParking: "Reverse Parking Sensors — all variants",
      seatBeltReminder: "All occupants",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner & force limiter",
      immobiliser: "Engine Immobiliser",
      heartect: "Suzuki HEARTECT Platform"
    },
    featuresByVariant: {
      "LXi 1.0L MT / LXi 1.0L CNG": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel",
        esp: "No", keylessEntry: "No", powerWindows: "Front only"
      },
      "VXi 1.0L MT / VXi 1.0L CNG / VXi 1.0L AGS": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel with covers",
        esp: "No", keylessEntry: "Yes", powerWindows: "Front + Rear",
        gearIndicator: "AGS: Gear Position Indicator"
      },
      "ZXi 1.0L AGS / ZXi 1.2L MT": {
        infotainment: "SmartPlay Studio 17.78cm", speakers: "4",
        alloyWheels: "Alloy (ZXi 1.2L)", esp: "No",
        keylessEntry: "Yes", powerWindows: "Front + Rear"
      },
      "ZXi+ 1.0L AGS / ZXi+ 1.2L MT / ZXi+ 1.2L AGS": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers",
        steeringControls: "Audio Controls",
        alloyWheels: "Alloy Wheels",
        instrumentCluster: "White Backlit Cluster",
        retractableORVM: "Yes (1.2L only)",
        rearWiper: "Yes (1.2L only)",
        esp: "Yes",
        keylessEntry: "Yes",
        powerWindows: "Front + Rear"
      }
    },
    suzukiConnect: "Not available",
    keyHighlights: [
      "Tallboy design — maximum headroom & interior space in class",
      "335L boot space — most in this segment",
      "Two engine options — 1.0L (budget) and 1.2L (more power)",
      "6 Airbags standard ALL variants",
      "CNG available from LXi onwards",
      "AGS automatic option available",
      "2500mm wheelbase — excellent rear legroom",
      "Ideal for: families, tall passengers, maximum space on budget"
    ]
  },

  // ── SWIFT ────────────────────────────────────────────────────────────────
  "swift": {
    name: "Swift",
    keywords: ["swift", "epic swift", "swifting"],
    bodyType: "Premium Hatchback",
    tagline: "The Epic Swift — Time To Go #Swifting",
    specs: {
      engine: "1197cc Z12E Dual Jet, Dual VVT (next-gen engine)",
      power: "81.58 PS @ 5700 rpm",
      torque: "111.7 Nm @ 4300 rpm",
      cngPower: "69.75 PS @ 5700 rpm (CNG mode)",
      cngTorque: "101.8 Nm @ 2900 rpm",
      transmission: "5-speed MT / 5-speed AMT (Auto Gear Shift)",
      fuelEfficiency: {
        petrolMT: "24.80 km/l",
        petrolAMT: "25.75 km/l",
        cng: "32.85 km/kg"
      },
      fuelTank: "37L petrol / 60L water-equivalent CNG",
      dimensions: {
        length: "3860 mm",
        width: "1735 mm",
        height: "1520 mm",
        wheelbase: "2450 mm",
        groundClearance: "163 mm"
      },
      tyres: {
        steel: "185/65 R15",
        alloy: "185/65 R15 (alloy variants)"
      },
      bootSpace: "265L",
      seating: "5",
      weight: "895–935 kg (petrol)",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: [
      "LXi MT", "VXi MT", "VXi AMT", "VXi(O) MT", "VXi(O) AMT",
      "ZXi MT", "ZXi AMT", "ZXi+ MT", "ZXi+ AMT",
      "VXi CNG", "VXi(O) CNG", "ZXi CNG"
    ],
    colors: [
      "Pearl Midnight Black", "Pearl Arctic White", "Metallic Silky Silver",
      "Metallic Granite Grey", "Solid Fire Red", "Metallic Speedy Blue",
      "Metallic Sizzling Orange", "Pearl Bluish Black"
    ],
    exterior: {
      headlamps: "Halogen (LXi/VXi) / LED Bi-LED Projector with LED DRL (ZXi onwards)",
      tailLamps: "LED Combination Tail Lamps",
      wheels: "Painted Alloy Wheels (ZXi) / Precision Cut Alloy Wheels (ZXi+)",
      fogLamps: "LED Fog Lamps (ZXi+ only)",
      grille: "Bold Front Grille with Chrome Accents",
      dualTone: "Dual Tone colour options available",
      antenna: "Shark Fin Antenna"
    },
    interior: {
      dashboard: "Premium Dashboard with Auto Climate Control (ZXi+)",
      infotainment: {
        VXi: "SmartPlay Pro 17.78cm — Android Auto/Apple CarPlay",
        ZXiPlus: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay"
      },
      speakers: "4 Speakers (VXi+) + 2 Tweeters (ZXi+)",
      sound: "ARKAMYS Surround Sound (ZXi+)",
      steeringControls: "Steering Mounted Audio + Call Controls (VXi+)",
      cruiseControl: "Cruise Control (ZXi+)",
      wirelessCharger: "Wireless Charger (ZXi onwards)",
      pushStart: "Engine Push Start/Stop with Smart Key (VXi(O)+)",
      suzukiConnect: "Suzuki Connect (VXi(O)+)",
      rearACVents: "Rear AC Vents (ZXi onwards)",
      splitSeats: "60:40 Split Rear Seats (ZXi onwards)",
      autoAC: "Auto Climate Control (ZXi onwards)",
      rearCamera: "Reverse Camera (ZXi onwards)",
      airConditioner: "Manual AC (LXi/VXi) / Auto Climate Control (ZXi+)"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program — all variants",
      hillHoldAssist: "Hill Hold Assist — all variants",
      reverseParking: "Reverse Parking Sensors — all variants",
      tpms: "Tyre Pressure Monitoring System (ZXi+)",
      seatBeltReminder: "All occupants",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner",
      immobiliser: "Engine Immobiliser",
      heartect: "Suzuki HEARTECT Body",
      rearWiper: "Rear Wiper (all variants)"
    },
    featuresByVariant: {
      "LXi MT": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel R15",
        espHillHold: "Yes", keylessEntry: "No", pushStart: "No",
        wirelessCharger: "No", rearCamera: "No", autoAC: "No", sunroof: "No"
      },
      "VXi MT / VXi AMT": {
        infotainment: "SmartPlay Pro 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers", alloyWheels: "Steel R15",
        espHillHold: "Yes", keylessEntry: "Yes", pushStart: "No",
        wirelessCharger: "No", rearCamera: "No", autoAC: "No", sunroof: "No",
        steeringControls: "Audio + Call"
      },
      "VXi(O) MT / VXi(O) AMT": {
        infotainment: "SmartPlay Pro 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers", alloyWheels: "Steel R15",
        espHillHold: "Yes", keylessEntry: "Yes",
        pushStart: "Engine Push Start/Stop with Smart Key",
        suzukiConnect: "Yes", wirelessCharger: "No",
        rearCamera: "No", autoAC: "No", sunroof: "No"
      },
      "ZXi MT / ZXi AMT / ZXi CNG": {
        infotainment: "SmartPlay Pro 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters", alloyWheels: "Painted Alloy R15",
        headlamps: "LED Bi-LED Projector with LED DRL",
        espHillHold: "Yes", keylessEntry: "Yes",
        pushStart: "Engine Push Start/Stop",
        wirelessCharger: "Yes", rearCamera: "Reverse Camera",
        autoAC: "Auto Climate Control", rearACVents: "Yes",
        splitSeats: "60:40 Split", sunroof: "No",
        tweeters: "2 Tweeters", rearUSB: "USB Type C rear"
      },
      "ZXi+ MT / ZXi+ AMT": {
        infotainment: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters — ARKAMYS Surround Sound",
        alloyWheels: "Precision Cut Alloy R15",
        headlamps: "LED Bi-LED Projector with LED DRL",
        fogLamps: "LED Fog Lamps",
        espHillHold: "Yes", keylessEntry: "Yes",
        pushStart: "Engine Push Start/Stop",
        wirelessCharger: "Yes", rearCamera: "Reverse Camera",
        autoAC: "Auto Climate Control", rearACVents: "Yes",
        splitSeats: "60:40 Split", sunroof: "No",
        cruiseControl: "Yes", tpms: "Yes",
        paddleShifters: "Yes (AMT)"
      }
    },
    suzukiConnect: "Available from VXi(O) onwards — Emergency alerts, Stolen vehicle tracking, Geo-fence, Seatbelt alert, Trip data",
    keyHighlights: [
      "Next-gen Z12E engine — more power (81.58 PS) vs old Swift",
      "ESP + Hill Hold standard on ALL variants",
      "ARKAMYS Surround Sound system (ZXi+)",
      "Suzuki Connect available from VXi(O)",
      "LED headlamps from ZXi onwards",
      "Best hatchback for sporty, fun-to-drive experience",
      "CNG available up to ZXi",
      "Ideal for: sporty buyers, young professionals, highway drivers"
    ]
  },

  // ── DZIRE ────────────────────────────────────────────────────────────────
  "dzire": {
    name: "Dzire",
    keywords: ["dzire", "new dzire", "dazzling dzire"],
    bodyType: "Compact Sedan",
    tagline: "The Dazzling-New Dzire — India's Most Fuel-Efficient Sedan",
    specs: {
      engine: "1197cc Z12E Dual Jet, Dual VVT",
      power: "81.58 PS @ 5700 rpm (Petrol) / 69.75 PS @ 5700 rpm (CNG)",
      torque: "111.7 Nm @ 4300 rpm (Petrol) / 101.8 Nm @ 2900 rpm (CNG)",
      transmission: "5-speed MT / 5-speed AMT",
      fuelEfficiency: {
        petrolMT: "24.79 km/l — India's Most Fuel-Efficient Sedan (MT)",
        petrolAMT: "25.71 km/l — India's Most Fuel-Efficient Sedan (AMT)",
        cng: "33.73 km/kg — Best in Segment CNG Mileage"
      },
      fuelTank: "37L petrol / 55L water-equivalent CNG",
      dimensions: {
        length: "3995 mm",
        width: "1735 mm",
        height: "1525 mm",
        wheelbase: "2450 mm",
        groundClearance: "163 mm",
        turningRadius: "4.8 m"
      },
      tyres: {
        steel: "165/80 R14",
        alloy: "185/65 R15"
      },
      bootSpace: "382L (largest in compact sedan segment)",
      seating: "5",
      weight: "920–960 kg (petrol), 1020–1025 kg (CNG)",
      grossVehicleWeight: "1375 kg petrol / 1435 kg CNG",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II",
      idleStartStop: "Yes (Petrol only)"
    },
    variants: ["LXi MT", "VXi MT", "VXi AMT", "VXi CNG", "ZXi MT", "ZXi AMT", "ZXi CNG", "ZXi+ MT", "ZXi+ AMT"],
    colors: [
      "Gallant Red (NEW)", "Alluring Blue (NEW)", "Nutmeg Brown (NEW)",
      "Bluish Black", "Arctic White", "Magma Grey", "Splendid Silver"
    ],
    exterior: {
      headlamps: "Halogen (LXi/VXi) / LED Crystal Vision Headlamps (ZXi+)",
      tailLamps: "3D Trinity LED Rear Lamps Signature — ALL variants",
      drl: "Sleek Line LED DRLs (ZXi onwards)",
      wheels: "Steel with Full Wheel Covers (VXi) / Painted Alloy (ZXi) / Precision Cut Alloy (ZXi+)",
      fogLamps: "Halogen Fog Lamps (VXi) / LED Fog Lamps (ZXi+)",
      beltLineGarnish: "Black (LXi/VXi) / Chrome (ZXi/ZXi+)",
      spoiler: "Aero Boot Lip Spoiler — ALL variants",
      antenna: "Shark Fin Antenna — ALL variants",
      chrome: "Chrome Finish Front Grille + Chrome Trunk Lid Garnish (VXi+)",
      bodyColoured: "Body Coloured Door Handles (VXi+)",
      turnIndicators: "Side Turn Indicators on ORVMs (VXi+)"
    },
    interior: {
      dashboard: "Dual-Tone Sophisticated Interiors (Black & Beige) — ALL variants",
      infotainment: {
        VXi: "SmartPlay Pro 17.78cm — Wireless Android Auto/Apple CarPlay",
        ZXi_ZXiPlus: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay"
      },
      speakers: "4 Speakers (VXi+) / 4 Speakers + 2 Tweeters (ZXi+)",
      sound: "ARKAMYS Surround Sound (ZXi+)",
      steeringControls: "Steering Mounted Audio + Calling Controls (VXi+)",
      voiceAssistant: "On-board Voice Assistant via 'Hi Suzuki' (VXi+)",
      ota: "Over-The-Air (OTA) Updates (VXi+)",
      remoteApp: "Remote Control App for Infotainment (VXi+)",
      wirelessCharger: "Wireless Charger (ZXi onwards)",
      pushStart: "Engine Push Start/Stop with Smart Key (ZXi onwards)",
      autoHeadlamps: "Auto Headlamps with Follow Me Home (ZXi onwards)",
      sunroof: "Electric Sunroof (ZXi+ only)",
      cruiseControl: "Cruise Control (ZXi+ only)",
      rearACVents: "Rear AC Vent (VXi onwards)",
      autoAC: "Auto Climate Control (ZXi onwards)",
      rearReadingLamps: "Rear Reading Lamps (ZXi+ only)",
      electricallyFoldableORVM: "Electrically Foldable ORVM — Auto Fold (ZXi+ only)",
      heightAdjustSeat: "Height Adjustable Driver Seat (VXi+)",
      gearPosition: "Gear Position Indicator — AMT only"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program — ALL variants",
      hillHoldAssist: "Hill Hold Assist — ALL variants",
      reverseParking: "Reverse Parking Sensors — all variants",
      tpms: "Tyre Pressure Monitoring System (ZXi onwards)",
      reverseCamera: "Reverse Parking Camera (ZXi onwards)",
      camera360: "360 View Camera HD (ZXi+ only)",
      shockSensor: "Anti-Theft System with Shock Sensor (ZXi+ only)",
      seatBeltReminder: "All occupants",
      isofix: "ISOFix Child Seat Anchorages — all variants",
      preTensioner: "Front Seat Belt Pre-Tensioner & Force Limiter — all variants",
      immobiliser: "Engine Immobiliser",
      heartect: "Suzuki HEARTECT Body — all variants",
      dayNightMirror: "Day/Night Adjustable IRVM (VXi+) — auto (ZXi+)",
      autoLocking: "Speed-Sensitive Auto Door Locking — ALL variants"
    },
    featuresByVariant: {
      "LXi MT": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel R14",
        espHillHold: "Yes (both)", keylessEntry: "No", pushStart: "No",
        wirelessCharger: "No", rearCamera: "No", sunroof: "No",
        rearACVent: "No", autoAC: "No", tpms: "No"
      },
      "VXi MT / VXi AMT / VXi CNG": {
        infotainment: "SmartPlay Pro 17.78cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers", alloyWheels: "Steel with full wheel covers",
        espHillHold: "Yes (both)", keylessEntry: "Yes",
        pushStart: "No", wirelessCharger: "No", rearCamera: "No",
        sunroof: "No", rearACVent: "Yes", autoAC: "Manual AC",
        tpms: "No", heightAdjustSeat: "Yes", foldableORVM: "Yes"
      },
      "ZXi MT / ZXi AMT / ZXi CNG": {
        infotainment: "SmartPlay Pro 17.78cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters", alloyWheels: "Painted Alloy R15",
        headlamps: "LED Crystal Vision", drl: "Sleek Line LED DRLs",
        espHillHold: "Yes (both)", keylessEntry: "Yes",
        pushStart: "Engine Push Start/Stop with Smart Key",
        wirelessCharger: "Yes", rearCamera: "Reverse Camera (HD)",
        sunroof: "No", rearACVent: "Yes", autoAC: "Auto Climate Control",
        tpms: "Yes", suzukiConnect: "Yes", foldableORVM: "Yes",
        fogLamps: "Halogen Fog Lamps"
      },
      "ZXi+ MT / ZXi+ AMT": {
        infotainment: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters — ARKAMYS Surround Sound",
        alloyWheels: "Precision Cut Alloy R15",
        headlamps: "LED Crystal Vision with Sleek Line DRL",
        espHillHold: "Yes (both)", keylessEntry: "Yes (Smart Key)",
        pushStart: "Engine Push Start/Stop",
        wirelessCharger: "Yes", rearCamera: "360 HD View Camera (ZXi+ exclusive)",
        sunroof: "Electric Sunroof",
        rearACVent: "Yes", autoAC: "Auto Climate Control",
        tpms: "Yes", suzukiConnect: "Yes",
        foldableORVM: "Electrically Foldable — Auto Fold on locking",
        fogLamps: "LED Fog Lamps",
        cruiseControl: "Yes", rearReadingLamps: "Yes",
        shockSensor: "Anti-Theft Shock Sensor",
        arkamys: "ARKAMYS Surround Sound System",
        leatherSteering: "Leather Wrapped Steering — Urbane Satin Accent"
      }
    },
    suzukiConnect: {
      availability: "ZXi and ZXi+ variants",
      features: [
        "Emergency Alerts", "Breakdown Notification",
        "Stolen Vehicle Notification & Tracking", "Tow-away & Tracking",
        "Geo-fence", "Time fence", "Seatbelt Alert", "AC Idling Alert",
        "Trip Start & End", "Low Fuel Alert", "Dashboard View",
        "Hazard Light On/Off", "Vehicle Location Sharing",
        "Battery Health", "Smartwatch Connectivity",
        "Alexa Skill Connectivity"
      ]
    },
    keyHighlights: [
      "India's Most Fuel-Efficient Sedan — 24.79 km/l MT / 25.71 km/l AMT",
      "Best CNG sedan mileage — 33.73 km/kg",
      "382L boot space — largest in compact sedan segment",
      "ESP + Hill Hold standard on ALL variants",
      "Electric Sunroof on ZXi+",
      "360° HD View Camera on ZXi+",
      "ARKAMYS Surround Sound on ZXi+",
      "3D Trinity LED Rear Lamp Signature — ALL variants",
      "Ideal for: sedan buyers, families, Ola/Uber fleet, highway driving"
    ]
  },

  // ── BREZZA ───────────────────────────────────────────────────────────────
  "brezza": {
    name: "Brezza",
    keywords: ["brezza", "new brezza"],
    bodyType: "Compact SUV",
    tagline: "More Technology To Play — Powerful Exterior",
    specs: {
      engine: "1462cc K15C Dual Jet, Dual VVT (Smart Hybrid*)",
      power: "103.1 PS",
      torque: "139 Nm",
      cngPower: "92.45 PS (CNG mode)",
      cngTorque: "121.5 Nm",
      smartHybrid: "Progressive Smart Hybrid Technology — NOT available on LXi/VXi MT",
      transmission: "5-speed MT / 6-speed AT (Torque Converter)",
      fuelEfficiency: {
        petrolMT_LXi_VXi: "17.80 km/l",
        petrolMT_ZXi_ZXiPlus: "19.89 km/l",
        petrolAT: "19.80 km/l",
        cng: "25.51 km/kg"
      },
      fuelTank: "48L petrol / 60L water-equivalent CNG",
      dimensions: {
        length: "3995 mm",
        width: "1790 mm",
        height: "1685 mm",
        wheelbase: "2500 mm",
        groundClearance: "198 mm"
      },
      tyres: "215/60 R16",
      bootSpace: "328L",
      seating: "5",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: [
      "LXi MT", "LXi CNG MT", "VXi MT", "VXi AT", "VXi CNG MT",
      "ZXi MT", "ZXi AT", "ZXi CNG MT", "ZXi+ MT", "ZXi+ AT"
    ],
    colors: [
      "Sizzling Red with Bluish Black Roof (Dual Tone)",
      "Brave Khakhi with Arctic White Roof (Dual Tone)",
      "Splendid Silver with Bluish Black Roof (Dual Tone)",
      "Brave Khakhi", "Splendid Silver", "Sizzling Red",
      "Exuberant Blue", "Pearl Arctic White", "Magma Grey", "Bluish Black"
    ],
    exterior: {
      headlamps: "Bi-Halogen Projector (LXi/VXi) / Dual LED Projector with LED DRL (ZXi+)",
      tailLamps: "LED Rear Combination Lamp — ALL variants",
      drl: "Floating LED Day Time Running Lamps (ZXi onwards)",
      wheels: "Steel with Wheel Cover (LXi/VXi) / Painted Alloy (ZXi) / Precision Cut Alloy (ZXi+)",
      fogLamps: "LED Front Fog Lamps (ZXi+ only)",
      skidPlate: "Black Skid Plate Fr+Rr (LXi/VXi) / Silver Skid Plate (ZXi/ZXi+)",
      roofRail: "Roof Rail (ZXi onwards)",
      dualTone: "Dual Tone Exterior (ZXi/ZXi+ only)",
      antenna: "Shark Fin Antenna — ALL variants",
      wheelArch: "Wheel Arch Cladding — ALL variants",
      chrome: "Chrome Accentuated Front Grille — ALL variants",
      flatBottomSteering: "Flat Bottom Steering Wheel — ALL variants"
    },
    interior: {
      dashboard: "Dual Tone (Mono on LXi/VXi) / Ambient Lighting (ZXi+)",
      infotainment: {
        VXi: "SmartPlay Studio 17.78cm — Android Auto/Apple CarPlay",
        ZXi: "SmartPlay Pro 17.78cm — Wireless Android Auto/Apple CarPlay",
        ZXiPlus: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay"
      },
      speakers: "4 Speakers (VXi+) / 4 Speakers + 2 Tweeters (ZXi+)",
      sound: "ARKAMYS Surround Sound with Surround Sense (ZXi+)",
      steeringControls: "Steering Mounted Audio (VXi+)",
      voiceAssistant: "On-board Voice Assistant — Hi Suzuki (ZXi onwards)",
      ambientLighting: "Interior Ambient Lights (ZXi+ only)",
      wirelessCharger: "Wireless Charging Dock (ZXi+ only)",
      pushStart: "Engine Push Start/Stop with Smart Key (ZXi onwards)",
      sunroof: "Electric Sunroof (ZXi+ only)",
      headUpDisplay: "Head Up Display with Turn-By-Turn Navigation (ZXi+ only)",
      cruiseControl: "Cruise Control (ZXi+ only)",
      rearACVents: "Rear AC Vents with Fast Charging USB (Type A & C) — ALL variants",
      autoAC: "Auto Climate Control (ZXi onwards)",
      cooledGloveBox: "Cooled Glove Box (ZXi+ only)",
      frontArmrest: "Front Center Armrest Sliding with Storage (ZXi+ only)",
      rearArmrest: "Rear Center Armrest with Cup Holder — ALL variants",
      paddleShifters: "6-Speed AT with Paddle Shifters (AT variants)",
      telescopicSteering: "Tilt + Telescopic Steering (ZXi onwards)",
      leatherSteering: "Leather Wrapped Steering Wheel (ZXi+ only)",
      ota: "OTA Update via Smartphone (ZXi onwards)"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program — ALL variants",
      hillHoldAssist: "Hill Hold Assist — ALL variants",
      reverseParking: "Reverse Parking Sensor with Infographic Display — ALL variants",
      headUpDisplay: "Head Up Display (ZXi+ only)",
      camera360: "360 View Camera (ZXi+ only)",
      rearCamera: "Rear View Camera (ZXi/ZXi+)",
      tpms: "Tyre Pressure Monitoring System (ZXi+)",
      seatBeltReminder: "All Occupants — ALL variants",
      isofix: "ISOFix Child Seat Restraint — ALL variants",
      preTensioner: "Front Seat Belt Pre-Tensioner & Force Limiter — ALL variants",
      impactUnlock: "Impact Sensing Door Unlock — ALL variants",
      highSpeedAlert: "High Speed Warning Alert — ALL variants",
      dayNightMirror: "Manual IRVM (LXi/VXi/ZXi) / Auto Day-Night IRVM (ZXi+)",
      rearWiper: "Rear Wiper & Washer (ZXi onwards)",
      rearDefogger: "Rear Defogger (VXi onwards)",
      suzukiTECT: "Suzuki TECT Body"
    },
    featuresByVariant: {
      "LXi MT / LXi CNG MT": {
        infotainment: "None", speakers: "None",
        alloyWheels: "Steel with Wheel Cover",
        headlamps: "Bi-Halogen Projector",
        smartHybrid: "NOT available",
        espHillHold: "Yes (both)", keylessEntry: "Yes",
        pushStart: "No", wirelessCharger: "No",
        sunroof: "No", headUpDisplay: "No",
        camera360: "No", rearCamera: "No",
        autoAC: "Manual AC", rearDefogger: "No",
        interiorColor: "Mono Tone"
      },
      "VXi MT / VXi AT / VXi CNG MT": {
        infotainment: "SmartPlay Studio 17.78cm — Android Auto, Apple CarPlay",
        speakers: "4 Speakers",
        alloyWheels: "Steel with Wheel Cover",
        headlamps: "Bi-Halogen Projector",
        smartHybrid: "VXi MT — NOT available; VXi AT — Available",
        espHillHold: "Yes (both)", keylessEntry: "Yes",
        pushStart: "No", wirelessCharger: "No",
        sunroof: "No", headUpDisplay: "No",
        camera360: "No", rearCamera: "No",
        autoAC: "Manual AC", rearDefogger: "Yes",
        interiorColor: "Mono Tone"
      },
      "ZXi MT / ZXi AT / ZXi CNG MT": {
        infotainment: "SmartPlay Pro 17.78cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters", arkamys: "No",
        alloyWheels: "Painted Alloy Wheels",
        headlamps: "Dual LED Projector with Floating LED DRL",
        smartHybrid: "Available",
        espHillHold: "Yes (both)", keylessEntry: "Yes",
        pushStart: "Engine Push Start/Stop with Smart Key",
        wirelessCharger: "No", sunroof: "No", headUpDisplay: "No",
        camera360: "No", rearCamera: "Rear View Camera",
        autoAC: "Auto Climate Control",
        suzukiConnect: "Yes", rearWiper: "Yes",
        interiorColor: "Dual Tone",
        telescopicSteering: "Yes", roofRail: "Yes",
        dualTone: "Not available (solid colours only)"
      },
      "ZXi+ MT / ZXi+ AT": {
        infotainment: "SmartPlay Pro+ 22.86cm — Wireless Android Auto/Apple CarPlay",
        speakers: "4 Speakers + 2 Tweeters — ARKAMYS Surround Sense",
        alloyWheels: "Precision Cut Alloy Wheels",
        headlamps: "Dual LED Projector with Floating LED DRL",
        fogLamps: "LED Front Fog Lamps",
        smartHybrid: "Available",
        espHillHold: "Yes (both)", keylessEntry: "Yes (Smart Key)",
        pushStart: "Engine Push Start/Stop",
        wirelessCharger: "Wireless Charging Dock",
        sunroof: "Electric Sunroof",
        headUpDisplay: "Head Up Display with Turn-By-Turn Navigation",
        camera360: "360 View Camera",
        rearCamera: "Rear View Camera", autoAC: "Auto Climate Control",
        suzukiConnect: "Yes", rearWiper: "Yes",
        ambientLighting: "Interior Ambient Lights",
        cooledGloveBox: "Yes", frontArmrest: "Sliding Front Center Armrest",
        cruiseControl: "Yes", tpms: "Yes",
        leatherSteering: "Leather Wrapped Flat Bottom Steering",
        autoFoldORVM: "Electrically Foldable — Auto Fold on Locking",
        interiorColor: "Dual Tone",
        dualTone: "Available (dual tone colours)",
        paddleShifters: "Yes (AT variant)"
      }
    },
    suzukiConnect: {
      availability: "ZXi and ZXi+ variants",
      features: ["Emergency Alerts", "Stolen Vehicle Tracking", "Geo-fence", "Seatbelt Alerts", "Trip Data", "Dashboard View", "Hazard Light On/Off", "Location Sharing"]
    },
    keyHighlights: [
      "Smart Hybrid Technology (not on LXi/VXi MT) — ISG for fuel efficiency",
      "Head Up Display — exclusive in segment on ZXi+",
      "360 View Camera on ZXi+",
      "Electric Sunroof on ZXi+",
      "Dual LED Projector Headlamps on ZXi/ZXi+",
      "198mm ground clearance — true SUV stance",
      "6-Speed AT with Paddle Shifters",
      "ARKAMYS Surround Sense on ZXi+",
      "Dual Tone colours available for ZXi/ZXi+",
      "9 colour options including 3 dual-tone combinations",
      "Ideal for: compact SUV lovers, young families, style-conscious buyers"
    ]
  },

  // ── ERTIGA ───────────────────────────────────────────────────────────────
  "ertiga": {
    name: "Ertiga",
    keywords: ["ertiga"],
    bodyType: "MPV (7-Seater)",
    tagline: "Family MPV with Smart Hybrid",
    specs: {
      engine: "1462cc K15C Dual Jet, Dual VVT Smart Hybrid",
      power: "103.06 PS @ 6000 rpm",
      torque: "137 Nm @ 4400 rpm",
      cngPower: "92.45 PS (CNG mode)",
      cngTorque: "121.5 Nm",
      transmission: "5-speed MT / 6-speed AT",
      fuelEfficiency: {
        petrolMT: "20.51 km/l",
        petrolAT: "20.30 km/l",
        cng: "26.11 km/kg"
      },
      fuelTank: "45L petrol",
      dimensions: {
        length: "4395 mm",
        width: "1735 mm",
        height: "1690 mm",
        wheelbase: "2740 mm",
        groundClearance: "185 mm"
      },
      tyres: "185/65 R15",
      seating: "7 (3 rows)",
      bootSpace: "209L (with all 3 rows up)",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: ["LXi MT", "VXi MT", "VXi CNG", "ZXi MT", "ZXi CNG", "ZXi+ MT", "ZXi+ AT"],
    colors: [
      "Pearl Arctic White", "Metallic Silky Silver", "Metallic Granite Grey",
      "Pearl Bluish Black", "Solid Auburn Red", "Metallic Premium Silver"
    ],
    exterior: {
      headlamps: "Halogen (LXi/VXi) / Projector Headlamps (ZXi+)",
      tailLamps: "LED Style Rear Combination Lamps",
      wheels: "Steel (LXi/VXi) / Alloy Wheels (ZXi/ZXi+)",
      orvm: "Body Coloured ORVMs (VXi+)",
      chrome: "Chrome Front Grille (VXi+)"
    },
    interior: {
      infotainment: {
        LXi_VXi: "None",
        ZXi: "SmartPlay Pro Touchscreen — Android Auto, Apple CarPlay",
        ZXiPlus: "SmartPlay Pro+ — Android Auto, Apple CarPlay"
      },
      speakers: "4 Speakers (ZXi+) / ARKAMYS Surround Sound (ZXi+)",
      steeringControls: "Steering Mounted Audio (ZXi+)",
      voiceAssistant: "Hi Suzuki Voice Assistant (ZXi+)",
      pushStart: "Engine Push Start/Stop (ZXi+)",
      autoAC: "Auto Climate Control (ZXi+)",
      rearCamera: "Reverse Camera (ZXi+)",
      suzukiConnect: "Yes (ZXi+)",
      rearACVents: "Rear AC Vents with USB Charging (VXi+)",
      tftMID: "TFT Colour Multi-Information Display (ZXi+)",
      paddleShifters: "Paddle Shifters (AT variant)",
      cruiseControl: "Cruise Control (ZXi+)",
      tpms: "TPMS (ZXi+)",
      dualToneInteriors: "Plush Dual-Tone Interiors (ZXi+)"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program — all variants",
      hillHoldAssist: "Hill Hold Assist — all variants",
      reverseParking: "Reverse Parking Sensors — all variants",
      seatBeltReminder: "All occupants",
      isofix: "Available",
      preTensioner: "Front seat belt pre-tensioner"
    },
    featuresByVariant: {
      "LXi MT": {
        infotainment: "None", speakers: "None", alloyWheels: "Steel",
        pushStart: "No", autoAC: "Manual AC", rearCamera: "No"
      },
      "VXi MT / VXi CNG": {
        infotainment: "None", speakers: "None",
        alloyWheels: "Steel", rearACVents: "Yes with USB",
        bodyColouredORVM: "Yes", pushStart: "No",
        autoAC: "Manual AC", rearCamera: "No"
      },
      "ZXi MT / ZXi CNG": {
        infotainment: "SmartPlay Pro — Android Auto, Apple CarPlay",
        speakers: "4 Speakers", alloyWheels: "Alloy",
        pushStart: "Engine Push Start/Stop", autoAC: "Auto Climate Control",
        rearCamera: "Reverse Camera", suzukiConnect: "Yes",
        keylessEntry: "Yes"
      },
      "ZXi+ MT / ZXi+ AT": {
        infotainment: "SmartPlay Pro+ — Android Auto, Apple CarPlay",
        speakers: "4 Speakers — ARKAMYS Surround Sound",
        alloyWheels: "Alloy", pushStart: "Yes",
        autoAC: "Auto Climate Control", rearCamera: "Reverse Camera",
        suzukiConnect: "Yes", cruiseControl: "Yes",
        tpms: "Yes", paddleShifters: "Yes (AT)",
        tftMID: "TFT Colour MID", dualToneInteriors: "Yes"
      }
    },
    suzukiConnect: "Available on ZXi+ variants",
    keyHighlights: [
      "7-Seater MPV — most space in Arena lineup",
      "Smart Hybrid Technology — better fuel efficiency for an MPV",
      "6 Airbags standard ALL variants",
      "2740mm wheelbase — exceptional 3-row legroom",
      "6-Speed AT available with Paddle Shifters",
      "CNG option available (VXi, ZXi)",
      "Ideal for: large families, airport taxis, outstation trips"
    ]
  },

  // ── EECO ─────────────────────────────────────────────────────────────────
  "eeco": {
    name: "EECO",
    keywords: ["eeco", "eeco van"],
    bodyType: "Van / Passenger MPV",
    tagline: "Practical Van for Every Need",
    specs: {
      engine: "1197cc K12N Dual Jet, Dual VVT",
      power: "60.5 PS @ 6000 rpm",
      torque: "105.5 Nm @ 3000 rpm",
      cngPower: "53 PS (CNG mode)",
      transmission: "5-speed MT only",
      fuelEfficiency: {
        petrol: "19.71 km/l",
        cng: "26.78 km/kg"
      },
      fuelTank: "32L petrol",
      dimensions: {
        length: "3675 mm",
        width: "1475 mm",
        height: "1825 mm",
        wheelbase: "2350 mm",
        groundClearance: "170 mm"
      },
      tyres: "155/80 R13",
      seating: "5 or 6 (depending on variant)",
      brakes: { front: "Disc", rear: "Drum" },
      suspension: { front: "Mac Pherson Strut", rear: "3-Link Rigid Axle" },
      emissionStandard: "BS VI"
    },
    variants: [
      "5-Seater Standard MT",
      "5-Seater AC MT",
      "5-Seater AC CNG MT",
      "6-Seater Standard MT"
    ],
    colors: [
      "Pearl Arctic White", "Metallic Silky Silver", "Solid Fire Red",
      "Metallic Granite Grey"
    ],
    exterior: {
      headlamps: "Halogen Headlamps",
      tailLamps: "Standard Rear Combination Lamps",
      wheels: "Steel Wheels with Hub Caps",
      design: "High-roof van body — 1825mm tall"
    },
    interior: {
      dashboard: "Simple, practical dashboard",
      infotainment: "No touchscreen in any variant",
      airConditioner: "Manual AC (5-Seater AC variants only)",
      seating: "5-Seater: 2+2+1 config / 6-Seater: 2+2+2 config",
      space: "Flat floor, easy entry/exit, excellent headroom"
    },
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Not available",
      reverseParking: "Reverse Parking Sensors (AC variants)",
      seatBeltReminder: "Front seat belt reminder",
      immobiliser: "Engine Immobiliser"
    },
    featuresByVariant: {
      "5-Seater Standard MT": {
        ac: "No AC", speakers: "None", infotainment: "None",
        reverseParking: "No", seating: "5"
      },
      "5-Seater AC MT": {
        ac: "Manual AC", speakers: "None", infotainment: "None",
        reverseParking: "Yes", seating: "5"
      },
      "5-Seater AC CNG MT": {
        ac: "Manual AC", speakers: "None", infotainment: "None",
        reverseParking: "Yes", seating: "5", fuel: "Petrol + CNG Bi-fuel"
      },
      "6-Seater Standard MT": {
        ac: "No AC", speakers: "None", infotainment: "None",
        reverseParking: "No", seating: "6"
      }
    },
    suzukiConnect: "Not available",
    keyHighlights: [
      "6 Airbags standard ALL variants",
      "Van body — most practical cargo + passenger space",
      "1825mm tall — excellent headroom for all passengers",
      "Sliding side door — easy entry in tight spaces",
      "CNG available — low running cost for commercial use",
      "5-seater and 6-seater options",
      "No touchscreen — designed for utility, not luxury",
      "Ideal for: school transport, commercial use, last-mile delivery, large families on budget"
    ]
  },

  // ── VICTORIS ─────────────────────────────────────────────────────────────
  "victoris": {
    name: "Victoris",
    keywords: ["victoris"],
    bodyType: "Mid-Size Premium SUV",
    tagline: "Got It All — For The Drive Inside You That Wants It All",
    specs: {
      enginePetrol: "1462cc K15C Smart Hybrid",
      engineCNG: "1462cc K15C (CNG)",
      engineHybrid: "1490cc M15D Strong Hybrid",
      powerPetrol: "103.06 PS",
      powerCNG: "92.45 PS",
      powerHybrid: "68 PS (ICE) + 80 PS (Motor) combined system",
      torquePetrol: "137 Nm",
      transmissions: "6-speed MT / 6-speed AT / e-CVT (Hybrid) / ALLGRIP AWD (4WD)",
      fuelEfficiency: {
        petrolMT: "21.18 km/l",
        petrolAT: "21.06 km/l",
        cng: "27.02 km/kg",
        allgrip: "19.07 km/l",
        strongHybrid_eCVT: "28.65 km/l (best in class)"
      },
      fuelTank: "45L petrol",
      dimensions: {
        length: "4490 mm",
        width: "1800 mm",
        height: "1750 mm",
        wheelbase: "2600 mm",
        groundClearance: "200 mm"
      },
      tyres: "215/60 R17",
      bootSpace: "645L",
      seating: "5",
      brakes: { front: "Disc", rear: "Disc" },
      emissionStandard: "BS VI + OBD II"
    },
    variants: ["Lxi", "Vxi", "Zxi", "Zxi(O)", "Zxi+", "Zxi+(O)"],
    colors: [
      "Splendid Silver", "Pearl Arctic White", "Metallic Granite Grey",
      "Pearl Midnight Black", "Metallic Bordeaux Red", "Metallic Earthy Brown"
    ],
    exterior: {
      headlamps: "Projector Headlamps with LED DRL (lower) / Full LED Bi-LED (Zxi+)",
      tailLamps: "LED Tail Lamps",
      wheels: "Alloy Wheels (painted lower / diamond-cut Zxi+)",
      sunroof: "Panoramic Sunroof (Zxi(O) and Zxi+(O) only)",
      powerTailgate: "Smart Powered Tailgate (Zxi onwards)",
      groundClearance: "200mm"
    },
    interior: {
      infotainment: {
        Lxi_Vxi_Zxi: "SmartPlay Pro 17.78cm — Android Auto, Apple CarPlay",
        ZxiPlus: "SmartPlay Pro X 25.65cm — Wireless Android Auto, Apple CarPlay, Alexa Auto, App Store, OTT apps"
      },
      sound: {
        standard: "2 Tweeters (Vxi+)",
        ZxiPlus: "Infinity Premium 8-Speaker + Subwoofer system with Dolby Atmos + In-built Amplifier"
      },
      ambientLighting: "64-Colour Ambient Lighting (Zxi+)",
      ventilatedSeats: "Ventilated Front Seats (Zxi+)",
      poweredDriverSeat: "8-Way Powered Driver Seat (Zxi+)",
      headUpDisplay: "Head Up Display (Zxi+)",
      wirelessCharger: "Wireless Charger (Zxi onwards)",
      pushStart: "Engine Push Start/Stop with Smart Key (Zxi onwards)",
      autoAC: "Auto Climate Control (Vxi+)",
      pm25Filter: "PM2.5 Cabin Air Filter (Zxi onwards)",
      cruiseControl: "Adaptive Cruise Control — Level 2 ADAS (Zxi+)",
      electricParkBrake: "Electronic Parking Brake with Auto Hold (AT variants)"
    },
    safety: {
      airbags: "6 Airbags standard ALL variants",
      abs: "ABS with EBD — all variants",
      esp: "Electronic Stability Program — all variants",
      adas: "Level 2 ADAS — Zxi+ only: ACC, Lane Keeping Assist, AEB (Autonomous Emergency Braking), Blind Spot Monitoring, Rear Cross Traffic Alert",
      camera360: "360° Camera with 11 views (Zxi onwards)",
      tpms: "Tyre Pressure Monitoring System (Zxi+)",
      hillHold: "Hill Hold Assist — all variants",
      reverseParking: "Reverse Parking Sensors + Camera"
    },
    featuresByVariant: {
      "Lxi": {
        infotainment: "SmartPlay Pro 17.78cm", speakers: "Basic",
        alloyWheels: "Alloy (painted)", sunroof: "No",
        adas: "No", ventilatedSeats: "No", ambientLighting: "No",
        headUpDisplay: "No", powerTailgate: "No"
      },
      "Vxi": {
        infotainment: "SmartPlay Pro 17.78cm",
        speakers: "2 Tweeters", alloyWheels: "Alloy (painted)",
        leatherette: "Leatherette Seats", suzukiConnect: "Yes",
        sunroof: "No", adas: "No", ventilatedSeats: "No",
        autoAC: "Auto Climate Control",
        electricParkBrake: "Yes (AT variants)"
      },
      "Zxi": {
        infotainment: "SmartPlay Pro 17.78cm", speakers: "4+2 Tweeters",
        alloyWheels: "Alloy (painted)",
        headlamps: "Full LED", camera360: "360° with 11 views",
        powerTailgate: "Smart Powered Tailgate",
        wirelessCharger: "Yes", pm25Filter: "Yes",
        pushStart: "Yes", sunroof: "No", adas: "No",
        ventilatedSeats: "No"
      },
      "Zxi(O)": {
        infotainment: "SmartPlay Pro 17.78cm",
        speakers: "4+2 Tweeters", alloyWheels: "Diamond Cut",
        headlamps: "Full LED", camera360: "360° with 11 views",
        powerTailgate: "Yes", wirelessCharger: "Yes",
        pm25Filter: "Yes", sunroof: "Panoramic Sunroof",
        adas: "No", ventilatedSeats: "No"
      },
      "Zxi+": {
        infotainment: "SmartPlay Pro X 25.65cm — Wireless Android Auto, Apple CarPlay, Alexa, OTT Apps",
        speakers: "Infinity 8-Speaker + Subwoofer — Dolby Atmos",
        alloyWheels: "Diamond Cut",
        headlamps: "Full LED",
        camera360: "360° with 11 views",
        powerTailgate: "Smart Powered Tailgate",
        wirelessCharger: "Yes", pm25Filter: "Yes",
        sunroof: "No (Zxi+(O) adds Panoramic Sunroof)",
        adas: "Level 2 ADAS — ACC, LKA, AEB, BSM, RCTA",
        ventilatedSeats: "Ventilated Front Seats",
        poweredSeat: "8-Way Powered Driver Seat",
        ambientLighting: "64-Colour Ambient Lighting",
        headUpDisplay: "Head Up Display",
        internetConnectivity: "In-built Internet Connectivity",
        alexaAuto: "Alexa Auto Integration",
        ottApps: "In-car OTT App streaming"
      },
      "Zxi+(O)": {
        allAdditions: "Everything in Zxi+ PLUS Panoramic Sunroof PLUS ALLGRIP AWD available"
      }
    },
    suzukiConnect: "Available from Vxi onwards — advanced connected car features",
    keyHighlights: [
      "Level 2 ADAS — only Arena car with Autonomous Emergency Braking, Adaptive Cruise Control, Lane Keep Assist, Blind Spot Monitoring",
      "Strong Hybrid e-CVT — 28.65 km/l — best fuel efficiency in Arena lineup",
      "ALLGRIP AWD available (Zxi+(O))",
      "Panoramic Sunroof (Zxi(O) and Zxi+(O))",
      "25.65cm SmartPlay Pro X — largest infotainment in Arena",
      "Infinity 8-Speaker + Subwoofer with Dolby Atmos",
      "64-Colour Ambient Lighting",
      "360° Camera with 11 views",
      "8-Way Powered Driver Seat",
      "Smart Powered Tailgate",
      "645L boot space — largest in Arena lineup",
      "Ideal for: premium SUV buyers, tech-savvy customers, safety-focused families"
    ]
  },

  // ══════════════════════════ NEXA LINEUP ══════════════════════════════════
  // ── BALENO ──────────────────────────────────────────────────────────────
  "baleno": {
    name: "Baleno",
    channel: "NEXA",
    keywords: ["baleno"],
    bodyType: "Premium Hatchback",
    tagline: "Crafted Futurism",
    specs: {
      engine: "1197cc K12N Dual Jet, Dual VVT with ISS (4-cylinder)",
      power: "89.7 PS @ 6000 rpm (66 kW)",
      torque: "113 Nm @ 4400 rpm",
      cngPower: "77.5 PS (CNG mode)",
      cngTorque: "98.5 Nm @ 4300 rpm (CNG mode)",
      transmission: "5-speed MT / 5-speed AMT",
      fuelEfficiency: { petrolMT: "22.35 km/l", petrolAMT: "22.94 km/l", cng: "30.61 km/kg" },
      fuelTank: "37L petrol (CNG: 55L water-equivalent)",
      dimensions: { length: "3990 mm", width: "1745 mm", height: "1500 mm", wheelbase: "2520 mm" },
      bootSpace: "318L",
      tyres: "185/65 R15 (Steel) / 195/55 R16 (Alloy)",
      seating: "5",
      brakes: { front: "Disc", rear: "Drum" },
      emissionStandard: "BS VI"
    },
    variants: ["Sigma MT", "Delta MT/AMT", "Zeta MT/AMT", "Alpha MT/AMT", "Delta CNG", "Zeta CNG"],
    colors: ["Nexa Blue", "Grandeur Grey", "Arctic White", "Splendid Silver", "Opulent Red", "Bluish Black", "Pearl Midnight Black"],
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard",
      abs: "ABS with EBD",
      esp: "Electronic Stability Program (ESP)",
      hillHoldAssist: "Available",
      isofix: "ISOFIX child seat mounts",
      reverseParking: "Rear Parking Sensors + Camera",
      tpms: "Available"
    },
    keyHighlights: [
      "Head-Up Display (HUD) — first-in-segment premium feature",
      "360° View Camera (Alpha)",
      "22.86cm (9-inch) SmartPlay Pro+ touchscreen with wireless Android Auto & Apple CarPlay",
      "Surround Sense audio powered by ARKAMYS",
      "NEXA signature LED projector headlamps with NEXtré LED DRLs",
      "6 airbags standard, ESP, Hill Hold across the range",
      "Ideal for: young buyers wanting a feature-rich premium hatchback"
    ],
    summary: { body: "Premium Hatchback", engine: "1197cc K12N Dual Jet 4-cyl", power: "89.7 PS", torque: "113 Nm", petrolMT: "22.35 km/l", petrolAuto: "22.94 km/l (AMT)", cng: "30.61 km/kg", tank: "37 L", boot: "318 L", seats: "5", airbags: "6 (all variants)", gc: "170 mm", segment: "Premium hatchback", topVariant: "Alpha", topFeatures: "Head-Up Display, 360° View Camera, 9-inch SmartPlay Pro+ wireless, ARKAMYS surround, LED projectors, 6 airbags" }
  },

  // ── FRONX ───────────────────────────────────────────────────────────────
  "fronx": {
    name: "Fronx",
    channel: "NEXA",
    keywords: ["fronx", "fronks"],
    bodyType: "Compact SUV / Crossover",
    tagline: "Sport Meets SUV",
    specs: {
      engine: "1.0L Turbo Boosterjet (998cc) / 1.2L K-Series Dual Jet Dual VVT (1197cc)",
      power: "Turbo: 100.06 PS @ 5500 rpm (73.6 kW) | 1.2L: 89.73 PS @ 6000 rpm (66 kW)",
      torque: "Turbo: 147.6 Nm @ 2000-4500 rpm | 1.2L: 113 Nm @ 4400 rpm",
      cngPower: "77.5 PS (1.2L CNG mode)",
      cngTorque: "98.5 Nm @ 4300 rpm (CNG mode)",
      transmission: "Turbo: 5MT / 6AT with Paddle Shifters | 1.2L: 5MT / 5AMT",
      fuelEfficiency: { petrolMT: "1.2L 21.79 km/l | Turbo 21.5 km/l", petrolAuto: "1.2L 22.89 (AMT) | Turbo 20.01 (6AT)", cng: "28.51 km/kg" },
      fuelTank: "37L petrol (CNG: 55L water-equivalent)",
      dimensions: { length: "3995 mm", width: "1765 mm", height: "1550 mm", wheelbase: "2520 mm" },
      bootSpace: "308L",
      turningRadius: "4.9 m",
      seating: "5",
      brakes: { front: "Disc", rear: "Drum" },
      emissionStandard: "BS VI"
    },
    variants: ["Sigma", "Delta", "Delta+", "Zeta", "Alpha (Turbo)"],
    colors: ["Nexa Blue (Celestial)", "Arctic White", "Grandeur Grey", "Opulent Red", "Splendid Silver", "Earthen Brown", "Bluish Black", "Red + Black Roof (DT)", "Bluish Black Roof options"],
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard",
      abs: "ABS with EBD",
      esp: "ESP — standard",
      hillHoldAssist: "Standard",
      seatBelt: "3-point ELR seat belts all seats",
      tpms: "Available"
    },
    keyHighlights: [
      "1.0L Turbo Boosterjet — sportiest engine in its class (100 PS, quick 0-60)",
      "6-speed Automatic with Paddle Shifters (Turbo)",
      "Head-Up Display + 360° View Camera (Alpha)",
      "22.86cm SmartPlay Pro with wireless connectivity",
      "NEXWave grille + NEXA signature connected LED rear lamps",
      "6 airbags + ESP + Hill Hold standard",
      "Ideal for: buyers wanting SUV styling with turbo performance"
    ],
    summary: { body: "Compact SUV", engine: "1.0L Turbo Boosterjet / 1.2L Dual Jet", power: "100 PS (Turbo)", torque: "147.6 Nm (Turbo)", petrolMT: "21.5 km/l (Turbo)", petrolAuto: "22.89 km/l (1.2 AMT)", cng: "28.51 km/kg", tank: "37 L", boot: "308 L", seats: "5", airbags: "6 (all variants)", gc: "190 mm", segment: "Compact SUV", topVariant: "Alpha Turbo", topFeatures: "1.0 Turbo + 6AT Paddle Shifters, Head-Up Display, 360° View, SmartPlay Pro wireless, connected LED tail lamps, 6 airbags + ESP" }
  },

  // ── XL6 ─────────────────────────────────────────────────────────────────
  "xl6": {
    name: "XL6",
    channel: "NEXA",
    keywords: ["xl6", "xl 6"],
    bodyType: "Premium MPV (6-Seater)",
    tagline: "Premium Adventure",
    specs: {
      engine: "1462cc K15C Smart Hybrid, Dual VVT (4-cylinder)",
      power: "103 PS @ 6000 rpm (75.8 kW)",
      torque: "139 Nm @ 4300 rpm",
      transmission: "5-speed MT / 6-speed AT",
      fuelEfficiency: { petrolMT: "20.90 km/l", petrolAT: "20.27 km/l", cng: "26.23 km/kg" },
      fuelTank: "45L petrol (CNG: 60L water-equivalent)",
      dimensions: { length: "4485 mm", width: "1775 mm", height: "1745 mm", wheelbase: "2740 mm" },
      seating: "6 (Captain seats 2+2+2)",
      weight: "1220–1295 kg",
      brakes: { front: "Disc", rear: "Drum" },
      emissionStandard: "BS VI"
    },
    variants: ["Zeta MT/AT", "Alpha MT/AT", "Alpha+ MT/AT", "Zeta CNG", "Alpha CNG"],
    colors: ["Nexa Blue", "Arctic White", "Grandeur Grey", "Splendid Silver", "Brave Khaki (Zeta/Alpha)", "Opulent Red (Zeta/Alpha)", "Bluish Black", "Brave Khaki + Bluish Black (Alpha+)", "Opulent Red + Bluish Black (Alpha+)"],
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain)",
      abs: "ABS with EBD",
      esp: "ESP with Hill Hold Assist",
      isofix: "ISOFIX (2nd row)",
      tpms: "Tyre Pressure Monitoring System",
      seatBelt: "Pre-tensioners + Force Limiters (Dr+Co-Dr)"
    },
    keyHighlights: [
      "6-seater with 2nd-row Plush Captain Seats — one-touch recline & slide",
      "Quad Chamber LED Reflector Headlamps + Integrated LED DRLs",
      "K15C Smart Hybrid with brake energy regeneration",
      "17.78cm SmartPlay Pro touchscreen + ARKAMYS Surround Sense",
      "Ventilated front seats (Alpha+), Cruise Control, Engine Push Start",
      "3rd row 50:50 split + recline, 2nd & 3rd row AC vents",
      "Ideal for: families wanting premium captain-seat MPV comfort"
    ],
    summary: { body: "MPV 6-Seater", engine: "1462cc K15C Smart Hybrid 4-cyl", power: "103 PS", torque: "139 Nm", petrolMT: "20.90 km/l", petrolAuto: "20.27 km/l (AT)", cng: "26.23 km/kg", tank: "45 L", boot: "—", seats: "6", airbags: "6 (all variants)", gc: "180 mm", segment: "MPV", topVariant: "Alpha+ AT", topFeatures: "Captain seats with recline/slide, Quad Chamber LED headlamps, Ventilated seats, SmartPlay Pro, ARKAMYS, Smart Hybrid, cruise control" }
  },

  // ── JIMNY ───────────────────────────────────────────────────────────────
  "jimny": {
    name: "Jimny",
    channel: "NEXA",
    keywords: ["jimny", "jimmy"],
    bodyType: "Off-Road SUV (5-Door)",
    tagline: "The Original 4x4",
    specs: {
      engine: "1462cc K15B with Idle Start Stop (4-cylinder, petrol)",
      power: "104.8 PS @ 6000 rpm (77.1 kW)",
      torque: "134.2 Nm @ 4000 rpm",
      transmission: "5-speed MT / 4-speed AT",
      driveType: "ALLGRIP PRO — part-time 4WD with low-range transfer gear (2H/4H/4L)",
      fuelEfficiency: { petrolMT: "16.94 km/l", petrolAT: "16.39 km/l" },
      fuelTank: "40L",
      dimensions: { length: "3985 mm (with spare wheel)", width: "1645 mm", height: "1720 mm", wheelbase: "2590 mm", groundClearance: "210 mm" },
      bootSpace: "211L (seats up) / 332L (seats folded)",
      turningRadius: "5.7 m",
      tyres: "195/80 R15 (Alloy & Steel)",
      seating: "4",
      weight: "1195–1200 kg",
      emissionStandard: "BS VI"
    },
    variants: ["Zeta MT/AT", "Alpha MT/AT"],
    colors: ["Kinetic Yellow", "Bluish Black", "Granite Gray", "Sizzling Red", "Pearl Arctic White", "Nexa Blue", "Kinetic Yellow + Bluish Black Roof (DT)"],
    safety: {
      airbags: "6 Airbags — standard across all variants",
      abs: "ABS with EBD",
      esp: "ESP with Hill Hold + Hill Descent Control",
      brakeLSD: "Brake LSD Traction Control (for diagonal wheel slip)",
      tpms: "Available"
    },
    keyHighlights: [
      "ALLGRIP PRO 4WD with low-range transfer gear — true off-roader",
      "Ladder-frame chassis with rigid axles front & rear",
      "210mm ground clearance, 36° approach / 24° breakover angles",
      "LED Headlamps with Washer (Alpha)",
      "22.86cm SmartPlay Pro touchscreen",
      "6 airbags + ESP + Hill Descent Control standard",
      "Ideal for: off-road enthusiasts, adventure & lifestyle buyers"
    ],
    summary: { body: "Off-Road SUV", engine: "1462cc K15B 4-cyl petrol", power: "104.8 PS", torque: "134.2 Nm", petrolMT: "16.94 km/l", petrolAuto: "16.39 km/l (AT)", cng: "—", tank: "40 L", boot: "211 L / 332 L folded", seats: "4", airbags: "6 (all variants)", gc: "210 mm", segment: "Off-Road SUV", topVariant: "Alpha", topFeatures: "ALLGRIP PRO 4WD low-range, ladder-frame, 210mm GC, LED headlamps with washer, SmartPlay Pro, Hill Descent Control, 6 airbags" }
  },

  // ── GRAND VITARA ──────────────────────────────────────────────────────────
  "grand vitara": {
    name: "Grand Vitara",
    channel: "NEXA",
    keywords: ["grand vitara", "grandvitara", "gv", "grand-vitara"],
    bodyType: "Mid-Size SUV",
    tagline: "The Mighty Hybrid SUV",
    specs: {
      engine: "1462cc K15C Smart Hybrid (Petrol) / 1490cc Intelligent Strong Hybrid (e-CVT)",
      power: "Petrol: 103.06 PS @ 6000 rpm (75.8 kW) | Strong Hybrid total system: 115.56 PS (85 kW)",
      torque: "Petrol: 139 Nm @ 4300 rpm | Strong Hybrid: 122 Nm (engine) + 141 Nm (motor)",
      transmission: "5MT / 6AT (Petrol) | e-CVT (Strong Hybrid)",
      driveType: "ALLGRIP SELECT 4x4 (available on petrol)",
      fuelEfficiency: { petrolMT: "21.11 km/l", petrolAuto: "20.58 km/l (AT) | 19.20 (ALLGRIP)", strongHybrid: "27.97 km/l (e-CVT)" },
      fuelTank: "45L",
      dimensions: { length: "4345 mm", width: "1795 mm", height: "1645 mm", wheelbase: "2600 mm", groundClearance: "210 mm" },
      seating: "5",
      weight: "1140–1285 kg",
      brakes: { front: "Disc", rear: "Disc" },
      emissionStandard: "BS VI"
    },
    variants: ["Sigma", "Delta", "Delta+", "Zeta", "Zeta+", "Alpha", "Alpha+ (Petrol & Strong Hybrid)"],
    colors: ["Nexa Blue", "Splendid Silver", "Grandeur Grey", "Arctic White", "Midnight Black", "Opulent Red", "Dark Grey", "Arctic White + Black Roof (DT)", "Splendid Silver + Black (DT)"],
    safety: {
      airbags: "6 Airbags (Front, Side, Curtain) — standard",
      abs: "ABS with EBD",
      esp: "ESP with Hill Hold + Hill Descent (ALLGRIP)",
      epb: "Electronic Parking Brake (AT)",
      tpms: "Tyre Pressure Monitoring System",
      seatBelt: "3-point ELR all seats"
    },
    keyHighlights: [
      "Intelligent Strong Hybrid — 27.97 km/l, true self-charging electric drive",
      "ALLGRIP SELECT 4x4 with multiple terrain modes (petrol)",
      "Panoramic Sunroof (Alpha+)",
      "Head-Up Display + 360° View Camera",
      "22.86cm SmartPlay Pro + Premium Sound by Clarion",
      "Ventilated front seats, Electronic Parking Brake, 6 airbags",
      "Ideal for: buyers wanting a hybrid/4x4 mid-size SUV with best-in-class mileage"
    ],
    summary: { body: "Mid-Size SUV", engine: "1.5L Smart Hybrid / Strong Hybrid", power: "103 PS / 115.6 PS (hybrid)", torque: "139 Nm", petrolMT: "21.11 km/l", petrolAuto: "20.58 km/l (AT) / 27.97 (Strong Hybrid)", cng: "—", tank: "45 L", boot: "373 L", seats: "5", airbags: "6 (all variants)", gc: "210 mm", segment: "Mid-Size SUV", topVariant: "Alpha+ Strong Hybrid", topFeatures: "Strong Hybrid 27.97 km/l, ALLGRIP 4x4, Panoramic Sunroof, HUD, 360° View, SmartPlay Pro, Clarion sound, ventilated seats" }
  },

  // ── INVICTO ───────────────────────────────────────────────────────────────
  "invicto": {
    name: "Invicto",
    channel: "NEXA",
    keywords: ["invicto", "invecto"],
    bodyType: "Premium MPV (Flagship)",
    tagline: "Magnificence Personified",
    specs: {
      engine: "1987cc 2.0L Atkinson-cycle petrol with Intelligent Strong Hybrid (TNGA)",
      power: "Total system: 188.9 PS (139 kW)",
      torque: "Motor: 206 Nm",
      motor: "AC Synchronous Motor — 83.73 kW @ 4000 rpm",
      battery: "Ni-MH (168 cells), 201.6 V",
      transmission: "e-CVT (electronic CVT)",
      driveType: "2WD (FWD)",
      fuelEfficiency: { strongHybrid: "22.16 km/l (ARAI)" },
      fuelTank: "52L",
      dimensions: { length: "4755 mm", width: "1845 mm", height: "1795 mm", wheelbase: "2850 mm" },
      seating: "7 / 8",
      weight: "1620–1630 kg (Kerb), GVW 2300 kg",
      tyres: "215/60 R17 Precision Cut Alloy Wheels",
      brakes: { front: "Ventilated Disc", rear: "Solid Disc" },
      suspension: { front: "MacPherson Strut", rear: "Torsion Beam" },
      emissionStandard: "BS VI"
    },
    variants: ["Zeta+ (7-seater)", "Alpha+ (7-seater)"],
    colors: ["Nexa Blue", "Stellar Bronze", "Majestic Silver", "Cafe White (Dual Tone)", "Mystic Black"],
    safety: {
      airbags: "6 Airbags",
      abs: "ABS with EBD",
      esp: "ESP / Vehicle Stability Control",
      driveModes: "ECO / Normal / Power + EV mode",
      tpms: "Available",
      camera: "360° Panoramic View Monitor"
    },
    keyHighlights: [
      "Maruti's flagship — Intelligent Strong Hybrid with EV drive mode",
      "188.9 PS total system power, 22.16 km/l mileage in a large MPV",
      "Captain seats with Ottoman function + premium ambient lighting",
      "Panoramic sunroof, large infotainment, premium audio",
      "e-CVT smooth automatic, ECO/Normal/Power + EV modes",
      "Ventilated seats, powered tailgate, 360° camera",
      "Ideal for: premium/luxury MPV buyers, chauffeur-driven executives"
    ],
    summary: { body: "Premium MPV", engine: "2.0L Atkinson Strong Hybrid", power: "188.9 PS (system)", torque: "206 Nm (motor)", petrolMT: "—", petrolAuto: "22.16 km/l (e-CVT Hybrid)", cng: "—", tank: "52 L", boot: "—", seats: "7/8", airbags: "6 (all variants)", gc: "185 mm", segment: "Premium MPV", topVariant: "Alpha+", topFeatures: "Strong Hybrid + EV mode, Ottoman captain seats, panoramic sunroof, premium audio, ventilated seats, powered tailgate, 360° camera" }
  },

  // ── e-VITARA ──────────────────────────────────────────────────────────────
  "e-vitara": {
    name: "e-Vitara",
    channel: "NEXA",
    keywords: ["e-vitara", "evitara", "e vitara", "electric vitara"],
    bodyType: "Electric SUV",
    tagline: "Born Electric",
    specs: {
      engine: "Electric eAxle (HEARTECT-e platform) — 49 kWh / 61 kWh LFP battery",
      power: "49 kWh: 144 PS (105.8 kW) | 61 kWh: 174 PS (128 kW)",
      torque: "193 Nm",
      battery: "49 kWh / 61 kWh Lithium-Iron-Phosphate (LFP, 120 cells)",
      range: "49 kWh: 440 km | 61 kWh: 543 km (ARAI certified)",
      charging: "AC 7.4kW: ~6.5h (49 kWh) / ~9h (61 kWh) 10-100%; DC fast charging supported",
      batteryWarranty: "8 Years / 1,60,000 km",
      transmission: "Single-speed (automatic)",
      driveModes: "Eco / Normal / Sport + Snow Mode",
      dimensions: { length: "4275 mm", width: "1800 mm", height: "1640 mm", wheelbase: "2700 mm" },
      seating: "5",
      tyres: "R18 Alloy Wheels with Aero Garnish",
      brakes: { front: "Disc", rear: "Disc (All-Wheel Disc)" },
      emissionStandard: "Zero Emission (EV)"
    },
    variants: ["Delta", "Zeta", "Alpha (49 kWh / 61 kWh)"],
    colors: ["Nexa Blue", "Arctic White", "Grandeur Grey", "Bluish Black", "Opulent Red + Bluish Black Roof", "Land Breeze Green + Bluish Black Roof", "Arctic White + Bluish Black Roof"],
    safety: {
      airbags: "7 Airbags (incl. Driver Knee Airbag)",
      abs: "ABS with EBD",
      esp: "ESP + Active Cornering Control + Multi-Collision Braking",
      adas: "Level 2 ADAS (Suzuki Safety Support)",
      brakes: "All-Wheel Disc Brakes",
      tpms: "Tyre Pressure Monitoring System"
    },
    keyHighlights: [
      "Maruti's first electric SUV — 543 km range (61 kWh)",
      "7 airbags including driver knee airbag — segment-leading safety",
      "Level 2 ADAS with Active Cornering Control & Multi-Collision Braking",
      "25.65cm (10.1-inch) infotainment + Infinity 8-speaker premium sound",
      "R18 alloy wheels with aero garnish, NEXtré 3-Point Matrix LED DRLs",
      "Eco/Normal/Sport + Snow drive modes, single-pedal driving",
      "Ideal for: EV-first buyers, tech enthusiasts, urban premium families"
    ],
    summary: { body: "Electric SUV", engine: "eAxle EV - 49/61 kWh LFP battery", power: "144-174 PS", torque: "193 Nm", petrolMT: "—", petrolAuto: "Range: 440-543 km", cng: "—", tank: "61 kWh battery", boot: "—", seats: "5", airbags: "7 (incl. knee airbag)", gc: "180 mm", segment: "Electric SUV", topVariant: "Alpha 61 kWh", topFeatures: "543 km range, 7 airbags + ADAS, 10.1-inch infotainment, Infinity 8-speaker, R18 alloys, matrix LED DRLs, Snow mode" }
  }
};

// ─── Car detection keywords for routing ──────────────────────────────────────
const CAR_KEYWORDS = {
  "alto k10": ["alto k10", "alto", "k10"],
  "s-presso": ["s-presso", "spresso", "s presso", "mini suv"],
  "celerio": ["celerio"],
  "wagonr": ["wagon r", "wagonr", "wagon-r"],
  "swift": ["swift", "swifting"],
  "dzire": ["dzire"],
  "brezza": ["brezza"],
  "ertiga": ["ertiga"],
  "eeco": ["eeco"],
  "victoris": ["victoris"],
  "baleno": ["baleno"],
  "fronx": ["fronx", "fronks"],
  "xl6": ["xl6", "xl 6"],
  "jimny": ["jimny", "jimmy"],
  "grand vitara": ["grand vitara", "grandvitara", "grand-vitara"],
  "invicto": ["invicto", "invecto"],
  "e-vitara": ["e-vitara", "evitara", "e vitara", "electric vitara"]
};

// ─── Quick overview for multi-car/general queries ─────────────────────────────
const ALL_CARS_OVERVIEW = `MARUTI SUZUKI — BHARATH AUTO LINEUP (ARENA + NEXA) — QUICK REFERENCE:

ARENA:
ALTO K10    | Entry Hatchback  | 998cc K10C  | 68.5PS | MT/AGS/CNG | 24.39–33.40 | 27L  | 6 airbags std | Best entry value, Honeycomb design
S-PRESSO    | Mini SUV         | 998cc K10C  | 68.5PS | MT/AGS/CNG | 24.12–32.73 | 27L  | 6 airbags std | 180mm GC, SUV look on hatch budget
CELERIO     | Hatchback        | 998cc K10C  | 68.5PS | MT/AGS/CNG | 26.00–34.43 | 32L  | 6 airbags std | India's most fuel-efficient car, 292L boot
WAGONR      | Tall Hatchback   | 998/1197cc  | 68.5/90.9PS | MT/AGS/CNG | 24.35–33.47 | 32L | 6 airbags std | 335L boot, most space
SWIFT       | Premium Hatch    | 1197cc Z12E | 81.58PS| MT/AMT/CNG | 24.80–32.85 | 37L  | 6 airbags std | ESP+HHA all variants, fun-to-drive
DZIRE       | Compact Sedan    | 1197cc Z12E | 81.58PS| MT/AMT/CNG | 24.79–33.73 | 37L  | 6 airbags std | 382L boot, most fuel-eff sedan, sunroof on ZXi+
BREZZA      | Compact SUV      | 1462cc K15C | 103.1PS| MT/AT/CNG  | 17.80–25.51 | 48L  | 6 airbags std | 198mm GC, Smart Hybrid, HUD+360 on ZXi+
ERTIGA      | 7-Seat MPV       | 1462cc K15C | 103PS  | MT/AT/CNG  | 20.51–26.11 | 45L  | 6 airbags std | 7-seats 2+3+2, Smart Hybrid
EECO        | Van/MPV          | 1197cc K12N | 83.1PS | MT/CNG     | 19.71–26.66 | 32L  | 6 airbags + ESP | 5 or 7 seater, factory CNG, commercial use
VICTORIS    | Premium SUV      | 1462/1490cc | 103PS+ | MT/AT/eCVT/AWD | 19.38–28.65 | 45L | 6 airbags std | Level 2 ADAS, Strong Hybrid, AllGrip AWD

NEXA:
BALENO       | Premium Hatch   | 1197cc K12N | 89.7PS | MT/AMT/CNG | 22.35–30.61 | 37L  | 6 airbags std | HUD, 360 cam, 9" SmartPlay Pro+, ARKAMYS
FRONX        | Compact SUV     | 1.0 Turbo / 1.2L | 100PS (Turbo) | MT/AT/AMT/CNG | 20.01–28.51 | 37L | 6 airbags std | Turbo Boosterjet, 6AT paddle shifters, HUD, 360 cam
XL6          | 6-Seat MPV      | 1462cc K15C | 103PS  | MT/AT/CNG  | 20.27–26.23 | 45L  | 6 airbags std | Captain seats, Quad LED headlamps, ventilated seats
JIMNY        | Off-Road SUV    | 1462cc K15B | 104.8PS| MT/AT      | 16.39–16.94 | 40L  | 6 airbags std | ALLGRIP PRO 4WD low-range, 210mm GC, ladder-frame
GRAND VITARA | Mid-Size SUV    | 1.5L Hybrid | 103/115.6PS | MT/AT/eCVT/AWD | 20.58–27.97 | 45L | 6 airbags std | Strong Hybrid, ALLGRIP 4x4, panoramic sunroof
INVICTO      | Premium MPV     | 2.0L Strong Hybrid | 188.9PS sys | e-CVT | 22.16 | 52L | 6 airbags std | Flagship, EV mode, Ottoman captain seats, 7/8 seats
e-VITARA     | Electric SUV    | 49/61 kWh EV | 144–174PS | Single-speed | 440–543 km range | 61 kWh | 7 airbags + ADAS | Maruti's first EV, R18 alloys, Level 2 ADAS`;

// ─── Detect which car(s) a query refers to ────────────────────────────────────
function detectCars(query) {
  const q = (query || '').toLowerCase();
  const detected = [];
  for (const key in CAR_KEYWORDS) {
    if (CAR_KEYWORDS[key].some(kw => q.includes(kw))) detected.push(key);
  }
  return detected;
}

// ─── Topic-aware context for "all cars" queries ───────────────────────────────
function buildAllCarsTopicContext(query) {
  const q = query.toLowerCase();

  if (q.includes("lamp") || q.includes("light") || q.includes("headlamp") || q.includes("taillight") ||
      q.includes("tail") || q.includes("drl") || q.includes("exterior") || q.includes("grille") ||
      q.includes("wheel") || q.includes("alloy")) {
    let ctx = "EXTERIOR & LAMP DATA — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.exterior || {})}`;
    }
    return ctx;
  }

  if (q.includes("safe") || q.includes("airbag") || q.includes("esp") || q.includes("adas") ||
      q.includes("abs") || q.includes("ebd") || q.includes("crash") || q.includes("rating")) {
    let ctx = "SAFETY DATA — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.safety || {})}`;
    }
    return ctx;
  }

  if (q.includes("engine") || q.includes("power") || q.includes("torque") || q.includes("cc") ||
      q.includes("mileage") || q.includes("fuel") || q.includes("kmpl") || q.includes("km/l") ||
      q.includes("cng") || q.includes("agt") || q.includes("spec") || q.includes("performance")) {
    let ctx = "ENGINE & SPECS DATA — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.specs || {})}`;
    }
    return ctx;
  }

  if (q.includes("variant") || q.includes("version") || q.includes("trim") || q.includes("grade")) {
    let ctx = "VARIANT DATA — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${(car.variants || []).join(" | ")}`;
    }
    return ctx;
  }

  if (q.includes("colour") || q.includes("color") || q.includes("shade") || q.includes("paint")) {
    let ctx = "COLOUR OPTIONS — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${(car.colors || []).join(", ")}`;
    }
    return ctx;
  }

  if (q.includes("infotainment") || q.includes("screen") || q.includes("touchscreen") ||
      q.includes("music") || q.includes("speaker") || q.includes("android") || q.includes("apple") ||
      q.includes("smartplay") || q.includes("feature")) {
    let ctx = "INFOTAINMENT & FEATURES — ALL CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.infotainment || car.keyHighlights || [])}`;
    }
    return ctx;
  }

  return ALL_CARS_OVERVIEW;
}

// ─── Build context string for AI prompt ──────────────────────────────────────
function buildCarContext(query) {
  const detected = detectCars(query);

  if (detected.length === 0) {
    return buildAllCarsTopicContext(query);
  }

  if (detected.length === 1) {
    const car = CAR_DATABASE[detected[0]];
    if (!car) return ALL_CARS_OVERVIEW;
    return `DETAILED DATA FOR ${car.name.toUpperCase()}:\n` + JSON.stringify(car, null, 2);
  }

  let context = "DETAILED COMPARISON DATA:\n";
  for (const key of detected) {
    const car = CAR_DATABASE[key];
    if (car) context += `\n=== ${car.name.toUpperCase()} ===\n` + JSON.stringify(car, null, 2);
  }
  return context;
}

// Build a full system prompt for chat — injects only the relevant car data
function buildSystemPrompt(userQuery) {
  const carContext = buildCarContext(userQuery);
  return `You are an expert Maruti Suzuki sales trainer AI for Bharath Auto dealership (Arena + NEXA). Answer all queries using ONLY the data below — never guess or invent specs.

${carContext}

RULES:
- Be accurate — quote exact figures (mileage, PS, Nm, dimensions) from the data above
- Keep answers SHORT and crisp — 3 to 8 lines maximum, no unnecessary padding
- For variant questions: state which features are on which variant
- For lamp/light questions: state exact lamp names as given in the data
- For colour questions: list exact colour names
- For pricing: say prices vary by city, direct to showroom
- Never invent specs not present in the data above`;
}

// ─── Flat comparison summaries — SINGLE SOURCE OF TRUTH ───────────────────────
// The Compare tab and Cars tab read their figures from here, so they always
// match the data the AI uses (CAR_DATABASE). NEXA cars carry their `summary`
// inside their CAR_DATABASE entry; the original Arena cars are listed below and
// attached onto CAR_DATABASE at load so every car has car.summary.
const LEGACY_SUMMARIES = {
  "Alto K10": { body: "Hatchback", engine: "998cc K10C Dual Jet 3-cyl", power: "68.5 PS", torque: "91.1 Nm", petrolMT: "24.39 km/l", petrolAuto: "24.90 km/l (AGS)", cng: "33.40 km/kg", tank: "27 L", boot: "—", seats: "5", airbags: "6 (all variants)", gc: "160 mm", segment: "Entry hatchback", topVariant: "VXi+(O)", topFeatures: "SmartPlay Studio, Android Auto, Steering Voice Controls, AGS auto option, 6 airbags all variants" },
  "S-Presso": { body: "Micro SUV", engine: "998cc K10C Next Gen Dual Jet 3-cyl", power: "68.5 PS", torque: "91.1 Nm", petrolMT: "24.76 km/l", petrolAuto: "25.30 km/l (AGS)", cng: "32.73 km/kg", tank: "27 L", boot: "—", seats: "5 (CNG: 4)", airbags: "6 (all variants)", gc: "180 mm", segment: "Mini SUV", topVariant: "VXi+(O) AGS", topFeatures: "SUV stance at hatchback price, 180mm GC, first-in-class Steering Voice Controls, Twin Chamber Headlamps, ESP on AGS" },
  "Celerio": { body: "Hatchback", engine: "998cc K10C Next Gen Dual Jet 3-cyl", power: "68.5 PS", torque: "91.1 Nm", petrolMT: "25.24 km/l", petrolAuto: "26.00 km/l (AGS)", cng: "34.43 km/kg", tank: "32 L", boot: "292 L", seats: "5", airbags: "6 (all variants)", gc: "170 mm", segment: "Hatchback", topVariant: "ZXi+ AGS", topFeatures: "India's Most Fuel Efficient 26 km/l, Urbane Black Alloy Wheels R15, Animated Sweeping Headlamps, first-in-segment Hill Hold Assist" },
  "WagonR": { body: "Tall Hatchback", engine: "998cc K10C / 1197cc K12N", power: "68.5 / 90.9 PS", torque: "91.1 / 113 Nm", petrolMT: "24.43 km/l", petrolAuto: "25.19 km/l (AGS)", cng: "33.54 km/kg", tank: "32 L", boot: "335 L", seats: "5", airbags: "6 (all variants)", gc: "170 mm", segment: "Tall Hatchback", topVariant: "ZXi+ 1.2L", topFeatures: "335L boot (largest in class), 1.2L K12N engine option, Dynamic Alloy Wheels, Sporty Floating Roof Design" },
  "Swift": { body: "Hatchback", engine: "1197cc Z12E 3-cyl", power: "81.58 PS", torque: "111.7 Nm", petrolMT: "24.80 km/l", petrolAuto: "25.75 km/l (AMT)", cng: "32.85 km/kg", tank: "37 L", boot: "265 L", seats: "5", airbags: "6 (all variants)", gc: "163 mm", segment: "Premium hatchback", topVariant: "ZXi+", topFeatures: "Smokey Projector Headlamps with Boomerang DRLs, Precision Cut Dual-Tone Alloys, ARKAMYS Surround Sound, All-Black Interior" },
  "Dzire": { body: "Sedan", engine: "1197cc Z12E 3-cyl", power: "81.58 PS", torque: "111.7 Nm", petrolMT: "24.79 km/l", petrolAuto: "25.71 km/l (AMT)", cng: "33.73 km/kg", tank: "37 L", boot: "382 L", seats: "5", airbags: "6 (all variants)", gc: "163 mm", segment: "Compact sedan", topVariant: "ZXi+", topFeatures: "India's Most Fuel-Efficient Sedan, LED Crystal Vision Headlamps, 3D Trinity LED Rear Lamps, Two Tone Precision Cut Alloys, 382L boot, Sunroof" },
  "Brezza": { body: "Compact SUV", engine: "1462cc K15C Smart Hybrid 4-cyl", power: "103.1 PS", torque: "137 Nm", petrolMT: "19.89 km/l", petrolAuto: "19.80 km/l (AT)", cng: "25.51 km/kg", tank: "48 L", boot: "328 L", seats: "5", airbags: "6 (all variants)", gc: "198 mm", segment: "Compact SUV", topVariant: "ZXi+ AT", topFeatures: "Bold Geometric Alloy Wheels 215/60R16, Dual LED Projector Headlamps, HUD with Turn-by-Turn Nav, Smart Hybrid, 360° Camera" },
  "Ertiga": { body: "MPV 7-Seater", engine: "1462cc K15C Smart Hybrid 4-cyl", power: "103.06 PS", torque: "137 Nm", petrolMT: "20.30 km/l", petrolAuto: "19.01 km/l (AT)", cng: "26.11 km/kg", tank: "45 L", boot: "209 L (3rd row up)", seats: "7", airbags: "6 (ZXi/ZXi+)", gc: "180 mm", segment: "MPV", topVariant: "ZXi+ AT", topFeatures: "7 seats 2+3+2, Smart Hybrid, Dual Tone Diamond Cut Alloys, ARKAMYS Surround Sound, Paddle Shifters (AT)" },
  "EECO": { body: "Van / MPV", engine: "1197cc K12N 4-cyl", power: "83.1 PS", torque: "108.6 Nm", petrolMT: "19.71 km/l", petrolAuto: "—", cng: "26.66 km/kg", tank: "32 L", boot: "—", seats: "5 or 7", airbags: "6 + ESP (all variants)", gc: "170 mm", segment: "Commercial van", topVariant: "AC CNG 7-Str", topFeatures: "ESP + 6 airbags every variant (segment unique), 5 or 7-seater, factory CNG, 155R13C 8PR tyres, lowest running cost" },
  "Victoris": { body: "Premium SUV", engine: "1462cc K15C Smart Hybrid 4-cyl", power: "103 PS", torque: "137 Nm", petrolMT: "19.38 km/l", petrolAuto: "19.68 km/l (AT)", cng: "—", tank: "45 L", boot: "—", seats: "5", airbags: "6 (all variants)", gc: "210 mm", segment: "Premium SUV", topVariant: "Zxi+(O) AT", topFeatures: "Level 2 ADAS (10 features), ALLGRIP AWD, Aero Cut Alloy Wheels 17-inch, Infinity Dolby Atmos, Smart Powered Tailgate + Gesture, Electronic Parking Brake, Panoramic Sunroof" }
};

for (const displayName in LEGACY_SUMMARIES) {
  const key = Object.keys(CAR_DATABASE).find(k => CAR_DATABASE[k].name === displayName);
  if (key && !CAR_DATABASE[key].summary) CAR_DATABASE[key].summary = LEGACY_SUMMARIES[displayName];
}

const CAR_SUMMARIES = {};
for (const k in CAR_DATABASE) {
  if (CAR_DATABASE[k].summary) CAR_SUMMARIES[CAR_DATABASE[k].name] = CAR_DATABASE[k].summary;
}

// ─── Comparison feature data — used by the vs-Competition tab ──────────────────
// Holds the feature/spec fields the comparison table needs that aren't already
// in `summary`. Attached onto each CAR_DATABASE entry as car.compare so the
// Maruti side of every comparison comes from this single data source.
// fuel + eff drive the Annual Fuel Cost calculation (15,000 km/yr).
const MARUTI_COMPARE = {
  "Alto K10":     { ncap:"Not tested", ts:"7 inch (VXi+)", wireless:false, sunroof:false, vent:false, sound:"4 speakers", cruise:false, adas:false, auto:true, fuel:"Petrol", eff:24.39, unique:"6 airbags standard + lowest running cost" },
  "S-Presso":     { ncap:"Not tested", ts:"7 inch", wireless:false, sunroof:false, vent:false, sound:"4 speakers", cruise:false, adas:false, auto:true, fuel:"Petrol", eff:24.76, unique:"180mm GC SUV stance + voice controls" },
  "Celerio":      { ncap:"Not tested", ts:"7 inch", wireless:false, sunroof:false, vent:false, sound:"4 speakers", cruise:false, adas:false, auto:true, fuel:"Petrol", eff:25.24, unique:"India's most fuel-efficient petrol car (26 km/l)" },
  "WagonR":       { ncap:"Not tested", ts:"9 inch", wireless:false, sunroof:false, vent:false, sound:"4 speakers", cruise:false, adas:false, auto:true, fuel:"Petrol", eff:24.43, unique:"335L boot (largest in class), tallest cabin" },
  "Swift":        { ncap:"Not tested", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:false, vent:false, sound:"ARKAMYS 6-spk", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:24.80, unique:"ESP + Hill Hold all variants, ARKAMYS, sporty" },
  "Dzire":        { ncap:"5 Star (G-NCAP)", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:true, vent:false, sound:"ARKAMYS 6-spk", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:24.79, unique:"5-star sedan, 382L boot, sunroof, most fuel-efficient sedan" },
  "Brezza":       { ncap:"Not tested", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:true, vent:false, sound:"ARKAMYS 6-spk", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:19.89, unique:"HUD, 360 camera, electric sunroof, 198mm GC" },
  "Ertiga":       { ncap:"Not tested", ts:"9 inch (ZXi+)", wireless:true, sunroof:false, vent:false, sound:"ARKAMYS 6-spk", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:20.30, unique:"True 7-seat 2+3+2, Smart Hybrid, best MPV mileage" },
  "EECO":         { ncap:"Not tested", ts:"None", wireless:false, sunroof:false, vent:false, sound:"Basic", cruise:false, adas:false, auto:false, fuel:"Petrol", eff:19.71, unique:"ESP + 6 airbags every variant, factory CNG" },
  "Victoris":     { ncap:"Not tested", ts:"25.65 cm (10.1 inch)", wireless:true, sunroof:true, vent:true, sound:"Infinity Dolby Atmos", cruise:true, adas:true, auto:true, fuel:"Hybrid", eff:28.65, unique:"Level 2 ADAS, ALLGRIP AWD, Strong Hybrid, exclusive to Bharath Auto" },
  "Baleno":       { ncap:"Not tested", ts:"9 inch SmartPlay Pro+", wireless:true, sunroof:false, vent:false, sound:"ARKAMYS Surround", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:22.35, unique:"Head-Up Display + 360 View Camera in a hatch" },
  "Fronx":        { ncap:"Not tested", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:false, vent:false, sound:"ARKAMYS Surround", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:21.5, unique:"1.0 Turbo Boosterjet + 6AT paddle shifters + HUD" },
  "XL6":          { ncap:"Not tested", ts:"17.78 cm (7 inch)", wireless:true, sunroof:false, vent:true, sound:"ARKAMYS Surround", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:20.90, unique:"6 captain seats with recline/slide, ventilated seats" },
  "Jimny":        { ncap:"Not tested", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:false, vent:false, sound:"6 speakers", cruise:true, adas:false, auto:true, fuel:"Petrol", eff:16.94, unique:"ALLGRIP PRO 4WD low-range, 210mm GC, ladder-frame" },
  "Grand Vitara": { ncap:"Not tested", ts:"9 inch SmartPlay Pro", wireless:true, sunroof:true, vent:true, sound:"Clarion Premium", cruise:true, adas:false, auto:true, fuel:"Hybrid", eff:27.97, unique:"Strong Hybrid 27.97 km/l + ALLGRIP 4x4 + panoramic sunroof" },
  "Invicto":      { ncap:"Not tested", ts:"10.1 inch", wireless:true, sunroof:true, vent:true, sound:"Premium audio", cruise:true, adas:false, auto:true, fuel:"Hybrid", eff:22.16, unique:"Strong Hybrid flagship MPV, Ottoman captain seats, EV mode" },
  "e-Vitara":     { ncap:"Not tested", ts:"25.65 cm (10.1 inch)", wireless:true, sunroof:true, vent:false, sound:"Infinity 8-spk", cruise:true, adas:true, auto:true, fuel:"EV", eff:8.9, unique:"543 km range, 7 airbags incl. knee + Level 2 ADAS" }
};

for (const displayName in MARUTI_COMPARE) {
  const key = Object.keys(CAR_DATABASE).find(k => CAR_DATABASE[k].name === displayName);
  if (key) CAR_DATABASE[key].compare = MARUTI_COMPARE[displayName];
}

// Export for use in the app
if (typeof module !== 'undefined') {
  module.exports = { CAR_DATABASE, CAR_KEYWORDS, CAR_SUMMARIES, MARUTI_COMPARE, ALL_CARS_OVERVIEW, detectCars, buildCarContext, buildSystemPrompt };
}
