import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Index({ projects }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('admin.projects.destroy', id));
        }
    };

    return (
        <AdminLayout title="Projects">
            <Head title="Projects" />

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Projects</h1>
                        <p className="text-gray-500 mt-1">Manage your portfolio projects</p>
                    </div>
                    <Link href={route('admin.projects.create')}>
                        <Button text="Add Project" variant="primary" className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </Button>
                    </Link>
                </div>

                {projects.data && projects.data.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.data.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group">
                                {project.image && (
                                    <div className="aspect-video overflow-hidden bg-gray-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {project.description}
                                    </p>

                                    {project.tech_stack && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech_stack.split(',').slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                                        <Link
                                            href={route('admin.projects.edit', project.id)}
                                            className="flex-1 px-4 py-2 text-center text-sm font-medium text-brand-700 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="flex-1 px-4 py-2 text-center text-sm font-medium text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">No projects yet</h3>
                        <p className="text-gray-500 mb-4">Add your first project to showcase your work</p>
                        <Link href={route('admin.projects.create')}>
                            <Button text="Add Project" variant="primary" />
                        </Link>
                    </div>
                )}

                {projects.links && projects.data && projects.data.length > 0 && (
                    <div className="mt-8 flex justify-center gap-2">
                        {projects.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${link.active
                                        ? 'bg-brand-600 text-white'
                                        : link.url
                                            ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
