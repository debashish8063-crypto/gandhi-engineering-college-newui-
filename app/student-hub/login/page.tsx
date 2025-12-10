"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function StudentLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    if (!email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!password) {
      errors.password = "Password is required"
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setError("Please fix the errors below")
      return
    }

    const supabase = createClient()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Invalid email or password. Please try again.")
        }
        throw error
      }

      setSuccess("Login successful! Redirecting...")
      setTimeout(() => {
        router.push("/student-hub/dashboard")
        router.refresh()
      }, 1000)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred. Please try again."
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-background to-muted p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col gap-6">
          {/* Logo/Header */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white font-bold text-xl">
              GEC
            </div>
            <h1 className="text-3xl font-bold text-foreground">Student Hub</h1>
            <p className="text-sm text-muted-foreground">Gandhi Engineering College</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Sign in to your student account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin}>
                  <div className="flex flex-col gap-6">
                    {/* Email Input */}
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="student@gec.edu"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" })
                        }}
                        disabled={isLoading}
                        className={validationErrors.email ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.email && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle size={14} /> {validationErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Password Input */}
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          if (validationErrors.password) setValidationErrors({ ...validationErrors, password: "" })
                        }}
                        disabled={isLoading}
                        className={validationErrors.password ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.password && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle size={14} /> {validationErrors.password}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="rounded-lg bg-destructive/10 border border-destructive/30 p-3 flex items-center gap-2"
                        >
                          <AlertCircle className="text-destructive" size={18} />
                          <p className="text-sm text-destructive">{error}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Success Message */}
                    <AnimatePresence>
                      {success && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="rounded-lg bg-success-green/10 border border-success-green/30 p-3 flex items-center gap-2"
                        >
                          <CheckCircle className="text-success-green" size={18} />
                          <p className="text-sm text-success-green">{success}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-academic-blue-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </motion.button>
                  </div>
                </form>

                <div className="mt-6 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-background px-2 text-muted-foreground">New student?</span>
                    </div>
                  </div>
                  <Link href="/student-hub/signup" className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border-2 border-primary text-primary bg-transparent py-3 px-6 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                      type="button"
                    >
                      Create an account
                    </motion.button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Demo credentials */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
            <Card className="border-muted bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground font-medium mb-2">Demo Credentials:</p>
                <p className="text-xs text-muted-foreground">Email: demo@gec.edu</p>
                <p className="text-xs text-muted-foreground">Password: demo123456</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
