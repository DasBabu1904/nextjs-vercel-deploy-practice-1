import { auth, currentUser } from "@clerk/nextjs/server";


export default async function DashBoardPage() {
    // const authObj = await auth()
    // const currUser = await currentUser()
    // console.log(authObj)
    // console.log(currUser)
    return (
        <div>Dashboard</div>
    )
}