import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Check, Heart, Settings } from "lucide-react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  attendance: z.string().min(1, "Conferma la tua presenza"),
  dietary: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// Zapier webhook URL - you can set this to your own webhook
const ZAPIER_WEBHOOK_URL = "";

const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(ZAPIER_WEBHOOK_URL);
  const [showSettings, setShowSettings] = useState(false);
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

  const onSubmit = async (data: FormData) => {
    console.log("RSVP submitted:", data);
    
    if (!webhookUrl) {
      toast({
        title: "Configurazione mancante",
        description: "Inserisci l'URL del webhook Zapier nelle impostazioni per salvare le risposte su Google Sheets.",
        variant: "destructive",
      });
      setShowSettings(true);
      return;
    }

    setIsLoading(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: data.name,
          email: data.email,
          attendance: data.attendance === "yes" ? "Sì" : "No",
          guests: data.guests,
          dietary: data.dietary || "Nessuna",
          message: data.message || "",
        }),
      });

      toast({
        title: "Grazie per la conferma! 💕",
        description: "Abbiamo ricevuto la tua risposta. Non vediamo l'ora di festeggiare con te!",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending RSVP:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            {/* Admin Settings (collapsible) */}
            <Collapsible open={showSettings} onOpenChange={setShowSettings} className="mb-6">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Impostazioni Admin
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 p-4 bg-muted/50 rounded-lg">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Zapier Webhook URL
                </label>
                <Input
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="border-peach/30 focus:border-peach focus:ring-peach mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Crea un Zap con trigger "Webhooks by Zapier" → azione "Google Sheets - Create Spreadsheet Row"
                </p>
              </CollapsibleContent>
            </Collapsible>

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
                  disabled={isLoading}
                  className="w-full bg-peach hover:bg-peach-dark text-primary-foreground py-6 text-lg rounded-full transition-all duration-300"
                >
                  {isLoading ? (
                    <>Invio in corso...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Invia Conferma
                    </>
                  )}
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
