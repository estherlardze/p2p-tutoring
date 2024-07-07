import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFileToFirebase = async (fileToUpload) => {
  let uploadedUrl = "";

  try {
    let fileRef;

    fileRef = ref(storage, `profile/${fileToUpload.name + v4()}`);

    const snapshot = await uploadBytes(fileRef, fileToUpload);

    uploadedUrl = await getDownloadURL(snapshot.ref);
  } catch (error) {
    throw new Error(`Error uploading file to firebase: ${error.message}`);
  }

  return uploadedUrl;
};




