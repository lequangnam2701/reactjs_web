const sanpham = [
    {
        pic: "https://product.hstatic.net/1000281824/product/nt5177_o0x6f4ic-1-v48v-hinh_mat_truoc-0_25a98e12b2f24bafa15158aa1094aefe.jpeg",
        picHover: "https://product.hstatic.net/1000281824/product/8swqq0qh-1-3zj6-hinh_nghieng_trai_sau_linh_dong-0_87d522e709f94873b55eb8cfc570b0e4_large.jpeg",
        itemname: "Balo Degrey simili nắp đậy nhiều ngăn - NNGAN",
        price: 51,
        discount: 10,
        rating: 3,
        sale: true,
    },
    {
        pic: "https://product.hstatic.net/1000281824/product/7d7c42fc3dbd4f83baba2a183192ec15_706d39d53b4b43d287b6b56eb7c6c295.jpeg",
        picHover:"https://product.hstatic.net/1000281824/product/a3380ebfc48645a6aeaac25c025b0515_675ebd23e8894f359d02840e973ac4cc_large.jpeg",
        itemname: "Degrey Double Leather Basic Balo Nâu Small Size - LBBDMNA",
        price: 71,
        discount: 20,
        rating: 4,
        sale: true,
    },
    {
        pic: "https://product.hstatic.net/1000281824/product/b75a6c6adf0a48548d53f0c2e66e00b0_4f92c3fb728c49138396cc8a41d5728c.jpeg",
        itemname: "Degrey Leather Basic Balo Nâu Small Size - LBBMNA",
        picHover: "https://product.hstatic.net/1000281824/product/1dd35c8f87ca47819b4b65c1095163a2_a10392f1e83a43a8bdef26fb99561420_large.jpeg",
        price: 21,
        discount: 0,
        rating : 5,
        sale : false,
    },
    {pic: "https://product.hstatic.net/1000281824/product/nt5177_kq37cpuw-1-athf-hinh_nghieng_trai-0_5108ce4b5dee4c0ea0c24065d1f15149.jpg",
    picHover:"https://product.hstatic.net/1000281824/product/5fcfe56752c8498193035500c5822437_9bad9f9d62f247188c801a85cc7c54fd_large.jpg",
    itemname: "Degrey Balo Leather Quốc Dân - BQDL",
    price: 51,
    discount: 25,
    rating : 2,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/2a1f6c2bc6be428d88c8a258586b873d_b12661707fbd43e69ab171c5a60c160f.jpg",
    picHover:"https://product.hstatic.net/1000281824/product/0a5c679a44714805a6bb821c76498e82_9861f092b8ad4b70902ed106bce5cad8_large.jpg",
    itemname: "Degrey Balo Leather Quốc Dân Nâu - BQDLNA",
    price: 41,
    discount: 10,
    rating: 3,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/img_6753_7cb6011bd47f487592e367ea7f73ccfe.jpeg",
    itemname: "Degrey Leather Basic Balo Small Size - LBBM",
    picHover: "https://product.hstatic.net/1000281824/product/img_7237_4b313a6cf0c141468a9b95c05898112f_large.jpeg",
    price: 24,
    discount: 20,
    rating: 4,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/img_7236_7027a7d7394a4f3796ccd56ed2a66b02.jpeg",
    itemname: "Degrey Leather Basic Balo Kem Small Size - LBBMK",
    picHover: "https://product.hstatic.net/1000281824/product/img_7232_963a6e94687f4c639a4505b3bafba250_large.jpeg",
    price: 65,
    discount: 0,
    rating : 5,
    sale : false,
},
{
    pic: "https://product.hstatic.net/1000281824/product/nt5124_3bn4xw6v-1-oan0-hinh_nghieng_trai-0_0cf6e589b8cc493eada8f14d0764f013.jpeg",
    picHover: "https://product.hstatic.net/1000281824/product/nt5124_3bn4xw6v-1-oan0-hinh_mat_truoc-0_711767dbf1794ac6b8ba00edee2d804d_large.jpeg",
    itemname: "Balo Degrey Basic Nắp Chữ Nhật - BCN",
    price: 45,
    discount: 10,
    rating: 3,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/54affca1c04b4f73ac93447d7f1dbdfa_9c9f59048da9463ab9e949970dc45b80.jpeg",
    picHover: "https://product.hstatic.net/1000281824/product/nt5177_8swqq0qh-1-e19d-hinh_mat_truoc-0_9c36b9187b85486a942754ab526db22c_large.jpeg",
    itemname: "Degrey Balo Simili Nap Basic Kem - SNAPK",
    price: 54,
    discount: 20,
    rating: 4,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/21c28a0d2188493f814eab78b5049666_5c52ceee0fde423893c06557a224784c.jpeg",
    picHover: "https://product.hstatic.net/1000281824/product/nt5177_8swqq0qh-1-e19d-hinh_mat_truoc-0_9c36b9187b85486a942754ab526db22c_large.jpeg",
    itemname: "Degrey Double Leather Basic Balo Xám - LBBDX",
    price: 37,
    discount: 0,
    rating : 5,
    sale : false,
},
{
    pic: "https://product.hstatic.net/1000281824/product/2d866695-b448-4f5c-b52b-3401db3098dd_76b9baaa3f14443f82f5b9a69f641062.jpeg",
    picHover: "https://product.hstatic.net/1000281824/product/nt5177_8swqq0qh-1-e19d-hinh_mat_truoc-0_9c36b9187b85486a942754ab526db22c_large.jpeg",
    itemname: "Degrey Leather Basic Balo Rêu - LBBR",
    price: 31,
    discount: 20,
    rating: 4,
    sale: true,
},
{
    pic: "https://product.hstatic.net/1000281824/product/4e99a08548444ce4bf63947526d9a5d0_b4665dfa9b124147a5d77d2bf61b10c1.jpg",
    picHover: "https://product.hstatic.net/1000281824/product/b99ad07e08614364800c6a029c19f4e7_386f8764533e4f319efae67056fd0a76_large.jpeg",
    itemname: "Degrey Double Leather Basic Balo Nâu - LBBDNA",
    price: 42,
    discount: 0,
    rating : 5,
    sale : false,
},
];
export default sanpham;