
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import ReferralDialog from "./ReferralDialog";

const ReferralBanner = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="w-full bg-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <span className="font-medium">The call answering professionals: Over 5 years of virtual receptionist experience</span>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Button 
            onClick={() => setIsDialogOpen(true)}
            variant="default" 
            className="bg-[#f97316] hover:bg-[#ea580c] text-white"
            size="sm"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Refer a friend - Earn $100
          </Button>
        </div>
      </div>
      <ReferralDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
};

export default ReferralBanner;
