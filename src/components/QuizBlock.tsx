'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  message: string;
}

type QuizResult = {
    title: string;
    description: string;
    recommendation: string;
    option1: {
      title: string;
      price: number;
      originalPrice: number;
      description: string;
      benefits: string[];
    };
    option2: {
      title: string;
      price: number;
      description: string;
      benefits: string[];
    };
  };

// Глобальное состояние для попапа

const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Quel est votre domaine d'activité ?",
      options: ["Vendez-vous des produits ?", "Proposez-vous des services ?", "Développez-vous des formations ?", "Vous hésitez encore ?"],
      message: "Super ! Votre solution sur-mesure arrive..."
    },
    {
      id: 2,
      question: "Où en êtes-vous actuellement ?",
      options: ["Vous avez déjà un site web ?", "Un chatbot automatisé ?", "Un produit/service prêt à lancer ?", "Partez-vous de zéro ?"],
      message: "Super ! Votre solution sur-mesure arrive..."
    },
    {
      id: 3,
      question: "Votre visibilité actuelle :",
      options: ["Réseaux sociaux actifs ?", "Bouche-à-oreille ?", "Pas encore de visibilité", "Tout juste lancé(e)"],
      message: "Super ! Votre solution sur-mesure arrive..."
    },
    {
      id: 4,
      question: "Contact client :",
      options: ["Souhaitez-vous un système de contact rapide ?", "Pas prioritaire actuellement", "À voir selon développement", "Je préfère en discuter plus tard"],
      message: "Super ! Votre solution sur-mesure arrive..."
    },
    {
      id: 5,
      question: "Automatisation :",
      options: ["Automatiser votre gestion de commandes ?", "Gestion manuelle pour l'instant", "Selon volume futur", "À étudier ultérieurement"],
      message: "Super ! Votre solution sur-mesure arrive..."
    },
    {
      id: 6,
      question: "Urgence de mise en œuvre :",
      options: ["Démarrage immédiat possible ?", "Sous 7 jours", "Planification mensuelle", "Phase de réflexion en cours"],
      message: "Super ! Votre solution sur-mesure arrive..."
    }
];
  
