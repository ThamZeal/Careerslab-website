import { defineType, defineField } from 'sanity'

export const jobPost = defineType({
    name: 'jobPost',
    title: 'Job Post',
    description: 'A job post for a specific position',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'locationType',
            title: 'Location Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Remote', value: 'Remote' },
                    { title: 'On-Site', value: 'On-Site' },
                    { title: 'Hybrid', value: 'Hybrid' },
                ],
            },
        }),
        defineField({
            name: 'workType',
            title: 'Work Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-Time' },
                    { title: 'Part-time', value: 'Part-Time' },
                    { title: 'Contract', value: 'Contract' },
                    { title: 'Internship', value: 'Internship' },
                    { title: 'Temporary', value: 'Temporary' },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'applyLink',
            title: 'Apply Link',
            type: 'url',
        }),
    ],
})
