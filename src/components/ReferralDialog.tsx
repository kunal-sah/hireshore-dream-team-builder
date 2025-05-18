
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
    // Here you would typically send the data to your backend
    toast({
      title: "Referral submitted!",
      description: `You've referred ${data.friendName}. We'll notify you when you earn your $100!`,
    });
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-[#7346e6]">
            Refer a Friend & Earn $100
          </DialogTitle>
          <DialogDescription className="text-center">
            Know someone who could use our services? Refer them and earn $100 when they sign up!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="border-b pb-4 mb-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Your Information</h3>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="johndoe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Friend's Information</h3>
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="friendName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Friend's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} />
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
                        <FormLabel>Friend's Email</FormLabel>
                        <FormControl>
                          <Input placeholder="janesmith@example.com" {...field} />
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
                className="w-full bg-[#f97316] hover:bg-[#ea580c]"
              >
                <UserPlus className="mr-2" />
                Submit Referral
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ReferralDialog;
