import { supabase } from "@/lib/supabase"
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Uderzamy tylko POSTem",
    });
  }

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error) {
    res.status(500).json({
      success: false,
      message: "Nie udało się",
    });
  }

  res.status(200).json({
    success: true, message: "Udało się"
  })
}