export const getRecommendation = (answers: number[]): QuizResult => {
    const [businessType, hasSiteOrBot, hasAudience, wantsContact, wantsAutomation, urgency] = answers;
  
    // Сценарий 1: инфопродукт, новичок
    if (businessType === 2 && hasAudience >= 2 && hasSiteOrBot === 3) {
      return {
        title: "Préparons le lancement de votre formation",
        description: "Vous débutez — c'est le moment idéal pour commencer !",
        recommendation: "Nous recommandons de commencer par une landing page simple — rapide, claire et efficace.",
        option1: {
          title: "Mini-landing page pour lancer votre formation",
          price: 244,
          originalPrice: 400,
          description: "Méthode simple pour lancer votre formation sans tracas techniques.",
          benefits: [
            "Page unique clé en main",
            "Formulaire de collecte de leads",
            "Adaptation mobile",
            "Prêt en 5 jours"
          ]
        },
        option2: {
          title: "Landing page + bot + messages automatiques",
          price: 555,
          description: "Idéal si vous êtes prêt à investir dans l'évolutivité.",
          benefits: [
            "Bot Telegram + landing page",
            "Collecte, segmentation et envoi",
            "Support 2 semaines",
            "Réalisation en 10 jours"
          ]
        }
      };
    }
  
    // Сценарий 2: товары, есть клиенты, нужен бот
    if (businessType === 0 && hasSiteOrBot === 0 && hasAudience === 0 && wantsAutomation === 0) {
      return {
        title: "Automatisons vos ventes de produits",
        description: "Vous avez déjà des clients — maintenant, accélérons le traitement.",
        recommendation: "Un bot Telegram — le meilleur choix pour des commandes rapides et pratiques.",
        option1: {
          title: "Bot Telegram pour les commandes",
          price: 311,
          originalPrice: 489,
          description: "Les clients commandent en quelques clics — vous recevez une notification.",
          benefits: [
            "Catalogue dans le bot",
            "Commande rapide",
            "Intégration Telegram et email",
            "Remise 35% si commande aujourd'hui"
          ]
        },
        option2: {
          title: "Mini App Telegram + CRM",
          price: 644,
          description: "Si vous avez besoin d'évolutivité et d'analyses puissantes.",
          benefits: [
            "CRM intégré à Telegram",
            "Système de parrainage",
            "Support et formation",
            "Intégration base clients"
          ]
        }
      };
    }
  
    // Сценарий 3: услуги, есть аудитория, нужна воронка
    if (businessType === 1 && hasAudience <= 1 && wantsAutomation === 0 && urgency <= 1) {
      return {
        title: "Configurons votre flux de demandes de services",
        description: "L'automatisation vous fera gagner du temps et augmentera vos demandes.",
        recommendation: "Nous recommandons la combinaison : site-quiz + bot Telegram.",
        option1: {
          title: "Site-quiz + bot gestionnaire",
          price: 400,
          originalPrice: 667,
          description: "Le lien parfait entre le client et votre service.",
          benefits: [
            "Site une page avec quiz",
            "Bot Telegram avec demandes",
            "Notifications + export Excel",
            "Prêt en 7 jours"
          ]
        },
        option2: {
          title: "Site + bot + publicité",
          price: 866,
          description: "Cycle complet : du trafic à la demande.",
          benefits: [
            "Configuration publicité",
            "Bot avec entonnoir",
            "Segmentation + analyses",
            "Tests et améliorations"
          ]
        }
      };
    }
  
    // Сценарий 4: пользователь просто тестирует идею
    if (hasSiteOrBot === 3 && hasAudience >= 2 && urgency === 3) {
      return {
        title: "Testons votre idée rapidement",
        description: "Sans site, sans budget, mais avec des résultats.",
        recommendation: "Un bot-quiz léger peut suffire — testons la demande.",
        option1: {
          title: "Bot-quiz sans site",
          price: 155,
          originalPrice: 267,
          description: "La façon la plus simple de recueillir les premiers retours.",
          benefits: [
            "Quiz dans Telegram",
            "Collecte automatique des réponses",
            "Prêt en 1-2 jours",
            "Fonctionne sans site"
          ]
        },
        option2: {
          title: "Quiz + site + analyses",
          price: 533,
          description: "Plus proche du produit — si vous décidez d'aller plus loin.",
          benefits: [
            "Page unique",
            "Connexion analyses",
            "Formulaire demandes + export",
            "Support 1 semaine"
          ]
        }
      };
    }
  
    // Сценарий 5: услуги, аудитория есть, нужна связка + автоматизация
    if (businessType === 1 && hasAudience === 0 && wantsAutomation === 0 && urgency === 0) {
      return {
        title: "Automatisons demandes et consultations",
        description: "Pour que les clients viennent et s'inscrivent eux-mêmes.",
        recommendation: "Un bot Telegram avec réponses automatiques vous conviendra.",
        option1: {
          title: "Bot Telegram pour services",
          price: 355,
          originalPrice: 533,
          description: "Reçoit les demandes, envoie rappels et documents.",
          benefits: [
            "Bot avec messages automatiques",
            "Intégration tableaux",
            "Notifications et modèles",
            "Remise 33% si commande aujourd'hui"
          ]
        },
        option2: {
          title: "Site + bot + entonnoir automatique",
          price: 844,
          description: "Si vous voulez tout configurer comme les experts.",
          benefits: [
            "Landing page pour la confiance",
            "Bot avec envoi et segments",
            "Connexion paiement",
            "Support technique 2 semaines"
          ]
        }
      };
    }
  
    // По умолчанию — универсальное предложение
    return {
      title: "Point de départ pour votre projet",
      description: "Même si tout n'est pas encore clair — commençons par du simple.",
      recommendation: "Nous recommandons une mini-landing page ou un bot Telegram pour tester l'intérêt.",
      option1: {
        title: "Landing page + formulaire demandes",
        price: 267,
        originalPrice: 400,
        description: "Page unique simple, prête à lancer.",
        benefits: [
          "Site bref avec description",
          "Formulaire demandes + notifications",
          "Réalisation rapide (3-5 jours)",
          "Adaptation Telegram"
        ]
      },
      option2: {
        title: "Site + bot + entonnoir automatique",
        price: 711,
        description: "Solution avec marge — si vous prévoyez de grandir.",
        benefits: [
          "Site, bot et entonnoir",
          "Collecte et segmentation leads",
          "Paiements, envois, analyses",
          "Support au lancement"
        ]
      }
    };
  };

  
