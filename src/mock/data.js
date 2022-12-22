import img1 from "../assets/house1.png"
import noImg from "../assets/noimg.jpg"
import user from "./owner.png"

export const data = [
    {
        id: 1,
        title: "Skyper Pool Partment",
        subtitle: "112 Glenwood Ave Hyde Park, Boston, MA",
        settings: {
            beds: 4,
            baths: 5,
            garage: 1,
            area: 1200
        },
        pricePerMonth: "5,250",
        afterPrice: "10,999",
        img: img1
    },
    {
        id: 2,
        title: "Big House",
        subtitle: "Lorem ipsum dolor",
        settings: {
            beds: 9,
            baths: 9,
            garage: 9,
            area: 9999
        },
        pricePerMonth: "4,999",
        afterPrice: "5,999",
        img: img1
    },
    {
        id: 3,
        title: "Famous House",
        subtitle: "Ipsum dolor sit amet",
        settings: {
            beds: 7,
            baths: 6,
            garage: 5,
            area: 7777
        },
        pricePerMonth: "1,777",
        afterPrice: "3,500",
        img: img1
    }
]

export const cards = [
    {
        id: 1,
        name: "Loading...",
        address: "Unknown",
        country: "Unknown city",
        houseDetails: {
            beds: 0,
            baths: 0,
            garage: 0,
            area: 0
        },
        salePrice: "0",
        price: "0",
        attachments: [
            {
                imgPath: noImg
            }
        ]
    },
    {
        id: 1,
        name: "Loading...",
        address: "Unknown",
        country: "Unknown city",
        houseDetails: {
            beds: 0,
            baths: 0,
            garage: 0,
            area: 0
        },
        salePrice: "0",
        price: "0",
        attachments: [
            {
                imgPath: noImg
            }
        ]
    },
    {
        id: 1,
        name: "Loading...",
        address: "Unknown",
        country: "Unknown city",
        houseDetails: {
            beds: 0,
            baths: 0,
            garage: 0,
            area: 0
        },
        salePrice: "0",
        price: "0",
        attachments: [
            {
                imgPath: noImg
            }
        ]
    }
]

export const t = [
    {
        user: "John Doe",
        job: "Designer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    },
    {
        user: "Katty Alex",
        job: "Engineer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    },
    {
        user: "Kelly Alex",
        job: "Developer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    },
    {
        user: "John Doe 1",
        job: "Designer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    },
    {
        user: "Katty Alex 1 ",
        job: "Engineer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    },
    {
        user: "Kelly Alex 1",
        job: "Developer",
        description: "I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends",
        userImg: user
    }
]