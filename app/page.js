'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import moment from 'moment';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Spinner from '@/components/spinner/Spinner';
import { deleteData, getData } from '@/utilities/axios';
import { HiTrash } from 'react-icons/hi';

export default function AvatarUploadPage() {
    const inputFileRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchApiData = async () => {
        try {
            const data = await getData('/api/v1/files/download');

            setFiles(data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);

        fetchApiData();
    }, []);

    const handleFileUploadClick = async (event) => {
        event.preventDefault();
        const file = inputFileRef.current.files?.[0];

        if (file) {
            const uploadPromise = fetch(
                `/api/v1/files/upload?filename=${file.name}`,
                {
                    method: 'POST',
                    body: file,
                }
            );

            toast.promise(uploadPromise, {
                loading: 'Uploading...',
                success: async (result) => {
                    if (result.ok) {
                        const response = await result.json();
                        console.log('File uploaded successfully:', response);
                        await fetchApiData(); // Refresh the list after successful files
                        return 'File uploaded successfully.';
                    } else {
                        throw new Error('File files failed.');
                    }
                },
                error: 'An error occurred while uploading the item.',
            });
        } else {
            toast.error('No file selected for files.');
        }
    };

    const handleDeleteClick = async (url) => {
        const deletedPromise = deleteData(
            `/api/v1/files/delete?url=${url}`,
            ''
        );

        toast.promise(deletedPromise, {
            loading: 'Deleting...',
            success: (result) => {
                // Check if the delete operation was successful
                if (result.success) {
                    return result.message;
                } else {
                    throw new Error(result.message);
                }
            },
            error: 'An error occurred while Deleting the values.',
        });

        try {
            const result = await deletedPromise;
            if (result.success) {
                await fetchApiData();
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return loading ? (
        <Spinner />
    ) : (
        <div>
            <Table>
                <TableCaption>A list of your uploaded files.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Preview</TableHead>
                        <TableHead className="w-[250px]">Name</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead className="text-right">
                            Upload Time
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {files &&
                        files.map((file) => (
                            <TableRow key={file.url}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage
                                            src={file.url}
                                            alt={`${file.pathname} image`}
                                        />
                                        <AvatarFallback>{`${file.pathname} image`}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{file.pathname}</TableCell>
                                <TableCell>
                                    <Link
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {file.url}
                                    </Link>
                                </TableCell>
                                <TableCell>{file.size}</TableCell>
                                <TableCell>
                                    {moment(file.uploadedAt).format(
                                        'MM/DD/YYYY h:mm:ss A'
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    <HiTrash
                                        className="cursor-pointer text-destructive text-lg"
                                        onClick={() =>
                                            handleDeleteClick(file.url)
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="ml-1" htmlFor="picture">
                    Upload Your File
                </Label>

                <div className="flex gap-4 mt-2">
                    <Input
                        id="picture"
                        name="file"
                        ref={inputFileRef}
                        type="file"
                        className="cursor-pointer"
                    />
                    <Button
                        size="xs"
                        className="text-xs p-1.5 px-25"
                        onClick={handleFileUploadClick}
                    >
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    );
}
