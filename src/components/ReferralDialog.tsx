
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  friendName: z.string().min(2, { message: "Friend's name must be at least 2 characters." }),
  friendEmail: z.string().email({ message: "Please enter a valid email address." }),
});

type ReferralFormValues = z.infer<typeof formSchema>;

interface ReferralDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReferralDialog({ open, onOpenChange }: ReferralDialogProps) {
  const { toast } = useToast();
  const form = useForm<ReferralFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      friendName: "",
      friendEmail: "",
    },
  });

  function onSubmit(data: ReferralFormValues) {
    console.log(data);
    
    // Create form data to send
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('friendName', data.friendName);
    formData.append('friendEmail', data.friendEmail);
    
    // Send email using fetch or other method
    try {
      // Email submission logic - this would typically go to a server endpoint
      // For now we'll just log it and simulate success
      console.log(`Sending referral data to kunal@hireshore.co`);
      console.log(formData);
      
      // Show success message
      toast({
        title: "Referral submitted!",
        description: `You've referred ${data.friendName}. We'll notify you when you earn your $100!`,
      });
      
      // Reset form and close dialog
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your referral. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-200 shadow-lg">
        <DialogHeader className="bg-white">
          <DialogTitle className="text-2xl font-bold text-center text-[#7346e6]">
            Refer a Friend & Earn $100
          </DialogTitle>
          <DialogDescription className="text-center text-gray-700">
            Know someone who could use our services? Refer them and earn $100 when they sign up!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-white">
            <div className="grid grid-cols-1 gap-4">
              <div className="border-b pb-4 mb-2">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Your Information</h3>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Friend's Information</h3>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="friendName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Friend's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="friendEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Friend's Email</FormLabel>
                        <FormControl>
                          <Input placeholder="janesmith@example.com" {...field} className="bg-white border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button 
                type="submit" 
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white"
              >
                <UserPlus className="mr-2" />
                Submit Referral
              </Button>
            </DialogFooter>
            <div className="text-xs text-gray-500 text-center pt-2">
              Submissions will be sent to kunal@hireshore.co
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ReferralDialog;
