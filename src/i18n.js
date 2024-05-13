import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting:
            "Next.js is a versatile and powerful framework for building web applications with React. It offers developers a streamlined experience for creating server-side rendered and statically generated websites. With features like automatic code splitting, hot module replacement, and server-side rendering, Next.js enhances developer productivity and speeds up development cycles. Its built-in routing system and support for API routes simplify the creation of full-stack applications, enabling developers to focus on building features rather than worrying about infrastructure. Next.js supports various data fetching methods, including getStaticProps, getServerSideProps, and getInitialProps, allowing developers to fetch data at build time or runtime as needed. Moreover, Next.js embraces TypeScript, providing type safety and improved code organization. With a vibrant community and extensive documentation, Next.js is well-supported and continually evolving. It offers high extensibility through plugins and custom server routes, making it adaptable to a wide range of use cases. Integration with popular libraries and frameworks like React, TypeScript, CSS Modules, and GraphQL further enhances its capabilities",
        },
      },
      fr: {
        translation: {
          greeting:
            "Next.js est un framework polyvalent et puissant pour construire des applications web avec React. Il offre aux développeurs une expérience simplifiée pour créer des sites Web rendus côté serveur et générés de manière statique. Avec des fonctionnalités telles que la division automatique du code, le remplacement à chaud de modules et le rendu côté serveur, Next.js améliore la productivité des développeurs et accélère les cycles de développement. Son système de routage intégré et le support des routes API simplifient la création d'applications full-stack, permettant aux développeurs de se concentrer sur la construction de fonctionnalités plutôt que de se soucier de l'infrastructure. Next.js prend en charge diverses méthodes de récupération de données, notamment getStaticProps, getServerSideProps et getInitialProps, permettant aux développeurs de récupérer des données au moment de la construction ou de l'exécution selon les besoins. De plus, Next.js adopte TypeScript, offrant une sécurité de type et une organisation de code améliorée. Avec une communauté dynamique et une documentation étendue, Next.js est bien soutenu et en constante évolution. Il offre une haute extensibilité grâce à des plugins et des routes serveur personnalisées, le rendant adaptable à un large éventail de cas d'utilisation. L'intégration avec des bibliothèques et des frameworks populaires tels que React, TypeScript, CSS Modules et GraphQL améliore encore ses capacités, en faisant",
        },
      },
      hi: {
        translation: {
          greeting:
            "Next.js एक बहुमुखी और शक्तिशाली फ्रेमवर्क है जिसका उपयोग वेब ऐप्लिकेशन बनाने के लिए React के साथ किया जा सकता है। यह डेवलपर्स को सर्वर-साइड रेंडर और स्टैटिकली जनरेटेड वेबसाइट बनाने के लिए एक सरल अनुभव प्रदान करता है। स्वचालित कोड स्प्लिटिंग, हॉट मॉड्यूल परिवर्तन और सर्वर-साइड रेंडरिंग जैसी विशेषताओं के साथ, Next.js डेवलपर की उत्पादकता को बढ़ाता है और विकास चक्र को तेज़ करता है। इसका निर्मित रूटिंग सिस्टम और एपीआई रूटों का समर्थन, पूर्ण-स्टैक ऐप्लिकेशन के निर्माण को सरल बनाता है, जिससे डेवलपर्स को इंफ्रास्ट्रक्चर की चिंता करने की आवश्यकता नहीं होती। Next.js विभिन्न डेटा फेचिंग मेथड्स, जैसे getStaticProps, getServerSideProps, और getInitialProps का समर्थन करता है, जो डेवलपर्स को ज़रूरत अनुसार बिल्ड समय या रनटाइम में डेटा लेने की अनुमति देता है। इसके अतिरिक्त, Next.js TypeScript को ग्रहण करता है, जो प्रकार सुरक्षा और बेहतर कोड संगठन प्रदान करता है। एक जीवंत समुदाय और व्यापक दस्तावेज़ीकरण के साथ, Next.js अच्छी तरह से समर्थित और लगातार विकसित है। यह प्लगइंस और कस्टम सर्वर रूट्स का समर्थन करके उच्च प्रकारीता प्रदान करता है, जिससे इसे विभिन्न उपयोग मामलों में लागू किया जा सकता है। पॉपुलर पुस्तकालयों और फ्रेमवर्क्स जैसे React, TypeScript, CSS Modules, और GraphQL के साथ एकीकरण इसकी क्षमताओं को और भी बढ़ाता है, जो",
        },
      },
    },
  });
