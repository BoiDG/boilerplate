"use client"

import { useState } from "react"
import ProfileView from "./profile-view"
import EditProfile from "./edit-profile"
import EditSuccess from "./edit-success"
import BankSelection from "./bank-selection"
import BottomNavigation from "./bottom-navigation"

type ViewState = "profile" | "edit" | "success"

export default function ProfilePage() {
  const [currentView, setCurrentView] = useState<ViewState>("profile")
  const [selectedBank, setSelectedBank] = useState("")
  const [bankDrawerOpen, setBankDrawerOpen] = useState(false)

  const handleEditProfile = () => {
    setCurrentView("edit")
  }

  const handleSaveProfile = () => {
    setCurrentView("success")
  }

  const handleOpenBankSelection = () => {
    setBankDrawerOpen(true)
  }

  const handleSelectBank = (bank: string) => {
    setSelectedBank(bank)
    setBankDrawerOpen(false)
  }

  const handleBackToProfile = () => {
    setCurrentView("profile")
  }

  return (
    <div className="w-full max-w-md mx-auto h-full min-h-screen bg-white">
      {currentView === "profile" && <ProfileView onEditProfile={handleEditProfile} />}

      {currentView === "edit" && (
        <EditProfile onSave={handleSaveProfile} onSelectBank={handleOpenBankSelection} selectedBank={selectedBank} />
      )}

      {currentView === "success" && <EditSuccess onBackToProfile={handleBackToProfile} />}

      <BankSelection open={bankDrawerOpen} onOpenChange={setBankDrawerOpen} onSelectBank={handleSelectBank} />

      <BottomNavigation activeTab="profile" />
    </div>
  )
}
