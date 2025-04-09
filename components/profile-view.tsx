"use client"

import { User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProfileViewProps {
  onEditProfile: () => void
}

export default function ProfileView({ onEditProfile }: ProfileViewProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-lg font-medium">Profile Page</h1>
        <Button variant="outline" size="sm" onClick={onEditProfile}>
          Edit Profile / Default
        </Button>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4 border-2 border-dashed border-blue-300">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Informasi Pengguna</div>
              <div className="font-medium">Thema Lengkap</div>
              <div className="text-sm text-gray-500">Nomor Telepon Pengguna</div>
              <div className="text-xs text-gray-400">Last edited 2 days ago</div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <Button variant="ghost" size="sm" className="text-xs text-blue-500">
              Ubah Profil
            </Button>
          </div>
        </Card>

        <Card className="p-4 border-2 border-dashed border-blue-300">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <CreditCard className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Informasi Bank</div>
              <div className="font-medium">Alexander Mario</div>
              <div className="text-sm text-gray-500">Nomor Rekening Bank Central Asia</div>
              <div className="text-xs text-gray-400">Last edited 2 days ago</div>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <Button variant="ghost" size="sm" className="text-xs text-blue-500">
              Ubah Profil
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
