"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

interface BankSelectionProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectBank: (bank: string) => void
}

export default function BankSelection({ open, onOpenChange, onSelectBank }: BankSelectionProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const banks = [
    "Bank Aceh Syariah",
    "Bank Aladin Syariah",
    "Bank Allo Indonesia",
    "Bank Central Asia",
    "Bank Central Asia Syariah",
    "Bank Central Asia",
    "Bank Central Asia",
    "Bank Central Asia",
    "Bank Central Asia",
  ]

  const filteredBanks = banks.filter((bank) => bank.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="border-b">
          <DrawerTitle>Pilih Nama Bank</DrawerTitle>
          <DrawerDescription>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-9"
                placeholder="Cari nama bank"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[50vh] overflow-auto">
          {filteredBanks.map((bank, index) => (
            <button
              key={index}
              className="w-full text-left p-4 border-b hover:bg-gray-50"
              onClick={() => onSelectBank(bank)}
            >
              {bank}
            </button>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
