const all = [
    {
        id: "1",
        name: "STAY POSITIVE YES YOGA LEGGINGS",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/mockup-b9e3aa61_720x.jpg?v=1678811435",
        price: 66.00
    },
    {
        id: "2",
        name: "SONGBIRD YOGA PANT",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/pants_2894e491-c874-4560-8a7d-fa2368a34563_360x.jpg?v=1678811349",
        price: 35.00
    },
    {
        id: "3",
        name: " BE KIND T-SHIRT",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_9160c121-ed1d-42c0-a186-a08e64a9d522_360x.jpg?v=1678811250 ",
        price: 22.95
    },
    {
        id: "4",
        name: "WOMEN'S FAUX FUR SLEEVELESS VEST ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/MMV1125422463_Black_3_360x.jpg?v=1678811174 ",
        price: 14.00
    },
    {
        id: "5",
        name: "HEATHERED COTTON SWEAT ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_92f90853-4256-4987-9ad4-ac251ff65b32_360x.jpg?v=1678811125 ",
        price: 34.00
    },
    {
        id: "6",
        name: "DOUBLE BUCKLE HIGH NECK VEGAN LEATHER BIKER JACKET ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/11d8a611-8abf-5bf1-88e4-6839585b1d0d_73a8019c-5e09-4ea4-b246-527a8e2bc353_360x.jpg?v=1678811064 ",
        price: 79.98
    },
    {
        id: "7",
        name: "BURGUNDY ELEPHANT PANTS WOMEN BOHO PANTS HIPPIE PANTS YOGA ",
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_561ab08a-374c-4347-94cb-98f79150697e_360x.jpg?v=1678811019",
        price: 35.00
    },
    {
        id: "8",
        name: "GREY PIQUE POLO SHIRT ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/polo-boy-grey-pique-polo-shirt-1_360x.jpg?v=1678810975 ",
        price: 22
    },
    {
        id: "9",
        name: "CAELI - A TWO-PIECE GOLD LACE SET FEATURING BUILT-IN UNDERWIRE AND BRA ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/BZ8371_21_1024x1024_66f5b223-b3e0-4e5c-b486-a46586a18806_360x.jpg?v=1678810930 ",
        price: 84.20
    },
    {
        id: "10",
        name: "INKWELL DRESS",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/Cotton_Canary_Product_photos_EL-7111_360x.jpg?v=1678810887 ",
        price: 147.40
    },
    {
        id: "11",
        name: 'ADJUSTABLE PILATES BAR KIT RESISTANCE BAND EXERCISE STICK TONING GYM ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/384857957059399680_761f3f0d-a8ed-49b8-b1e5-09919fc9d386_360x.jpg?v=1678811737 ",
        price: 45.96
    },
    {
        id: "12",
        name: 'WOMENS CARBON FIBER SPORTS LEGGINGS ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/il_570xN.1457757480_bz69_360x.jpg?v=1678811682 ",
        price: 69.44
    },
    {
        id: "13",
        name: ' PORTABLE FITNESS RESISTANCE BAND WITH PEDA',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_50706f25-5cfc-49c7-a769-547498d6f88e_360x.jpg?v=1678811640 ",
        price: 36.99
    },
    {
        id: "14",
        name: ' FITNESS & MUSCLE RECOVERY BUNDLE',
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/image00001_360x.jpg?v=1678811599",
        price: 276.95
    },
    {
        id: "15",
        name: 'SLIDING CORE EXERCISE DISCS ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/IMG_8068_360x.jpg?v=1678811531 ",
        price: 37.49
    },
    {
        id: "16",
        name: 'DUAL STRIPE SHORT SLEEVE TEE ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/NV_S_4c00f739-a705-4eb4-9f0b-0925fc548b94_360x.jpg?v=1678811482 ",
        price: 9.99
    },
    {
        id: "17",
        name: 'STAY POSITIVE YES YOGA LEGGING ',
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/mockup-b9e3aa61_720x.jpg?v=1678811435",
        price: 66.00
    },
    {
        id: "18",
        name: 'MUSCLE RECOVERY & 3 PACK RESISTANCE BAND BUNDL ',
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/IMG_8817_360x.jpg?v=1678811395",
        price: 102.49
    },
    {
        id: "19",
        name: 'SONGBIRD YOGA PANTS ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/pants_2894e491-c874-4560-8a7d-fa2368a34563_360x.jpg?v=1678811349 ",
        price: 35.00
    },
    {
        id: "20",
        name: 'PGG FOLDING PORTABLE NECK MASSAGER 5 MODES MASSAGE PULSE INFRARED ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/514262174730813440_334ad7d6-5f23-4575-a622-b26cbf445d9e_360x.jpg?v=1678811304 ",
        price: 66.65
    },
    {
        id: "21",
        name: "FASHION CASUAL QUARTZ ",
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/Ship-From-US-2017-New-Fashion-Casual-Quartz-Watch-Women-Men-Crystal-Dress-Watches-Relogio.jpg_640x640_bac6f002-7695-4261-ba0b-f7c9eeea415d_360x.jpg?v=1678812644",
        price: 14

    },
    {
        id: "22",
        name: "LO2075 - RHODIUM BRASS RING WITH AAA GRADE CZ IN CLEAR ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/lo2075_9f2cbff9-5ecb-4786-b28a-7e87d521539d_360x.jpg?v=1678812600 ",
        price: 17.00

    },
    {
        id: "23",
        name: "WOMEN STAINLESS STEEL CUBIC ZIRCONIA RINGS TK2675 ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/TK2675_360x.jpg?v=1678812555 ",
        price: 24.00

    },
    {
        id: "24",
        name: "STERLING SILVER 1/4CT TDW DIAMOND HOOP EARRING ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/70-4961W-4_0a3e4fea-19d8-4d11-bb2a-a14c90ffcd70_360x.jpg?v=1678812509 ",
        price: 153.00

    },
    {
        id: "25",
        name: "PINK CHALCEDONY AND JADE CLUSTER HOOP EARRINGS ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/earringspinkchalchoops_360x.jpg?v=1678812466 ",
        price: 25

    },
    {
        id: "26",
        name: "LOVE SET OF REDS AND PURPLES DRUZY EARRING BOX ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/24910057_1830757706934377_6747731212553412678_n_360x.jpg?v=1678812424 ",
        price: 5.60

    },
    {
        id: "27",
        name: " ARCORIS WHITE MARBLE FILIGREE PENDANT & LOVE 5 PIECE BRACELET SET",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/HAI-B3039_01_360x.jpg?v=1678812384 ",
        price: 11.00

    },
    {
        id: "28",
        name: "TK079 - HIGH POLISHED (NO PLATING) STAINLESS STEEL RING WITH AAA GRADE ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/tk079_e729428e-6fc9-4ac9-8bc9-d5b6882bb617_360x.jpg?v=1678812340 ",
        price: 11.37

    },
    {
        id: "29",
        name: "GOLD FLAKE DOUBLE SET OF DRUZY LIKE 12MM EARRINGS ",
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/IMG_0488_360x.jpg?v=1678812295 ",
        price: 8.32

    },
    {
        id: "30",
        name: " CUSTOM BABY NAMEPLATE BRACELETS HANDMADE WOMEN MEN",
        img: " https://cdn.shopify.com/s/files/1/0735/8876/9073/products/Custom-Baby-Nameplate-Bracelets-Handmade-Women-Men-Personalized-Name-Dainty-Initials-Bracelet-Bangle-Friendship-Jewelry-Gift_2220c43f-ba2f-4c93-ba68-c368c0ebfac0_360x.jpg?v=1678812254",
        price: 15.98

    }, {
        id: "31",
        name: 'REAL DEAL SUNGLASSES ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_b7a1d53e-bed4-4a07-81ea-b340558f4459_360x.jpg?v=1678812205 ",
        price: 25.00
    },
    {
        id: "32",
        name: 'JASE NEW YORK ALTON SUNGLASSES IN YELLOW ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_9a22ccc8-02d0-47f8-9cd7-fcc9d9c3baba_360x.jpg?v=1678812163 ",
        price: 14.99
    },
    {
        id: "33",
        name: 'JASE NEW YORK STARK SUNGLASSES IN SILVER ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_50c1da36-32b3-453a-bbc5-ca1c3c75e0b6_360x.jpg?v=1678812109 ",
        price:24.99
    },
    {
        id: "34",
        name: ' DAY AND NIGHT POLARIZED GLASSES OUTDOOR DRIVING SUNGLASSES',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_8b04090f-5615-4dba-9054-f986782d8609_360x.jpg?v=1678812068 ",
        price: 15.9
    },
    {
        id: "35",
        name: ' DIONNE SUNGLASSES',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_27077220-8dc6-4468-8637-c7806b821fa0_360x.jpg?v=1678812019 ",
        price: 25.00
    },
    {
        id: "36",
        name: ' JASE NEW YORK CACHE SUNGLASSES IN MATTE BLACK',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_8427c0b5-a450-4f68-a423-5fe112c439b0_360x.jpg?v=1678811975 ",
        price: 59.99
    },
    {
        id: "37",
        name: 'JASE NEW YORK LINCOLN SUNGLASSES IN PIN ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_574d2e80-bade-4e9d-884b-40e95e6fd3a5_360x.jpg?v=1678811884 ",
        price: 34.99
    },
    {
        id: "38",
        name: 'DECLAN METALS SUNGLASSES ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/declan-metals-sunglasseseyewearmad-manmadstyle-11417143_9e322ea7-7cf5-44f2-8a5c-de80ff16d541_360x.jpg?v=1678811838 ",
        price: 17.00
    },
    {
        id: "39",
        name: 'JASE NEW YORK JACKSON SUNGLASSES IN MATTE BLACK ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_d9497da6-acbb-457d-8dab-3eb55284f64e_360x.jpg?v=1678811787 ",
        price: 34.99
    },
    {
        id: "40",
        name: 'JASE NEW YORK VICTOR SUNGLASSES IN SILVER ',
        img: "https://cdn.shopify.com/s/files/1/0735/8876/9073/products/data_4f918733-3162-4cab-8a17-ad899f699bf3_360x.jpg?v=1678811928 ",
        price: 59.99
    },
]
export default all
