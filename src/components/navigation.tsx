import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
    UserButton,
    UserProfile,
    // SignOutButton,
    // SignUpButton,
    // // UserButton,
    // SignedIn,
    // SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
export const Navigation = () => {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-[var(--foreground)]">
                            Next.js App
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <SignedIn>
                            <SignOutButton></SignOutButton>
                            {/* <UserButton></UserButton> */}
                            {/* <UserProfile></UserProfile> */}
                            <Link href="/user-profile">Profile</Link>

                        </SignedIn>

                        <SignedOut>
                            <SignInButton>
                                <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-600">Sign IN</button>
                            </SignInButton>
                            <SignUpButton >
                                <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-600">Register</button>
                            </SignUpButton>
                        </SignedOut>
                    </div>
                </div>
            </div>
        </nav>
    );
};