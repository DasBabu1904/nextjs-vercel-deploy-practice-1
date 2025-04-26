import { SignIn } from "@clerk/nextjs";

export default function SignINPage(){
    return(
        <div className="flex justify-center items-center py-8">
            <SignIn/>
        </div>
    )
}