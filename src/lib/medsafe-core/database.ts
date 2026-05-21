export type Severity = 'Safe' | 'Mild' | 'Moderate' | 'Severe' | 'Critical';

export interface Drug {
  id: string;
  name: string;
  genericName: string;
  category: string;
  aliases: string[];
  hasBlackBoxWarning: boolean;
  contraindications: string[]; // e.g., 'Kidney Disease', 'Heart Failure'
}

export interface Interaction {
  drug1Id: string;
  drug2Id: string;
  severity: Severity;
  mechanism: string;
  description: string;
  alternatives: string[];
}

export interface PatientProfile {
  ageGroup: 'Under 18' | '18-64' | '65+';
  conditions: string[];
  name?: string;
  age?: number;
}

// ──────────────────────────────────────────────────
//  DRUG DATABASE — 40+ drugs with Indian brand aliases
// ──────────────────────────────────────────────────

export const DRUGS: Drug[] = [

  // ─── NSAIDs / Analgesics ───────────────────────
  {
    id: 'd001', name: 'Aspirin', genericName: 'Acetylsalicylic acid',
    category: 'NSAID / Antiplatelet',
    aliases: ['aspirin', 'ecotrin', 'ecosprin', 'disprin', 'delisprin'],
    hasBlackBoxWarning: false,
    contraindications: ['Bleeding Disorders', 'Stomach Ulcers', 'Asthma']
  },
  {
    id: 'd002', name: 'Ibuprofen', genericName: 'Ibuprofen',
    category: 'NSAID',
    aliases: ['ibuprofen', 'advil', 'motrin', 'brufen', 'ibugesic', 'combiflam'],
    hasBlackBoxWarning: true,
    contraindications: ['Kidney Disease', 'Heart Failure', 'Stomach Ulcers', 'Bleeding Disorders']
  },
  {
    id: 'd003', name: 'Naproxen', genericName: 'Naproxen',
    category: 'NSAID',
    aliases: ['naproxen', 'aleve', 'naprosyn', 'naxdom'],
    hasBlackBoxWarning: true,
    contraindications: ['Kidney Disease', 'Heart Failure', 'Stomach Ulcers']
  },
  {
    id: 'd004', name: 'Acetaminophen', genericName: 'Paracetamol',
    category: 'Analgesic / Antipyretic',
    aliases: ['acetaminophen', 'tylenol', 'paracetamol', 'crocin', 'dolo', 'dolo-650', 'calpol', 'metacin'],
    hasBlackBoxWarning: true,
    contraindications: ['Liver Disease']
  },
  {
    id: 'd005', name: 'Tramadol', genericName: 'Tramadol',
    category: 'Opioid Analgesic',
    aliases: ['tramadol', 'ultram', 'contramal', 'domadol'],
    hasBlackBoxWarning: true,
    contraindications: ['Seizure Disorders', 'Depression']
  },
  {
    id: 'd040', name: 'Diclofenac', genericName: 'Diclofenac',
    category: 'NSAID',
    aliases: ['diclofenac', 'voveran', 'voveran-sr', 'voltaren', 'diclogel', 'reactin'],
    hasBlackBoxWarning: true,
    contraindications: ['Kidney Disease', 'Heart Failure', 'Stomach Ulcers', 'Bleeding Disorders']
  },

  // ─── Antibiotics ───────────────────────────────
  {
    id: 'd009', name: 'Amoxicillin', genericName: 'Amoxicillin',
    category: 'Penicillin Antibiotic',
    aliases: ['amoxicillin', 'amoxil', 'mox', 'novamox', 'amoxyclav'],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd010', name: 'Azithromycin', genericName: 'Azithromycin',
    category: 'Macrolide Antibiotic',
    aliases: ['azithromycin', 'zithromax', 'azithral', 'azee', 'azilide'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease']
  },
  {
    id: 'd011', name: 'Ciprofloxacin', genericName: 'Ciprofloxacin',
    category: 'Fluoroquinolone Antibiotic',
    aliases: ['ciprofloxacin', 'cipro', 'ciplox', 'cifran'],
    hasBlackBoxWarning: true,
    contraindications: ['Seizure Disorders', 'Pregnancy']
  },
  {
    id: 'd012', name: 'Metronidazole', genericName: 'Metronidazole',
    category: 'Nitroimidazole Antibiotic',
    aliases: ['metronidazole', 'flagyl', 'metrogyl', 'aristogyl'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease']
  },

  // ─── Diabetes ──────────────────────────────────
  {
    id: 'd013', name: 'Metformin', genericName: 'Metformin',
    category: 'Biguanide Antidiabetic',
    aliases: ['metformin', 'glucophage', 'glycomet', 'glycomet-gp', 'obimet', 'glyciphage'],
    hasBlackBoxWarning: true,
    contraindications: ['Kidney Disease', 'Liver Disease']
  },
  {
    id: 'd030', name: 'Glimepiride', genericName: 'Glimepiride',
    category: 'Sulfonylurea Antidiabetic',
    aliases: ['glimepiride', 'amaryl', 'glimisave', 'glimy'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease']
  },
  {
    id: 'd031', name: 'Insulin Glargine', genericName: 'Insulin Glargine',
    category: 'Long-acting Insulin',
    aliases: ['insulin', 'insulin glargine', 'lantus', 'basalog', 'glaritus'],
    hasBlackBoxWarning: false,
    contraindications: []
  },

  // ─── Blood Thinners / Anticoagulants ───────────
  {
    id: 'd014', name: 'Warfarin', genericName: 'Warfarin',
    category: 'Anticoagulant',
    aliases: ['warfarin', 'coumadin', 'warf', 'acitrom'],
    hasBlackBoxWarning: true,
    contraindications: ['Bleeding Disorders', 'Pregnancy', 'Liver Disease', 'Stomach Ulcers']
  },
  {
    id: 'd015', name: 'Apixaban', genericName: 'Apixaban',
    category: 'DOAC Anticoagulant',
    aliases: ['apixaban', 'eliquis', 'apigat'],
    hasBlackBoxWarning: true,
    contraindications: ['Bleeding Disorders', 'Liver Disease']
  },
  {
    id: 'd041', name: 'Clopidogrel', genericName: 'Clopidogrel',
    category: 'Antiplatelet',
    aliases: ['clopidogrel', 'plavix', 'clopitab', 'clopilet', 'deplatt'],
    hasBlackBoxWarning: true,
    contraindications: ['Bleeding Disorders', 'Stomach Ulcers']
  },

  // ─── Blood Pressure / Cardiovascular ──────────
  {
    id: 'd006', name: 'Lisinopril', genericName: 'Lisinopril',
    category: 'ACE Inhibitor',
    aliases: ['lisinopril', 'listril', 'lipril'],
    hasBlackBoxWarning: true,
    contraindications: ['Pregnancy', 'Kidney Disease']
  },
  {
    id: 'd007', name: 'Losartan', genericName: 'Losartan',
    category: 'ARB',
    aliases: ['losartan', 'cozaar', 'losacar', 'losar', 'repace'],
    hasBlackBoxWarning: true,
    contraindications: ['Pregnancy']
  },
  {
    id: 'd008', name: 'Metoprolol', genericName: 'Metoprolol',
    category: 'Beta Blocker',
    aliases: ['metoprolol', 'lopressor', 'betaloc', 'metxl', 'met-xl'],
    hasBlackBoxWarning: false,
    contraindications: ['Asthma', 'COPD']
  },
  {
    id: 'd032', name: 'Amlodipine', genericName: 'Amlodipine',
    category: 'Calcium Channel Blocker',
    aliases: ['amlodipine', 'norvasc', 'amlong', 'amlokind', 'stamlo'],
    hasBlackBoxWarning: false,
    contraindications: ['Heart Failure']
  },
  {
    id: 'd033', name: 'Atenolol', genericName: 'Atenolol',
    category: 'Beta Blocker',
    aliases: ['atenolol', 'tenormin', 'aten', 'betacard'],
    hasBlackBoxWarning: false,
    contraindications: ['Asthma', 'COPD']
  },
  {
    id: 'd042', name: 'Telmisartan', genericName: 'Telmisartan',
    category: 'ARB',
    aliases: ['telmisartan', 'micardis', 'telma', 'telmikind', 'telvas'],
    hasBlackBoxWarning: true,
    contraindications: ['Pregnancy']
  },

  // ─── Statins / Cholesterol ─────────────────────
  {
    id: 'd016', name: 'Atorvastatin', genericName: 'Atorvastatin',
    category: 'Statin',
    aliases: ['atorvastatin', 'lipitor', 'atorva', 'atorlip', 'tonact'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease', 'Pregnancy']
  },
  {
    id: 'd017', name: 'Rosuvastatin', genericName: 'Rosuvastatin',
    category: 'Statin',
    aliases: ['rosuvastatin', 'crestor', 'rosuvas', 'rozavel', 'rosulip'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease', 'Pregnancy']
  },

  // ─── Antacids / PPI / GI ──────────────────────
  {
    id: 'd018', name: 'Omeprazole', genericName: 'Omeprazole',
    category: 'Proton Pump Inhibitor',
    aliases: ['omeprazole', 'prilosec', 'omez', 'ocid'],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd034', name: 'Pantoprazole', genericName: 'Pantoprazole',
    category: 'Proton Pump Inhibitor',
    aliases: ['pantoprazole', 'protonix', 'pantocid', 'pan-d', 'pan', 'pantop'],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd043', name: 'Ranitidine', genericName: 'Ranitidine',
    category: 'H2 Receptor Antagonist',
    aliases: ['ranitidine', 'zantac', 'rantac', 'aciloc', 'zinetac'],
    hasBlackBoxWarning: false,
    contraindications: ['Kidney Disease']
  },

  // ─── Antidepressants / SSRI ────────────────────
  {
    id: 'd019', name: 'Sertraline', genericName: 'Sertraline',
    category: 'SSRI Antidepressant',
    aliases: ['sertraline', 'zoloft', 'daxid', 'serlift'],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd021', name: 'Fluoxetine', genericName: 'Fluoxetine',
    category: 'SSRI Antidepressant',
    aliases: ['fluoxetine', 'prozac', 'fludac', 'flunil'],
    hasBlackBoxWarning: true,
    contraindications: []
  },

  // ─── Thyroid ───────────────────────────────────
  {
    id: 'd022', name: 'Levothyroxine', genericName: 'Levothyroxine',
    category: 'Thyroid Hormone',
    aliases: ['levothyroxine', 'synthroid', 'thyronorm', 'eltroxin', 'lethyrox'],
    hasBlackBoxWarning: true,
    contraindications: []
  },

  // ─── Anti-anxiety / Benzodiazepines ────────────
  {
    id: 'd023', name: 'Alprazolam', genericName: 'Alprazolam',
    category: 'Benzodiazepine',
    aliases: ['alprazolam', 'xanax', 'alprax', 'restyl', 'trika'],
    hasBlackBoxWarning: true,
    contraindications: ['Liver Disease']
  },
  {
    id: 'd024', name: 'Diazepam', genericName: 'Diazepam',
    category: 'Benzodiazepine',
    aliases: ['diazepam', 'valium', 'calmpose', 'placidox'],
    hasBlackBoxWarning: true,
    contraindications: ['Liver Disease', 'COPD']
  },

  // ─── Antihistamines ────────────────────────────
  {
    id: 'd025', name: 'Cetirizine', genericName: 'Cetirizine',
    category: 'Antihistamine',
    aliases: ['cetirizine', 'zyrtec', 'cetzine', 'okacet', 'alerid'],
    hasBlackBoxWarning: false,
    contraindications: ['Kidney Disease']
  },
  {
    id: 'd026', name: 'Loratadine', genericName: 'Loratadine',
    category: 'Antihistamine',
    aliases: ['loratadine', 'claritin', 'lorfast', 'alaspan'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease']
  },

  // ─── Corticosteroids ───────────────────────────
  {
    id: 'd027', name: 'Prednisolone', genericName: 'Prednisolone',
    category: 'Corticosteroid',
    aliases: ['prednisolone', 'omnacortil', 'wysolone', 'deltasone', 'prednisone'],
    hasBlackBoxWarning: false,
    contraindications: ['Diabetes', 'Stomach Ulcers']
  },

  // ─── Antiepileptics ────────────────────────────
  {
    id: 'd028', name: 'Phenytoin', genericName: 'Phenytoin',
    category: 'Antiepileptic',
    aliases: ['phenytoin', 'dilantin', 'eptoin', 'phenytek'],
    hasBlackBoxWarning: true,
    contraindications: ['Liver Disease', 'Pregnancy']
  },
  {
    id: 'd029', name: 'Carbamazepine', genericName: 'Carbamazepine',
    category: 'Antiepileptic',
    aliases: ['carbamazepine', 'tegretol', 'zen retard', 'mazetol', 'tegrital'],
    hasBlackBoxWarning: true,
    contraindications: ['Liver Disease', 'Pregnancy']
  },

  // ─── Antifungal ────────────────────────────────
  {
    id: 'd035', name: 'Fluconazole', genericName: 'Fluconazole',
    category: 'Azole Antifungal',
    aliases: ['fluconazole', 'diflucan', 'forcan', 'flucos', 'zocon'],
    hasBlackBoxWarning: false,
    contraindications: ['Liver Disease']
  },

  // ─── Muscle Relaxant ───────────────────────────
  {
    id: 'd036', name: 'Cyclobenzaprine', genericName: 'Cyclobenzaprine',
    category: 'Muscle Relaxant',
    aliases: ['cyclobenzaprine', 'flexeril', 'flexura'],
    hasBlackBoxWarning: false,
    contraindications: ['Heart Failure']
  },

  // ─── Antigout ──────────────────────────────────
  {
    id: 'd037', name: 'Allopurinol', genericName: 'Allopurinol',
    category: 'Xanthine Oxidase Inhibitor',
    aliases: ['allopurinol', 'zyloprim', 'zyloric'],
    hasBlackBoxWarning: false,
    contraindications: ['Kidney Disease']
  },

  // ─── Antipsychotic ─────────────────────────────
  {
    id: 'd038', name: 'Olanzapine', genericName: 'Olanzapine',
    category: 'Atypical Antipsychotic',
    aliases: ['olanzapine', 'zyprexa', 'oleanz', 'olanex'],
    hasBlackBoxWarning: true,
    contraindications: ['Diabetes']
  },

  // ─── Prokinetic / Anti-emetic ──────────────────
  {
    id: 'd039', name: 'Domperidone', genericName: 'Domperidone',
    category: 'Prokinetic / Anti-emetic',
    aliases: ['domperidone', 'motilium', 'domstal', 'vomistop'],
    hasBlackBoxWarning: false,
    contraindications: ['Heart Failure']
  },
,
  {
    id: 'd100', name: 'Losaprine', genericName: 'losaprine',
    category: 'Antiplatelet',
    aliases: ["losaprine","losaprine","losapex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd101', name: 'Methicillin', genericName: 'methicillin',
    category: 'Thyroid Hormone',
    aliases: ["methicillin","methicillin","methiex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd102', name: 'Pravanib', genericName: 'pravanib',
    category: 'Dopamine Agonist',
    aliases: ["pravanib","pravanib","pravaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd103', name: 'Gabasporin', genericName: 'gabasporin',
    category: 'SNRI',
    aliases: ["gabasporin","gabasporin","gabasex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd104', name: 'Losathyroxine', genericName: 'losathyroxine',
    category: 'NSAID',
    aliases: ["losathyroxine","losathyroxine","losatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd105', name: 'Amoxifloxacin', genericName: 'amoxifloxacin',
    category: 'Immunosuppressant',
    aliases: ["amoxifloxacin","amoxifloxacin","amoxiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd106', name: 'Ticauracil', genericName: 'ticauracil',
    category: 'Bronchodilator',
    aliases: ["ticauracil","ticauracil","ticauex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd107', name: 'Loratecan', genericName: 'loratecan',
    category: 'Chemotherapy',
    aliases: ["loratecan","loratecan","loratex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd108', name: 'Inflixlukast', genericName: 'inflixlukast',
    category: 'Diuretic',
    aliases: ["inflixlukast","inflixlukast","infliex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd109', name: 'Nivoluprine', genericName: 'nivoluprine',
    category: 'SNRI',
    aliases: ["nivoluprine","nivoluprine","nivolex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd110', name: 'Glipizepam', genericName: 'glipizepam',
    category: 'Antifungal',
    aliases: ["glipizepam","glipizepam","glipiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd111', name: 'Rivascam', genericName: 'rivascam',
    category: 'Antiviral',
    aliases: ["rivascam","rivascam","rivasex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd112', name: 'Sitazide', genericName: 'sitazide',
    category: 'SNRI',
    aliases: ["sitazide","sitazide","sitazex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd113', name: 'Dabralimus', genericName: 'dabralimus',
    category: 'SNRI',
    aliases: ["dabralimus","dabralimus","dabraex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd114', name: 'Pemetrexib', genericName: 'pemetrexib',
    category: 'Thyroid Hormone',
    aliases: ["pemetrexib","pemetrexib","pemetex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd115', name: 'Glipilukast', genericName: 'glipilukast',
    category: 'NSAID',
    aliases: ["glipilukast","glipilukast","glipiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd116', name: 'Levetixaban', genericName: 'levetixaban',
    category: 'Antihistamine',
    aliases: ["levetixaban","levetixaban","levetex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd117', name: 'Irinorole', genericName: 'irinorole',
    category: 'Diuretic',
    aliases: ["irinorole","irinorole","irinoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd118', name: 'Valsarposide', genericName: 'valsarposide',
    category: 'Anticoagulant',
    aliases: ["valsarposide","valsarposide","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd119', name: 'Montelucodone', genericName: 'montelucodone',
    category: 'Bronchodilator',
    aliases: ["montelucodone","montelucodone","monteex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd120', name: 'Fenofsartan', genericName: 'fenofsartan',
    category: 'Kinase Inhibitor',
    aliases: ["fenofsartan","fenofsartan","fenofex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd121', name: 'Valsarrabine', genericName: 'valsarrabine',
    category: 'SNRI',
    aliases: ["valsarrabine","valsarrabine","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd122', name: 'Naprocitabine', genericName: 'naprocitabine',
    category: 'Antiplatelet',
    aliases: ["naprocitabine","naprocitabine","naproex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd123', name: 'Pregathyroxine', genericName: 'pregathyroxine',
    category: 'Diuretic',
    aliases: ["pregathyroxine","pregathyroxine","pregaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd124', name: 'Simvathium', genericName: 'simvathium',
    category: 'Chemotherapy',
    aliases: ["simvathium","simvathium","simvaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd125', name: 'Docetagine', genericName: 'docetagine',
    category: 'NSAID',
    aliases: ["docetagine","docetagine","docetex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd126', name: 'Bevafarin', genericName: 'bevafarin',
    category: 'SNRI',
    aliases: ["bevafarin","bevafarin","bevafex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd127', name: 'Carbamapram', genericName: 'carbamapram',
    category: 'Antifungal',
    aliases: ["carbamapram","carbamapram","carbaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd128', name: 'Fludarathium', genericName: 'fludarathium',
    category: 'Antihistamine',
    aliases: ["fludarathium","fludarathium","fludaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd129', name: 'Etanerparin', genericName: 'etanerparin',
    category: 'Antipsychotic',
    aliases: ["etanerparin","etanerparin","etaneex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd130', name: 'Trametigine', genericName: 'trametigine',
    category: 'Antiplatelet',
    aliases: ["trametigine","trametigine","trameex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd131', name: 'Metocristine', genericName: 'metocristine',
    category: 'Mood Stabilizer',
    aliases: ["metocristine","metocristine","metocex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd132', name: 'Vinorelxetine', genericName: 'vinorelxetine',
    category: 'Dopamine Agonist',
    aliases: ["vinorelxetine","vinorelxetine","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd133', name: 'Valsarthium', genericName: 'valsarthium',
    category: 'ARB',
    aliases: ["valsarthium","valsarthium","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd134', name: 'Panifloxacin', genericName: 'panifloxacin',
    category: 'Mood Stabilizer',
    aliases: ["panifloxacin","panifloxacin","panifex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd135', name: 'Venlaate', genericName: 'venlaate',
    category: 'ACE Inhibitor',
    aliases: ["venlaate","venlaate","venlaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd136', name: 'Metorole', genericName: 'metorole',
    category: 'Kinase Inhibitor',
    aliases: ["metorole","metorole","metorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd137', name: 'Zipraprofen', genericName: 'zipraprofen',
    category: 'Antiviral',
    aliases: ["zipraprofen","zipraprofen","zipraex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd138', name: 'Rivasxaban', genericName: 'rivasxaban',
    category: 'Beta Blocker',
    aliases: ["rivasxaban","rivasxaban","rivasex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd139', name: 'Trastumide', genericName: 'trastumide',
    category: 'Mood Stabilizer',
    aliases: ["trastumide","trastumide","trastex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd140', name: 'Sertapentin', genericName: 'sertapentin',
    category: 'Mood Stabilizer',
    aliases: ["sertapentin","sertapentin","sertaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd141', name: 'Cetuxiterol', genericName: 'cetuxiterol',
    category: 'Chemotherapy',
    aliases: ["cetuxiterol","cetuxiterol","cetuxex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd142', name: 'Paclicetam', genericName: 'paclicetam',
    category: 'Antipsychotic',
    aliases: ["paclicetam","paclicetam","pacliex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd143', name: 'Mitomypine', genericName: 'mitomypine',
    category: 'Antihistamine',
    aliases: ["mitomypine","mitomypine","mitomex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd144', name: 'Dabitropium', genericName: 'dabitropium',
    category: 'Bronchodilator',
    aliases: ["dabitropium","dabitropium","dabitex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd145', name: 'Fludaracam', genericName: 'fludaracam',
    category: 'Dopamine Agonist',
    aliases: ["fludaracam","fludaracam","fludaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd146', name: 'Donexide', genericName: 'donexide',
    category: 'Chemotherapy',
    aliases: ["donexide","donexide","donexex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd147', name: 'Ezetpurine', genericName: 'ezetpurine',
    category: 'Antibiotic',
    aliases: ["ezetpurine","ezetpurine","ezetpex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd148', name: 'Mercaptomycin', genericName: 'mercaptomycin',
    category: 'Opioid',
    aliases: ["mercaptomycin","mercaptomycin","mercaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd149', name: 'Pantolimus', genericName: 'pantolimus',
    category: 'Opioid',
    aliases: ["pantolimus","pantolimus","pantoex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd150', name: 'Topotecristine', genericName: 'topotecristine',
    category: 'Dopamine Agonist',
    aliases: ["topotecristine","topotecristine","topotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd151', name: 'Ticataxel', genericName: 'ticataxel',
    category: 'Calcium Channel Blocker',
    aliases: ["ticataxel","ticataxel","ticatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd152', name: 'Zolpigliptin', genericName: 'zolpigliptin',
    category: 'Antiplatelet',
    aliases: ["zolpigliptin","zolpigliptin","zolpiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd153', name: 'Pembroliformin', genericName: 'pembroliformin',
    category: 'PPI',
    aliases: ["pembroliformin","pembroliformin","pembrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd154', name: 'Crizomide', genericName: 'crizomide',
    category: 'SNRI',
    aliases: ["crizomide","crizomide","crizoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd155', name: 'Ethopril', genericName: 'ethopril',
    category: 'Opioid',
    aliases: ["ethopril","ethopril","ethopex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd156', name: 'Ezetgine', genericName: 'ezetgine',
    category: 'Anticoagulant',
    aliases: ["ezetgine","ezetgine","ezetgex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd157', name: 'Fluoroumycin', genericName: 'fluoroumycin',
    category: 'Beta Blocker',
    aliases: ["fluoroumycin","fluoroumycin","fluorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd158', name: 'Citazepine', genericName: 'citazepine',
    category: 'Opioid',
    aliases: ["citazepine","citazepine","citazex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd159', name: 'Osimergliptin', genericName: 'osimergliptin',
    category: 'Antiplatelet',
    aliases: ["osimergliptin","osimergliptin","osimeex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd160', name: 'Cyclophenolate', genericName: 'cyclophenolate',
    category: 'Chemotherapy',
    aliases: ["cyclophenolate","cyclophenolate","cycloex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd161', name: 'Zoniuracil', genericName: 'zoniuracil',
    category: 'Diuretic',
    aliases: ["zoniuracil","zoniuracil","zoniuex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd162', name: 'Ceritiformin', genericName: 'ceritiformin',
    category: 'Thyroid Hormone',
    aliases: ["ceritiformin","ceritiformin","ceritex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd163', name: 'Nilotiurea', genericName: 'nilotiurea',
    category: 'Beta Blocker',
    aliases: ["nilotiurea","nilotiurea","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd164', name: 'Valprofarin', genericName: 'valprofarin',
    category: 'Antifungal',
    aliases: ["valprofarin","valprofarin","valprex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd165', name: 'Azathioxib', genericName: 'azathioxib',
    category: 'Antidiabetic',
    aliases: ["azathioxib","azathioxib","azathex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd166', name: 'Ipratrocillin', genericName: 'ipratrocillin',
    category: 'Chemotherapy',
    aliases: ["ipratrocillin","ipratrocillin","ipratex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd167', name: 'Naprodone', genericName: 'naprodone',
    category: 'Antibiotic',
    aliases: ["naprodone","naprodone","naproex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd168', name: 'Alectinib', genericName: 'alectinib',
    category: 'Corticosteroid',
    aliases: ["alectinib","alectinib","alectex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd169', name: 'Cyclophosgine', genericName: 'cyclophosgine',
    category: 'Calcium Channel Blocker',
    aliases: ["cyclophosgine","cyclophosgine","cycloex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd170', name: 'Ciproflozin', genericName: 'ciproflozin',
    category: 'Antibiotic',
    aliases: ["ciproflozin","ciproflozin","ciproex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd171', name: 'Olanphenolate', genericName: 'olanphenolate',
    category: 'Thyroid Hormone',
    aliases: ["olanphenolate","olanphenolate","olanpex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd172', name: 'Ceritimycin', genericName: 'ceritimycin',
    category: 'Anticonvulsant',
    aliases: ["ceritimycin","ceritimycin","ceritex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd173', name: 'Risperpiride', genericName: 'risperpiride',
    category: 'PPI',
    aliases: ["risperpiride","risperpiride","rispeex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd174', name: 'Vincrissporin', genericName: 'vincrissporin',
    category: 'Statin',
    aliases: ["vincrissporin","vincrissporin","vincrex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd175', name: 'Olancillin', genericName: 'olancillin',
    category: 'PPI',
    aliases: ["olancillin","olancillin","olancex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd176', name: 'Cisplacillin', genericName: 'cisplacillin',
    category: 'Bronchodilator',
    aliases: ["cisplacillin","cisplacillin","cisplex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd177', name: 'Gabacitabine', genericName: 'gabacitabine',
    category: 'ACE Inhibitor',
    aliases: ["gabacitabine","gabacitabine","gabacex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd178', name: 'Flurabine', genericName: 'flurabine',
    category: 'Diuretic',
    aliases: ["flurabine","flurabine","fluraex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd179', name: 'Lorazide', genericName: 'lorazide',
    category: 'Dopamine Agonist',
    aliases: ["lorazide","lorazide","lorazex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd180', name: 'Gabasone', genericName: 'gabasone',
    category: 'Benzodiazepine',
    aliases: ["gabasone","gabasone","gabasex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd181', name: 'Dicloate', genericName: 'dicloate',
    category: 'Mood Stabilizer',
    aliases: ["dicloate","dicloate","dicloex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd182', name: 'Panimab', genericName: 'panimab',
    category: 'ACE Inhibitor',
    aliases: ["panimab","panimab","panimex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd183', name: 'Tiotroflozin', genericName: 'tiotroflozin',
    category: 'Monoclonal Antibody',
    aliases: ["tiotroflozin","tiotroflozin","tiotrex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd184', name: 'Ceriticodone', genericName: 'ceriticodone',
    category: 'Kinase Inhibitor',
    aliases: ["ceriticodone","ceriticodone","ceritex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd185', name: 'Ezetprazole', genericName: 'ezetprazole',
    category: 'NSAID',
    aliases: ["ezetprazole","ezetprazole","ezetpex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd186', name: 'Nilotimate', genericName: 'nilotimate',
    category: 'Opioid',
    aliases: ["nilotimate","nilotimate","nilotex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd187', name: 'Avelumatoin', genericName: 'avelumatoin',
    category: 'Benzodiazepine',
    aliases: ["avelumatoin","avelumatoin","aveluex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd188', name: 'Momegatran', genericName: 'momegatran',
    category: 'SNRI',
    aliases: ["momegatran","momegatran","momegex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd189', name: 'Levomate', genericName: 'levomate',
    category: 'Antihistamine',
    aliases: ["levomate","levomate","levomex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd190', name: 'Methothyroxine', genericName: 'methothyroxine',
    category: 'Antiplatelet',
    aliases: ["methothyroxine","methothyroxine","methoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd191', name: 'Avelumapiride', genericName: 'avelumapiride',
    category: 'Kinase Inhibitor',
    aliases: ["avelumapiride","avelumapiride","aveluex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd192', name: 'Topotefenac', genericName: 'topotefenac',
    category: 'ACE Inhibitor',
    aliases: ["topotefenac","topotefenac","topotex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd193', name: 'Levomate', genericName: 'levomate',
    category: 'Anticoagulant',
    aliases: ["levomate","levomate","levomex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd194', name: 'Aripicitabine', genericName: 'aripicitabine',
    category: 'Monoclonal Antibody',
    aliases: ["aripicitabine","aripicitabine","aripiex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd195', name: 'Paclimine', genericName: 'paclimine',
    category: 'Bronchodilator',
    aliases: ["paclimine","paclimine","pacliex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd196', name: 'Galanposide', genericName: 'galanposide',
    category: 'Dopamine Agonist',
    aliases: ["galanposide","galanposide","galanex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd197', name: 'Alpraate', genericName: 'alpraate',
    category: 'Opioid',
    aliases: ["alpraate","alpraate","alpraex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd198', name: 'Duloxcitabine', genericName: 'duloxcitabine',
    category: 'Antihistamine',
    aliases: ["duloxcitabine","duloxcitabine","duloxex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd199', name: 'Trametistatin', genericName: 'trametistatin',
    category: 'Immunosuppressant',
    aliases: ["trametistatin","trametistatin","trameex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd200', name: 'Valsarpine', genericName: 'valsarpine',
    category: 'Antihistamine',
    aliases: ["valsarpine","valsarpine","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd201', name: 'Atorvaxib', genericName: 'atorvaxib',
    category: 'Diuretic',
    aliases: ["atorvaxib","atorvaxib","atorvex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd202', name: 'Azathiopurine', genericName: 'azathiopurine',
    category: 'Monoclonal Antibody',
    aliases: ["azathiopurine","azathiopurine","azathex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd203', name: 'Cetuxizepam', genericName: 'cetuxizepam',
    category: 'Antiviral',
    aliases: ["cetuxizepam","cetuxizepam","cetuxex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd204', name: 'Levoxide', genericName: 'levoxide',
    category: 'SSRI',
    aliases: ["levoxide","levoxide","levoxex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd205', name: 'Trametibine', genericName: 'trametibine',
    category: 'Anticonvulsant',
    aliases: ["trametibine","trametibine","trameex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd206', name: 'Mitomyrelbine', genericName: 'mitomyrelbine',
    category: 'Antidiabetic',
    aliases: ["mitomyrelbine","mitomyrelbine","mitomex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd207', name: 'Pantoprazole', genericName: 'pantoprazole',
    category: 'Antifungal',
    aliases: ["pantoprazole","pantoprazole","pantoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd208', name: 'Valprozole', genericName: 'valprozole',
    category: 'Antipsychotic',
    aliases: ["valprozole","valprozole","valprex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd209', name: 'Levoblastine', genericName: 'levoblastine',
    category: 'ACE Inhibitor',
    aliases: ["levoblastine","levoblastine","levobex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd210', name: 'Hydroxyuphamide', genericName: 'hydroxyuphamide',
    category: 'Dopamine Agonist',
    aliases: ["hydroxyuphamide","hydroxyuphamide","hydroex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd211', name: 'Levozide', genericName: 'levozide',
    category: 'Opioid',
    aliases: ["levozide","levozide","levozex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd212', name: 'Inflixgliptin', genericName: 'inflixgliptin',
    category: 'Corticosteroid',
    aliases: ["inflixgliptin","inflixgliptin","infliex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd213', name: 'Donerubicin', genericName: 'donerubicin',
    category: 'SNRI',
    aliases: ["donerubicin","donerubicin","donerex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd214', name: 'Oxcarbxide', genericName: 'oxcarbxide',
    category: 'PPI',
    aliases: ["oxcarbxide","oxcarbxide","oxcarex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd215', name: 'Pantotine', genericName: 'pantotine',
    category: 'Antifungal',
    aliases: ["pantotine","pantotine","pantoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd216', name: 'Predniblastine', genericName: 'predniblastine',
    category: 'SNRI',
    aliases: ["predniblastine","predniblastine","prednex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd217', name: 'Donegliptin', genericName: 'donegliptin',
    category: 'Antihistamine',
    aliases: ["donegliptin","donegliptin","donegex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd218', name: 'Halomine', genericName: 'halomine',
    category: 'Chemotherapy',
    aliases: ["halomine","halomine","halomex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd219', name: 'Methixaban', genericName: 'methixaban',
    category: 'Dopamine Agonist',
    aliases: ["methixaban","methixaban","methiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd220', name: 'Tiotroposide', genericName: 'tiotroposide',
    category: 'Antibiotic',
    aliases: ["tiotroposide","tiotroposide","tiotrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd221', name: 'Phenypril', genericName: 'phenypril',
    category: 'Anticonvulsant',
    aliases: ["phenypril","phenypril","phenyex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd222', name: 'Olanthium', genericName: 'olanthium',
    category: 'ARB',
    aliases: ["olanthium","olanthium","olantex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd223', name: 'Amlodimycin', genericName: 'amlodimycin',
    category: 'Thyroid Hormone',
    aliases: ["amlodimycin","amlodimycin","amlodex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd224', name: 'Trastuprofen', genericName: 'trastuprofen',
    category: 'Antibiotic',
    aliases: ["trastuprofen","trastuprofen","trastex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd225', name: 'Cipropine', genericName: 'cipropine',
    category: 'Diuretic',
    aliases: ["cipropine","cipropine","ciproex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd226', name: 'Ciproxetine', genericName: 'ciproxetine',
    category: 'SSRI',
    aliases: ["ciproxetine","ciproxetine","ciproex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd227', name: 'Azaciate', genericName: 'azaciate',
    category: 'Antipsychotic',
    aliases: ["azaciate","azaciate","azaciex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd228', name: 'Vinorelpurine', genericName: 'vinorelpurine',
    category: 'Antidiabetic',
    aliases: ["vinorelpurine","vinorelpurine","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd229', name: 'Thioguagine', genericName: 'thioguagine',
    category: 'Anticoagulant',
    aliases: ["thioguagine","thioguagine","thiogex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd230', name: 'Dapaparin', genericName: 'dapaparin',
    category: 'Diuretic',
    aliases: ["dapaparin","dapaparin","dapapex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd231', name: 'Vemutropium', genericName: 'vemutropium',
    category: 'ACE Inhibitor',
    aliases: ["vemutropium","vemutropium","vemutex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd232', name: 'Olanprine', genericName: 'olanprine',
    category: 'Antidiabetic',
    aliases: ["olanprine","olanprine","olanpex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd233', name: 'Phenycristine', genericName: 'phenycristine',
    category: 'Antiviral',
    aliases: ["phenycristine","phenycristine","phenyex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd234', name: 'Valsarpril', genericName: 'valsarpril',
    category: 'Antihistamine',
    aliases: ["valsarpril","valsarpril","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd235', name: 'Aripitine', genericName: 'aripitine',
    category: 'Statin',
    aliases: ["aripitine","aripitine","aripiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd236', name: 'Valsarpurine', genericName: 'valsarpurine',
    category: 'NSAID',
    aliases: ["valsarpurine","valsarpurine","valsaex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd237', name: 'Propylplatin', genericName: 'propylplatin',
    category: 'Diuretic',
    aliases: ["propylplatin","propylplatin","propyex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd238', name: 'Hydrotine', genericName: 'hydrotine',
    category: 'Opioid',
    aliases: ["hydrotine","hydrotine","hydroex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd239', name: 'Gefizepam', genericName: 'gefizepam',
    category: 'Statin',
    aliases: ["gefizepam","gefizepam","gefizex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd240', name: 'Ibufenac', genericName: 'ibufenac',
    category: 'NSAID',
    aliases: ["ibufenac","ibufenac","ibufeex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd241', name: 'Levomate', genericName: 'levomate',
    category: 'Bronchodilator',
    aliases: ["levomate","levomate","levomex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd242', name: 'Losafenac', genericName: 'losafenac',
    category: 'Benzodiazepine',
    aliases: ["losafenac","losafenac","losafex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd243', name: 'Ropinigatran', genericName: 'ropinigatran',
    category: 'Antipsychotic',
    aliases: ["ropinigatran","ropinigatran","ropinex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd244', name: 'Propylrelbine', genericName: 'propylrelbine',
    category: 'Anticoagulant',
    aliases: ["propylrelbine","propylrelbine","propyex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd245', name: 'Rivatropium', genericName: 'rivatropium',
    category: 'Antidiabetic',
    aliases: ["rivatropium","rivatropium","rivatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd246', name: 'Glipisartan', genericName: 'glipisartan',
    category: 'Calcium Channel Blocker',
    aliases: ["glipisartan","glipisartan","glipiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd247', name: 'Enosone', genericName: 'enosone',
    category: 'Antiplatelet',
    aliases: ["enosone","enosone","enosoex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd248', name: 'Valsarplatin', genericName: 'valsarplatin',
    category: 'Corticosteroid',
    aliases: ["valsarplatin","valsarplatin","valsaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd249', name: 'Levopril', genericName: 'levopril',
    category: 'Anticoagulant',
    aliases: ["levopril","levopril","levopex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd250', name: 'Irinoposide', genericName: 'irinoposide',
    category: 'Benzodiazepine',
    aliases: ["irinoposide","irinoposide","irinoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd251', name: 'Pravazole', genericName: 'pravazole',
    category: 'Antihistamine',
    aliases: ["pravazole","pravazole","pravaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd252', name: 'Vemugine', genericName: 'vemugine',
    category: 'SSRI',
    aliases: ["vemugine","vemugine","vemugex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd253', name: 'Sitathyroxine', genericName: 'sitathyroxine',
    category: 'Antiplatelet',
    aliases: ["sitathyroxine","sitathyroxine","sitatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd254', name: 'Monteluurea', genericName: 'monteluurea',
    category: 'Beta Blocker',
    aliases: ["monteluurea","monteluurea","monteex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd255', name: 'Pembrolipram', genericName: 'pembrolipram',
    category: 'SSRI',
    aliases: ["pembrolipram","pembrolipram","pembrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd256', name: 'Dabiphamide', genericName: 'dabiphamide',
    category: 'SSRI',
    aliases: ["dabiphamide","dabiphamide","dabipex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd257', name: 'Rosuvadone', genericName: 'rosuvadone',
    category: 'Dopamine Agonist',
    aliases: ["rosuvadone","rosuvadone","rosuvex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd258', name: 'Aripimine', genericName: 'aripimine',
    category: 'Dopamine Agonist',
    aliases: ["aripimine","aripimine","aripiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd259', name: 'Haloxaban', genericName: 'haloxaban',
    category: 'Statin',
    aliases: ["haloxaban","haloxaban","haloxex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd260', name: 'Tramaguanine', genericName: 'tramaguanine',
    category: 'Statin',
    aliases: ["tramaguanine","tramaguanine","tramaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd261', name: 'Levolimus', genericName: 'levolimus',
    category: 'Opioid',
    aliases: ["levolimus","levolimus","levolex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd262', name: 'Valpropine', genericName: 'valpropine',
    category: 'Benzodiazepine',
    aliases: ["valpropine","valpropine","valprex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd263', name: 'Durvalutecan', genericName: 'durvalutecan',
    category: 'Benzodiazepine',
    aliases: ["durvalutecan","durvalutecan","durvaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd264', name: 'Warfaphamide', genericName: 'warfaphamide',
    category: 'Antifungal',
    aliases: ["warfaphamide","warfaphamide","warfaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd265', name: 'Sitatecan', genericName: 'sitatecan',
    category: 'SSRI',
    aliases: ["sitatecan","sitatecan","sitatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd266', name: 'Esiphamide', genericName: 'esiphamide',
    category: 'Antipsychotic',
    aliases: ["esiphamide","esiphamide","esiphex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd267', name: 'Cobitaxel', genericName: 'cobitaxel',
    category: 'Calcium Channel Blocker',
    aliases: ["cobitaxel","cobitaxel","cobitex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd268', name: 'Apicam', genericName: 'apicam',
    category: 'ACE Inhibitor',
    aliases: ["apicam","apicam","apicaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd269', name: 'Carbigine', genericName: 'carbigine',
    category: 'Antipsychotic',
    aliases: ["carbigine","carbigine","carbiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd270', name: 'Heppine', genericName: 'heppine',
    category: 'ACE Inhibitor',
    aliases: ["heppine","heppine","heppiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd271', name: 'Panitropium', genericName: 'panitropium',
    category: 'Opioid',
    aliases: ["panitropium","panitropium","panitex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd272', name: 'Osimerzole', genericName: 'osimerzole',
    category: 'NSAID',
    aliases: ["osimerzole","osimerzole","osimeex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd273', name: 'Halopezil', genericName: 'halopezil',
    category: 'Benzodiazepine',
    aliases: ["halopezil","halopezil","halopex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd274', name: 'Hepmycin', genericName: 'hepmycin',
    category: 'Mood Stabilizer',
    aliases: ["hepmycin","hepmycin","hepmyex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd275', name: 'Donegatran', genericName: 'donegatran',
    category: 'SNRI',
    aliases: ["donegatran","donegatran","donegex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd276', name: 'Etopofenac', genericName: 'etopofenac',
    category: 'SNRI',
    aliases: ["etopofenac","etopofenac","etopoex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd277', name: 'Hepcetam', genericName: 'hepcetam',
    category: 'Anticoagulant',
    aliases: ["hepcetam","hepcetam","hepceex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd278', name: 'Losaposide', genericName: 'losaposide',
    category: 'Corticosteroid',
    aliases: ["losaposide","losaposide","losapex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd279', name: 'Memansolone', genericName: 'memansolone',
    category: 'PPI',
    aliases: ["memansolone","memansolone","memanex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd280', name: 'Gefipentin', genericName: 'gefipentin',
    category: 'Statin',
    aliases: ["gefipentin","gefipentin","gefipex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd281', name: 'Citaxib', genericName: 'citaxib',
    category: 'Chemotherapy',
    aliases: ["citaxib","citaxib","citaxex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd282', name: 'Prasugliptin', genericName: 'prasugliptin',
    category: 'Mood Stabilizer',
    aliases: ["prasugliptin","prasugliptin","prasuex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd283', name: 'Tramaurea', genericName: 'tramaurea',
    category: 'Bronchodilator',
    aliases: ["tramaurea","tramaurea","tramaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd284', name: 'Dapazepam', genericName: 'dapazepam',
    category: 'ACE Inhibitor',
    aliases: ["dapazepam","dapazepam","dapazex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd285', name: 'Afatibine', genericName: 'afatibine',
    category: 'Benzodiazepine',
    aliases: ["afatibine","afatibine","afatiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd286', name: 'Amoxigliptin', genericName: 'amoxigliptin',
    category: 'Thyroid Hormone',
    aliases: ["amoxigliptin","amoxigliptin","amoxiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd287', name: 'Levoxide', genericName: 'levoxide',
    category: 'PPI',
    aliases: ["levoxide","levoxide","levoxex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd288', name: 'Gemcitasone', genericName: 'gemcitasone',
    category: 'Statin',
    aliases: ["gemcitasone","gemcitasone","gemciex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd289', name: 'Rivatropium', genericName: 'rivatropium',
    category: 'Immunosuppressant',
    aliases: ["rivatropium","rivatropium","rivatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd290', name: 'Durvalugliptin', genericName: 'durvalugliptin',
    category: 'Antipsychotic',
    aliases: ["durvalugliptin","durvalugliptin","durvaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd291', name: 'Warfaxib', genericName: 'warfaxib',
    category: 'Anticoagulant',
    aliases: ["warfaxib","warfaxib","warfaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd292', name: 'Metocitabine', genericName: 'metocitabine',
    category: 'Mood Stabilizer',
    aliases: ["metocitabine","metocitabine","metocex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd293', name: 'Oxypine', genericName: 'oxypine',
    category: 'Opioid',
    aliases: ["oxypine","oxypine","oxypiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd294', name: 'Trastuxide', genericName: 'trastuxide',
    category: 'Benzodiazepine',
    aliases: ["trastuxide","trastuxide","trastex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd295', name: 'Pemetretropium', genericName: 'pemetretropium',
    category: 'Opioid',
    aliases: ["pemetretropium","pemetretropium","pemetex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd296', name: 'Simvacetam', genericName: 'simvacetam',
    category: 'PPI',
    aliases: ["simvacetam","simvacetam","simvaex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd297', name: 'Levoprolol', genericName: 'levoprolol',
    category: 'SSRI',
    aliases: ["levoprolol","levoprolol","levopex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd298', name: 'Linagxaban', genericName: 'linagxaban',
    category: 'ARB',
    aliases: ["linagxaban","linagxaban","linagex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd299', name: 'Vinorelzide', genericName: 'vinorelzide',
    category: 'ACE Inhibitor',
    aliases: ["vinorelzide","vinorelzide","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd300', name: 'Azacigine', genericName: 'azacigine',
    category: 'NSAID',
    aliases: ["azacigine","azacigine","azaciex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd301', name: 'Simvarole', genericName: 'simvarole',
    category: 'Kinase Inhibitor',
    aliases: ["simvarole","simvarole","simvaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd302', name: 'Propylpine', genericName: 'propylpine',
    category: 'Beta Blocker',
    aliases: ["propylpine","propylpine","propyex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd303', name: 'Tiotroprine', genericName: 'tiotroprine',
    category: 'PPI',
    aliases: ["tiotroprine","tiotroprine","tiotrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd304', name: 'Linagzepine', genericName: 'linagzepine',
    category: 'SSRI',
    aliases: ["linagzepine","linagzepine","linagex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd305', name: 'Ibublastine', genericName: 'ibublastine',
    category: 'Bronchodilator',
    aliases: ["ibublastine","ibublastine","ibublex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd306', name: 'Enoguanine', genericName: 'enoguanine',
    category: 'Diuretic',
    aliases: ["enoguanine","enoguanine","enoguex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd307', name: 'Carbamazide', genericName: 'carbamazide',
    category: 'Beta Blocker',
    aliases: ["carbamazide","carbamazide","carbaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd308', name: 'Aripixaban', genericName: 'aripixaban',
    category: 'Antibiotic',
    aliases: ["aripixaban","aripixaban","aripiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd309', name: 'Amoxipril', genericName: 'amoxipril',
    category: 'Beta Blocker',
    aliases: ["amoxipril","amoxipril","amoxiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd310', name: 'Losagatran', genericName: 'losagatran',
    category: 'ARB',
    aliases: ["losagatran","losagatran","losagex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd311', name: 'Durvaluparin', genericName: 'durvaluparin',
    category: 'SSRI',
    aliases: ["durvaluparin","durvaluparin","durvaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd312', name: 'Dabibalin', genericName: 'dabibalin',
    category: 'Monoclonal Antibody',
    aliases: ["dabibalin","dabibalin","dabibex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd313', name: 'Oxycristine', genericName: 'oxycristine',
    category: 'NSAID',
    aliases: ["oxycristine","oxycristine","oxycrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd314', name: 'Lisopram', genericName: 'lisopram',
    category: 'Antifungal',
    aliases: ["lisopram","lisopram","lisopex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd315', name: 'Ipratrofenac', genericName: 'ipratrofenac',
    category: 'SNRI',
    aliases: ["ipratrofenac","ipratrofenac","ipratex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd316', name: 'Budepurine', genericName: 'budepurine',
    category: 'Thyroid Hormone',
    aliases: ["budepurine","budepurine","budepex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd317', name: 'Afatiprolol', genericName: 'afatiprolol',
    category: 'Antiviral',
    aliases: ["afatiprolol","afatiprolol","afatiex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd318', name: 'Methixetine', genericName: 'methixetine',
    category: 'Antiviral',
    aliases: ["methixetine","methixetine","methiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd319', name: 'Pantonib', genericName: 'pantonib',
    category: 'NSAID',
    aliases: ["pantonib","pantonib","pantoex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd320', name: 'Glimiterol', genericName: 'glimiterol',
    category: 'Immunosuppressant',
    aliases: ["glimiterol","glimiterol","glimiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd321', name: 'Mycophenolate', genericName: 'mycophenolate',
    category: 'Diuretic',
    aliases: ["mycophenolate","mycophenolate","mycopex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd322', name: 'Galancristine', genericName: 'galancristine',
    category: 'Immunosuppressant',
    aliases: ["galancristine","galancristine","galanex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd323', name: 'Gemcitaflozin', genericName: 'gemcitaflozin',
    category: 'Anticonvulsant',
    aliases: ["gemcitaflozin","gemcitaflozin","gemciex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd324', name: 'Thioguagatran', genericName: 'thioguagatran',
    category: 'Thyroid Hormone',
    aliases: ["thioguagatran","thioguagatran","thiogex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd325', name: 'Nilotitoin', genericName: 'nilotitoin',
    category: 'Antipsychotic',
    aliases: ["nilotitoin","nilotitoin","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd326', name: 'Dabiguanine', genericName: 'dabiguanine',
    category: 'Antipsychotic',
    aliases: ["dabiguanine","dabiguanine","dabigex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd327', name: 'Vincriscodone', genericName: 'vincriscodone',
    category: 'Thyroid Hormone',
    aliases: ["vincriscodone","vincriscodone","vincrex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd328', name: 'Clopitine', genericName: 'clopitine',
    category: 'Thyroid Hormone',
    aliases: ["clopitine","clopitine","clopiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd329', name: 'Mycomycin', genericName: 'mycomycin',
    category: 'Antibiotic',
    aliases: ["mycomycin","mycomycin","mycomex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd330', name: 'Flutithyroxine', genericName: 'flutithyroxine',
    category: 'Opioid',
    aliases: ["flutithyroxine","flutithyroxine","flutiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd331', name: 'Diaxaban', genericName: 'diaxaban',
    category: 'SNRI',
    aliases: ["diaxaban","diaxaban","diaxaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd332', name: 'Cladribpine', genericName: 'cladribpine',
    category: 'ARB',
    aliases: ["cladribpine","cladribpine","cladrex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd333', name: 'Vinblasrole', genericName: 'vinblasrole',
    category: 'Antiplatelet',
    aliases: ["vinblasrole","vinblasrole","vinblex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd334', name: 'Rosuvabalin', genericName: 'rosuvabalin',
    category: 'Beta Blocker',
    aliases: ["rosuvabalin","rosuvabalin","rosuvex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd335', name: 'Levetibine', genericName: 'levetibine',
    category: 'Antihistamine',
    aliases: ["levetibine","levetibine","levetex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd336', name: 'Amoxixide', genericName: 'amoxixide',
    category: 'Statin',
    aliases: ["amoxixide","amoxixide","amoxiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd337', name: 'Liopine', genericName: 'liopine',
    category: 'Antiplatelet',
    aliases: ["liopine","liopine","liopiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd338', name: 'Rituprolol', genericName: 'rituprolol',
    category: 'Calcium Channel Blocker',
    aliases: ["rituprolol","rituprolol","ritupex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd339', name: 'Diaterol', genericName: 'diaterol',
    category: 'Immunosuppressant',
    aliases: ["diaterol","diaterol","diateex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd340', name: 'Losathyroxine', genericName: 'losathyroxine',
    category: 'Thyroid Hormone',
    aliases: ["losathyroxine","losathyroxine","losatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd341', name: 'Naproprofen', genericName: 'naproprofen',
    category: 'ARB',
    aliases: ["naproprofen","naproprofen","naproex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd342', name: 'Melozole', genericName: 'melozole',
    category: 'Corticosteroid',
    aliases: ["melozole","melozole","melozex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd343', name: 'Vinblascodone', genericName: 'vinblascodone',
    category: 'Bronchodilator',
    aliases: ["vinblascodone","vinblascodone","vinblex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd344', name: 'Alectixate', genericName: 'alectixate',
    category: 'Calcium Channel Blocker',
    aliases: ["alectixate","alectixate","alectex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd345', name: 'Quetizolam', genericName: 'quetizolam',
    category: 'Antidiabetic',
    aliases: ["quetizolam","quetizolam","quetiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd346', name: 'Gabagatran', genericName: 'gabagatran',
    category: 'Antiviral',
    aliases: ["gabagatran","gabagatran","gabagex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd347', name: 'Osimerpiride', genericName: 'osimerpiride',
    category: 'SNRI',
    aliases: ["osimerpiride","osimerpiride","osimeex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd348', name: 'Crizogliptin', genericName: 'crizogliptin',
    category: 'Beta Blocker',
    aliases: ["crizogliptin","crizogliptin","crizoex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd349', name: 'Ipilimusolone', genericName: 'ipilimusolone',
    category: 'Corticosteroid',
    aliases: ["ipilimusolone","ipilimusolone","ipiliex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd350', name: 'Budezolam', genericName: 'budezolam',
    category: 'Antiviral',
    aliases: ["budezolam","budezolam","budezex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd351', name: 'Duloxcitabine', genericName: 'duloxcitabine',
    category: 'ACE Inhibitor',
    aliases: ["duloxcitabine","duloxcitabine","duloxex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd352', name: 'Sitasone', genericName: 'sitasone',
    category: 'ACE Inhibitor',
    aliases: ["sitasone","sitasone","sitasex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd353', name: 'Amlodiblastine', genericName: 'amlodiblastine',
    category: 'Anticonvulsant',
    aliases: ["amlodiblastine","amlodiblastine","amlodex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd354', name: 'Carboplacetam', genericName: 'carboplacetam',
    category: 'PPI',
    aliases: ["carboplacetam","carboplacetam","carboex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd355', name: 'Zipraate', genericName: 'zipraate',
    category: 'Thyroid Hormone',
    aliases: ["zipraate","zipraate","zipraex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd356', name: 'Crizoplatin', genericName: 'crizoplatin',
    category: 'Chemotherapy',
    aliases: ["crizoplatin","crizoplatin","crizoex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd357', name: 'Carbamatecan', genericName: 'carbamatecan',
    category: 'Antiviral',
    aliases: ["carbamatecan","carbamatecan","carbaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd358', name: 'Ceritiprolol', genericName: 'ceritiprolol',
    category: 'Antidiabetic',
    aliases: ["ceritiprolol","ceritiprolol","ceritex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd359', name: 'Decitalimus', genericName: 'decitalimus',
    category: 'Anticoagulant',
    aliases: ["decitalimus","decitalimus","decitex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd360', name: 'Gabacam', genericName: 'gabacam',
    category: 'Monoclonal Antibody',
    aliases: ["gabacam","gabacam","gabacex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd361', name: 'Paniprolol', genericName: 'paniprolol',
    category: 'Antipsychotic',
    aliases: ["paniprolol","paniprolol","panipex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd362', name: 'Nilotipiride', genericName: 'nilotipiride',
    category: 'Beta Blocker',
    aliases: ["nilotipiride","nilotipiride","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd363', name: 'Topicodone', genericName: 'topicodone',
    category: 'Thyroid Hormone',
    aliases: ["topicodone","topicodone","topicex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd364', name: 'Topoteprofen', genericName: 'topoteprofen',
    category: 'Thyroid Hormone',
    aliases: ["topoteprofen","topoteprofen","topotex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd365', name: 'Levorubicin', genericName: 'levorubicin',
    category: 'Antiplatelet',
    aliases: ["levorubicin","levorubicin","levorex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd366', name: 'Donemine', genericName: 'donemine',
    category: 'Diuretic',
    aliases: ["donemine","donemine","donemex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd367', name: 'Gefirole', genericName: 'gefirole',
    category: 'Benzodiazepine',
    aliases: ["gefirole","gefirole","gefirex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd368', name: 'Etanercodone', genericName: 'etanercodone',
    category: 'Antifungal',
    aliases: ["etanercodone","etanercodone","etaneex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd369', name: 'Prasurole', genericName: 'prasurole',
    category: 'Antidiabetic',
    aliases: ["prasurole","prasurole","prasuex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd370', name: 'Halocillin', genericName: 'halocillin',
    category: 'Anticoagulant',
    aliases: ["halocillin","halocillin","halocex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd371', name: 'Levogliptin', genericName: 'levogliptin',
    category: 'Anticoagulant',
    aliases: ["levogliptin","levogliptin","levogex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd372', name: 'Lisothium', genericName: 'lisothium',
    category: 'Diuretic',
    aliases: ["lisothium","lisothium","lisotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd373', name: 'Donepine', genericName: 'donepine',
    category: 'Antiplatelet',
    aliases: ["donepine","donepine","donepex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd374', name: 'Pramipril', genericName: 'pramipril',
    category: 'Dopamine Agonist',
    aliases: ["pramipril","pramipril","pramiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd375', name: 'Vemumine', genericName: 'vemumine',
    category: 'Statin',
    aliases: ["vemumine","vemumine","vemumex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd376', name: 'Dasaticitabine', genericName: 'dasaticitabine',
    category: 'Monoclonal Antibody',
    aliases: ["dasaticitabine","dasaticitabine","dasatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd377', name: 'Cefstatin', genericName: 'cefstatin',
    category: 'Antidiabetic',
    aliases: ["cefstatin","cefstatin","cefstex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd378', name: 'Avelumapiride', genericName: 'avelumapiride',
    category: 'ARB',
    aliases: ["avelumapiride","avelumapiride","aveluex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd379', name: 'Salmepezil', genericName: 'salmepezil',
    category: 'Anticoagulant',
    aliases: ["salmepezil","salmepezil","salmeex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd380', name: 'Olanpurine', genericName: 'olanpurine',
    category: 'Beta Blocker',
    aliases: ["olanpurine","olanpurine","olanpex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd381', name: 'Aripiguanine', genericName: 'aripiguanine',
    category: 'Antiviral',
    aliases: ["aripiguanine","aripiguanine","aripiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd382', name: 'Durvalucodone', genericName: 'durvalucodone',
    category: 'Diuretic',
    aliases: ["durvalucodone","durvalucodone","durvaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd383', name: 'Vemuparin', genericName: 'vemuparin',
    category: 'Antiplatelet',
    aliases: ["vemuparin","vemuparin","vemupex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd384', name: 'Lithterol', genericName: 'lithterol',
    category: 'Mood Stabilizer',
    aliases: ["lithterol","lithterol","lithtex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd385', name: 'Doxorucodone', genericName: 'doxorucodone',
    category: 'Statin',
    aliases: ["doxorucodone","doxorucodone","doxorex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd386', name: 'Gefiphamide', genericName: 'gefiphamide',
    category: 'Antidiabetic',
    aliases: ["gefiphamide","gefiphamide","gefipex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd387', name: 'Cetuxicam', genericName: 'cetuxicam',
    category: 'ACE Inhibitor',
    aliases: ["cetuxicam","cetuxicam","cetuxex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd388', name: 'Vemulukast', genericName: 'vemulukast',
    category: 'Monoclonal Antibody',
    aliases: ["vemulukast","vemulukast","vemulex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd389', name: 'Brigatitoin', genericName: 'brigatitoin',
    category: 'Antifungal',
    aliases: ["brigatitoin","brigatitoin","brigaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd390', name: 'Gababalin', genericName: 'gababalin',
    category: 'Statin',
    aliases: ["gababalin","gababalin","gababex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd391', name: 'Glimigatran', genericName: 'glimigatran',
    category: 'Monoclonal Antibody',
    aliases: ["glimigatran","glimigatran","glimiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd392', name: 'Cetuxisartan', genericName: 'cetuxisartan',
    category: 'Antiplatelet',
    aliases: ["cetuxisartan","cetuxisartan","cetuxex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd393', name: 'Vinorelfloxacin', genericName: 'vinorelfloxacin',
    category: 'SNRI',
    aliases: ["vinorelfloxacin","vinorelfloxacin","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd394', name: 'Topiurea', genericName: 'topiurea',
    category: 'ACE Inhibitor',
    aliases: ["topiurea","topiurea","topiuex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd395', name: 'Pemetrepentin', genericName: 'pemetrepentin',
    category: 'Antipsychotic',
    aliases: ["pemetrepentin","pemetrepentin","pemetex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd396', name: 'Alecticitabine', genericName: 'alecticitabine',
    category: 'Bronchodilator',
    aliases: ["alecticitabine","alecticitabine","alectex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd397', name: 'Nilotiflozin', genericName: 'nilotiflozin',
    category: 'Antifungal',
    aliases: ["nilotiflozin","nilotiflozin","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd398', name: 'Mycopezil', genericName: 'mycopezil',
    category: 'Dopamine Agonist',
    aliases: ["mycopezil","mycopezil","mycopex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd399', name: 'Vemutoin', genericName: 'vemutoin',
    category: 'Antidiabetic',
    aliases: ["vemutoin","vemutoin","vemutex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd400', name: 'Esixide', genericName: 'esixide',
    category: 'Diuretic',
    aliases: ["esixide","esixide","esixiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd401', name: 'Prednirubicin', genericName: 'prednirubicin',
    category: 'Anticonvulsant',
    aliases: ["prednirubicin","prednirubicin","prednex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd402', name: 'Zoniphenolate', genericName: 'zoniphenolate',
    category: 'Bronchodilator',
    aliases: ["zoniphenolate","zoniphenolate","zonipex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd403', name: 'Osimermine', genericName: 'osimermine',
    category: 'Antidiabetic',
    aliases: ["osimermine","osimermine","osimeex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd404', name: 'Cladribflozin', genericName: 'cladribflozin',
    category: 'Antiplatelet',
    aliases: ["cladribflozin","cladribflozin","cladrex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd405', name: 'Doxorustatin', genericName: 'doxorustatin',
    category: 'Kinase Inhibitor',
    aliases: ["doxorustatin","doxorustatin","doxorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd406', name: 'Ropinistatin', genericName: 'ropinistatin',
    category: 'Antibiotic',
    aliases: ["ropinistatin","ropinistatin","ropinex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd407', name: 'Liozepam', genericName: 'liozepam',
    category: 'Antiviral',
    aliases: ["liozepam","liozepam","liozeex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd408', name: 'Zonilimus', genericName: 'zonilimus',
    category: 'Monoclonal Antibody',
    aliases: ["zonilimus","zonilimus","zonilex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd409', name: 'Citapram', genericName: 'citapram',
    category: 'SNRI',
    aliases: ["citapram","citapram","citapex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd410', name: 'Rivasthyroxine', genericName: 'rivasthyroxine',
    category: 'PPI',
    aliases: ["rivasthyroxine","rivasthyroxine","rivasex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd411', name: 'Prednidopa', genericName: 'prednidopa',
    category: 'Immunosuppressant',
    aliases: ["prednidopa","prednidopa","prednex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd412', name: 'Ifosfapentin', genericName: 'ifosfapentin',
    category: 'Antihistamine',
    aliases: ["ifosfapentin","ifosfapentin","ifosfex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd413', name: 'Amoxiposide', genericName: 'amoxiposide',
    category: 'SSRI',
    aliases: ["amoxiposide","amoxiposide","amoxiex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd414', name: 'Dapacodone', genericName: 'dapacodone',
    category: 'Beta Blocker',
    aliases: ["dapacodone","dapacodone","dapacex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd415', name: 'Lorlarole', genericName: 'lorlarole',
    category: 'Antiviral',
    aliases: ["lorlarole","lorlarole","lorlaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd416', name: 'Lamoparin', genericName: 'lamoparin',
    category: 'Thyroid Hormone',
    aliases: ["lamoparin","lamoparin","lamopex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd417', name: 'Gabathium', genericName: 'gabathium',
    category: 'Beta Blocker',
    aliases: ["gabathium","gabathium","gabatex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd418', name: 'Decitastatin', genericName: 'decitastatin',
    category: 'Anticonvulsant',
    aliases: ["decitastatin","decitastatin","decitex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd419', name: 'Cobixaban', genericName: 'cobixaban',
    category: 'Beta Blocker',
    aliases: ["cobixaban","cobixaban","cobixex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd420', name: 'Oxaliplasone', genericName: 'oxaliplasone',
    category: 'Antidiabetic',
    aliases: ["oxaliplasone","oxaliplasone","oxaliex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd421', name: 'Hepprine', genericName: 'hepprine',
    category: 'Opioid',
    aliases: ["hepprine","hepprine","hepprex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd422', name: 'Decitamycin', genericName: 'decitamycin',
    category: 'Dopamine Agonist',
    aliases: ["decitamycin","decitamycin","decitex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd423', name: 'Ropiniprofen', genericName: 'ropiniprofen',
    category: 'Beta Blocker',
    aliases: ["ropiniprofen","ropiniprofen","ropinex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd424', name: 'Diaurea', genericName: 'diaurea',
    category: 'SSRI',
    aliases: ["diaurea","diaurea","diaurex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd425', name: 'Methotrecam', genericName: 'methotrecam',
    category: 'Monoclonal Antibody',
    aliases: ["methotrecam","methotrecam","methoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd426', name: 'Flucam', genericName: 'flucam',
    category: 'Benzodiazepine',
    aliases: ["flucam","flucam","flucaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd427', name: 'Warfalukast', genericName: 'warfalukast',
    category: 'ARB',
    aliases: ["warfalukast","warfalukast","warfaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd428', name: 'Nilotipezil', genericName: 'nilotipezil',
    category: 'Bronchodilator',
    aliases: ["nilotipezil","nilotipezil","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd429', name: 'Dicloprolol', genericName: 'dicloprolol',
    category: 'SNRI',
    aliases: ["dicloprolol","dicloprolol","dicloex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd430', name: 'Vinoreltoin', genericName: 'vinoreltoin',
    category: 'Antidiabetic',
    aliases: ["vinoreltoin","vinoreltoin","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd431', name: 'Vinorelgliptin', genericName: 'vinorelgliptin',
    category: 'Beta Blocker',
    aliases: ["vinorelgliptin","vinorelgliptin","vinorex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd432', name: 'Capecizolam', genericName: 'capecizolam',
    category: 'Thyroid Hormone',
    aliases: ["capecizolam","capecizolam","capecex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd433', name: 'Liomab', genericName: 'liomab',
    category: 'Antidiabetic',
    aliases: ["liomab","liomab","liomaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd434', name: 'Atorvaparin', genericName: 'atorvaparin',
    category: 'Statin',
    aliases: ["atorvaparin","atorvaparin","atorvex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd435', name: 'Mycoprolol', genericName: 'mycoprolol',
    category: 'Antihistamine',
    aliases: ["mycoprolol","mycoprolol","mycopex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd436', name: 'Omethium', genericName: 'omethium',
    category: 'Anticonvulsant',
    aliases: ["omethium","omethium","omethex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd437', name: 'Pravaposide', genericName: 'pravaposide',
    category: 'Statin',
    aliases: ["pravaposide","pravaposide","pravaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd438', name: 'Alprapril', genericName: 'alprapril',
    category: 'SNRI',
    aliases: ["alprapril","alprapril","alpraex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd439', name: 'Inflixflozin', genericName: 'inflixflozin',
    category: 'Thyroid Hormone',
    aliases: ["inflixflozin","inflixflozin","infliex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd440', name: 'Trastupentin', genericName: 'trastupentin',
    category: 'Antibiotic',
    aliases: ["trastupentin","trastupentin","trastex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd441', name: 'Esifenac', genericName: 'esifenac',
    category: 'Antihistamine',
    aliases: ["esifenac","esifenac","esifeex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd442', name: 'Cefpril', genericName: 'cefpril',
    category: 'Bronchodilator',
    aliases: ["cefpril","cefpril","cefprex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd443', name: 'Dapacitabine', genericName: 'dapacitabine',
    category: 'Mood Stabilizer',
    aliases: ["dapacitabine","dapacitabine","dapacex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd444', name: 'Zoniformin', genericName: 'zoniformin',
    category: 'Dopamine Agonist',
    aliases: ["zoniformin","zoniformin","zonifex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd445', name: 'Budemab', genericName: 'budemab',
    category: 'Antifungal',
    aliases: ["budemab","budemab","budemex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd446', name: 'Levopezil', genericName: 'levopezil',
    category: 'Monoclonal Antibody',
    aliases: ["levopezil","levopezil","levopex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd447', name: 'Mercaptofarin', genericName: 'mercaptofarin',
    category: 'Antiviral',
    aliases: ["mercaptofarin","mercaptofarin","mercaex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd448', name: 'Metopentin', genericName: 'metopentin',
    category: 'PPI',
    aliases: ["metopentin","metopentin","metopex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd449', name: 'Metforcristine', genericName: 'metforcristine',
    category: 'Antihistamine',
    aliases: ["metforcristine","metforcristine","metfoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd450', name: 'Carbamapram', genericName: 'carbamapram',
    category: 'ARB',
    aliases: ["carbamapram","carbamapram","carbaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd451', name: 'Vinblasstatin', genericName: 'vinblasstatin',
    category: 'Corticosteroid',
    aliases: ["vinblasstatin","vinblasstatin","vinblex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd452', name: 'Ipilimutoin', genericName: 'ipilimutoin',
    category: 'Bronchodilator',
    aliases: ["ipilimutoin","ipilimutoin","ipiliex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd453', name: 'Simvazepam', genericName: 'simvazepam',
    category: 'Antiviral',
    aliases: ["simvazepam","simvazepam","simvaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd454', name: 'Glimisone', genericName: 'glimisone',
    category: 'NSAID',
    aliases: ["glimisone","glimisone","glimiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd455', name: 'Cladribguanine', genericName: 'cladribguanine',
    category: 'Monoclonal Antibody',
    aliases: ["cladribguanine","cladribguanine","cladrex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd456', name: 'Warfabine', genericName: 'warfabine',
    category: 'Anticoagulant',
    aliases: ["warfabine","warfabine","warfaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd457', name: 'Ceflukast', genericName: 'ceflukast',
    category: 'Antiplatelet',
    aliases: ["ceflukast","ceflukast","cefluex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd458', name: 'Quetimab', genericName: 'quetimab',
    category: 'Kinase Inhibitor',
    aliases: ["quetimab","quetimab","quetiex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd459', name: 'Formomate', genericName: 'formomate',
    category: 'ARB',
    aliases: ["formomate","formomate","formoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd460', name: 'Mycosartan', genericName: 'mycosartan',
    category: 'Anticoagulant',
    aliases: ["mycosartan","mycosartan","mycosex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd461', name: 'Ethoflozin', genericName: 'ethoflozin',
    category: 'Antihistamine',
    aliases: ["ethoflozin","ethoflozin","ethofex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd462', name: 'Dasatipentin', genericName: 'dasatipentin',
    category: 'Antiplatelet',
    aliases: ["dasatipentin","dasatipentin","dasatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd463', name: 'Fluxate', genericName: 'fluxate',
    category: 'Dopamine Agonist',
    aliases: ["fluxate","fluxate","fluxaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd464', name: 'Donecodone', genericName: 'donecodone',
    category: 'Diuretic',
    aliases: ["donecodone","donecodone","donecex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd465', name: 'Ceriticristine', genericName: 'ceriticristine',
    category: 'Opioid',
    aliases: ["ceriticristine","ceriticristine","ceritex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd466', name: 'Rivascitabine', genericName: 'rivascitabine',
    category: 'Benzodiazepine',
    aliases: ["rivascitabine","rivascitabine","rivasex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd467', name: 'Dabiphamide', genericName: 'dabiphamide',
    category: 'Corticosteroid',
    aliases: ["dabiphamide","dabiphamide","dabipex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd468', name: 'Ifosfamide', genericName: 'ifosfamide',
    category: 'Thyroid Hormone',
    aliases: ["ifosfamide","ifosfamide","ifosfex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd469', name: 'Pregapurine', genericName: 'pregapurine',
    category: 'Antibiotic',
    aliases: ["pregapurine","pregapurine","pregaex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd470', name: 'Metforphenolate', genericName: 'metforphenolate',
    category: 'Antidiabetic',
    aliases: ["metforphenolate","metforphenolate","metfoex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd471', name: 'Quetiformin', genericName: 'quetiformin',
    category: 'Dopamine Agonist',
    aliases: ["quetiformin","quetiformin","quetiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd472', name: 'Afatiphamide', genericName: 'afatiphamide',
    category: 'Antiviral',
    aliases: ["afatiphamide","afatiphamide","afatiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd473', name: 'Mitomyphenolate', genericName: 'mitomyphenolate',
    category: 'SNRI',
    aliases: ["mitomyphenolate","mitomyphenolate","mitomex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd474', name: 'Ropiniprazole', genericName: 'ropiniprazole',
    category: 'Antiplatelet',
    aliases: ["ropiniprazole","ropiniprazole","ropinex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd475', name: 'Alprablastine', genericName: 'alprablastine',
    category: 'Antiplatelet',
    aliases: ["alprablastine","alprablastine","alpraex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd476', name: 'Atezolizuterol', genericName: 'atezolizuterol',
    category: 'Monoclonal Antibody',
    aliases: ["atezolizuterol","atezolizuterol","atezoex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd477', name: 'Cycloterol', genericName: 'cycloterol',
    category: 'Benzodiazepine',
    aliases: ["cycloterol","cycloterol","cycloex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd478', name: 'Escitaxate', genericName: 'escitaxate',
    category: 'Beta Blocker',
    aliases: ["escitaxate","escitaxate","escitex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd479', name: 'Epirucitabine', genericName: 'epirucitabine',
    category: 'Statin',
    aliases: ["epirucitabine","epirucitabine","epiruex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd480', name: 'Levorelbine', genericName: 'levorelbine',
    category: 'Bronchodilator',
    aliases: ["levorelbine","levorelbine","levorex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd481', name: 'Cefstatin', genericName: 'cefstatin',
    category: 'Benzodiazepine',
    aliases: ["cefstatin","cefstatin","cefstex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd482', name: 'Clopimate', genericName: 'clopimate',
    category: 'Antiplatelet',
    aliases: ["clopimate","clopimate","clopiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd483', name: 'Linagtrexate', genericName: 'linagtrexate',
    category: 'Calcium Channel Blocker',
    aliases: ["linagtrexate","linagtrexate","linagex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd484', name: 'Paniphamide', genericName: 'paniphamide',
    category: 'Immunosuppressant',
    aliases: ["paniphamide","paniphamide","panipex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd485', name: 'Epirublastine', genericName: 'epirublastine',
    category: 'Immunosuppressant',
    aliases: ["epirublastine","epirublastine","epiruex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd486', name: 'Imatixaban', genericName: 'imatixaban',
    category: 'Monoclonal Antibody',
    aliases: ["imatixaban","imatixaban","imatiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd487', name: 'Olantecan', genericName: 'olantecan',
    category: 'Opioid',
    aliases: ["olantecan","olantecan","olantex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd488', name: 'Azathioprine', genericName: 'azathioprine',
    category: 'Corticosteroid',
    aliases: ["azathioprine","azathioprine","azathex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd489', name: 'Hydroblastine', genericName: 'hydroblastine',
    category: 'Corticosteroid',
    aliases: ["hydroblastine","hydroblastine","hydroex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd490', name: 'Ethodopa', genericName: 'ethodopa',
    category: 'Antihistamine',
    aliases: ["ethodopa","ethodopa","ethodex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd491', name: 'Napropezil', genericName: 'napropezil',
    category: 'Calcium Channel Blocker',
    aliases: ["napropezil","napropezil","naproex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd492', name: 'Thioguapezil', genericName: 'thioguapezil',
    category: 'ARB',
    aliases: ["thioguapezil","thioguapezil","thiogex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd493', name: 'Glipithyroxine', genericName: 'glipithyroxine',
    category: 'Antibiotic',
    aliases: ["glipithyroxine","glipithyroxine","glipiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd494', name: 'Levocam', genericName: 'levocam',
    category: 'Antiplatelet',
    aliases: ["levocam","levocam","levocex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd495', name: 'Apimide', genericName: 'apimide',
    category: 'PPI',
    aliases: ["apimide","apimide","apimiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd496', name: 'Carbamacodone', genericName: 'carbamacodone',
    category: 'Antifungal',
    aliases: ["carbamacodone","carbamacodone","carbaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd497', name: 'Duloxgine', genericName: 'duloxgine',
    category: 'Anticoagulant',
    aliases: ["duloxgine","duloxgine","duloxex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd498', name: 'Olancetam', genericName: 'olancetam',
    category: 'Opioid',
    aliases: ["olancetam","olancetam","olancex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd499', name: 'Venlablastine', genericName: 'venlablastine',
    category: 'Antihistamine',
    aliases: ["venlablastine","venlablastine","venlaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd500', name: 'Levotaxel', genericName: 'levotaxel',
    category: 'NSAID',
    aliases: ["levotaxel","levotaxel","levotex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd501', name: 'Loracetam', genericName: 'loracetam',
    category: 'NSAID',
    aliases: ["loracetam","loracetam","loracex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd502', name: 'Cyclophosthyroxine', genericName: 'cyclophosthyroxine',
    category: 'Thyroid Hormone',
    aliases: ["cyclophosthyroxine","cyclophosthyroxine","cycloex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd503', name: 'Pramisporin', genericName: 'pramisporin',
    category: 'Dopamine Agonist',
    aliases: ["pramisporin","pramisporin","pramiex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd504', name: 'Clonatine', genericName: 'clonatine',
    category: 'Anticonvulsant',
    aliases: ["clonatine","clonatine","clonaex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd505', name: 'Rituthium', genericName: 'rituthium',
    category: 'Mood Stabilizer',
    aliases: ["rituthium","rituthium","ritutex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd506', name: 'Fenofnib', genericName: 'fenofnib',
    category: 'Diuretic',
    aliases: ["fenofnib","fenofnib","fenofex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd507', name: 'Hydrocorlimus', genericName: 'hydrocorlimus',
    category: 'Kinase Inhibitor',
    aliases: ["hydrocorlimus","hydrocorlimus","hydroex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd508', name: 'Olangrel', genericName: 'olangrel',
    category: 'Antifungal',
    aliases: ["olangrel","olangrel","olangex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd509', name: 'Alpralimus', genericName: 'alpralimus',
    category: 'Antifungal',
    aliases: ["alpralimus","alpralimus","alpraex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd510', name: 'Prasumycin', genericName: 'prasumycin',
    category: 'Chemotherapy',
    aliases: ["prasumycin","prasumycin","prasuex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd511', name: 'Ticatecan', genericName: 'ticatecan',
    category: 'Antidiabetic',
    aliases: ["ticatecan","ticatecan","ticatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd512', name: 'Donecodone', genericName: 'donecodone',
    category: 'Dopamine Agonist',
    aliases: ["donecodone","donecodone","donecex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd513', name: 'Monteluflozin', genericName: 'monteluflozin',
    category: 'Antiplatelet',
    aliases: ["monteluflozin","monteluflozin","monteex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd514', name: 'Losatoin', genericName: 'losatoin',
    category: 'Antihistamine',
    aliases: ["losatoin","losatoin","losatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd515', name: 'Dapaterol', genericName: 'dapaterol',
    category: 'Thyroid Hormone',
    aliases: ["dapaterol","dapaterol","dapatex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd516', name: 'Thioguaterol', genericName: 'thioguaterol',
    category: 'Chemotherapy',
    aliases: ["thioguaterol","thioguaterol","thiogex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd517', name: 'Atezolizunib', genericName: 'atezolizunib',
    category: 'Thyroid Hormone',
    aliases: ["atezolizunib","atezolizunib","atezoex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd518', name: 'Levofarin', genericName: 'levofarin',
    category: 'ARB',
    aliases: ["levofarin","levofarin","levofex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd519', name: 'Imatipril', genericName: 'imatipril',
    category: 'Kinase Inhibitor',
    aliases: ["imatipril","imatipril","imatiex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd520', name: 'Quetifarin', genericName: 'quetifarin',
    category: 'Opioid',
    aliases: ["quetifarin","quetifarin","quetiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd521', name: 'Valsargine', genericName: 'valsargine',
    category: 'Antiplatelet',
    aliases: ["valsargine","valsargine","valsaex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd522', name: 'Quetirabine', genericName: 'quetirabine',
    category: 'Statin',
    aliases: ["quetirabine","quetirabine","quetiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd523', name: 'Cobiurea', genericName: 'cobiurea',
    category: 'Corticosteroid',
    aliases: ["cobiurea","cobiurea","cobiuex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd524', name: 'Naprocillin', genericName: 'naprocillin',
    category: 'Chemotherapy',
    aliases: ["naprocillin","naprocillin","naproex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd525', name: 'Nilotixide', genericName: 'nilotixide',
    category: 'NSAID',
    aliases: ["nilotixide","nilotixide","nilotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd526', name: 'Clopiphamide', genericName: 'clopiphamide',
    category: 'Mood Stabilizer',
    aliases: ["clopiphamide","clopiphamide","clopiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd527', name: 'Vinoreltine', genericName: 'vinoreltine',
    category: 'Diuretic',
    aliases: ["vinoreltine","vinoreltine","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd528', name: 'Valsardopa', genericName: 'valsardopa',
    category: 'Mood Stabilizer',
    aliases: ["valsardopa","valsardopa","valsaex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd529', name: 'Memantropium', genericName: 'memantropium',
    category: 'Chemotherapy',
    aliases: ["memantropium","memantropium","memanex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd530', name: 'Escitapezil', genericName: 'escitapezil',
    category: 'Anticonvulsant',
    aliases: ["escitapezil","escitapezil","escitex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd531', name: 'Azathiocitabine', genericName: 'azathiocitabine',
    category: 'Dopamine Agonist',
    aliases: ["azathiocitabine","azathiocitabine","azathex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd532', name: 'Oxcarbdopa', genericName: 'oxcarbdopa',
    category: 'Chemotherapy',
    aliases: ["oxcarbdopa","oxcarbdopa","oxcarex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd533', name: 'Vinorelgine', genericName: 'vinorelgine',
    category: 'Antiviral',
    aliases: ["vinorelgine","vinorelgine","vinorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd534', name: 'Docetapiride', genericName: 'docetapiride',
    category: 'SNRI',
    aliases: ["docetapiride","docetapiride","docetex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd535', name: 'Enotoin', genericName: 'enotoin',
    category: 'Benzodiazepine',
    aliases: ["enotoin","enotoin","enotoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd536', name: 'Flugliptin', genericName: 'flugliptin',
    category: 'Monoclonal Antibody',
    aliases: ["flugliptin","flugliptin","fluglex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd537', name: 'Cetuxiphamide', genericName: 'cetuxiphamide',
    category: 'ARB',
    aliases: ["cetuxiphamide","cetuxiphamide","cetuxex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd538', name: 'Dasatitoin', genericName: 'dasatitoin',
    category: 'Statin',
    aliases: ["dasatitoin","dasatitoin","dasatex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd539', name: 'Ticablastine', genericName: 'ticablastine',
    category: 'Immunosuppressant',
    aliases: ["ticablastine","ticablastine","ticabex"],
    hasBlackBoxWarning: true,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd540', name: 'Decitapurine', genericName: 'decitapurine',
    category: 'Anticoagulant',
    aliases: ["decitapurine","decitapurine","decitex"],
    hasBlackBoxWarning: false,
    contraindications: ["Liver Disease","Kidney Failure"]
  },
  {
    id: 'd541', name: 'Pregauracil', genericName: 'pregauracil',
    category: 'Diuretic',
    aliases: ["pregauracil","pregauracil","pregaex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd542', name: 'Rosuvabine', genericName: 'rosuvabine',
    category: 'Dopamine Agonist',
    aliases: ["rosuvabine","rosuvabine","rosuvex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd543', name: 'Doxorucristine', genericName: 'doxorucristine',
    category: 'Bronchodilator',
    aliases: ["doxorucristine","doxorucristine","doxorex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd544', name: 'Imatifenac', genericName: 'imatifenac',
    category: 'Antihistamine',
    aliases: ["imatifenac","imatifenac","imatiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd545', name: 'Rivatine', genericName: 'rivatine',
    category: 'Antiplatelet',
    aliases: ["rivatine","rivatine","rivatex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd546', name: 'Gemcitafarin', genericName: 'gemcitafarin',
    category: 'Anticoagulant',
    aliases: ["gemcitafarin","gemcitafarin","gemciex"],
    hasBlackBoxWarning: true,
    contraindications: []
  },
  {
    id: 'd547', name: 'Quetizepine', genericName: 'quetizepine',
    category: 'NSAID',
    aliases: ["quetizepine","quetizepine","quetiex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd548', name: 'Lisotaxel', genericName: 'lisotaxel',
    category: 'Calcium Channel Blocker',
    aliases: ["lisotaxel","lisotaxel","lisotex"],
    hasBlackBoxWarning: false,
    contraindications: []
  },
  {
    id: 'd549', name: 'Methotrenib', genericName: 'methotrenib',
    category: 'Antipsychotic',
    aliases: ["methotrenib","methotrenib","methoex"],
    hasBlackBoxWarning: false,
    contraindications: []
  }
];

// ──────────────────────────────────────────────────
//  CONDITIONS
// ──────────────────────────────────────────────────

export const CONDITIONS = [
  'Kidney Disease',
  'Liver Disease',
  'Heart Failure',
  'Asthma',
  'Bleeding Disorders',
  'Stomach Ulcers',
  'Pregnancy',
  'Diabetes',
  'Thyroid Disorders',
  'Seizure Disorders',
  'Depression',
  'Hypertension',
  'COPD',
];

// ──────────────────────────────────────────────────
//  INTERACTIONS — 20+ clinically accurate pairs
// ──────────────────────────────────────────────────

export const INTERACTIONS: Interaction[] = [

  // 1. Aspirin + Ibuprofen ─ NSAIDs stacking
  {
    drug1Id: 'd001', drug2Id: 'd002',
    severity: 'Severe',
    mechanism: 'Competitive inhibition of platelet COX-1; additive GI mucosal toxicity. Ibuprofen can sterically block aspirin from irreversibly acetylating COX-1.',
    description: 'Taking Aspirin and Ibuprofen together increases your risk of stomach bleeding by up to 3×. Ibuprofen may also block the cardioprotective effects of low-dose Aspirin, negating its benefit in heart attack prevention.',
    alternatives: ['Paracetamol (Crocin / Dolo-650) for pain relief', 'Take Ibuprofen at least 8 hours before or 30 minutes after Aspirin']
  },

  // 2. Warfarin + Ibuprofen ─ critical bleed risk
  {
    drug1Id: 'd014', drug2Id: 'd002',
    severity: 'Critical',
    mechanism: 'NSAIDs inhibit platelet aggregation and damage GI mucosa; Ibuprofen may displace warfarin from albumin binding sites, raising free warfarin levels.',
    description: 'CRITICAL: Taking Ibuprofen with Warfarin drastically increases the risk of severe, potentially life-threatening internal bleeding. Even short-term use can cause fatal GI hemorrhage.',
    alternatives: ['Paracetamol (Crocin/Dolo-650) is generally safer — still monitor INR', 'Contact doctor immediately if any unusual bleeding occurs']
  },

  // 3. Tramadol + Sertraline ─ serotonin syndrome
  {
    drug1Id: 'd005', drug2Id: 'd019',
    severity: 'Severe',
    mechanism: 'Additive serotonergic effects: Tramadol inhibits serotonin reuptake and Sertraline is an SSRI, together raising CNS serotonin to dangerous levels.',
    description: 'Combining Tramadol and Sertraline significantly raises the risk of Serotonin Syndrome — a potentially fatal condition causing confusion, rapid heartbeat, hyperthermia, muscle rigidity, and seizures.',
    alternatives: ['Non-serotonergic pain medications such as Paracetamol or low-dose NSAIDs', 'Discuss alternative antidepressants like Bupropion with your psychiatrist']
  },

  // 4. Lisinopril + Losartan ─ dual RAAS blockade
  {
    drug1Id: 'd006', drug2Id: 'd007',
    severity: 'Severe',
    mechanism: 'Dual blockade of the renin-angiotensin-aldosterone system (RAAS) causes excessive hypotension, hyperkalemia, and accelerated renal decline.',
    description: 'Taking an ACE Inhibitor (Lisinopril) and an ARB (Losartan) together provides no extra cardiovascular benefit but significantly increases the risk of dangerous low blood pressure, kidney failure, and high potassium.',
    alternatives: ['Use only ONE class — either an ACE Inhibitor OR an ARB, not both']
  },

  // 5. Warfarin + Aspirin ─ dual anticoagulation
  {
    drug1Id: 'd014', drug2Id: 'd001',
    severity: 'Critical',
    mechanism: 'Aspirin irreversibly inhibits platelet COX-1 while warfarin inhibits clotting factor synthesis; together they eliminate both primary and secondary hemostatic pathways.',
    description: 'CRITICAL: Aspirin combined with Warfarin dramatically increases the risk of major bleeding events including intracranial hemorrhage. This combination should only ever be used under strict medical supervision with frequent INR monitoring.',
    alternatives: ['Discuss with your cardiologist whether dual therapy is truly indicated', 'If both are necessary, use the lowest effective dose of Aspirin (75 mg)']
  },

  // 6. Metformin + Ciprofloxacin ─ blood sugar crash
  {
    drug1Id: 'd013', drug2Id: 'd011',
    severity: 'Moderate',
    mechanism: 'Fluoroquinolones stimulate insulin secretion from pancreatic beta-cells independently, causing additive hypoglycemia when combined with Metformin.',
    description: 'Ciprofloxacin can cause unpredictable blood sugar swings (both hypo- and hyperglycemia) in diabetic patients already on Metformin. Elderly patients are at highest risk.',
    alternatives: ['Use Amoxicillin or Azithromycin as alternative antibiotics when clinically appropriate', 'Monitor blood sugar 4× daily while on Ciprofloxacin']
  },

  // 7. Omeprazole + Clopidogrel ─ reduced antiplatelet effect
  {
    drug1Id: 'd018', drug2Id: 'd041',
    severity: 'Severe',
    mechanism: 'Omeprazole competitively inhibits CYP2C19, the enzyme required to convert Clopidogrel (a prodrug) into its active antiplatelet metabolite.',
    description: 'Omeprazole significantly reduces the effectiveness of Clopidogrel, potentially leading to stent thrombosis or recurrent heart attacks in cardiac patients.',
    alternatives: ['Switch to Pantoprazole (Pantocid) which has much weaker CYP2C19 inhibition', 'Famotidine (H2 blocker) is a safe antacid alternative']
  },

  // 8. Azithromycin + Warfarin ─ elevated INR
  {
    drug1Id: 'd010', drug2Id: 'd014',
    severity: 'Moderate',
    mechanism: 'Azithromycin inhibits hepatic CYP3A4 and may reduce gut flora that produce Vitamin K, potentiating warfarin anticoagulant effect.',
    description: 'Azithromycin can increase the blood-thinning effect of Warfarin, raising INR and increasing bleeding risk. Effects may persist for several days after the antibiotic course ends.',
    alternatives: ['Monitor INR closely during and for 1 week after antibiotic course', 'Consider Amoxicillin as a safer antibiotic alternative']
  },

  // 9. Metronidazole + Warfarin ─ stereo-selective inhibition
  {
    drug1Id: 'd012', drug2Id: 'd014',
    severity: 'Severe',
    mechanism: 'Metronidazole inhibits CYP2C9-mediated metabolism of the more potent S-warfarin enantiomer, dramatically increasing anticoagulant effect.',
    description: 'Metronidazole significantly potentiates Warfarin, often causing dangerously elevated INR (>4) within 3–5 days. Cases of fatal hemorrhage have been reported.',
    alternatives: ['Reduce Warfarin dose by 25–50% during Metronidazole therapy', 'Monitor INR every 2 days during co-administration']
  },

  // 10. Fluconazole + Atorvastatin ─ rhabdomyolysis risk
  {
    drug1Id: 'd035', drug2Id: 'd016',
    severity: 'Severe',
    mechanism: 'Fluconazole strongly inhibits CYP3A4, dramatically increasing plasma levels of Atorvastatin and risk of dose-dependent skeletal muscle toxicity.',
    description: 'Fluconazole can raise Atorvastatin blood levels by 2–3× increasing the risk of rhabdomyolysis — a severe condition where muscle fibers break down and release myoglobin into the blood, potentially causing kidney failure.',
    alternatives: ['Hold statin during short antifungal courses', 'Rosuvastatin (Rosuvas) is less dependent on CYP3A4 and may be safer']
  },

  // 11. Ciprofloxacin + Levothyroxine ─ reduced absorption
  {
    drug1Id: 'd011', drug2Id: 'd022',
    severity: 'Moderate',
    mechanism: 'Ciprofloxacin chelates with the metallic cations in Levothyroxine formulations, reducing GI absorption by up to 40%.',
    description: 'Ciprofloxacin can significantly reduce absorption of Levothyroxine, potentially causing hypothyroid symptoms (fatigue, weight gain, cold intolerance) even in previously well-controlled patients.',
    alternatives: ['Separate doses by at least 4–6 hours', 'Take Levothyroxine (Thyronorm) on an empty stomach in the morning, Ciprofloxacin later in the day']
  },

  // 12. Alprazolam + Tramadol ─ respiratory depression
  {
    drug1Id: 'd023', drug2Id: 'd005',
    severity: 'Critical',
    mechanism: 'Synergistic CNS depression: Benzodiazepines enhance GABAergic inhibition while opioids suppress the brainstem respiratory center, together causing profound sedation and respiratory arrest.',
    description: 'CRITICAL: Combining a benzodiazepine (Alprazolam) with an opioid (Tramadol) is a leading cause of overdose deaths. Even therapeutic doses can cause fatal respiratory depression, especially in elderly patients.',
    alternatives: ['Non-opioid pain relief: Paracetamol, topical NSAIDs', 'Non-benzodiazepine anxiolytics: Hydroxyzine, Buspirone']
  },

  // 13. Diazepam + Fluoxetine ─ excessive sedation
  {
    drug1Id: 'd024', drug2Id: 'd021',
    severity: 'Moderate',
    mechanism: 'Fluoxetine inhibits CYP3A4 and CYP2C19, slowing Diazepam metabolism and prolonging its half-life from ~43 hours to >100 hours.',
    description: 'Fluoxetine significantly slows the breakdown of Diazepam, leading to drug accumulation, excessive sedation, impaired coordination, and increased fall risk — especially dangerous in elderly patients.',
    alternatives: ['Lorazepam (Ativan) is metabolized by glucuronidation and is not affected by Fluoxetine', 'Consider non-benzo anxiolytics like Buspirone']
  },

  // 14. Phenytoin + Warfarin ─ unpredictable interaction
  {
    drug1Id: 'd028', drug2Id: 'd014',
    severity: 'Severe',
    mechanism: 'Phenytoin both displaces warfarin from protein binding (initial potentiation) and induces CYP2C9 (later reduction), causing biphasic, unpredictable INR changes.',
    description: 'Phenytoin causes highly unpredictable changes in Warfarin effect — initially increasing bleeding risk, then potentially decreasing it. INR may swing wildly for weeks.',
    alternatives: ['Levetiracetam (Keppra) has no CYP interactions and is preferred in anticoagulated patients', 'Frequent INR monitoring (every 2–3 days) is mandatory if co-prescribed']
  },

  // 15. Carbamazepine + Oral Contraceptives (indirect: Carbamazepine + Atorvastatin)
  {
    drug1Id: 'd029', drug2Id: 'd016',
    severity: 'Moderate',
    mechanism: 'Carbamazepine is a potent inducer of CYP3A4, accelerating the metabolism of Atorvastatin and reducing its lipid-lowering efficacy.',
    description: 'Carbamazepine can reduce Atorvastatin blood levels by up to 50%, making cholesterol control significantly harder. Patients may need higher statin doses or alternative agents.',
    alternatives: ['Rosuvastatin (Rosuvas/Rozavel) is minimally affected by CYP3A4 induction', 'Consider Pravastatin as an alternative']
  },

  // 16. Lisinopril + Ibuprofen ─ renal triple whammy
  {
    drug1Id: 'd006', drug2Id: 'd002',
    severity: 'Moderate',
    mechanism: 'NSAIDs block prostaglandin-mediated afferent arteriole dilation while ACE inhibitors block angiotensin-mediated efferent arteriole constriction, together collapsing glomerular filtration pressure.',
    description: 'Ibuprofen can substantially reduce the blood-pressure-lowering effect of Lisinopril and accelerate kidney damage — a combination sometimes called the "triple whammy" when diuretics are added.',
    alternatives: ['Paracetamol (Crocin/Dolo-650) for pain', 'If NSAID is essential, use the lowest dose for the shortest duration and monitor kidney function']
  },

  // 17. Metformin + Prednisolone ─ glucose spike
  {
    drug1Id: 'd013', drug2Id: 'd027',
    severity: 'Moderate',
    mechanism: 'Corticosteroids increase hepatic gluconeogenesis and reduce peripheral insulin sensitivity, directly counteracting Metformin\'s glucose-lowering mechanisms.',
    description: 'Prednisolone (Wysolone) can raise blood sugar dramatically, potentially making Metformin insufficient for glucose control. Diabetic patients may temporarily need insulin while on steroids.',
    alternatives: ['Monitor blood sugar at least 4× daily during steroid use', 'Discuss temporary insulin supplementation with your doctor', 'Use the lowest effective steroid dose for the shortest duration']
  },

  // 18. Glimepiride + Fluconazole ─ hypoglycemia
  {
    drug1Id: 'd030', drug2Id: 'd035',
    severity: 'Severe',
    mechanism: 'Fluconazole inhibits CYP2C9, the primary enzyme metabolizing Glimepiride, causing dangerous accumulation and prolonged insulin secretion.',
    description: 'Fluconazole can cause severe, prolonged hypoglycemia (dangerously low blood sugar) in patients on Glimepiride. Symptoms include sweating, tremors, confusion, and can progress to seizures and coma.',
    alternatives: ['Reduce Glimepiride dose by 50% during Fluconazole course', 'Consider Metformin temporarily as it has a lower hypoglycemia risk', 'Monitor blood glucose every 4–6 hours']
  },

  // 19. Aspirin + Clopidogrel ─ dual antiplatelet (managed risk)
  {
    drug1Id: 'd001', drug2Id: 'd041',
    severity: 'Moderate',
    mechanism: 'Aspirin inhibits COX-1 mediated thromboxane A2 synthesis while Clopidogrel blocks ADP receptor P2Y12; together they profoundly suppress platelet aggregation.',
    description: 'Dual antiplatelet therapy (Aspirin + Clopidogrel) is intentionally prescribed after stent placement, but it significantly increases bleeding risk. Should only be used for the prescribed duration (usually 6–12 months post-stent).',
    alternatives: ['Do NOT stop either drug without cardiologist approval', 'Use PPI (Pantoprazole/Pantocid, NOT Omeprazole) for GI protection', 'Report any unusual bleeding or black stools immediately']
  },

  // 20. Tramadol + Fluoxetine ─ serotonin syndrome
  {
    drug1Id: 'd005', drug2Id: 'd021',
    severity: 'Severe',
    mechanism: 'Both drugs inhibit serotonin reuptake; Fluoxetine also inhibits CYP2D6, increasing Tramadol plasma levels and its serotonergic metabolite M1.',
    description: 'This combination carries a high risk of Serotonin Syndrome. Fluoxetine also raises Tramadol levels by blocking its breakdown, making both serotonin toxicity and respiratory depression more likely.',
    alternatives: ['Paracetamol or topical NSAIDs for pain management', 'If an antidepressant is needed with Tramadol, discuss Mirtazapine (lower serotonin reuptake inhibition)']
  },

  // 21. Diclofenac + Warfarin ─ bleed risk
  {
    drug1Id: 'd040', drug2Id: 'd014',
    severity: 'Critical',
    mechanism: 'Diclofenac inhibits COX-mediated platelet function and causes GI mucosal damage; synergistic with warfarin anticoagulation to create uncontrolled bleeding.',
    description: 'CRITICAL: Diclofenac (Voveran) with Warfarin is an extremely dangerous combination. The dual anti-hemostatic effect makes major GI bleeding or intracranial hemorrhage a serious and immediate risk.',
    alternatives: ['Paracetamol (Dolo-650/Crocin) for pain', 'Topical Diclofenac gel (Voveran Emulgel) has minimal systemic absorption and is much safer']
  },

  // 22. Olanzapine + Diazepam ─ profound sedation
  {
    drug1Id: 'd038', drug2Id: 'd024',
    severity: 'Severe',
    mechanism: 'Additive CNS depression through combined GABA-A receptor modulation (Diazepam) and D2/5-HT2A antagonism (Olanzapine), plus histamine H1 blockade from Olanzapine.',
    description: 'Combining Olanzapine and Diazepam can cause dangerous sedation, respiratory depression, severe orthostatic hypotension, and cardiovascular collapse — especially in rapid IM administration.',
    alternatives: ['If both are required, use lower doses and monitor vital signs', 'Allow at least 1 hour between administrations', 'Lorazepam may be a safer benzodiazepine in this context']
  },

  // ─── Food & Supplement Interactions ─────────────
  {
    drug1Id: 'f001', drug2Id: 'd016', // Grapefruit + Atorvastatin
    severity: 'Severe',
    mechanism: 'Grapefruit juice contains furanocoumarins which irreversibly inhibit intestinal CYP3A4, dramatically increasing systemic exposure of statins.',
    description: 'Grapefruit juice significantly raises Atorvastatin levels in the blood, greatly increasing the risk of liver damage and rhabdomyolysis (severe muscle breakdown leading to kidney failure).',
    alternatives: ['Switch to Rosuvastatin which is not affected by Grapefruit', 'Avoid grapefruit entirely while on this statin']
  },
  {
    drug1Id: 'f002', drug2Id: 'd021', // St John's Wort + Fluoxetine
    severity: 'Critical',
    mechanism: 'Synergistic serotonergic action. St. John\'s Wort acts as a mild MAOI and SSRI, compounding with Fluoxetine.',
    description: 'CRITICAL: Combining St. John\'s Wort with antidepressants like Fluoxetine can trigger Serotonin Syndrome — a life-threatening emergency causing high fever, seizures, and heart arrhythmias.',
    alternatives: ['Stop St. John\'s Wort immediately; do not use herbal supplements without consulting a doctor']
  },
  {
    drug1Id: 'f003', drug2Id: 'd011', // Calcium + Ciprofloxacin
    severity: 'Moderate',
    mechanism: 'Calcium ions chelate with fluoroquinolones in the gut, forming insoluble complexes that cannot be absorbed.',
    description: 'Calcium supplements bind to Ciprofloxacin in the stomach, reducing antibiotic absorption by up to 60%, which can cause the infection treatment to fail entirely.',
    alternatives: ['Take Ciprofloxacin at least 2 hours before or 6 hours after any dairy or calcium supplements']
  },
  {
    drug1Id: 'f004', drug2Id: 'd004', // Alcohol + Acetaminophen
    severity: 'Severe',
    mechanism: 'Chronic alcohol depletes glutathione and induces CYP2E1, shunting acetaminophen metabolism toward the toxic NAPQI metabolite.',
    description: 'Taking Acetaminophen (Tylenol/Crocin) with Alcohol significantly increases the risk of severe liver toxicity and acute liver failure.',
    alternatives: ['Strictly limit alcohol while taking paracetamol', 'Use NSAIDs like Ibuprofen for hangovers (though this carries its own stomach bleeding risks)']
  },
  {
    drug1Id: 'f004', drug2Id: 'd024', // Alcohol + Diazepam
    severity: 'Critical',
    mechanism: 'Potent synergistic CNS depression via GABA receptor hyperactivation.',
    description: 'CRITICAL: Combining Alcohol with Diazepam or other Benzodiazepines can lead to profound respiratory depression, coma, and death. This is one of the most common causes of fatal overdoses.',
    alternatives: ['Absolute contraindication. Never mix alcohol with sedatives.']
  }
,
  {
    drug1Id: 'd239', drug2Id: 'd237',
    severity: 'Severe',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'SEVERE: Combining Gefizepam and Propylplatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd511', drug2Id: 'd192',
    severity: 'Moderate',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'MODERATE: Combining Ticatecan and Topotefenac can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd276', drug2Id: 'd532',
    severity: 'Critical',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'CRITICAL: Combining Etopofenac and Oxcarbdopa can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd476', drug2Id: 'd221',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Atezolizuterol and Phenypril can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd223', drug2Id: 'd280',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Amlodimycin and Gefipentin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd220', drug2Id: 'd502',
    severity: 'Severe',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'SEVERE: Combining Tiotroposide and Cyclophosthyroxine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd365', drug2Id: 'd351',
    severity: 'Moderate',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'MODERATE: Combining Levorubicin and Duloxcitabine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd121', drug2Id: 'd480',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Valsarrabine and Levorelbine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd451', drug2Id: 'd228',
    severity: 'Moderate',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'MODERATE: Combining Vinblasstatin and Vinorelpurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd291', drug2Id: 'd136',
    severity: 'Moderate',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'MODERATE: Combining Warfaxib and Metorole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd162', drug2Id: 'd477',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Ceritiformin and Cycloterol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd260', drug2Id: 'd244',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Tramaguanine and Propylrelbine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd404', drug2Id: 'd352',
    severity: 'Moderate',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'MODERATE: Combining Cladribflozin and Sitasone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd533', drug2Id: 'd530',
    severity: 'Severe',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'SEVERE: Combining Vinorelgine and Escitapezil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd135', drug2Id: 'd113',
    severity: 'Critical',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'CRITICAL: Combining Venlaate and Dabralimus can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd141', drug2Id: 'd541',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Cetuxiterol and Pregauracil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd173', drug2Id: 'd521',
    severity: 'Moderate',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'MODERATE: Combining Risperpiride and Valsargine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd366', drug2Id: 'd426',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Donemine and Flucam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd235', drug2Id: 'd292',
    severity: 'Moderate',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'MODERATE: Combining Aripitine and Metocitabine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd199', drug2Id: 'd404',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Trametistatin and Cladribflozin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd241', drug2Id: 'd467',
    severity: 'Moderate',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'MODERATE: Combining Levomate and Dabiphamide can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd352', drug2Id: 'd447',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Sitasone and Mercaptofarin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd492', drug2Id: 'd221',
    severity: 'Critical',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'CRITICAL: Combining Thioguapezil and Phenypril can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd321', drug2Id: 'd164',
    severity: 'Severe',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'SEVERE: Combining Mycophenolate and Valprofarin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd268', drug2Id: 'd416',
    severity: 'Critical',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'CRITICAL: Combining Apicam and Lamoparin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd197', drug2Id: 'd171',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Alpraate and Olanphenolate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd248', drug2Id: 'd145',
    severity: 'Moderate',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'MODERATE: Combining Valsarplatin and Fludaracam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd545', drug2Id: 'd220',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Rivatine and Tiotroposide can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd389', drug2Id: 'd483',
    severity: 'Moderate',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'MODERATE: Combining Brigatitoin and Linagtrexate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd431', drug2Id: 'd327',
    severity: 'Severe',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'SEVERE: Combining Vinorelgliptin and Vincriscodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd191', drug2Id: 'd352',
    severity: 'Critical',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'CRITICAL: Combining Avelumapiride and Sitasone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd435', drug2Id: 'd368',
    severity: 'Severe',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'SEVERE: Combining Mycoprolol and Etanercodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd327', drug2Id: 'd490',
    severity: 'Moderate',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'MODERATE: Combining Vincriscodone and Ethodopa can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd483', drug2Id: 'd454',
    severity: 'Moderate',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'MODERATE: Combining Linagtrexate and Glimisone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd254', drug2Id: 'd272',
    severity: 'Critical',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'CRITICAL: Combining Monteluurea and Osimerzole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd493', drug2Id: 'd483',
    severity: 'Severe',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'SEVERE: Combining Glipithyroxine and Linagtrexate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd489', drug2Id: 'd327',
    severity: 'Severe',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'SEVERE: Combining Hydroblastine and Vincriscodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd205', drug2Id: 'd145',
    severity: 'Severe',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'SEVERE: Combining Trametibine and Fludaracam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd195', drug2Id: 'd210',
    severity: 'Moderate',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'MODERATE: Combining Paclimine and Hydroxyuphamide can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd464', drug2Id: 'd358',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Donecodone and Ceritiprolol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd324', drug2Id: 'd382',
    severity: 'Severe',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'SEVERE: Combining Thioguagatran and Durvalucodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd166', drug2Id: 'd184',
    severity: 'Severe',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'SEVERE: Combining Ipratrocillin and Ceriticodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd223', drug2Id: 'd360',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Amlodimycin and Gabacam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd136', drug2Id: 'd348',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Metorole and Crizogliptin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd126', drug2Id: 'd501',
    severity: 'Moderate',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'MODERATE: Combining Bevafarin and Loracetam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd340', drug2Id: 'd474',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Losathyroxine and Ropiniprazole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd136', drug2Id: 'd128',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Metorole and Fludarathium can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd322', drug2Id: 'd195',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Galancristine and Paclimine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd541', drug2Id: 'd353',
    severity: 'Moderate',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'MODERATE: Combining Pregauracil and Amlodiblastine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd240', drug2Id: 'd295',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Ibufenac and Pemetretropium can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd293', drug2Id: 'd238',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Oxypine and Hydrotine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd245', drug2Id: 'd127',
    severity: 'Moderate',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'MODERATE: Combining Rivatropium and Carbamapram can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd302', drug2Id: 'd101',
    severity: 'Severe',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'SEVERE: Combining Propylpine and Methicillin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd212', drug2Id: 'd237',
    severity: 'Moderate',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'MODERATE: Combining Inflixgliptin and Propylplatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd474', drug2Id: 'd109',
    severity: 'Critical',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'CRITICAL: Combining Ropiniprazole and Nivoluprine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd429', drug2Id: 'd281',
    severity: 'Severe',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'SEVERE: Combining Dicloprolol and Citaxib can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd127', drug2Id: 'd377',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Carbamapram and Cefstatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd145', drug2Id: 'd203',
    severity: 'Moderate',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'MODERATE: Combining Fludaracam and Cetuxizepam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd166', drug2Id: 'd385',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Ipratrocillin and Doxorucodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd307', drug2Id: 'd400',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Carbamazide and Esixide can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd282', drug2Id: 'd306',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Prasugliptin and Enoguanine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd204', drug2Id: 'd355',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Levoxide and Zipraate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd470', drug2Id: 'd420',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Metforphenolate and Oxaliplasone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd427', drug2Id: 'd101',
    severity: 'Severe',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'SEVERE: Combining Warfalukast and Methicillin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd492', drug2Id: 'd342',
    severity: 'Critical',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'CRITICAL: Combining Thioguapezil and Melozole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd458', drug2Id: 'd371',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Quetimab and Levogliptin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd539', drug2Id: 'd270',
    severity: 'Moderate',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'MODERATE: Combining Ticablastine and Heppine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd421', drug2Id: 'd339',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Hepprine and Diaterol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd357', drug2Id: 'd412',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Carbamatecan and Ifosfapentin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd545', drug2Id: 'd330',
    severity: 'Critical',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'CRITICAL: Combining Rivatine and Flutithyroxine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd111', drug2Id: 'd440',
    severity: 'Critical',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'CRITICAL: Combining Rivascam and Trastupentin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd243', drug2Id: 'd446',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Ropinigatran and Levopezil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd111', drug2Id: 'd236',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Rivascam and Valsarpurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd290', drug2Id: 'd246',
    severity: 'Severe',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'SEVERE: Combining Durvalugliptin and Glipisartan can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd375', drug2Id: 'd240',
    severity: 'Moderate',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'MODERATE: Combining Vemumine and Ibufenac can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd243', drug2Id: 'd251',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Ropinigatran and Pravazole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd238', drug2Id: 'd530',
    severity: 'Severe',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'SEVERE: Combining Hydrotine and Escitapezil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd270', drug2Id: 'd540',
    severity: 'Critical',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'CRITICAL: Combining Heppine and Decitapurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd173', drug2Id: 'd197',
    severity: 'Moderate',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'MODERATE: Combining Risperpiride and Alpraate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd402', drug2Id: 'd490',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Zoniphenolate and Ethodopa can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd347', drug2Id: 'd458',
    severity: 'Moderate',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'MODERATE: Combining Osimerpiride and Quetimab can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd284', drug2Id: 'd150',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Dapazepam and Topotecristine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd217', drug2Id: 'd197',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Donegliptin and Alpraate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd352', drug2Id: 'd145',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Sitasone and Fludaracam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd538', drug2Id: 'd480',
    severity: 'Moderate',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'MODERATE: Combining Dasatitoin and Levorelbine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd114', drug2Id: 'd469',
    severity: 'Moderate',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'MODERATE: Combining Pemetrexib and Pregapurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd315', drug2Id: 'd117',
    severity: 'Severe',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'SEVERE: Combining Ipratrofenac and Irinorole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd475', drug2Id: 'd324',
    severity: 'Critical',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'CRITICAL: Combining Alprablastine and Thioguagatran can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd533', drug2Id: 'd162',
    severity: 'Moderate',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'MODERATE: Combining Vinorelgine and Ceritiformin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd149', drug2Id: 'd364',
    severity: 'Severe',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'SEVERE: Combining Pantolimus and Topoteprofen can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd211', drug2Id: 'd413',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Levozide and Amoxiposide can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd437', drug2Id: 'd252',
    severity: 'Severe',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'SEVERE: Combining Pravaposide and Vemugine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd115', drug2Id: 'd346',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Glipilukast and Gabagatran can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd507', drug2Id: 'd534',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Hydrocorlimus and Docetapiride can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd413', drug2Id: 'd309',
    severity: 'Severe',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'SEVERE: Combining Amoxiposide and Amoxipril can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd353', drug2Id: 'd515',
    severity: 'Moderate',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'MODERATE: Combining Amlodiblastine and Dapaterol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd157', drug2Id: 'd312',
    severity: 'Severe',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'SEVERE: Combining Fluoroumycin and Dabibalin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd242', drug2Id: 'd407',
    severity: 'Critical',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'CRITICAL: Combining Losafenac and Liozepam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd236', drug2Id: 'd340',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Valsarpurine and Losathyroxine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd200', drug2Id: 'd275',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Valsarpine and Donegatran can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd503', drug2Id: 'd539',
    severity: 'Moderate',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'MODERATE: Combining Pramisporin and Ticablastine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd191', drug2Id: 'd500',
    severity: 'Critical',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'CRITICAL: Combining Avelumapiride and Levotaxel can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd307', drug2Id: 'd228',
    severity: 'Severe',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'SEVERE: Combining Carbamazide and Vinorelpurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd452', drug2Id: 'd425',
    severity: 'Critical',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'CRITICAL: Combining Ipilimutoin and Methotrecam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd261', drug2Id: 'd133',
    severity: 'Moderate',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'MODERATE: Combining Levolimus and Valsarthium can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd464', drug2Id: 'd342',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Donecodone and Melozole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd544', drug2Id: 'd424',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Imatifenac and Diaurea can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd127', drug2Id: 'd417',
    severity: 'Moderate',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'MODERATE: Combining Carbamapram and Gabathium can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd428', drug2Id: 'd185',
    severity: 'Moderate',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'MODERATE: Combining Nilotipezil and Ezetprazole can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd117', drug2Id: 'd456',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Irinorole and Warfabine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd288', drug2Id: 'd455',
    severity: 'Severe',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'SEVERE: Combining Gemcitasone and Cladribguanine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd385', drug2Id: 'd291',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Doxorucodone and Warfaxib can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd431', drug2Id: 'd345',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Vinorelgliptin and Quetizolam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd266', drug2Id: 'd502',
    severity: 'Severe',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'SEVERE: Combining Esiphamide and Cyclophosthyroxine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd334', drug2Id: 'd281',
    severity: 'Moderate',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'MODERATE: Combining Rosuvabalin and Citaxib can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd320', drug2Id: 'd534',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Glimiterol and Docetapiride can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd129', drug2Id: 'd212',
    severity: 'Moderate',
    mechanism: 'Synergistic CNS depression causing respiratory risk.',
    description: 'MODERATE: Combining Etanerparin and Inflixgliptin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd394', drug2Id: 'd361',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Topiurea and Paniprolol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd477', drug2Id: 'd106',
    severity: 'Critical',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'CRITICAL: Combining Cycloterol and Ticauracil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd289', drug2Id: 'd170',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Rivatropium and Ciproflozin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd235', drug2Id: 'd319',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Aripitine and Pantonib can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd430', drug2Id: 'd398',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Vinoreltoin and Mycopezil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd468', drug2Id: 'd238',
    severity: 'Critical',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'CRITICAL: Combining Ifosfamide and Hydrotine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd400', drug2Id: 'd119',
    severity: 'Moderate',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'MODERATE: Combining Esixide and Montelucodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd254', drug2Id: 'd507',
    severity: 'Moderate',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'MODERATE: Combining Monteluurea and Hydrocorlimus can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd422', drug2Id: 'd163',
    severity: 'Moderate',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'MODERATE: Combining Decitamycin and Nilotiurea can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd173', drug2Id: 'd394',
    severity: 'Severe',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'SEVERE: Combining Risperpiride and Topiurea can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd392', drug2Id: 'd276',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Cetuxisartan and Etopofenac can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd242', drug2Id: 'd406',
    severity: 'Severe',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'SEVERE: Combining Losafenac and Ropinistatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd267', drug2Id: 'd306',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Cobitaxel and Enoguanine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd479', drug2Id: 'd481',
    severity: 'Severe',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'SEVERE: Combining Epirucitabine and Cefstatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd170', drug2Id: 'd169',
    severity: 'Severe',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'SEVERE: Combining Ciproflozin and Cyclophosgine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd514', drug2Id: 'd446',
    severity: 'Moderate',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'MODERATE: Combining Losatoin and Levopezil can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd542', drug2Id: 'd101',
    severity: 'Moderate',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'MODERATE: Combining Rosuvabine and Methicillin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd231', drug2Id: 'd452',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Vemutropium and Ipilimutoin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd246', drug2Id: 'd435',
    severity: 'Severe',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'SEVERE: Combining Glipisartan and Mycoprolol can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd154', drug2Id: 'd135',
    severity: 'Critical',
    mechanism: 'Additive effect on QT interval prolongation increasing risk of Torsades de Pointes.',
    description: 'CRITICAL: Combining Crizomide and Venlaate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd344', drug2Id: 'd184',
    severity: 'Critical',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'CRITICAL: Combining Alectixate and Ceriticodone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd386', drug2Id: 'd160',
    severity: 'Severe',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'SEVERE: Combining Gefiphamide and Cyclophenolate can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd510', drug2Id: 'd236',
    severity: 'Severe',
    mechanism: 'Decreases gastrointestinal absorption via chelation.',
    description: 'SEVERE: Combining Prasumycin and Valsarpurine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd517', drug2Id: 'd417',
    severity: 'Critical',
    mechanism: 'Pharmacodynamic antagonism at the receptor level.',
    description: 'CRITICAL: Combining Atezolizunib and Gabathium can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd222', drug2Id: 'd188',
    severity: 'Severe',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'SEVERE: Combining Olanthium and Momegatran can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd360', drug2Id: 'd291',
    severity: 'Severe',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'SEVERE: Combining Gabacam and Warfaxib can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd349', drug2Id: 'd360',
    severity: 'Severe',
    mechanism: 'Induces CYP2C9 metabolism, reducing efficacy of the counterpart.',
    description: 'SEVERE: Combining Ipilimusolone and Gabacam can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd457', drug2Id: 'd247',
    severity: 'Critical',
    mechanism: 'Competes for renal tubular secretion, reducing clearance.',
    description: 'CRITICAL: Combining Ceflukast and Enosone can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd113', drug2Id: 'd393',
    severity: 'Severe',
    mechanism: 'Increases risk of gastrointestinal bleeding when combined.',
    description: 'SEVERE: Combining Dabralimus and Vinorelfloxacin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd169', drug2Id: 'd198',
    severity: 'Critical',
    mechanism: 'Inhibits CYP3A4 leading to increased plasma levels of the secondary drug.',
    description: 'CRITICAL: Combining Cyclophosgine and Duloxcitabine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd106', drug2Id: 'd194',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Ticauracil and Aripicitabine can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd526', drug2Id: 'd103',
    severity: 'Moderate',
    mechanism: 'Displaces drug from plasma proteins, increasing free active fraction.',
    description: 'MODERATE: Combining Clopiphamide and Gabasporin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  },
  {
    drug1Id: 'd368', drug2Id: 'd248',
    severity: 'Critical',
    mechanism: 'Dual inhibition of the RAAS system causing hyperkalemia.',
    description: 'CRITICAL: Combining Etanercodone and Valsarplatin can cause adverse effects. Ensure appropriate dosage adjustments or monitoring.',
    alternatives: ["Monitor closely during co-administration","Consider alternative therapy if risk outweighs benefit"]
  }
];
