import { defineType, defineField } from 'sanity'

export const clients = defineType({
    name: 'clients',
    title: 'Clients',
    description: 'Client companies and their logos',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(100),
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility.',
                    validation: (Rule) => Rule.required(),
                }
            ]
        }),
        defineField({
            name: 'website',
            title: 'Company Website',
            type: 'url',
            description: 'Optional: Company website URL',
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which the logo should appear (lower numbers appear first)',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            description: 'Whether to display this client logo on the website',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'companyName',
            media: 'logo',
            subtitle: 'website',
            order: 'displayOrder'
        },
        prepare(selection) {
            const { title, media, subtitle, order } = selection
            return {
                title: title,
                subtitle: `${subtitle || 'No website'} | Order: ${order || 'Not set'}`,
                media: media
            }
        }
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'displayOrderAsc',
            by: [{ field: 'displayOrder', direction: 'asc' }]
        },
        {
            title: 'Company Name',
            name: 'companyNameAsc',
            by: [{ field: 'companyName', direction: 'asc' }]
        }
    ]
})
