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
  "victoris": ["victoris"]
};

// ─── Quick overview for multi-car/general queries ─────────────────────────────
const ALL_CARS_OVERVIEW = `
MARUTI SUZUKI ARENA LINEUP — QUICK OVERVIEW:

ALTO K10 | Entry Hatchback | 998cc | 68.5PS | MT/AGS/CNG | 24.39-33.40 | 6 airbags all variants | Headlamps: Halogen Projector Headlamps | DRL: LED DRLs (VXi+) | Best entry-level value
S-PRESSO | Mini SUV | 998cc | 68.5PS | MT/AGS/CNG | 24.12-32.73 | 180mm GC | Headlamps: LED Headlamps (VXi+) / Halogen (lower) | DRL: LED DRLs | Taillamps: LED Taillamps | SUV look on hatchback budget
CELERIO | Hatchback | 998cc | 68.5PS | MT/AGS/CNG | 26.00-34.43 | Headlamps: Projector Headlamps | DRL: LED DRLs | Taillamps: LED Taillamps | India's most fuel-efficient car | 292L boot
WAGONR | Tall Hatchback | 998/1197cc | 68.5/90.9PS | MT/AGS/CNG | 24.35-33.47 | Headlamps: LED Headlamps (VXi+) | DRL: LED DRLs | Taillamps: LED Taillamps | 335L boot | Best space
SWIFT | Premium Hatchback | 1197cc Z12E | 81.58PS | MT/AMT/CNG | 24.80-32.85 | Headlamps: LED Projector Headlamps | DRL: LED DRLs | Taillamps: 3D LED Taillamps | ESP+Hill Hold all variants | Fun-to-drive
DZIRE | Compact Sedan | 1197cc Z12E | 81.58PS | MT/AMT/CNG | 24.79-33.73 | Headlamps: LED Projector Headlamps | DRL: LED DRLs | Taillamps: LED Taillamps | 382L boot | India's most fuel-efficient sedan
BREZZA | Compact SUV | 1462cc Smart Hybrid | 103.1PS | MT/AT/CNG | 17.80-25.51 | 198mm GC | Headlamps: LED Crystal Vision Headlamps | DRL: Floating LED DRL | Taillamps: 3D Trinity LED Rear Lamps Signature | HUD+360° cam on ZXi+
ERTIGA | 7-Seat MPV | 1462cc Smart Hybrid | 103.06PS | MT/AT/CNG | 20.51-26.11 | 2740mm WB | Headlamps: LED Headlamps | DRL: LED DRLs | Taillamps: LED Taillamps | Best family MPV
EECO | Van/MPV | 1197cc | 60.5PS | MT/CNG | 19.71-26.78 | 5 or 6 seater | Headlamps: Halogen Headlamps | Commercial/utility use
VICTORIS | Premium SUV | 1462/1490cc Strong Hybrid | 103PS+/ADAS | MT/AT/eCVT/AWD | 21.18-28.65 | Headlamps: LED Projector Headlamps | DRL: LED DRLs | Taillamps: LED Connected Taillamps | Level 2 ADAS | Top-of-lineup
`;

// ─── Function to detect which car(s) are mentioned in a query ────────────────
function detectCars(query) {
  const q = query.toLowerCase();
  const detected = [];
  for (const [carKey, keywords] of Object.entries(CAR_KEYWORDS)) {
    if (keywords.some(kw => q.includes(kw))) {
      detected.push(carKey);
    }
  }
  return detected;
}

// ─── Topic-aware context for "all cars" queries ───────────────────────────────
// Instead of sending full overview or full JSON, extract only the relevant field
function buildAllCarsTopicContext(query) {
  const q = query.toLowerCase();

  // Lamps / exterior / lights
  if (q.includes("lamp") || q.includes("light") || q.includes("headlamp") || q.includes("taillight") ||
      q.includes("tail") || q.includes("drl") || q.includes("exterior") || q.includes("grille") ||
      q.includes("wheel") || q.includes("alloy")) {
    let ctx = "EXTERIOR & LAMP DATA — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.exterior || {})}`;
    }
    return ctx;
  }

  // Safety
  if (q.includes("safe") || q.includes("airbag") || q.includes("esp") || q.includes("adas") ||
      q.includes("abs") || q.includes("ebd") || q.includes("crash") || q.includes("rating")) {
    let ctx = "SAFETY DATA — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.safety || {})}`;
    }
    return ctx;
  }

  // Engine / specs / mileage / performance
  if (q.includes("engine") || q.includes("power") || q.includes("torque") || q.includes("cc") ||
      q.includes("mileage") || q.includes("fuel") || q.includes("kmpl") || q.includes("km/l") ||
      q.includes("cng") || q.includes("agt") || q.includes("spec") || q.includes("performance")) {
    let ctx = "ENGINE & SPECS DATA — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.specs || {})}`;
    }
    return ctx;
  }

  // Variants
  if (q.includes("variant") || q.includes("version") || q.includes("trim") || q.includes("grade")) {
    let ctx = "VARIANT DATA — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${(car.variants || []).join(" | ")}`;
    }
    return ctx;
  }

  // Colours
  if (q.includes("colour") || q.includes("color") || q.includes("shade") || q.includes("paint")) {
    let ctx = "COLOUR OPTIONS — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${(car.colors || []).join(", ")}`;
    }
    return ctx;
  }

  // Infotainment / features
  if (q.includes("infotainment") || q.includes("screen") || q.includes("touchscreen") ||
      q.includes("music") || q.includes("speaker") || q.includes("android") || q.includes("apple") ||
      q.includes("smartplay") || q.includes("feature")) {
    let ctx = "INFOTAINMENT & FEATURES — ALL ARENA CARS:\n";
    for (const car of Object.values(CAR_DATABASE)) {
      ctx += `\n${car.name.toUpperCase()}: ${JSON.stringify(car.infotainment || car.keySellingPoints || [])}`;
    }
    return ctx;
  }

  // Default — compact overview
  return ALL_CARS_OVERVIEW;
}

// ─── Build context string for AI prompt ──────────────────────────────────────
function buildCarContext(query) {
  const detected = detectCars(query);

  if (detected.length === 0) {
    // No specific car detected — use topic-aware all-cars context
    return buildAllCarsTopicContext(query);
  }

  if (detected.length === 1) {
    const car = CAR_DATABASE[detected[0]];
    if (!car) return ALL_CARS_OVERVIEW;
    return `DETAILED DATA FOR ${car.name.toUpperCase()}:\n` + JSON.stringify(car, null, 2);
  }

  // Multiple cars — return detailed data for each (comparison)
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
  return `You are an expert Maruti Suzuki Arena sales trainer AI for Bharath Auto dealership. Answer all queries using ONLY the data below — never guess or invent specs.

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

// Export for use in the app
if (typeof module !== 'undefined') {
  module.exports = { CAR_DATABASE, CAR_KEYWORDS, ALL_CARS_OVERVIEW, detectCars, buildCarContext, buildSystemPrompt };
}
