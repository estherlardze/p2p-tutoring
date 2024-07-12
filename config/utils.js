import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export const uploadFileToFirebase = async (type, fileToUpload) => {
  let uploadedUrl = "";

  try {
    let fileRef;

    if (type == "profile") {
      fileRef = ref(storage, `profile/${fileToUpload.name + v4()}`);
    } else if (type == "result") {
      fileRef = ref(storage, `result/${fileToUpload.name + v4()}`);
    }

    const snapshot = await uploadBytes(fileRef, fileToUpload);

    uploadedUrl = await getDownloadURL(snapshot.ref);
  } catch (error) {
    throw new Error(`Error uploading file to firebase: ${error.message}`);
  }

  return uploadedUrl;
};




