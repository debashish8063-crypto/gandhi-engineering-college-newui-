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

export default function StudentSignup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: "",
    studentId: "",
    department: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    if (!formData.firstName.trim()) errors.firstName = "First name is required"
    if (!formData.lastName.trim()) errors.lastName = "Last name is required"
    if (!formData.studentId.trim()) errors.studentId = "Student ID is required"
    if (!formData.department) errors.department = "Department is required"

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      errors.password = "Password is required"
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      errors.password = "Password must contain lowercase letters"
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      errors.password = "Password must contain uppercase letters"
    } else if (!/(?=.*\d)/.test(formData.password)) {
      errors.password = "Password must contain numbers"
    }

    if (!formData.repeatPassword) {
      errors.repeatPassword = "Please confirm your password"
    } else if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = "Passwords do not match"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSignUp = async (e: React.FormEvent) => {
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
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email.trim(),
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            student_id: formData.studentId,
            department: formData.department,
          },
        },
      })

      if (authError) throw authError

      if (authData.user) {
        const { error: profileError } = await supabase.from("students").insert({
          id: authData.user.id,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          student_id: formData.studentId,
          department: formData.department,
          year: 1,
          semester: 1,
        })

        if (profileError) throw profileError
      }

      setSuccess("Account created successfully! Redirecting...")
      setTimeout(() => {
        router.push("/student-hub/signup-success")
      }, 1500)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (validationErrors[name]) {
      setValidationErrors({ ...validationErrors, [name]: "" })
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
                <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription>Create your student account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp}>
                  <div className="flex flex-col gap-4">
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

                    {/* First/Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={isLoading}
                          className={validationErrors.firstName ? "border-destructive" : ""}
                        />
                        <AnimatePresence>
                          {validationErrors.firstName && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-destructive"
                            >
                              {validationErrors.firstName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={isLoading}
                          className={validationErrors.lastName ? "border-destructive" : ""}
                        />
                        <AnimatePresence>
                          {validationErrors.lastName && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-destructive"
                            >
                              {validationErrors.lastName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Student ID */}
                    <div className="grid gap-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        placeholder="230701001"
                        required
                        value={formData.studentId}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={validationErrors.studentId ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.studentId && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-destructive"
                          >
                            {validationErrors.studentId}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Department */}
                    <div className="grid gap-2">
                      <Label htmlFor="department">Department</Label>
                      <select
                        id="department"
                        name="department"
                        className={`flex h-10 rounded-md border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors ${validationErrors.department ? "border-destructive" : "border-input"}`}
                        required
                        value={formData.department}
                        onChange={handleChange}
                        disabled={isLoading}
                      >
                        <option value="">Select Department</option>
                        <option value="CSE">Computer Science & Engineering</option>
                        <option value="ECE">Electronics & Communication</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="CE">Civil Engineering</option>
                        <option value="EE">Electrical Engineering</option>
                      </select>
                      <AnimatePresence>
                        {validationErrors.department && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-destructive"
                          >
                            {validationErrors.department}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="student@gec.edu"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={validationErrors.email ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.email && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-destructive"
                          >
                            {validationErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Password */}
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={validationErrors.password ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.password && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-destructive"
                          >
                            {validationErrors.password}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Confirm Password */}
                    <div className="grid gap-2">
                      <Label htmlFor="repeatPassword">Confirm Password</Label>
                      <Input
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        required
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        disabled={isLoading}
                        className={validationErrors.repeatPassword ? "border-destructive" : ""}
                      />
                      <AnimatePresence>
                        {validationErrors.repeatPassword && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-destructive"
                          >
                            {validationErrors.repeatPassword}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

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
                      {isLoading ? "Creating account..." : "Sign Up"}
                    </motion.button>
                  </div>
                </form>

                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/student-hub/login" className="font-medium text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
