'use client';

import React, { useState, useEffect } from 'react';
import OrderPopup from './OrderPopup';

// Функция для форматирования чисел без локали
const formatNumber = (num: number): string => {
  // Конвертируем рубли в евро: 90 рублей = 1 евро, умножаем на 2
  const euros = Math.round((num / 90) * 2);
  return euros.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
};

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: Feature[];
}

const products: Product[] = [
  {
    "id": "website",
    "name": "Site Web",
    "description": "Landing pages et sites multi-pages",
    "basePrice": 5000,
    "features": [
        {
            "id": "hero",
            "name": "Section Hero",
            "price": 3000,
            "description": "Écran principal avec titre et appel à l'action",
            "category": "website"
        },
        {
            "id": "about",
            "name": "Section 'À propos'",
            "price": 2000,
            "description": "Informations sur votre entreprise",
            "category": "website"
        },
        {
            "id": "services",
            "name": "Section Services",
            "price": 2500,
            "description": "Liste de vos services",
            "category": "website"
        },
        {
            "id": "portfolio",
            "name": "Portfolio",
            "price": 3000,
            "description": "Galerie de vos réalisations",
            "category": "website"
        },
        {
            "id": "testimonials",
            "name": "Témoignages",
            "price": 2000,
            "description": "Avis vérifiés de clients",
            "category": "website"
        },
        {
            "id": "contact",
            "name": "Contact",
            "price": 1500,
            "description": "Formulaire de contact intelligent",
            "category": "website"
        },
        {
            "id": "blog",
            "name": "Blog",
            "price": 4000,
            "description": "Articles et actualités",
            "category": "website"
        },
        {
            "id": "shop",
            "name": "Boutique en ligne",
            "price": 8000,
            "description": "Catalogue produits + panier",
            "category": "website"
        },
        {
            "id": "cms",
            "name": "Backoffice",
            "price": 5000,
            "description": "Gestion de contenu simplifiée",
            "category": "website"
        },
        {
            "id": "seo",
            "name": "Optimisation SEO",
            "price": 3000,
            "description": "Référencement naturel performant",
            "category": "website"
        },
        {
            "id": "analytics",
            "name": "Analytics",
            "price": 2000,
            "description": "Google Analytics + outils avancés",
            "category": "website"
        },
        {
            "id": "crm",
            "name": "Intégration CRM",
            "price": 4000,
            "description": "Synchronisation avec votre CRM",
            "category": "website"
        }
    ]
  },
  {
    "id": "telegram-app",
    "name": "Application Telegram Mini",
    "description": "Applications intégrées à Telegram",
    "basePrice": 8000,
    "features": [
        {
            "id": "auth",
            "name": "Authentification",
            "price": 2000,
            "description": "Connexion via Telegram",
            "category": "telegram-app"
        },
        {
            "id": "catalog",
            "name": "Catalogue Produits",
            "price": 4000,
            "description": "Liste de produits/services",
            "category": "telegram-app"
        },
        {
            "id": "cart",
            "name": "Panier",
            "price": 3000,
            "description": "Ajout au panier",
            "category": "telegram-app"
        },
        {
            "id": "payment",
            "name": "Paiement",
            "price": 5000,
            "description": "Intégration de solutions de paiement",
            "category": "telegram-app"
        },
        {
            "id": "crypto",
            "name": "Paiements Crypto",
            "price": 6000,
            "description": "USDT, TON, ETH acceptés",
            "category": "telegram-app"
        },
        {
            "id": "ai-chat",
            "name": "Chat IA",
            "price": 8000,
            "description": "Intégration ChatGPT avancée",
            "category": "telegram-app"
        },
        {
            "id": "notifications",
            "name": "Notifications",
            "price": 2000,
            "description": "Alertes push personnalisées",
            "category": "telegram-app"
        },
        {
            "id": "sharing",
            "name": "Partage",
            "price": 1500,
            "description": "Fonctionnalité de partage social",
            "category": "telegram-app"
        },
        {
            "id": "gallery",
            "name": "Galerie",
            "price": 2500,
            "description": "Espace photo/vidéo optimisé",
            "category": "telegram-app"
        },
        {
            "id": "booking",
            "name": "Réservation",
            "price": 4000,
            "description": "Système de rendez-vous intelligent",
            "category": "telegram-app"
        },
        {
            "id": "reviews",
            "name": "Avis Clients",
            "price": 2000,
            "description": "Module d'évaluations vérifiées",
            "category": "telegram-app"
        },
        {
            "id": "admin",
            "name": "Interface Admin",
            "price": 5000,
            "description": "Tableau de bord de gestion complet",
            "category": "telegram-app"
        }
    ]
  },
  {
    "id": "telegram-bot",
    "name": "Bot Telegram",
    "description": "Automatisation sur Telegram",
    "basePrice": 3000,
    "features": [
        {
            "id": "commands",
            "name": "Commandes",
            "price": 1000,
            "description": "Commandes de base /start, /help",
            "category": "telegram-bot"
        },
        {
            "id": "keyboard",
            "name": "Clavier",
            "price": 1500,
            "description": "Boutons inline personnalisés",
            "category": "telegram-bot"
        },
        {
            "id": "catalog-bot",
            "name": "Catalogue",
            "price": 3000,
            "description": "Affichage des produits dans le bot",
            "category": "telegram-bot"
        },
        {
            "id": "cart-bot",
            "name": "Panier",
            "price": 2500,
            "description": "Passation de commandes automatisée",
            "category": "telegram-bot"
        },
        {
            "id": "payment-bot",
            "name": "Paiement",
            "price": 4000,
            "description": "Système de paiement sécurisé intégré",
            "category": "telegram-bot"
        },
        {
            "id": "ai-bot",
            "name": "Bot IA",
            "price": 6000,
            "description": "Assistant intelligent avec ChatGPT",
            "category": "telegram-bot"
        },
        {
            "id": "support",
            "name": "Support",
            "price": 2000,
            "description": "FAQ + chat avec manager",
            "category": "telegram-bot"
        },
        {
            "id": "notifications-bot",
            "name": "Notifications",
            "price": 2000,
            "description": "Envoi de notifications groupées",
            "category": "telegram-bot"
        },
        {
            "id": "analytics-bot",
            "name": "Analytique",
            "price": 1500,
            "description": "Tableau de bord statistique",
            "category": "telegram-bot"
        },
        {
            "id": "multilang",
            "name": "Multilingue",
            "price": 3000,
            "description": "Prise en charge de plusieurs langues",
            "category": "telegram-bot"
        },
        {
            "id": "webhook",
            "name": "Webhook",
            "price": 2000,
            "description": "Connexion avec systèmes externes",
            "category": "telegram-bot"
        },
        {
            "id": "admin-bot",
            "name": "Administration",
            "price": 3000,
            "description": "Panneau de gestion complet",
            "category": "telegram-bot"
        }
    ]
  }
];

