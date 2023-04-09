export const userColumn = [
    {field:"id", headerName:"ID", width:70},
    {field:"user", headerName:"User", width:230,
        renderCell:(params) =>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {field:"email",headerName:"Email",width:230},
    {field:"age", headerName:"Age", width:100},
    {field:"status", headerName:"Status", width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }

]

export const userRows = [
    {
        id:1,
        username:"snow",
        img:"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTUHhgvrnnW7o1YI99qPkrB5g5HJ31yW4NUBRn1clO9X2d3GbCpvyO65DefpJuH89w8qf-LUI_R0gOtjuI",
        status:"active",
        email:"1snow@gmail.com",
        age:35
    },
    {
        id:2,
        username:"Jaimi Lanister",
        img:"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSjAemcJGPWO_fh5UtiN7IP2XNoLSWVeOmSwzPrTGj2JhsHBpRujZ-Jb9Oe20Nu3xyxE3OlC0XCmIosb2g",
        status:"passive",
        email:"jaimehere@gmail.com",
        age:42
    },
    {
        id:3,
        username:"Toby Shelby",
        img:"https://i2-prod.birminghammail.co.uk/incoming/article7915552.ece/ALTERNATES/s1200c/Cillian-Murphy-Peaky-Blinders.jpg",
        status:"active",
        email:"tobylondon@gmail.com",
        age:37
    },
    {
        id:4,
        username:"stark",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg",
        status:"active",
        email:"stark@gmail.com",
        age:40
    },
    {
        id:5,
        username:"Otis",
        img:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSPinN353lNcQMSwJhAbSrOP_pLOGH8zKLh7mE_cdyNijAgbKGRkahLelA2liIp2qPO6faXbZppCPCB7yk",
        status:"passive",
        email:"Otiseducation@gmail.com",
        age:17
    },
    {
        id:6,
        username:"Ruby",
        img:"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSyL7bcfoWYj_mSOq1Os-exFdyEt1H4_GQUYuh-zTfY5lOnyypjksub06-qwTlv116VdkNPEkrj6bvBeY0",
        status:"pending",
        email:"Rubyfashion@gmail.com",
        age:17
    },
]