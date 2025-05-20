
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ReferralDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReferralDialog({ open, onOpenChange }: ReferralDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-3xl w-full">
        <div className="h-[600px] w-full">
          <iframe
            src="https://api.parracityweb.com/widget/form/W8qvJ5pMmshpCpggHwCP"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            id="inline-W8qvJ5pMmshpCpggHwCP" 
            data-layout="{'id':'INLINE'}"
            title="Refer"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReferralDialog;
