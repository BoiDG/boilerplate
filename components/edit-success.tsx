"use client"

import { User, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface EditSuccessProps {
  onBackToProfile: () => void
}

export default function EditSuccess({ onBackToProfile }: EditSuccessProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-lg font-medium">Edit Profile / Success</h1>
      </div>

      <div className="p-4 space-y-4">
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <User className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Informasi Pengguna</div>
              <div className="font-medium">Thema Lengkap</div>
              <div className="text-sm text-gray-500">Nomor Telepon Pengguna</div>
              <div className="text-xs text-gray-400">Last edited just now</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <CreditCard className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Informasi Bank</div>
              <div className="font-medium">Alexander Mario</div>
              <div className="text-sm text-gray-500">Nomor Rekening Bank Central Asia</div>
              <div className="text-xs text-gray-400">Last edited just now</div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center py-2">
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-50"
            onClick={onBackToProfile}
          >
            Ubah Profil
          </Button>
        </div>

        <div className="flex justify-center text-red-500 text-sm">
          <button className="hover:underline">Batalkan dan Ubah Akun</button>
        </div>
      </div>
    </div>
  )
}
