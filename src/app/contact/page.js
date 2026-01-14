// app/contact/page.js
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
<<<<<<< HEAD

=======
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299


export default function ContactPage() {
  return (
    <div className="pt-4 bg-gray-50">
      <ContactHero />
<<<<<<< HEAD
     
      <ContactForm />
          
    
=======
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
>>>>>>> b91ef1bbefe7d3bdb7d2573e43ee100252e51299
    </div>
  );
}