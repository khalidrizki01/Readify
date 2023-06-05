import React, { useState } from 'react';

type UpdateBookProps = {
    title: string;
    details: string;
    cover: string;
    onUpdate: (title: string, details: string, cover: string) => void;
};

const UpdateBook: React.FC<UpdateBookProps> = ({ title, details, cover, onUpdate }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedDetails, setUpdatedDetails] = useState(details);
    const [updatedCover, setUpdatedCover] = useState(cover);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                setUpdatedCover(reader.result as string);
            };
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onUpdate(updatedTitle, updatedDetails, updatedCover);
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto my-8">
            <div className="flex justify-between mb-4">
                <h1 className="text-lg font-semibold">Update Book</h1>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <img src={updatedCover} alt={updatedTitle} className="w-48 h-48 object-cover"/>
                <div>
                    <label className="text-lg font-semibold">Book Name</label>
                    <input type="text" value={updatedTitle} onChange={e => setUpdatedTitle(e.target.value)} className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"/>
                </div>
                <div>
                    <label className="text-lg font-semibold">Details</label>
                    <textarea value={updatedDetails} onChange={e => setUpdatedDetails(e.target.value)} className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"/>
                </div>
                <div>
                    <label className="text-lg font-semibold">Change Your Book Picture</label>
                    <input type="file" onChange={handleFileChange} className="w-full mt-1"/>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;
