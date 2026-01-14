// app/contact/page.js
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';


export default function ContactPage() {
  return (
    <div className="pt-4 bg-gray-50">
      <ContactHero />
     
      <ContactForm />
          
    
    </div>
  );
}