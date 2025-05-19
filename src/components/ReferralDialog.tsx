
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Refer"
            data-height="577"
            data-layout-iframe-id="inline-W8qvJ5pMmshpCpggHwCP"
            data-form-id="W8qvJ5pMmshpCpggHwCP"
            title="Refer"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReferralDialog;
