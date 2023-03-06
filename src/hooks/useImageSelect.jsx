import React, { useState, useEffect } from 'react'

// Recoil
import { useRecoilState } from 'recoil';
import { userAuthenticated } from '@/atoms/Modals'
// Amplify
import { Storage } from 'aws-amplify'

const useImageSelect = () => {
    const [userAuth, setUserAuth] = useRecoilState(userAuthenticated)
    const fetchImageFromUri = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
    };

    const uploadImage = async (filename, uri) => {
        try {
            const image = await fetchImageFromUri(uri);
            const { key } = await Storage.put(filename, image, {
                level: "protected",
                contentType: "image/jpeg",
                progressCallback(progress) {
                    // setLoading(progress);
                },
            })
            return key;
        } catch (error) {
            console.error(error);
        }

    };
    const downloadImage = async (key) => {
        try {
            // configuracion del storage 
            Storage.configure({ level: 'protected' });
            // peticion de la imagen con su key y el level que lo requiero
            const url = await Storage.get(key, { level: "protected" })
            return url
        } catch (error) {
            console.error(error)
        }
    };


    return { uploadImage, downloadImage }
}

export default useImageSelect

