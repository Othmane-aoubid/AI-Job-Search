import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const resumesCollection = collection(db, "resumes");

export const saveResume = async (resumeData) => {
  try {
    const docRef = await addDoc(resumesCollection, resumeData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const loadResumes = async () => {
  try {
    const querySnapshot = await getDocs(resumesCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error loading documents: ", error);
    throw error;
  }
};

export const updateResume = async (id, updatedData) => {
  try {
    const resumeDoc = doc(resumesCollection, id);
    await updateDoc(resumeDoc, updatedData);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

export const deleteResume = async (id) => {
  try {
    const resumeDoc = doc(resumesCollection, id);
    await deleteDoc(resumeDoc);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
