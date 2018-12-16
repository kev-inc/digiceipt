export const receipts = [
    {
        shopName: "GONG CHA",
        shopBranch: "Fine Foods @ NUS UTown",
        GST: "M-201009405",
        pax: 1,
        table: 0,
        items: [
            {
                qty: 1,
                name: "MT w Pearl (Cold)",
                price: 3
            },
            {
                qty: 1,
                name: "Hazelnut Milk Tea",
                price: 4.50
            }
        ],
        subtotal: 7.50,
        total: 7.50,
        date: new Date("2018-12-15")
    },
    {
        shopName: "Harry's International Pte Ltd",
        shopBranch: "Harry's @ Clarke Quay",
        GST: "M-201009405",
        BRN: "199103579R",
        pax: 2,
        table: 7,
        items: [
            {
                qty: 1,
                name: "BBQ BABY BACK RIBS",
                price: 29.00,
                optional: [
                    {
                        desc: "EATIGO 50%",
                        price: -14.50
                    }
                ]
            },
            {
                qty: 1,
                name: "CRANBERRY JUICE",
                price: 6.00
            },
            {
                qty: 1,
                name: "JAZZ BURGER",
                price: 22.00,
                optional: [
                    {
                        desc: "EATIGO 50%",
                        price: -11
                    }
                ]
            },
        ],
        subtotal: 31.50,
        svc: 3.15,
        gst: 2.43,
        total: 37.08,
        date: new Date("2018-12-13")
    }
]