export default function ProductConfigurator() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Задержка для начала анимации
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        // Удаляем продукт и все его функции
        const newProducts = prev.filter(p => p !== productId);
        setSelectedFeatures(prevFeatures => 
          prevFeatures.filter(f => {
            const feature = products.flatMap(p => p.features).find(feat => feat.id === f);
            return feature?.category !== productId;
          })
        );
        // Если удаляемый продукт был активным, сбрасываем активный продукт
        if (activeProduct === productId) {
          setActiveProduct(null);
        }
        return newProducts;
      } else {
        // Добавляем продукт и делаем его активным
        setActiveProduct(productId);
        return [...prev, productId];
      }
    });
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => {
      if (prev.includes(featureId)) {
        return prev.filter(f => f !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const getTotalPrice = () => {
    let total = 0;
    
    // Базовая цена выбранных продуктов
    selectedProducts.forEach(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        total += product.basePrice;
      }
    });
    
    // Цена выбранных функций
    selectedFeatures.forEach(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });
    
    return total;
  };

  const getSelectedFeaturesByProduct = (productId: string) => {
    return selectedFeatures.filter(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      return feature?.category === productId;
    });
  };

  const getBusinessBenefits = (featureId: string) => {
    const benefits: { [key: string]: string } = {
      // Сайт
      "hero": "Capte immédiatement l'attention et booste vos conversions de 40%. La première impression est cruciale.",
      "about": "Augmente la confiance des clients de 60%. On achète toujours là où on a confiance.",
      "services": "Présente clairement vos services. Améliore la perception de valeur de 35%.",
      "portfolio": "Démontre la qualité de votre travail. Augmente la confiance et les conversions de 45%.",
      "testimonials": "La preuve sociale qui fait vendre. Augmente les ventes de 25%.",
      "contact": "Simplifie la prise de contact. Réduit de 50% les freins à l'engagement.",
      "blog": "Augmente le trafic SEO de 70%. Vous positionne comme expert.",
      "shop": "Ventes 24/7 sans intervention. L'automatisation booste vos profits.",
      "cms": "Gagnez du temps sur les mises à jour. Réduit les coûts de maintenance.",
      "seo": "Trafic gratuit via les moteurs de recherche. ROI pouvant atteindre 500%.",
      "analytics": "Comprenez le comportement client. Optimisez pour +30% de conversions.",
      "crm": "Automatisez vos ventes. Augmentez le panier moyen de 40%.",

      // Telegram Mini App
      "auth": "Inscription express via Telegram. Réduit les abandons de 60%.",
      "catalog": "Navigation produit intuitive. Augmente le temps d'utilisation de 80%.",
      "cart": "Ajout au panier simplifié. Booste la conversion de 45%.",
      "payment": "Paiement ultra-rapide. Diminue les paniers abandonnés de 70%.",
      "crypto": "Nouvelles méthodes de paiement. Ciblez la communauté crypto.",
      "ai-chat": "Support client 24/7. Réduit la charge managériale de 80%.",
      "notifications": "Rappels produits intelligents. Augmente les achats répétés de 35%.",
      "sharing": "Effet viral garanti. Marketing gratuit par vos clients.",
      "gallery": "Présentation visuelle impactante. Renforce la confiance de 50%.",
      "booking": "Réservation automatisée. Élimine les erreurs et gagnez du temps.",
      "reviews": "La puissance des avis clients. Améliore la conversion de 25%.",
      "admin": "Gestion sans codage. Économisez sur les développeurs.",

      // Telegram Бот
      "commands": "Accès instantané à l'information. Optimise l'expérience utilisateur.",
      "keyboard": "Navigation intuitive. Augmente l'engagement de 60%.",
      "catalog-bot": "Vente directe sur Telegram. Conversion boostée de 40%.",
      "cart-bot": "Commandes simplifiées. Réduit les abandons de panier de 50%.",
      "payment-bot": "Paiement dans le chat. Finalise 65% d'achats supplémentaires.",
      "ai-bot": "Réponses automatiques 24/7. Réduit la charge support de 90%.",
      "support": "Assistance rapide. Satisfaction client augmentée de 70%.",
      "notifications-bot": "Campagnes ciblées. Fidélisation accrue de 45%.",
      "analytics-bot": "Analyse comportementale. Optimisation continue des performances.",
      "multilang": "Audience internationale. Développez vos marchés.",
      "webhook": "Interconnexion systèmes. Automatisation complète.",
      "admin-bot": "Gestion no-code. Économies substantielles.",
    };

      return benefits[featureId] || 'Augmente l\'efficacité de votre business et vos profits.';
  };

  const getOrderMessage = () => {
    let message = 'Bonjour! Je souhaite commander :\n\n';
    
    // Добавляем выбранные продукты
    selectedProducts.forEach(productId => {
      const product = products.find(p => p.id === productId);
      if (product) {
        message += `${product.name} - ${formatNumber(product.basePrice)}\n`;
      }
    });
    
    // Добавляем выбранные функции
    selectedFeatures.forEach(featureId => {
      const feature = products.flatMap(p => p.features).find(f => f.id === featureId);
      if (feature) {
        message += `${feature.name} - ${formatNumber(feature.price)}\n`;
      }
    });
    
    message += `\nTotal: ${formatNumber(getTotalPrice())}`;
    
    return message;
  };

  const openPopup = (title: string, message: string) => {
    setPopupTitle(title);
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inter-black mb-4 text-black transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Choisir votre projet
        </h2>
        <p className={`text-sm sm:text-base lg:text-lg text-gray-700 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Choisissez vos produits et fonctionnalités
        </p>
      </div>

      {/* Мобильная и планшетная версия - готовые пакеты */}
      <div className={`block xl:hidden transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-6">
          {/* Готовые пакеты услуг */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Пакет 1: Продающий лендинг */}
            <div className={`bg-white border-2 border-red-500 rounded-2xl p-6 shadow-xl relative transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className={`absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                Best-seller
              </div>
              <h3 className={`text-xl font-inter-black mb-3 text-black transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Landing Page Vendeuse</h3>
              <p className={`text-sm text-gray-600 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Site one-page ultra-convertible</p>
              
              <div className={`space-y-2 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Section hero avec CTA percutant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Présentation de vos services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Témoignages clients vérifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Formulaire intelligent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Optimisation SEO complète</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Analytics intégré</span>
                </div>
              </div>
              
              <div className={`text-center mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl font-inter-black text-red-500 mb-1">Seulement 329€ au lieu de 549€</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Commander Landing Page',
                  `Bonjour, je souhaite :\n✔ Landing Page Pro à 329€\n\nInclut :\n• Design responsive\n• Formulaire intelligent\n• SEO de base\n• 1 mois support\n\n[✅ Confirmer ma commande]`
                )}
                className={`w-full bg-red-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Commander
              </button>
            </div>

            {/* Пакет 2: Telegram бот */}
            <div className={`bg-white border-2 border-black rounded-2xl p-6 shadow-xl transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <h3 className={`text-xl font-inter-black mb-3 text-black transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Bot Telegram Pro</h3>
              <p className={`text-sm text-gray-600 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Automatisation 360° des ventes</p>
              
              <div className={`space-y-2 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Catalogue produits dynamique</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Panier & paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Assistant IA 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Campagnes push ciblées</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm text-gray-700">Tracking performance</span>
                </div>
              </div>
              
              <div className={`text-center mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl font-inter-black text-black mb-1">Seulement 395€ au lieu de 659€</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Commander Bot Telegram',
                  `Bonjour, je souhaite un Bot Telegram Pro à 395€\n\nInclut :\n• Catalogue produits dynamique\n• Panier & paiement sécurisé\n• Assistant IA 24/7\n• Campagnes push ciblées\n• Tracking performance\n\n[🤖 Demander]`
                )}
                className={`w-full bg-black text-white px-4 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Demander
              </button>
            </div>

            {/* Пакет 3: Mini App */}
            <div className={`bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-xl relative transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className={`absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold transition-all duration-500 ease-out ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                Nouveauté exclusive
              </div>
              <h3 className={`text-xl font-inter-black mb-3 text-black transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Mini App Premium</h3>
              <p className={`text-sm text-gray-600 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>Application native Telegram</p>
              
              <div className={`space-y-2 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Login instantané (via Telegram)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Boutique complète</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Paiements cryptos (USDT/TON)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Chatbot intelligent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Dashboard admin</span>
                </div>
              </div>
              
              <div className={`text-center mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl font-inter-black text-blue-500 mb-1">Seulement 527€ au lieu de 879€</div>
              </div>
              
              <button 
                onClick={() => openPopup(
                  'Commander Mini App',
                  `Bonjour, je souhaite une Mini App Premium à 527€\n\nInclut :\n• Application native Telegram\n• Login instantané\n• Boutique complète\n• Paiements cryptos\n• Chatbot intelligent\n• Dashboard admin\n\n[📱 Devis immédiat]`
                )}
                className={`w-full bg-blue-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm cursor-pointer transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Devis immédiat
              </button>
            </div>
          </div>

          {/* CTA блок */}
          <div className={`bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-center text-white transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <h3 className={`text-xl font-inter-black mb-2 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>Solution sur-mesure ?</h3>
            <p className={`text-sm mb-4 opacity-90 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>Nous concevons votre outil digital parfait</p>
            <button
              onClick={() => openPopup(
                'Discutons de votre projet',
                `Projet custom ?\nDécrivez-nous :\n• Votre concept\n• Fonctions clés\n• Budget estimé\n\n[💬 Expert en ligne]`
              )}
              className={`bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              ✉ Discutons-en
            </button>
          </div>
        </div>
      </div>

      {/* Десктопная версия - подбор проекта */}
      <div className={`hidden xl:grid xl:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Левая колонка - Выбор продуктов */}
        <div className={`xl:col-span-1 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl">
            <h3 className={`text-xl font-inter-black mb-4 text-black transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Choisissez vos produits
            </h3>
            
            <div className={`space-y-3 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => handleProductToggle(product.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedProducts.includes(product.id)
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-black">{product.name}</h4>
                    <span className="text-red-500 font-bold">{formatNumber(product.basePrice)} €</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {getSelectedFeaturesByProduct(product.id).length} fonctionnalités sélectionnées
                    </span>
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      selectedProducts.includes(product.id) 
                        ? 'bg-red-500 border-red-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedProducts.includes(product.id) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Центральная колонка - Функции (расширенная) */}
        <div className={`xl:col-span-2 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl">
            <h3 className={`text-xl font-inter-black mb-4 text-black transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Configurez les fonctionnalités
            </h3>
            
            {selectedProducts.length === 0 ? (
              <p className={`text-sm text-gray-500 text-center py-8 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Sélectionnez d'abord les produits à gauche
              </p>
            ) : (
              <div>
                {/* Кнопки переключения между продуктами */}
                <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {selectedProducts.map((productId, index) => {
                    const product = products.find(p => p.id === productId);
                    if (!product) return null;
                    
                    return (
                      <button
                        key={productId}
                        onClick={() => setActiveProduct(productId)}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                          activeProduct === productId
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-black hover:bg-gray-200'
                        }`}
                      >
                        {product.name}
                      </button>
                    );
                  })}
                </div>

                {/* Функции активного продукта */}
                {activeProduct ? (
                  <div className={`transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {(() => {
                      const product = products.find(p => p.id === activeProduct);
                      if (!product) return null;
                      
                      return (
                        <div>
                          <h4 className={`font-semibold text-black mb-3 transition-all duration-700 ease-out ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>{product.name}</h4>
                          
                          <div className={`grid grid-cols-1 xl:grid-cols-3 gap-4 transition-all duration-700 ease-out ${
                            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            {product.features.map((feature, index) => (
                              <div
                                key={feature.id}
                                onClick={() => handleFeatureToggle(feature.id)}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 min-h-[100px] ${
                                  selectedFeatures.includes(feature.id)
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {/* Заголовок с ценой */}
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-medium text-sm text-black leading-tight pr-2 flex-1">{feature.name}</h5>
                                  <span className="text-red-500 font-bold text-sm flex-shrink-0">{formatNumber(feature.price)} €</span>
                                </div>
                                
                                {/* Описание */}
                                <p className="text-xs text-gray-600 leading-relaxed mb-2">{feature.description}</p>
                                
                                {/* Знак вопроса с подсказкой - только для десктопа */}
                                <div className="flex justify-end">
                                  <div className="relative group">
                                    <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center cursor-help">
                                      <span className="text-xs text-gray-600 font-bold">?</span>
                                    </div>
                                    <div className="absolute bottom-full right-0 mb-2 w-64 bg-black text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                      <div className="font-semibold mb-1">Avantages pour votre business:</div>
                                      {getBusinessBenefits(feature.id)}
                                      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <p className={`text-sm text-gray-500 text-center py-8 transition-all duration-700 ease-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    Choisissez un produit для configurer les fonctionnalités
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Правая колонка - Корзина */}
        <div className={`xl:col-span-1 transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-2xl sticky top-4">
            <h3 className={`text-xl font-inter-black mb-4 text-black transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Votre projet
            </h3>
            
            {selectedProducts.length === 0 ? (
              <p className={`text-sm text-gray-500 mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Choisissez vos produits et fonctionnalités
              </p>
            ) : (
              <div className={`space-y-4 mb-6 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {selectedProducts.map((productId, index) => {
                  const product = products.find(p => p.id === productId);
                  const selectedFeaturesForProduct = getSelectedFeaturesByProduct(productId);
                  if (!product) return null;
                  
                  return (
                    <div key={productId} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-sm text-black">{product.name}</p>
                          <p className="text-xs text-gray-600">Prix de base</p>
                        </div>
                        <span className="text-sm font-bold text-red-500">{formatNumber(product.basePrice)} €</span>
                      </div>
                      
                      {selectedFeaturesForProduct.length > 0 && (
                        <div className="space-y-1">
                          {selectedFeaturesForProduct.map((featureId) => {
                            const feature = product.features.find(f => f.id === featureId);
                            if (!feature) return null;
                            
                            return (
                              <div key={featureId} className="flex justify-between items-start text-xs">
                                <span className="text-gray-600">{feature.name}</span>
                                <span className="font-bold text-red-500">{formatNumber(feature.price)} €</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className={`border-t border-gray-200 pt-4 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg text-black">Total:</span>
                <span className="font-bold text-xl text-red-500">{formatNumber(getTotalPrice())} €</span>
              </div>
              
              <button
                onClick={() => openPopup(
                  'Commander votre projet',
                  getOrderMessage()
                )}
                disabled={selectedProducts.length === 0}
                className={`w-full px-4 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm ${
                  selectedProducts.length > 0 
                    ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed transform-none'
                }`}
              >
                Commander votre projet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Попап заказа */}
      <OrderPopup
        isOpen={popupOpen}
        onClose={closePopup}
        title={popupTitle}
        message={popupMessage}
      />
    </div>
  );
} 