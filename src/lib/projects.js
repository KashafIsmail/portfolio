import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

const projectsCollection = collection(db, "projects");

// ➕ Add project
export async function addProject(data) {
  return await addDoc(projectsCollection, data);
}

// 📥 Get all projects (latest first)
export async function getProjects() {
  const q = query(projectsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// ❌ Delete project
export async function deleteProject(id) {
  return await deleteDoc(doc(db, "projects", id));
}

// ✏️ Update project
export async function updateProject(id, data) {
  const projectRef = doc(db, "projects", id);
  return await updateDoc(projectRef, data);
}
