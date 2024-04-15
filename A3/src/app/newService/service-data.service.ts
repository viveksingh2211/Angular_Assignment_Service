import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  smartphone = [
    {
      id: '1',
      name: 'iPhone 14 Pro',
      brand: 'Apple',
      price: 1099,
      image:
        'https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN_823x.jpg?v=1691140898',
      description:
        'The iPhone 14 Pro is the latest flagship smartphone from Apple, offering unparalleled performance and features.',
      features: [
        '6.7-inch Super Retina XDR display',
        'Apple A16 Bionic chip',
        '6GB RAM',
        '128GB/256GB/512GB/1TB storage options',
        'Triple camera system with LiDAR scanner',
        'iOS 16',
        '4500mAh battery',
      ],
    },
    {
      id: '2',
      name: 'Samsung Galaxy S22 Ultra',
      brand: 'Samsung',
      price: 1199,
      image: 'https://m.media-amazon.com/images/I/71PzXKXjz6L._SX679_.jpg',
      description:
        'The Samsung Galaxy S22 Ultra is a powerhouse smartphone with cutting-edge technology and innovative features.',
      features: [
        '6.8-inch Dynamic AMOLED 2X display',
        'Exynos 2200/Snapdragon 8 Gen 2 chip',
        '12GB/16GB RAM',
        '256GB/512GB/1TB storage options',
        'Quad camera system with 108MP main sensor',
        'S Pen support',
        '5000mAh battery',
      ],
    },
    {
      id: '3',
      name: 'Google Pixel 7 Pro',
      brand: 'Google',
      price: 999,
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/10/355030621/JP/PC/AF/126530580/google-pixel-7-pro-256gb-white.png',
      description:
        'The Google Pixel 7 Pro offers exceptional camera performance and a pure Android experience.',
      features: [
        '6.7-inch OLED display',
        'Google Tensor chip',
        '8GB RAM',
        '128GB/256GB storage options',
        'Triple camera system with 50MP main sensor',
        'Android 13',
        '4800mAh battery',
      ],
    },
    {
      id: '4',
      name: 'OnePlus 10 Pro',
      brand: 'OnePlus',
      price: 899,
      image: 'https://assets.sangeethamobiles.com/product_img/3557_4.png',
      description:
        'The OnePlus 10 Pro delivers flagship-level performance and a sleek design.',
      features: [
        '6.7-inch Fluid AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '128GB/256GB storage options',
        'Triple camera system with Hasselblad optics',
        'OxygenOS 12',
        '5000mAh battery',
      ],
    },
    {
      id: '5',
      name: 'Xiaomi Mi 12 Ultra',
      brand: 'Xiaomi',
      price: 1099,
      image:
        'https://i03.appmifile.com/671_item_in/02/08/2023/ea66f621d1a4637141dde0462f789968!600x600!85.jpg',
      description:
        'The Xiaomi Mi 12 Ultra pushes the boundaries of smartphone innovation with its advanced features.',
      features: [
        '6.8-inch AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '12GB/16GB RAM',
        '256GB/512GB/1TB storage options',
        'Quad camera system with 200MP main sensor',
        'MIUI 14',
        '4800mAh battery',
      ],
    },
    {
      id: '6',
      name: 'Sony Xperia 1 IV',
      brand: 'Sony',
      price: 1099,
      image:
        'https://sony.scene7.com/is/image/sonyglobalsolutions/PDX-223_black_v01-1?$S7Product$&fmt=png-alpha',
      description:
        'The Sony Xperia 1 IV offers a cinematic viewing experience and professional-grade photography features.',
      features: [
        '6.5-inch 4K HDR OLED display',
        'Snapdragon 8 Gen 1 chip',
        '8GB RAM',
        '256GB/512GB storage options',
        'Triple camera system with ZEISS optics',
        'Android 13',
        '4500mAh battery',
      ],
    },
    {
      id: '7',
      name: 'Huawei P50 Pro',
      brand: 'Huawei',
      price: 999,
      image:
        'https://www.refurbished.store/cache/images/huawei-p50-pro-zwart-duo_600x600_BGresize_16777215-tj.png',
      description:
        'The Huawei P50 Pro redefines smartphone photography with its innovative camera technology.',
      features: [
        '6.6-inch OLED display',
        'Kirin 9000 chip',
        '8GB RAM',
        '256GB/512GB storage options',
        'Quad camera system with 108MP main sensor',
        'HarmonyOS 3',
        '4360mAh battery',
      ],
    },
    {
      id: '8',
      name: 'Realme GT 2 Pro',
      brand: 'Realme',
      price: 799,
      image:
        'https://satugadget.com.my/wp-content/uploads/2022/03/Realme-GT-2-Pro-Black-600x600.jpeg',
      description:
        'The Realme GT 2 Pro offers flagship-level performance at an affordable price point.',
      features: [
        '6.7-inch Super AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '128GB/256GB storage options',
        'Triple camera system with 50MP main sensor',
        'Realme UI 3.0',
        '5000mAh battery',
      ],
    },
    {
      id: '9',
      name: 'Oppo Find X5 Pro',
      brand: 'Oppo',
      price: 1099,
      image: 'https://m.media-amazon.com/images/I/71QmFJCJ-ML._AC_SX679_.jpg',
      description:
        'The Oppo Find X5 Pro combines innovative design with powerful performance.',
      features: [
        '6.78-inch AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '256GB/512GB storage options',
        'Triple camera system with 50MP main sensor',
        'ColorOS 13',
        '5000mAh battery',
      ],
    },
    {
      id: '10',
      name: 'Motorola Edge X30',
      brand: 'Motorola',
      price: 799,
      image:
        'https://m.media-amazon.com/images/I/41oZLWI3kjL._SX300_SY300_QL70_FMwebp_.jpg',
      description:
        'The Motorola Edge X30 offers a premium experience with its sleek design and powerful performance.',
      features: [
        '6.8-inch OLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '128GB/256GB storage options',
        'Triple camera system with 108MP main sensor',
        'My UX 4.0',
        '5000mAh battery',
      ],
    },
    {
      id: '11',
      name: 'Xiaomi Redmi Note 11 Pro',
      brand: 'Xiaomi',
      price: 399,
      image:
        'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1648746756.40316847!400x400!85.png',
      description:
        'The Xiaomi Redmi Note 11 Pro offers excellent value for money with its impressive features and affordable price point.',
      features: [
        '6.67-inch AMOLED display',
        'Snapdragon 695 processor',
        '8GB RAM',
        '128GB storage',
        'Quad camera system (64MP main)',
        'MIUI 13',
        '5000mAh battery',
      ],
    },
    {
      id: '12',
      name: 'Google Pixel 6',
      brand: 'Google',
      price: 699,
      image:
        'https://www.triveniworld.com/cdn/shop/files/google-pixel-6-128gb-8gb-ram-refurbished-triveni-world-2.jpg?v=1711852355',
      description:
        "The Google Pixel 6 combines cutting-edge technology with Google's signature software experience for unmatched performance.",
      features: [
        '6.4-inch OLED display',
        'Google Tensor chip',
        '8GB RAM',
        '128GB/256GB storage options',
        'Dual camera system (50MP main)',
        'Android 13',
        '4080mAh battery',
      ],
    },
    {
      id: '13',
      name: 'OnePlus 10',
      brand: 'OnePlus',
      price: 899,
      image:
        'https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/EU-IN_Black.png',
      description:
        'The OnePlus 10 delivers flagship-level performance and a premium design, perfect for tech enthusiasts.',
      features: [
        '6.8-inch Fluid AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '12GB/16GB RAM',
        '256GB/512GB storage options',
        'Triple camera system with Hasselblad optics',
        'OxygenOS 13',
        '5000mAh battery',
      ],
    },
    {
      id: '14',
      name: 'Sony Xperia 5 IV',
      brand: 'Sony',
      price: 999,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEx-RRC1AzmZsC69R8-l76HU_syJZWj8sRo7-Fuevgw&s',
      description:
        'The Sony Xperia 5 IV offers a compact design without compromising on performance, making it ideal for multimedia consumption on the go.',
      features: [
        '6.1-inch 4K HDR OLED display',
        'Snapdragon 8 Gen 1 chip',
        '8GB RAM',
        '256GB storage',
        'Triple camera system with ZEISS optics',
        'Android 13',
        '4000mAh battery',
      ],
    },
    {
      id: '15',
      name: 'Motorola Edge 30 Pro',
      brand: 'Motorola',
      price: 799,
      image:
        'https://motorolain.vtexassets.com/arquivos/ids/157000/motorola-edge30-pro-pdp-render-Stardust-3-8p1zhqcj.png?v=637835332500100000',
      description:
        'The Motorola Edge 30 Pro offers flagship-level performance and a stunning display, perfect for gaming and multimedia consumption.',
      features: [
        '6.7-inch OLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '128GB/256GB storage options',
        'Triple camera system with 108MP main sensor',
        'My UX 5.0',
        '5000mAh battery',
      ],
    },
    {
      id: '16',
      name: 'Realme GT Neo 3',
      brand: 'Realme',
      price: 599,
      image:
        'https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/mobile/p/n/u/-original-imagetmezhss8jzf.jpeg?q=20&crop=false',
      description:
        'The Realme GT Neo 3 offers exceptional gaming performance and a high-refresh-rate display, perfect for gaming enthusiasts.',
      features: [
        '6.7-inch Super AMOLED display',
        'Dimensity 9000 chip',
        '8GB/12GB RAM',
        '128GB/256GB storage options',
        'Triple camera system (50MP main)',
        'Realme UI 4.0',
        '5000mAh battery',
      ],
    },
    {
      id: '17',
      name: 'Huawei Nova 9 Pro',
      brand: 'Huawei',
      price: 799,
      image: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-9-pro-5g-.jpg',
      description:
        'The Huawei Nova 9 Pro offers a sleek design and advanced camera features, perfect for photography enthusiasts.',
      features: [
        '6.78-inch OLED display',
        'Kirin 9000E chip',
        '8GB RAM',
        '256GB storage',
        'Quad camera system with 108MP main sensor',
        'HarmonyOS 3.0',
        '4300mAh battery',
      ],
    },
    {
      id: '18',
      name: 'Oppo Find X5',
      brand: 'Oppo',
      price: 899,
      image:
        'https://htsg-store-gl.heytapimg.com/image-file/epb/202301/13/VclYp2QyBiBRply1.png?x-amz-process=image/resize,m_fill,h_960,w_1080',
      description:
        'The Oppo Find X5 combines innovative design with powerful performance, offering a premium smartphone experience.',
      features: [
        '6.5-inch AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '8GB/12GB RAM',
        '256GB/512GB storage options',
        'Triple camera system with 50MP main sensor',
        'ColorOS 13',
        '4500mAh battery',
      ],
    },
    {
      id: '19',
      name: 'Lenovo Legion Phone Duel 3',
      brand: 'Lenovo',
      price: 1099,
      image:
        'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-7-500x500.jpg',
      description:
        'The Lenovo Legion Phone Duel 3 is designed for mobile gamers, offering a unique dual-screen design and top-of-the-line performance.',
      features: [
        '6.92-inch AMOLED display (main), 1.45-inch AMOLED display (secondary)',
        'Snapdragon 8 Gen 2 chip',
        '12GB/16GB RAM',
        '256GB/512GB storage options',
        'Dual camera system (64MP main)',
        'Legion OS 4.0',
        '5500mAh battery',
      ],
    },
    {
      id: '20',
      name: 'ASUS ROG Phone 6',
      brand: 'ASUS',
      price: 999,
      image:
        'https://dlcdnwebimgs.asus.com/gain/B46BEF43-3A3C-4A30-B73A-7A1434566EC8',
      description:
        'The ASUS ROG Phone 6 is a gaming-centric smartphone with a high-refresh-rate display and advanced cooling system, perfect for mobile gaming enthusiasts.',
      features: [
        '6.78-inch AMOLED display',
        'Snapdragon 8 Gen 2 chip',
        '16GB RAM',
        '512GB storage',
        'Triple camera system (64MP main)',
        'ROG UI',
        '6000mAh battery',
      ],
    },
  ];
  constructor(private router: Router) {}

  getOneProd(id: string) {
    return this.smartphone.find((s) => s.id === id);
  }
}
