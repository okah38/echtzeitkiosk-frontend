import { TranslationMessages } from 'react-admin';
import germanMessages from '../packages/ra-language-german-ts'

const customGermanMessages: TranslationMessages = {
    ...germanMessages,
    pos: {
        search: 'Suche',
        configuration: 'Konfiguration',
        language: 'Sprache',
        theme: {
            name: 'Theme',
            light: 'Hell',
            dark: 'Dunkel',
        },
        dashboard: {
            monthly_revenue: 'Monatlicher Umsatz',
            month_history: '30-Tage-Umsatz-Verlauf',
            new_orders: 'Neue Bestellungen',
            pending_reviews: 'Ausstehende Bewertungen',
            all_reviews: 'Alle Bewertungen ansehen',
            new_customers: 'Neue Kunden',
            all_customers: 'Alle Kunden ansehen',
            pending_orders: 'Ausstehende Bestellungen',
            order: {
                items:
                    'von %{customer_name}, ein Artikel |||| von %{customer_name}, %{nb_items} Artikel',
            },
            welcome: {
                title: 'Willkommen bei der react-admin e-Commerce Demo',
                subtitle:
                    'Dies ist der Admin von einem imaginären Poster Shop. Du kannst die Daten sehen und ändern - sie sind lokal auf deinem Computer und werden bei jedem Neuladen zurückgesetzt.',
                ra_button: 'react-admin Seite',
                demo_button: 'Quellcode für diese Demo',
            },
        },
        menu: {
            sales: 'Verkäufe',
            catalog: 'Katalog',
            customers: 'Kunden',
        },
    },
    resources: {
        users: {
            name: 'Benutzer |||| Benutzer',
          },
        customers: {
            name: 'Kunde |||| Kunden',
            fields: {
                address: 'Adresse',
                birthday: 'Geburtstag',
                city: 'Stadt',
                stateAbbr: 'Bundesland',
                commands: 'Bestellungen',
                first_name: 'Vorname',
                first_seen: 'zum ersten Mal gesehen',
                groups: 'Segmente',
                has_newsletter: 'Den Newsletter abonniert',
                has_ordered: 'Hat bestellt',
                last_name: 'Nachname',
                last_seen: 'zuletzt gesehen',
                last_seen_gte: 'Besucht seit',
                latest_purchase: 'Letzter Einkauf',
                name: 'Name',
                total_spent: 'Gesamtausgabe',
                zipcode: 'PLZ',
                password: 'Passwort',
                confirm_password: 'Passwort bestätigen',
            },
            filters: {
                last_visited: 'Zuletzt besucht',
                today: 'Heute',
                this_week: 'Diese Woche',
                last_week: 'Letzte Woche',
                this_month: 'Diesen Monat',
                last_month: 'Letzten Monat',
                earlier: 'Früher',
                has_ordered: 'Hat bestellt',
                has_newsletter: 'Den Newsletter abonniert',
                group: 'Segment',
            },
            fieldGroups: {
                identity: 'Identität',
                address: 'Adresse',
                stats: 'Statistiken',
                history: 'Verlauf',
                password: 'Passwort',
                change_password: 'Passwort ändern',
            },
            page: {
                delete: 'Kunde löschen',
            },
            errors: {
                password_mismatch:
                    'Die Passwortbestätigung ist nicht mit dem Passwort identisch.',
            },
        },
        commands: {
            name: 'Bestellung |||| Bestellungen',
            amount: '1 Bestellung |||| %{smart_count} Bestellungen',
            title: 'Bestellung %{reference}',
            fields: {
                basket: {
                    delivery: 'Lieferung',
                    reference: 'Referenz',
                    quantity: 'Menge',
                    sum: 'Summe',
                    tax_rate: 'Steuersatz',
                    taxes: 'Steuern',
                    total: 'Gesamt',
                    unit_price: 'Stückpreis',
                },
                address: 'Adresse',
                customer_id: 'Kunde',
                date_gte: 'Bestanden seit',
                date_lte: 'Bestehen vor',
                nb_items: 'Nr. Artikel',
                reference: 'Referenz',
                returned: 'Storniert',
                status: 'Status',
                total_gte: 'Mindestbetrag',
            },
            section: {
                order: 'Bestellung',
                customer: 'Kunde',
                shipping_address: 'Lieferadresse',
                items: 'Artikel',
                total: 'Gesamt',
            },
        },
        invoices: {
            name: 'Rechnung |||| Rechnungen',
            fields: {
                id: 'ID',
                date: 'Datum',
                customer_id: 'Kunde',
                command_id: 'Bestellung',
                date_gte: 'Ausgestellt seit',
                date_lte: 'Ausgestellt vor',
                address: 'Adresse',
                total_ex_taxes: 'Betrag ohne Steuern',
                delivery_fees: 'Lieferkosten',
                taxes: 'Steuern',
            },
        },
        products: {
            name: 'Produkt |||| Produkte',
            fields: {
                category_id: 'Kategorie',
                height_gte: 'Min. Höhe',
                height_lte: 'Max. Höhe',
                height: 'Höhe',
                image: 'Bild',
                price: 'Preis',
                reference: 'Referenz',
                sales: 'Verkäufe',
                stock_lte: 'Niedriger Lagerbestand',
                stock: 'Lagerbestand',
                thumbnail: 'Vorschaubild',
                width_gte: 'Min. Breite',
                width_lte: 'Max. Breite',
                width: 'Breite',
            },
            tabs: {
                image: 'Bild',
                details: 'Details',
                description: 'Beschreibung',
                reviews: 'Bewertungen',
            },
            filters: {
                categories: 'Kategorien',
                stock: 'Lagerbestand',
                no_stock: 'Nicht auf Lager',
                low_stock: '1 - 9 auf Lager',
                average_stock: '10 - 49 auf Lager',
                enough_stock: '50 oder mehr auf Lager',
                sales: 'Verkäufe',
                best_sellers: 'Bestseller',
                average_sellers: 'Durchschnitt',
                low_sellers: 'Wenig verkauft',
                never_sold: 'Noch nie verkauft',
            },
        },
        categories: {
            name: 'Kategorie |||| Kategorien',
            fields: {
                name: 'Name',
                products: 'Produkte',
            },
        },
        reviews: {
            name: 'Bewertung |||| Bewertungen',
            amount: '1 Bewertung |||| %{smart_count} Bewertungen',
            relative_to_poster: 'Bewertung auf Produkt',
            detail: 'Bewertung Details',
            fields: {
                customer_id: 'Kunde',
                command_id: 'Bestellung',
                product_id: 'Produkt',
                date_gte: 'Bewertet seit',
                date_lte: 'Bewertet vor',
                date: 'Datum',
                comment: 'Kommentar',
                status: 'Status',
                rating: 'Rating',
            },
            action: {
                accept: 'Akzeptieren',
                reject: 'Ablehnen',
            },
            notification: {
                approved_success: 'Bewertung akzeptiert',
                approved_error: 'Fehler: Bewertung wurde nicht bestätigt',
                rejected_success: 'Bewertung abgelehnt',
                rejected_error: 'Fehler: Bewertung wurde nicht abgelehnt',
            },
        },
        segments: {
            name: 'Segment |||| Segmente',
            fields: {
                customers: 'Kunden',
                name: 'Name',
            },
            data: {
                compulsive: 'Verpflichtend',
                collector: 'Sammler',
                ordered_once: 'Einmal bestellt',
                regular: 'Regulär',
                returns: 'Rückgaben',
                reviewer: 'Kommentator',
            },
        },
    },
};

export default customGermanMessages;
