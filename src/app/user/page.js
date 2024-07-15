import Script from 'next/script';


async function userList() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users;
}
export default async function user() {
    let users = await userList()
    // console.log(users)
    return (
        <div>
            {/* <Script src='/location.js' onLoad={() => {
                console.log("file loaded")
            }} /> */}

            <h1>User Page</h1>

            {
                users.map((item) => (
                    <div key={item.id}>
                        <h2>{item.firstName}</h2>
                        <p>{item.lastName}</p>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                        <p>{item.id}</p>
                    </div>
                ))
            }




        </div>
    )
}



// export function generateMetadata({ params }) {
//     return {
//         title: "user page title",
//         description: "its user page description"
//     }
// }