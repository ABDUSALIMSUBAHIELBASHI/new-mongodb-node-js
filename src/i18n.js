import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        languages: 'Languages',
        login: 'Login',
        signup: 'Sign Up',
      },
      // Home Page
      home: {
        welcome: 'Welcome to my portfolio',
        title: 'Hi, I\'m a Full Stack Developer',
        description: 'I create beautiful, responsive web applications with modern technologies. Let me help you build your next great project.',
        get_started: 'Get Started',
        learn_more: 'Learn More',
      },
      // About Page
      about: {
        title: 'About Me',
        description: 'Short bio and mission.',
      },
      // Experience Page
      experience: {
        title: 'Experience',
        description: 'Professional experience and projects.',
      },
      // Education Page
      education: {
        title: 'Education',
        description: 'Academic background and certificates.',
      },
      // Languages Page
      languages: {
        title: 'Languages',
        description: 'Languages I speak and proficiency.',
      },
      // Login Page
      login: {
        title: 'Log in',
        welcome_back: 'Welcome back',
        description: 'Enter your details to continue',
        email: 'Email',
        password: 'Password',
        sign_in: 'Sign In',
        forgot_password: 'Forgot password?',
        dont_have_account: "Don't have an account?",
        sign_up_link: 'Sign Up',
        validation: {
          email_required: 'Email is required',
          email_invalid: 'Please enter a valid email',
          password_required: 'Password is required',
          password_min: 'Password must be at least 6 characters',
        },
        success: 'Login successful! Welcome back.',
        or_continue: 'Or continue with',
      },
      // Signup Page
      signup: {
        title: 'Sign Up',
        description: 'Create an account to get started',
        full_name: 'Full Name',
        email: 'Email',
        password: 'Password',
        already_have_account: 'Already have an account?',
        sign_in_link: 'Sign In',
        validation: {
          name_required: 'Name is required',
          name_min: 'Name must be at least 2 characters',
          email_required: 'Email is required',
          email_invalid: 'Please enter a valid email',
          password_required: 'Password is required',
          password_min: 'Password must be at least 6 characters',
          password_strength: 'Password must contain uppercase, lowercase, and numbers',
        },
        success: 'Welcome {{name}}! Check your email to verify your account.',
        or_continue: 'Or continue with',
      },
      // Social Login
      social: {
        google: 'Google',
        github: 'GitHub',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
      },
      // Footer
      footer: {
        location: 'Kigali, Rwanda',
        email: 'salimabdu759@gmail.com',
        copyright: '© 2026 All rights reserved',
      },
      // Common
      common: {
        loading: 'Loading...',
        error: 'An error occurred',
        success: 'Success',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        back: 'Back',
        next: 'Next',
        prev: 'Previous',
      },
    },
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        experience: 'Experiencia',
        education: 'Educación',
        languages: 'Idiomas',
        login: 'Iniciar sesión',
        signup: 'Registrarse',
      },
      // Home Page
      home: {
        welcome: 'Bienvenido a mi portafolio',
        title: 'Hola, soy un Desarrollador Full Stack',
        description: 'Creo aplicaciones web hermosas y responsivas con tecnologías modernas. Déjame ayudarte a construir tu próximo proyecto.',
        get_started: 'Comenzar',
        learn_more: 'Saber más',
      },
      // About Page
      about: {
        title: 'Acerca de mí',
        description: 'Breve biografía y misión.',
      },
      // Experience Page
      experience: {
        title: 'Experiencia',
        description: 'Experiencia profesional y proyectos.',
      },
      // Education Page
      education: {
        title: 'Educación',
        description: 'Formación académica y certificados.',
      },
      // Languages Page
      languages: {
        title: 'Idiomas',
        description: 'Idiomas que hablo y nivel de competencia.',
      },
      // Login Page
      login: {
        title: 'Iniciar sesión',
        welcome_back: 'Bienvenido de nuevo',
        description: 'Ingresa tus detalles para continuar',
        email: 'Correo electrónico',
        password: 'Contraseña',
        sign_in: 'Iniciar sesión',
        forgot_password: '¿Olvidaste la contraseña?',
        dont_have_account: '¿No tienes una cuenta?',
        sign_up_link: 'Registrarse',
        validation: {
          email_required: 'El correo es obligatorio',
          email_invalid: 'Por favor ingresa un correo válido',
          password_required: 'La contraseña es obligatoria',
          password_min: 'La contraseña debe tener al menos 6 caracteres',
        },
        success: '¡Inicio de sesión exitoso! Bienvenido de nuevo.',
        or_continue: 'O continúa con',
      },
      // Signup Page
      signup: {
        title: 'Registrarse',
        description: 'Crea una cuenta para comenzar',
        full_name: 'Nombre completo',
        email: 'Correo electrónico',
        password: 'Contraseña',
        already_have_account: '¿Ya tienes una cuenta?',
        sign_in_link: 'Iniciar sesión',
        validation: {
          name_required: 'El nombre es obligatorio',
          name_min: 'El nombre debe tener al menos 2 caracteres',
          email_required: 'El correo es obligatorio',
          email_invalid: 'Por favor ingresa un correo válido',
          password_required: 'La contraseña es obligatoria',
          password_min: 'La contraseña debe tener al menos 6 caracteres',
          password_strength: 'La contraseña debe contener mayúsculas, minúsculas y números',
        },
        success: '¡Bienvenido {{name}}! Revisa tu correo para verificar tu cuenta.',
        or_continue: 'O continúa con',
      },
      // Social Login
      social: {
        google: 'Google',
        github: 'GitHub',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
      },
      // Footer
      footer: {
        location: 'Kigali, Ruanda',
        email: 'salimabdu759@gmail.com',
        copyright: '© 2026 Todos los derechos reservados',
      },
      // Common
      common: {
        loading: 'Cargando...',
        error: 'Ocurrió un error',
        success: 'Éxito',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        back: 'Atrás',
        next: 'Siguiente',
        prev: 'Anterior',
      },
    },
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        experience: 'الخبرة',
        education: 'التعليم',
        languages: 'اللغات',
        login: 'تسجيل الدخول',
        signup: 'إنشاء حساب',
      },
      // Home Page
      home: {
        welcome: 'أهلا بك في محفظتي',
        title: 'مرحبا، أنا مطور Full Stack',
        description: 'أنشئ تطبيقاتويب جميلة وسريعة الاستجابة باستخدام التقنيات الحديثة. دعني أساعدك في بناء مشروعك القادم.',
        get_started: 'ابدأ الآن',
        learn_more: 'تعرف على المزيد',
      },
      // About Page
      about: {
        title: 'عني',
        description: 'نبذة قصيرة والرسالة.',
      },
      // Experience Page
      experience: {
        title: 'الخبرة',
        description: 'الخبرة المهنية والمشاريع.',
      },
      // Education Page
      education: {
        title: 'التعليم',
        description: 'الخلفية الأكاديمية والشهادات.',
      },
      // Languages Page
      languages: {
        title: 'اللغات',
        description: 'اللغات التي أتحدثها ومستوى الكفاءة.',
      },
      // Login Page
      login: {
        title: 'تسجيل الدخول',
        welcome_back: 'أهلا بعودتك',
        description: 'أدخل بيانات تسجيلك للمتابعة',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        sign_in: 'تسجيل الدخول',
        forgot_password: 'هل نسيت كلمة المرور؟',
        dont_have_account: 'ليس لديك حساب؟',
        sign_up_link: 'إنشاء حساب',
        validation: {
          email_required: 'البريد الإلكتروني مطلوب',
          email_invalid: 'يرجى إدخال بريد إلكتروني صحيح',
          password_required: 'كلمة المرور مطلوبة',
          password_min: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
        },
        success: 'تم تسجيل الدخول بنجاح! أهلا بعودتك.',
        or_continue: 'أو متابعة مع',
      },
      // Signup Page
      signup: {
        title: 'إنشاء حساب',
        description: 'أنشئ حسابا للبدء',
        full_name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        already_have_account: 'هل لديك حساب بالفعل؟',
        sign_in_link: 'تسجيل الدخول',
        validation: {
          name_required: 'الاسم مطلوب',
          name_min: 'يجب أن يكون الاسم 2 أحرف على الأقل',
          email_required: 'البريد الإلكتروني مطلوب',
          email_invalid: 'يرجى إدخال بريد إلكتروني صحيح',
          password_required: 'كلمة المرور مطلوبة',
          password_min: 'يجب أن تكون كلمة المرور 6 أحرف على الأقل',
          password_strength: 'يجب أن تحتوي كلمة المرور على أحرف كبيرة وصغيرة وأرقام',
        },
        success: 'أهلا وسهلا {{name}}! تحقق من بريدك الإلكتروني للتحقق من حسابك.',
        or_continue: 'أو متابعة مع',
      },
      // Social Login
      social: {
        google: 'جوجل',
        github: 'جيتهاب',
        facebook: 'فيسبوك',
        linkedin: 'لينكد إن',
      },
      // Footer
      footer: {
        location: 'كيجالي، رواندا',
        email: 'salimabdu759@gmail.com',
        copyright: '© 2026 جميع الحقوق محفوظة',
      },
      // Common
      common: {
        loading: 'جاري التحميل...',
        error: 'حدث خطأ',
        success: 'نجح',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        back: 'رجوع',
        next: 'التالي',
        prev: 'السابق',
      },
    },
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À propos',
        experience: 'Expérience',
        education: 'Éducation',
        languages: 'Langues',
        login: 'Connexion',
        signup: 'Inscription',
      },
      // Home Page
      home: {
        welcome: 'Bienvenue dans mon portfolio',
        title: 'Bonjour, je suis un développeur Full Stack',
        description: 'Je crée de belles applications web réactives avec des technologies modernes. Laissez-moi vous aider à construire votre prochain projet.',
        get_started: 'Commencer',
        learn_more: 'En savoir plus',
      },
      // About Page
      about: {
        title: 'À propos de moi',
        description: 'Courte biographie et mission.',
      },
      // Experience Page
      experience: {
        title: 'Expérience',
        description: 'Expérience professionnelle et projets.',
      },
      // Education Page
      education: {
        title: 'Éducation',
        description: 'Parcours académique et certificats.',
      },
      // Languages Page
      languages: {
        title: 'Langues',
        description: 'Langues que je parle et compétence.',
      },
      // Login Page
      login: {
        title: 'Connexion',
        welcome_back: 'Bon retour',
        description: 'Entrez vos identifiants pour continuer',
        email: 'E-mail',
        password: 'Mot de passe',
        sign_in: 'Se connecter',
        forgot_password: 'Mot de passe oublié?',
        dont_have_account: "Vous n'avez pas de compte?",
        sign_up_link: "S'inscrire",
        validation: {
          email_required: 'L\'e-mail est requis',
          email_invalid: 'Veuillez entrer un e-mail valide',
          password_required: 'Le mot de passe est requis',
          password_min: 'Le mot de passe doit contenir au moins 6 caractères',
        },
        success: 'Connexion réussie! Bon retour.',
        or_continue: 'Ou continuer avec',
      },
      // Signup Page
      signup: {
        title: "S'inscrire",
        description: 'Créez un compte pour commencer',
        full_name: 'Nom complet',
        email: 'E-mail',
        password: 'Mot de passe',
        already_have_account: 'Vous avez déjà un compte?',
        sign_in_link: 'Se connecter',
        validation: {
          name_required: 'Le nom est requis',
          name_min: 'Le nom doit contenir au moins 2 caractères',
          email_required: 'L\'e-mail est requis',
          email_invalid: 'Veuillez entrer un e-mail valide',
          password_required: 'Le mot de passe est requis',
          password_min: 'Le mot de passe doit contenir au moins 6 caractères',
          password_strength: 'Le mot de passe doit contenir des majuscules, des minuscules et des chiffres',
        },
        success: 'Bienvenue {{name}}! Vérifiez votre e-mail pour confirmer votre compte.',
        or_continue: 'Ou continuer avec',
      },
      // Social Login
      social: {
        google: 'Google',
        github: 'GitHub',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
      },
      // Footer
      footer: {
        location: 'Kigali, Rwanda',
        email: 'salimabdu759@gmail.com',
        copyright: '© 2026 Tous les droits réservés',
      },
      // Common
      common: {
        loading: 'Chargement...',
        error: 'Une erreur est survenue',
        success: 'Succès',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        back: 'Retour',
        next: 'Suivant',
        prev: 'Précédent',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