export default function QuizBlock() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [contact, setContact] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Задержка для начала анимации
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const recommendation = getRecommendation(newAnswers);
      setResult(recommendation);
      setShowContactForm(true);
    }
  };

  const handleContactSubmit = () => {
    if (contact.trim()) {
      setShowResult(true);
      setShowContactForm(false);
      // Запускаем хлопушку при показе результата
      launchConfetti();
    }
  };

  const openPopup = (title: string, message: string) => {
    // Используем глобальную функцию для открытия попапа
    if (typeof window !== 'undefined' && window.openQuizPopup) {
      window.openQuizPopup(title, message);
    }
  };

  const launchConfetti = () => {
    // Основной взрыв
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Дополнительные взрывы с задержкой
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 400);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowContactForm(false);
    setResult(null);
    setContact('');
  };

  // Функция для форматирования чисел без локали
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' €';
  };

  if (showResult && result) {
    return (
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter-black mb-4 xs:mb-6 sm:mb-8 text-black transition-all duration-700 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {result.title}
        </h2>
        <p className={`text-sm xs:text-base sm:text-lg lg:text-xl mb-8 text-gray-700 transition-all duration-700 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {result.recommendation}
        </p>
        
        <div className={`flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8 justify-center items-center transition-all duration-1000 ease-out delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Вариант 1 - Базовый (рекомендуемый) */}
          <div className={`bg-white border-2 border-red-500 rounded-3xl p-4 xs:p-6 shadow-2xl relative w-full max-w-md lg:max-w-sm transition-all duration-700 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className={`absolute -top-3 -right-3 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-500 ease-out delay-800 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              -40%
            </div>
            <div className={`absolute -top-3 -left-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-500 ease-out delay-900 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              Recommandé
            </div>
            <h3 className={`text-lg xs:text-xl sm:text-2xl font-inter-black mb-3 text-black transition-all duration-700 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option1.title}
            </h3>
            <p className={`text-sm xs:text-base mb-4 text-gray-700 transition-all duration-700 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option1.description}
            </p>
            
            <div className={`mb-4 transition-all duration-700 ease-out delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-xl xs:text-2xl sm:text-3xl font-inter-black text-red-500">
                  {formatNumber(result.option1.price)}
                </span>
                <span className="text-base xs:text-lg sm:text-xl text-gray-400 line-through">
                  {formatNumber(result.option1.originalPrice)}
                </span>
              </div>
            </div>
            
            <div className={`space-y-2 mb-4 text-left transition-all duration-700 ease-out delay-1300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option1.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full bg-red-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xs:text-base cursor-pointer ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} onClick={() => openPopup(
              `Commander ${result.option1.title}`,
              `Bonjour ! Je souhaite commander ${result.option1.title}.

Détails de la commande :
• Nom : ${result.option1.title}
• Coût : ${formatNumber(result.option1.price)} (était ${formatNumber(result.option1.originalPrice)})
• Description : ${result.option1.description}

Avantages :
${result.option1.benefits.map(benefit => `• ${benefit}`).join('\n')}

Je suis prêt à discuter des détails et commencer le travail.`
            )}>
              Choisir l'option de base
            </button>
          </div>

          {/* Вариант 2 - Полный (скрыт на мобильных) */}
          <div className={`hidden lg:block bg-white border-2 border-black rounded-3xl p-4 xs:p-6 shadow-2xl w-full max-w-md lg:max-w-sm transition-all duration-700 ease-out delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <h3 className={`text-lg xs:text-xl sm:text-2xl font-inter-black mb-3 text-black transition-all duration-700 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option2.title}
            </h3>
            <p className={`text-sm xs:text-base mb-4 text-gray-700 transition-all duration-700 ease-out delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option2.description}
            </p>
            
            <div className={`mb-4 transition-all duration-700 ease-out delay-1200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="text-xl xs:text-2xl sm:text-3xl font-inter-black text-black">
                {formatNumber(result.option2.price)}
              </div>
            </div>
            
            <div className={`space-y-2 mb-4 text-left transition-all duration-700 ease-out delay-1300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {result.option2.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className={`w-full bg-black text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xs:text-base cursor-pointer ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} onClick={() => openPopup(
              `Commander ${result.option2.title}`,
              `Bonjour ! Je souhaite commander ${result.option2.title}.

Détails de la commande :
• Nom : ${result.option2.title}
• Coût : ${formatNumber(result.option2.price)}
• Description : ${result.option2.description}

Avantages :
${result.option2.benefits.map(benefit => `• ${benefit}`).join('\n')}

Je suis prêt à discuter des détails et commencer le travail.`
            )}>
              Choisir l'option complète
            </button>
          </div>
        </div>
        
        {/* Кнопки в ряд */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 ease-out delay-1500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={resetQuiz}
            className="w-full sm:w-auto bg-transparent border-2 border-black text-black px-4 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm">Recommencer</span>
          </button>
          
          <a 
            href="#products" 
            className="w-full sm:w-auto bg-transparent border-2 border-black text-black px-4 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-150 cursor-pointer text-sm"
          >
            Voir les options
          </a>
        </div>
      </div>
    );
  }

  if (showContactForm && result) {
    return (
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inter-black mb-3 xs:mb-4 sm:mb-6 text-black transition-all duration-700 ease-out delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Dernière étape
          </h2>
          <p className={`text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-4 xs:mb-6 sm:mb-8 text-gray-700 transition-all duration-700 ease-out delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Indiquez WhatsApp ou Telegram — nous vous contacterons pour discuter en détail
          </p>

          {/* Прогресс бар */}
          <div className={`mb-6 transition-all duration-700 ease-out delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center mb-3">
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-medium">
                Dernière étape avant la magie
              </p>
            </div>
            <div className="flex justify-between text-xs xs:text-sm mb-2 text-gray-700">
              <span>Étape {questions.length + 1} sur {questions.length + 1}</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>

          {/* Форма контактов */}
          <div className={`bg-white border-2 border-black rounded-3xl p-4 xs:p-6 sm:p-8 mb-6 shadow-2xl transition-all duration-700 ease-out delay-800 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <h3 className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-4 xs:mb-6 text-black transition-all duration-700 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Votre contact
            </h3>
            
            <div className={`space-y-3 transition-all duration-700 ease-out delay-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="WhatsApp ou Telegram (ex: +33 6 12 34 56 78 ou @username)"
                className="w-full px-4 xs:px-6 py-3 xs:py-4 border-2 border-gray-300 rounded-full font-medium text-black placeholder-gray-500 focus:border-black focus:outline-none transition-all duration-300 text-base sm:text-lg"
              />
              
              <button
                onClick={handleContactSubmit}
                disabled={!contact.trim()}
                className="w-full bg-red-500 text-white px-4 xs:px-6 py-3 xs:py-4 rounded-full font-semibold hover:bg-red-600 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xs:text-base disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                Obtenir le devis
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inter-black mb-3 xs:mb-4 sm:mb-6 text-black transition-all duration-700 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Calculons le coût
        </h2>
        <p className={`text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl mb-4 xs:mb-6 sm:mb-8 text-gray-700 transition-all duration-700 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Répondez à 6 questions et obtenez un devis précis
        </p>

        {/* Прогресс бар */}
        <div className={`mb-6 transition-all duration-700 ease-out delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center mb-3">
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-medium">
              {currentQ.message}
            </p>
          </div>
          <div className="flex justify-between text-xs xs:text-sm mb-2 text-gray-700">
            <span>Question {currentQuestion + 1} sur {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Вопрос */}
        <div className={`bg-white border-2 border-black rounded-3xl p-4 xs:p-6 sm:p-8 mb-6 shadow-2xl transition-all duration-700 ease-out delay-800 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h3 className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-inter-black mb-4 xs:mb-6 text-black transition-all duration-700 ease-out delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {currentQ.question}
          </h3>
          
          <div className={`space-y-2 xs:space-y-3 transition-all duration-700 ease-out delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full bg-transparent border-2 border-black text-black px-4 xs:px-6 py-3 xs:py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-150 text-sm xs:text-base sm:text-lg cursor-pointer ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Функция отправки в Telegram
const sendToTelegram = async (data: {
  contact: string;
  answers: number[];
  result: QuizResult;
  questions: QuizQuestion[];
}) => {
  const chat_id = '7038101756'; // <--- ВОТ ТУТ chat_id твоего аккаунта
  const token = '8125633163:AAHvVG8CAIsWyOwfqvJ4fF0BVNi50bIxiFQ'; // Токен бота

  // Формируем текст с вопросами и ответами
  const questionsAndAnswers = data.questions.map((question, index) => {
    const answerIndex = data.answers[index];
    const answer = question.options[answerIndex];
    return `${index + 1}. ${question.question}\n   Ответ: ${answer}`;
  }).join('\n\n');

  // Формируем результат
  const resultText = `
🎯 РЕЗУЛЬТАТ КВИЗА:
${data.result.title}

📝 Рекомендация:
${data.result.recommendation}

💰 Вариант 1 (Рекомендуемый):
${data.result.option1.title} - ${data.result.option1.price} ₽
${data.result.option1.description}

💰 Вариант 2:
${data.result.option2.title} - ${data.result.option2.price} ₽
${data.result.option2.description}
`;

  const text = `🆕 НОВАЯ ЗАЯВКА ИЗ КВИЗА

👤 Контакт: ${data.contact}

❓ ВОПРОСЫ И ОТВЕТЫ:
${questionsAndAnswers}

${resultText}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id,
        text,
        parse_mode: 'HTML'
      })
    });
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
  }
}; 