import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyMCEEditor({ content, onChange, className = '' }) {
    const editorRef = useRef(null);

    const handleEditorChange = (newContent) => {
        onChange(newContent);
    };

    return (
        <div className={className}>
            <Editor
                apiKey="jldgcl0gdh932kgjn8qkdr2svombqx8sofoye9mm4lo88npc"
                onInit={(evt, editor) => editorRef.current = editor}
                value={content}
                onEditorChange={handleEditorChange}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | image media link | code | help',
                    content_style: 'body { font-family: Inter, sans-serif; font-size: 16px; line-height: 1.6; }',

                    // Image upload configuration
                    images_upload_url: route('admin.upload.tinymce'),
                    images_upload_handler: async (blobInfo, progress) => {
                        return new Promise((resolve, reject) => {
                            const formData = new FormData();
                            formData.append('file', blobInfo.blob(), blobInfo.filename());

                            fetch(route('admin.upload.tinymce'), {
                                method: 'POST',
                                body: formData,
                                headers: {
                                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                                    'Accept': 'application/json',
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.location) {
                                        resolve(data.location);
                                    } else {
                                        reject('Upload failed: ' + (data.error || 'Unknown error'));
                                    }
                                })
                                .catch(error => {
                                    reject('Upload failed: ' + error.message);
                                });
                        });
                    },

                    // Clean, modern UI
                    skin: 'oxide',
                    content_css: 'default',
                    branding: false,
                    promotion: false,
                }}
            />
        </div>
    );
}
