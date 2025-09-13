import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function PUT(req) {
  try {
    const { id, ...data } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Project ID is required" }),
        { status: 400 }
      );
    }

    const projectRef = doc(db, "projects", id);
    await updateDoc(projectRef, data);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
