import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  medicines = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Paracetamol is a common pain reliever and fever reducer.',
      price: 5.99,
      quantity: 100,
      manufacturer: 'Generic Pharma',
      image:
        'https://www.abibapharmacia.com/wp-content/uploads/2022/08/Diptamp-500-scaled.jpg',
    },
    {
      id: 2,
      name: 'Ibuprofen',
      description:
        'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, swelling, and fever.',
      price: 7.49,
      quantity: 80,
      manufacturer: 'MediCorp',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/7/327782868/RE/ZC/XG/132158408/ibuprofen-oral-suspension-bp-ibugesic-500x500.jpeg',
    },
    {
      id: 3,
      name: 'Omeprazole',
      description:
        'Omeprazole is a medication used in the treatment of gastroesophageal reflux disease (GERD), peptic ulcer disease, and Zollinger–Ellison syndrome.',
      price: 9.99,
      quantity: 60,
      manufacturer: 'PharmaCare',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/8/333617770/HU/CV/CM/65567988/omeprazole-40mg-tablet.jpg',
    },
    {
      id: 4,
      name: 'Amoxicillin',
      description:
        'Amoxicillin is an antibiotic used to treat a number of bacterial infections.',
      price: 12.99,
      quantity: 50,
      manufacturer: 'BioPharm',
      image:
        'https://www.pyxuspharmaceuticals.com/wp-content/uploads/2022/12/AMOXICILLIN-SODIUM-INJECTION.png',
    },
    {
      id: 5,
      name: 'Atorvastatin',
      description:
        'Atorvastatin is a medication used to prevent cardiovascular disease in those at high risk and to treat abnormal lipid levels.',
      price: 15.99,
      quantity: 40,
      manufacturer: 'HealthPharm',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/7/325710235/RG/XA/JU/74349057/atorvastatin-10-mg.jpg',
    },

    {
      id: 6,
      name: 'Cetirizine',
      description:
        'Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.',
      price: 6.99,
      quantity: 90,
      manufacturer: 'Reliable Pharmaceuticals',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/4/297257277/GQ/YD/EX/105631899/100-mg-cetirizine-capsules.webp',
    },
    {
      id: 7,
      name: 'Lisinopril',
      description:
        'Lisinopril is a medication of the angiotensin-converting enzyme (ACE) inhibitor class used to treat high blood pressure, heart failure, and after heart attacks.',
      price: 11.49,
      quantity: 70,
      manufacturer: 'MediCo Solutions',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2020/10/TC/IN/IF/26192048/lisinopril-tablet.jpg',
    },
    {
      id: 8,
      name: 'Metformin',
      description: 'Metformin is a medication used to treat type 2 diabetes.',
      price: 8.99,
      quantity: 85,
      manufacturer: 'Global Pharmaceutics',
      image:
        'https://images.ctfassets.net/4w8qvp17lo47/6vXaH4Y5Gw6AMEmASwGkc6/e6ff962a82811e4d160cc2d5c0d8b3cb/metformin-antidiabetic-tablets-science-photo-library.jpg',
    },
    {
      id: 9,
      name: 'Levothyroxine',
      description:
        'Levothyroxine is a thyroid medicine used to treat hypothyroidism.',
      price: 7.99,
      quantity: 95,
      manufacturer: 'ThyroPharma',
      image:
        'https://www.netmeds.com/images/product-v1/600x600/819672/euthyrox_25mcg_tablet_100s_0_0.jpg',
    },
    {
      id: 10,
      name: 'Alprazolam',
      description:
        'Alprazolam is a medication primarily used for the treatment of anxiety disorders, panic disorders, and nausea due to chemotherapy.',
      price: 13.99,
      quantity: 65,
      manufacturer: 'Mental Health Pharmaceuticals',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/10/351699650/MA/NL/RF/199896005/alprazolam-tablets-0-50mg-0-5-mg.jpg',
    },
    {
      id: 11,
      name: 'Diazepam',
      description:
        'Diazepam is a medication of the benzodiazepine family that typically produces a calming effect.',
      price: 10.99,
      quantity: 75,
      manufacturer: 'Tranquil Pharmaceuticals',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/4/JA/ZQ/QF/131891296/daizepam.jpg',
    },
    {
      id: 12,
      name: 'Simvastatin',
      description:
        'Simvastatin is a medication used for lowering high cholesterol and triglycerides in people with elevated levels.',
      price: 14.49,
      quantity: 55,
      manufacturer: 'Cholesterol Care Inc.',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/10/351748430/HO/YM/VP/187789820/simvastatin-10-mg-tablet.jpeg',
    },
    {
      id: 13,
      name: 'Escitalopram',
      description:
        'Escitalopram is a medication used to treat depression and generalized anxiety disorder.',
      price: 12.99,
      quantity: 60,
      manufacturer: 'Mental Wellness Pharmaceuticals',
      image:
        'https://drbest.in/wp-content/uploads/2019/12/Escitalopram-10mg.jpg',
    },
    {
      id: 14,
      name: 'Warfarin',
      description: 'Warfarin is a medication that is used as an anticoagulant.',
      price: 9.49,
      quantity: 80,
      manufacturer: 'CardioPharma',
      image:
        'https://miro.medium.com/v2/resize:fit:463/1*AQT02HC_kGcxhe_LQCyLug.png',
    },
    {
      id: 15,
      name: 'Metoprolol',
      description: 'Metoprolol is a medication of the beta-blocker type.',
      price: 11.99,
      quantity: 70,
      manufacturer: 'HeartCare Pharmaceuticals',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2022/1/PV/NF/WU/13166357/metoprolol-tartrate-ip-50-mg.jpg',
    },
  ];

  constructor(private router: Router) {}

  onSubmit(medicine: any) {
    this.router.navigateByUrl('/product-detail', { state: medicine });
  }
  

}


























// catergory = [
//   {
//     catName: 'Top ProductDataService',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Elderly Care',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Personal Care',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Healthcar Devices',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Health Food and Drinks',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Skin care',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Mother and Baby Care',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Accessories $ Wearables',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Fitness Supplements',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Ayurvedic Care',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Sexual Wellness',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Diabetic Care ',
//     Image: '',
//     offers: 'upto 65% off',
//   },
//   {
//     catName: 'Health ondition',
//     Image: '',
//     offers: 'upto 65% off',
//   },
// ];
