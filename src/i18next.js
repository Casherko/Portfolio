import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en:{
            translation:{
                hello: "Hello I'm",
                what: "Frontend Developer , Graphic Designer , Game Developer",
                download: "Download CV",
                talk: "Let's Talk",
                getToKnow: "Get To Know",
                aboutMe: "About Me",
                experience1: "Frontend Development",
                time1: "Projects from proposal to deploy",
                experience2: "Graphic Design",
                time2: "3D Designs with animation, 2D logos",
                experience3: "Game Development",
                time3: "2D Games Solo development and testing",
                infoAbout: "I'm 25 years old from Czech republic. I live in city named Vrchlabi. I studied 4 years Information Technology at school Business Academy Veselí nad Moravou. Then I study 2 years at FIT CTU in Prague unfinished. At school I did projects such as an e-shop or chess game with AI. Then I work as Freelancer, I did two 2D games on android with Unity, some 3D models for AAA Games in Zbrush or Unreal Engine.",
                skill: "What Skill I have",
                exp: "My Experience",
                front: "Frontend Developer",
                game: "Game Developer",
                beginer: "beginer",
                intermediate: "intermediate",
                preintermediate: "preintermediate",
                offer: "What I Offer",
                services: "Services",
                front1: "Create simple website",
                front2: "Responsive for all devices and multilanguage",
                front3: "Upload and manage website on server",
                graphic1: "2D image example Logo or business card",
                graphic2: "3D model of anything real or not",
                graphic3: "Create animation or short clip",
                game1: "Creat small 2D game from idea to upload",
                game2: "As team member work on AAA Game as Junior",
                game3: "Test game at any stage of development",
                work: "Examples of my work",
                portfolio1: "Fully responsive webpage for restaurant",
                portfolio2: "2D mobile Game StarDestroyer",
                portfolio3: "Business Card",
                portfolio4: "Code of this Web",
                portfolio5: "2D Mobile Game WeaponStrikes",
                portfolio6: "Unreal Engine landscape",
                Hcontact: "Get In Touch",
                contactMe: "Contact Me",
                sendMessage: "Send Message",
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                fullName: "Kamil Lukas",
                home: "Home",
                about: "About",
                experience: "Experience",
                portfolio: "Portfolio",
                contact: "Contact"
                

            }
        },
        cz:{
            translation:{
                hello: "Dobrý den, jmenuji se",
                what: "Frontend Vývojář , Grafický Designer , Herní vývojář",
                download: "Stáhnout CV",
                talk: "Pojd si povídat",
                getToKnow: "Dobré vědět",
                aboutMe: "Něco o mě",
                experience1: "Web vývojář",
                time1: "Projecty od nápadu k realizaci",
                experience2: "Grafický Design",
                time2: "3D Designy s animacemi, Loga",
                experience3: "Herní vývojář",
                time3: "2D hry, celý vývoj a testing",
                infoAbout: "Dobrý den, je mi 25 let a bydlím ve Vrchlabí. Studoval jsem Infromační technologie na střední ve Veselí nad Moravou, poté jsem šel na CVUT Fakultu Informačních technologii, kde jsem po dvou letech skončil. Ve škole jsem dělal projekty jako e-shop nebo šachy s AI. Poté jsem se začal věnovat samostudiu v herním vývoji, vytváření 3D modelů a nyní se věnuji tvorbě webových stránek.",
                skill: "Co umím",
                exp: "Moje Zkušenosti",
                front: "Web vývojář",
                game: "Herní vývojář",
                beginer: "začátečník",
                intermediate: "středně pokročilý",
                preintermediate: "mírně pokročilý",
                offer: "Co nabízím",
                services: "Služby",
                front1: "Tvorba jednoduché webové stránky",
                front2: "Plně přizpůsobivé všem zařízením i multijazyčné",
                front3: "Nahrání a správa webové stránky",
                graphic1: "jakýkoliv 2D obrázek, například Logo nebo vizitka",
                graphic2: "3D model čehokoliv reálného i nereálného",
                graphic3: "Animace nebo krátký videoklip",
                game1: "Tvorba jednoduché 2D hry od nápadu po upload",
                game2: "Pracovat v týmu v hernim studiu na AAA hře jako Junior",
                game3: "Testovat hry v jakékoliv fázi vývoje",
                work: "Ukázky mé práce",
                portfolio1: "Responzivní webová stránka pro restauraci",
                portfolio2: "2D Mobilní hra StarDestroyer",
                portfolio3: "Vizitka",
                portfolio4: "Kód tohoto webu",
                portfolio5: "2D mobilní hra WeaponStrikes",
                portfolio6: "Unreal Engine krajina",
                Hcontact: "Budme v kontaktu",
                contactMe: "Kontaktujte mě",
                sendMessage: "Poslat Zprávu",
                name: "Vaše jméno",
                email: "Váš email",
                message: "Vaše zpráva",
                fullName: "Kamil Lukáš",
                home: "Domů",
                about: "O mě",
                experience: "Zkušenosti",
                portfolio: "Portfolio",
                contact: "Kontakt"

            }
        }
    },

    lng: "cz",
})

export default i18next;