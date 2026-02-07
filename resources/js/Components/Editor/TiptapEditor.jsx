import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Youtube from '@tiptap/extension-youtube';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2 sticky top-0 bg-white z-10">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'is-active bg-gray-200' : ''}`}
                title="Bold"
            >
                <strong>B</strong>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'is-active bg-gray-200' : ''}`}
                title="Italic"
            >
                <em>I</em>
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('strike') ? 'is-active bg-gray-200' : ''}`}
                title="Strike"
            >
                <s>S</s>
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('paragraph') ? 'is-active bg-gray-200' : ''}`}
            >
                P
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 1 }) ? 'is-active bg-gray-200' : ''}`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'is-active bg-gray-200' : ''}`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 3 }) ? 'is-active bg-gray-200' : ''}`}
            >
                H3
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'is-active bg-gray-200' : ''}`}
            >
                • List
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'is-active bg-gray-200' : ''}`}
            >
                1. List
            </button>
            <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
            <button
                onClick={() => {
                    const url = window.prompt('URL')
                    if (url) {
                        editor.chain().focus().setLink({ href: url }).run()
                    }
                }}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('link') ? 'is-active bg-gray-200' : ''}`}
            >
                Link
            </button>
        </div>
    );
};

export default function TiptapEditor({ content, onChange, className = '' }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-green-600 hover:text-green-800 underline',
                }
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'rounded-lg shadow-md max-w-full h-auto',
                },
            }),
            Youtube.configure({
                controls: false,
            }),
            Placeholder.configure({
                placeholder: 'Write something amazing...',
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none min-h-[300px] p-4',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className={`bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden ${className}`}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
