import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignupSuccess() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-background to-muted p-4 md:p-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white font-bold text-xl">
              ✓
            </div>
            <h1 className="text-2xl font-bold text-foreground">Account Created!</h1>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Success</CardTitle>
              <CardDescription>Your account has been created successfully</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your student account has been created. You can now login with your email and password to access your
                dashboard.
              </p>
              <Link href="/student-hub/login">
                <Button className="w-full" size="lg">
                  Go to Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
