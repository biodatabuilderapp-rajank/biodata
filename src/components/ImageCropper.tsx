"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Check, X } from "lucide-react";

interface Props {
    image: string;
    onCropComplete: (croppedImage: string) => void;
    onCancel: () => void;
    shape: "circle" | "square";
}

// Helper to extract cropped image
const getCroppedImg = async (imageSrc: string, pixelCrop: any, shape: "circle" | "square"): Promise<string> => {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", (error) => reject(error));
        img.src = imageSrc;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return "";
    }

    // Set canvas size to match the bounding box of the crop
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Draw the cropped image area to the canvas
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    return new Promise((resolve) => {
        canvas.toBlob((file) => {
            resolve(URL.createObjectURL(file!));
        }, "image/png");
    });
};

export default function ImageCropper({ image, onCropComplete, onCancel, shape }: Props) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const onCropCompleteHandler = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        try {
            const croppedImage = await getCroppedImg(image, croppedAreaPixels, shape);
            onCropComplete(croppedImage);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900 z-10">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Adjust Photo</h3>
                    <button onClick={onCancel} className="p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative w-full h-80 bg-zinc-100 dark:bg-black">
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape={shape === "circle" ? "round" : "rect"}
                        showGrid={false}
                        onCropChange={setCrop}
                        onCropComplete={onCropCompleteHandler}
                        onZoomChange={setZoom}
                    />
                </div>

                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-4 bg-white dark:bg-zinc-900 z-10">
                    <div>
                        <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2 block">Zoom</label>
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20"
                        >
                            <Check className="w-4 h-4" />
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
