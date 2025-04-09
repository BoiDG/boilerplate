"use client"

import { useState } from "react"
import { User, CreditCard, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditProfileProps {
  onSave: () => void
  onSelectBank: () => void
  selectedBank: string
}

export default function EditProfile({ onSave, onSelectBank, selectedBank }: EditProfileProps) {
  const [identityNumber, setIdentityNumber] = useState("12345678910123")
  const [name, setName] = useState("Thema Lengkap")
  const [phone, setPhone] = useState("+62 8123 4567 890")
  const [accountName, setAccountName] = useState("Alexander Mario")

  return (
    <div className="flex flex-col h-full pb-16">
      <div className="p-4 border-b flex items-center">
        <h1 className="text-lg font-medium mx-auto">Ubah Profil</h1>
      </div>

      <div className="p-4 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-green-600" />
            <h2 className="font-medium">Informasi Pengguna</h2>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="identity">Nomor Identitas Pengguna</Label>
              <Input id="identity" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone">Nomor Telepon</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-green-600" />
            <h2 className="font-medium">Informasi Bank</h2>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="bank">Nama Pemilik Akun Bank</Label>
              <Input id="bank-owner" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </div>

            <div className="space-y-1">
              <Label htmlFor="bank">Nama Bank</Label>
              <div
                className="flex items-center justify-between border rounded-md p-3 cursor-pointer"
                onClick={onSelectBank}
              >
                <span className="text-gray-600">{selectedBank || "Pilih nama bank"}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="account">Nomor Rekening Bank</Label>
              <Input id="account" placeholder="Masukkan nomor rekening bank" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={onSave}>
          Ubah Profil
        </Button>
      </div>
    </div>
  )
}
