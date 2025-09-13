"use client";
import { useState, useEffect } from "react";
import { addProject, getProjects, deleteProject, updateProject } from "@/lib/projects";
import { Trash2, Edit } from "lucide-react";
import styles from "./AddProjectForm.module.css";

export default function AddProjectForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ✏️ Edit state
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "portfolio");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzfkyrdmk/image/upload",
      { method: "POST", body: formData }
    );

    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc || !link) return setStatus("Please fill all fields!");

    try {
      setStatus(editId ? "Updating..." : "Uploading...");

      let imageUrl = null;
      if (file) {
        imageUrl = await uploadToCloudinary(file);
      }

      if (editId) {
        // ✏️ Update project
        await updateProject(editId, {
          title,
          desc,
          link,
          ...(imageUrl && { image: imageUrl }),
        });
        setStatus("Project updated!");
      } else {
        // ➕ Add new project
        const img = imageUrl || "";
        await addProject({
          title,
          desc,
          link,
          image: img,
          createdAt: new Date(),
        });
        setStatus("Project added!");
      }

      setTitle("");
      setDesc("");
      setLink("");
      setFile(null);
      setEditId(null);

      getProjects().then(setProjects);
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProject(deleteId);
      setProjects(projects.filter((p) => p.id !== deleteId));
      setShowModal(false);
      setDeleteId(null);
    } catch (err) {
      alert("Error deleting project: " + err.message);
    }
  };

  const handleEdit = (p) => {
    setTitle(p.title);
    setDesc(p.desc);
    setLink(p.link);
    setFile(null);
    setEditId(p.id);
  };

  return (
    <div className={styles.container}>
      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>{editId ? "Edit Project" : "Add New Project"}</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          required
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Project Description"
          required
        />
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Project Link"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">{editId ? "Update Project" : "Add Project"}</button>
        {status && <p className={styles.status}>{status}</p>}
      </form>

      {/* List */}
      <h2 className={styles.listHeading}>Your Projects</h2>
      <ul className={styles.projectList}>
        {projects.map((p) => (
          <li key={p.id} className={styles.projectCard}>
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
            <div className={styles.actions}>
              <Edit
                size={22}
                className={styles.edit}
                onClick={() => handleEdit(p)}
              />
              <Trash2
                size={22}
                className={styles.trash}
                onClick={() => confirmDelete(p.id)}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this project?</p>
            <div className={styles.modalActions}>
              <button onClick={handleDelete} className={styles.deleteBtn}>
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
