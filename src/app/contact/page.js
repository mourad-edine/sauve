// app/contact/page.js
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';


export default function ContactPage() {
  return (
    <div className="pt-4 bg-gray-50">
      <ContactHero />
     
      <ContactForm />
          
    
    </div>
  );
}