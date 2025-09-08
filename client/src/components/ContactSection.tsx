import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      try {
        const response = await apiRequest("POST", "/api/contact", data);
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || "Failed to send message");
        }
        
        return result;
      } catch (error) {
        console.error("Contact form submission error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Contact form success:", data);
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "Thank you for your message! I'll get back to you soon.",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error: Error) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error Sending Message",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted with data:", data);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Karachi, Pakistan"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "abdullahyamin456@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+92 316 1319919"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/abdul7y"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-blue to-primary-dark mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your project to life? Let's discuss how we can build something amazing together.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2 section-fade">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-testid="contact-info-title">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center" data-testid={`contact-info-${index}`}>
                      <i className={`${info.icon} text-primary-blue text-xl mr-4`}></i>
                      <div>
                        <h4 className="font-medium text-gray-900" data-testid={`contact-info-title-${index}`}>
                          {info.title}
                        </h4>
                        <p className="text-gray-600" data-testid={`contact-info-value-${index}`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-1/2 section-fade">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-testid="contact-form-title">
                  Send Message
                </h3>
                
                {isSubmitted || contactMutation.isSuccess ? (
                  <div className="text-center py-8" data-testid="contact-form-success">
                    <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        contactMutation.reset();
                      }}
                      variant="outline"
                      className="mt-4"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
                                {...field} 
                                data-testid="input-name"
                              />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project..."
                                rows={6}
                                {...field} 
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-primary text-white py-4 text-lg"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Sending Message...
                          </>
                        ) : contactMutation.isError ? (
                          <>
                            <i className="fas fa-exclamation-triangle mr-2"></i>
                            Try Again
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane mr-2"></i>
                            Send Message
                          </>
                        )}
                      </Button>
                      
                      {contactMutation.isError && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center text-red-700">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            <span className="text-sm">
                              There was an issue sending your message. Please check your internet connection and try again.
                            </span>
                          </div>
                        </div>
                      )}
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
