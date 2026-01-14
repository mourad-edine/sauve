// app/login/page.js
import LoginForm from '@/components/Admin/Login/LoginForm';
import LoginHero from '@/components/Admin/Login/LoginHero';

export default function LoginPage() {
  return (
    <div className="min-h-screen ">
      <div>
        <LoginForm />
      </div>
      
    </div>
  );
}