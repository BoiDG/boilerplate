import { User, CreditCard, MessageSquare } from "lucide-react"

interface BottomNavigationProps {
  activeTab: "profile" | "payment" | "posts"
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white flex justify-around py-3 max-w-md mx-auto">
      <div className={`flex flex-col items-center ${activeTab === "profile" ? "text-green-500" : "text-gray-400"}`}>
        <User className="h-5 w-5" />
        <span className="text-xs mt-1">Profile</span>
      </div>
      <div className={`flex flex-col items-center ${activeTab === "payment" ? "text-green-500" : "text-gray-400"}`}>
        <CreditCard className="h-5 w-5" />
        <span className="text-xs mt-1">Payment</span>
      </div>
      <div className={`flex flex-col items-center ${activeTab === "posts" ? "text-green-500" : "text-gray-400"}`}>
        <MessageSquare className="h-5 w-5" />
        <span className="text-xs mt-1">Posts</span>
      </div>
    </div>
  )
}
