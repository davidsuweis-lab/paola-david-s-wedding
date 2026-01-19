import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  attendance: z.string().min(1, "Conferma la tua presenza"),
  dietary: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: "",
      attendance: "",
      dietary: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("RSVP submitted:", data);
    
    // Here you would typically send this to a backend
    // For now, we'll just show a success message
    toast({
      title: "Grazie per la conferma! 💕",
      description: "Abbiamo ricevuto la tua risposta. Non vediamo l'ora di festeggiare con te!",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-peach-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-peach-dark" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Grazie!
            </h2>
            <p className="text-muted-foreground mb-8">
              La tua conferma è stata inviata con successo. 
              Non vediamo l'ora di condividere questo giorno speciale con te!
            </p>
            <div className="flex items-center justify-center gap-2 text-peach-dark">
              <Heart className="w-5 h-5 fill-peach" />
              <span className="font-serif text-lg">Paola & David</span>
              <Heart className="w-5 h-5 fill-peach" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Ti Aspettiamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Conferma Presenza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ti preghiamo di confermare la tua presenza entro il 15 Marzo 2026.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-peach/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Nome e Cognome</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Il tuo nome completo" 
                          className="border-peach/30 focus:border-peach focus:ring-peach"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="la.tua@email.it" 
                          className="border-peach/30 focus:border-peach focus:ring-peach"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Attendance */}
                <FormField
                  control={form.control}
                  name="attendance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Parteciperai?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-peach/30 focus:border-peach focus:ring-peach">
                            <SelectValue placeholder="Seleziona una risposta" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-peach/30">
                          <SelectItem value="yes">Sì, sarò presente con gioia! 🎉</SelectItem>
                          <SelectItem value="no">Mi dispiace, non potrò esserci 😢</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Number of Guests */}
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Numero di ospiti (te incluso/a)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-peach/30 focus:border-peach focus:ring-peach">
                            <SelectValue placeholder="Seleziona" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-peach/30">
                          <SelectItem value="1">1 persona</SelectItem>
                          <SelectItem value="2">2 persone</SelectItem>
                          <SelectItem value="3">3 persone</SelectItem>
                          <SelectItem value="4">4 persone</SelectItem>
                          <SelectItem value="5+">5 o più persone</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dietary Requirements */}
                <FormField
                  control={form.control}
                  name="dietary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Allergie o intolleranze alimentari</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Es: vegetariano, senza glutine..." 
                          className="border-peach/30 focus:border-peach focus:ring-peach"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Un messaggio per gli sposi (opzionale)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Scrivi un messaggio..." 
                          className="border-peach/30 focus:border-peach focus:ring-peach min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-peach hover:bg-peach-dark text-primary-foreground py-6 text-lg rounded-full transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Invia Conferma
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
