// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightCatppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({
    site: 'https://guides.m336.dev',
	redirects: { '/': '/en/' },
	trailingSlash: 'always',

    integrations: [starlight({
		plugins: [starlightCatppuccin({
			dark: { flavor: "mocha", accent: "red" },
			light: { flavor: "latte", accent: "maroon" }
		})],

		defaultLocale: 'en',
		locales: {
			en: { label: 'English' },
			es: { label: 'Español' },
			fr: { label: 'Français', lang: "fr" },
			ru: { label: 'Русский', lang: "ru" },
			ua: { label: 'Українська', lang: "ua" }
		},

		logo: {
			src: './public/favicon.svg',
			replacesTitle: false
		},
        head: [
            { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
            { tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' } },
            { tag: 'link', attrs: { rel: 'shortcut icon', href: '/favicon.ico' } },
            { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
            { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
            { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'Guides' } },

			{ tag: 'link', attrs: { rel: 'sitemap', href: '/sitemap-index.xml' } },
        ],

        title: "M336's Guides",
        social: [
            { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@M336' },
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/adbqkyvbZa' },
            { icon: 'telegram', label: 'Telegram', href: 'https://t.me/M336G' },
            { icon: 'seti:github', label: 'GitHub', href: 'https://github.com/M336G' },
            { icon: 'seti:info', label: 'Website', href: 'https://m336.dev/' },
            { icon: 'email', label: 'Email', href: 'mailto:m336@m336.dev' }
        ],

        sidebar: [
            {
                label: 'GDPS Guides',
                items: [
                    {
						label: 'Custom RobTop-Like Rate Button',
        				translations: { 
							es: 'Botón de Rate Personalizado estilo RobTop',
							fr: 'Bouton de Rate Personnalisé' ,
							ru: 'Кастомная кнопка рейта, как у RobTop',
							ua: 'Кастомна кнопка рейту, як у RobTop'
						},
						slug: 'gdps/custom-rate-button'
					},
                    {
						label: 'Publishing your GDPS (+ some tips)',
        				translations: { 
							es: 'Publicar tu GDPS (+ algunos consejos)'
							fr: 'Mettre en ligne votre GDPS',
							ru: 'Публикация вашего GDPS (+ несколько советов)',
							ua: 'Публікація вашого GDPS (+ кілька порад)'
						},
						slug: 'gdps/publishing-gdps-tips'
					},
                    {
						label: 'List of All Commands',
        				translations: {
							es: 'Lista de Todos los Comandos',
							fr: 'Listes de Toutes les Commandes',
							ru: 'Список всех команд',
							ua: 'Список усіх команд'
						},
						slug: 'gdps/all-commands-list'
					},
                    {
						label: "Enabling Level Info's Sent indicator",
        				translations: { 
							es: "Activar el Indicador de Envío de Level Info",
							fr: "Activer l'indicateur Sent Level Info",
							ru: "Включение индикатора 'Level Info's Sent'",
							ua: "Увімкнення індикатора 'Level Info's Sent'"
						},
						slug: 'gdps/levelinfo-sent-indicator'
					},
                    {
						label: "Growing your GDPS (+ some tips)",
        				translations: { 
							es: "Hacer crecer tu GDPS (+ algunos consejos)",
							fr: "Développer votre GDPS",
							ru: "Развитие вашего GDPS (+ несколько советов)",
							ua: "Розвиток вашого GDPS (+ кілька порад)"
						},
						slug: 'gdps/growing-gdps-tips'
					},
                    {
						label: "Adding Custom Badges to your GDPS",
        				translations: { 
							es: "Agregar Insignias Personalizadas a tu GDSP",
							fr: "Ajouter des Badges Personnalisés",
							ru: "Добавление пользовательских значков",
							ua: "Додавання користувацьких значків"
						},
						slug: 'gdps/adding-custom-badges'
					},
                    {
						label: "Running a 24/7 Discord Radio Bot",
        				translations: { 
							es: "Tener un Bot de Radio de Discord 24/7",
							fr: "Avoir un bot Discord Radio 24/7",
							ru: "Запуск круглосуточного радио-бота в Discord",
							ua: "Запуск цілодобового радіо-бота в Discord"
						},
						slug: 'gdps/running-radio-bot'
					},
                    {
						label: "Editing your GDPS textures",
        				translations: { fr: "Modifier les textures de votre GDPS" },
						slug: 'gdps/editing-gdps-textures'
					}
                ]
            }
        ],
		}), sitemap()]
});
