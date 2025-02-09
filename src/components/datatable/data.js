export const columns =[
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'username', headerName: 'User', width: 230,

        renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email', headerName: 'Email', width: 230
    },
    {
        field: 'age', headerName: 'Age', width: 100
    },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]


export const rows = [
    {
        id: 1225,
        username: "Acer Nitro 5",
        img: "https://picsum.photos/500",
        email: "JohnSmith@gmail.com",  
        status: 'actif',
        age: 30
       
    },
    {
        id: 1226,
        username: "paul amai",
        img: "https://picsum.photos/500",
        email: "amuujunio55@gmail.com",
        status: 'actif',
        age: 14
    },
    {
        id: 1227,
        username: "jean pier",
        img: "https://picsum.photos/500",
        email: "ngahattouga@gmail.com",
        status: 'pendind',
        age: 26
    },
    {
        id: 1228,
        username: "andre matie",
        img: "https://picsum.photos/500",
        email: "fokemyokam@gmail.com",
        status: 'actif',
        age: 23
    },
    {
        id: 1229,
        username: "maman sylvie",
        img: "https://picsum.photos/500",
        email: "andreasgaol@gmail.com",
        status: 'passif',
        age: 35
    },
    {
        id: 1230,
        username: "jean ulrixj",
        img: "https://picsum.photos/500",
        email: "JohnSmith@gmail.com",
        status: 'actif',
        age: 19
    },
    {
        id: 1231,
        username: "olivia cabrielle",
        img: "https://picsum.photos/500",
        email: "joghnotant@gmail.com",
        status: 'pendind',
        age: 19
    },
    {
        id: 1232,
        username: "charge paul",
        img: "https://picsum.photos/500",
        email: "yvanpier@gmail.com",
        status: 'passif',
        age: 23
    },
    {
        id: 1233,
        username: "jean claude",
        img: "https://picsum.photos/500",
        email: "pierapaul@gmail.com",
        status: 'pendind',
        age: 12
    },
    {
        id:1234,
        username: "tonton piere",
        img: "https://picsum.photos/500",
        email: "marcjonh@gmail.com",
        status: 'passif',
        age: 17
    },
    {
        id: 1235,
        username: "andre matie",
        img: "https://picsum.photos/500",
        email: "fokemyokam@gmail.com",
        status: 'actif',
        age: 23
    },
    {
        id: 1236,
        username: "maman sylvie",
        img: "https://picsum.photos/500",
        email: "andreasgaol@gmail.com",
        status: 'passif',
        age: 35
    },
    {
        id: 1237,
        username: "jean ulrixj",
        img: "https://picsum.photos/500",
        email: "JohnSmith@gmail.com",
        status: 'actif',
        age: 19
    },
];