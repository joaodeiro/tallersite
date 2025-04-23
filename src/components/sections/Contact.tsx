import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Calendar, Mail, MapPin } from "lucide-react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { FormEvent, useState } from "react";

const WHATSAPP_URL = "https://wa.me/554898230107";
const EMAIL = "contato@taller.net.br";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    // Prepare form data
    const formPayload = {
      name: formData.get('name') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      whatsapp: formData.get('whatsapp') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      terms: Boolean(formData.get('terms')),
    };

    try {
      // Send email via API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: EMAIL,
          subject: "Novo contato via site",
          formData: formPayload
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar o email. Por favor, tente novamente.');
      }

      // Reset form
      e.currentTarget.reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden" id="contato">
      {/* Fundo escuro */}
      <div className="absolute inset-0 -z-10 bg-[#121212]" />

      {/* Efeito de gradiente 1 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#DB2337] to-[#F47F44] opacity-20 blur-3xl rounded-full" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#DB2337] to-[#F47F44] opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Entre em contato</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em contato conosco e descubra como podemos ajudar seu negócio a alcançar novos patamares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Vamos trabalhar juntos</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="url(#locationGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#DB2337" />
                        <stop offset="100%" stopColor="#F47F44" />
                      </linearGradient>
                    </defs>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Localização</h4>
                  <p className="text-muted-foreground">Florianópolis, SC, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="url(#emailGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#DB2337" />
                        <stop offset="100%" stopColor="#F47F44" />
                      </linearGradient>
                    </defs>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:contato@taller.net.br"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    contato@taller.net.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[#1e1e1e] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    +55 (48) 98230-0107
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="ai-card bg-[#1e1e1e] border border-[#222222]">
            <h3 className="text-xl font-semibold mb-6">Marque uma conversa</h3>

            {formSubmitted ? (
              <div className="p-6 text-center">
                <h4 className="text-xl font-medium mb-3 text-green-500">Mensagem enviada!</h4>
                <p>Agradecemos seu contato. Retornaremos em breve.</p>
                <Button
                  variant="secondary"
                  className="mt-4"
                  onClick={() => setFormSubmitted(false)}
                >
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input name="name" id="name" placeholder="Seu nome" className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Sobrenome</Label>
                    <Input name="lastname" id="lastname" placeholder="Seu sobrenome" className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" type="email" placeholder="exemplo@email.com" className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input name="whatsapp" id="whatsapp" placeholder="(00) 00000-0000" className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input name="company" id="company" placeholder="Nome da sua empresa" className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea name="message" id="message" placeholder="Como podemos ajudar?" rows={4} className="bg-[#121212] border-[#333333] focus:border-[#DB2337]" required />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox name="terms" id="terms" className="bg-[#121212] border-[#333333] data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#DB2337] data-[state=checked]:to-[#F47F44] data-[state=checked]:border-transparent" />
                  <div className="grid gap-1">
                    <Label htmlFor="terms" className="text-sm">
                      Concordo em receber comunicações sobre produtos e serviços da Taller.
                    </Label>
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
