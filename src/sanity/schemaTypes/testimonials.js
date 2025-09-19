import { defineType, defineField } from 'sanity'

export const testimonials = defineType({
    name: 'testimonials',
    title: 'Testimonials',
    description: 'Client testimonials and reviews',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Testimonial Quote',
            type: 'text',
            validation: (Rule) => Rule.required().min(10).max(500),
            description: 'The main testimonial text',
        }),
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(100),
        }),
        defineField({
            name: 'position',
            title: 'Position/Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(150),
            description: 'Job title and company (e.g., "CTO, TechNova Solutions")',
        }),
        defineField({
            name: 'image',
            title: 'Author Photo',
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
            name: 'company',
            title: 'Company Name',
            type: 'string',
            description: 'Optional: Company name if not included in position',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
            description: 'Rating out of 5 stars',
            initialValue: 5,
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which the testimonial should appear (lower numbers appear first)',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            description: 'Whether to display this testimonial on the website',
            initialValue: true,
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Mark as featured testimonial for special display',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'position',
            media: 'image',
            quote: 'quote',
            order: 'displayOrder'
        },
        prepare(selection) {
            const { title, subtitle, media, quote, order } = selection
            return {
                title: title,
                subtitle: `${subtitle} | Order: ${order || 'Not set'}`,
                description: quote ? `"${quote.substring(0, 100)}..."` : 'No quote',
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
            title: 'Author Name',
            name: 'authorNameAsc',
            by: [{ field: 'author', direction: 'asc' }]
        },
        {
            title: 'Rating (High to Low)',
            name: 'ratingDesc',
            by: [{ field: 'rating', direction: 'desc' }]
        }
    ]
})
