import api from "./axios";

const API_RECEIPT_URL = "/receipt";

export const apiCreateReceipt = async (formData: FormData) => {
  try {
    await api.post(`${API_RECEIPT_URL}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error: any) {
    console.log("🔴 error.response?.data:", error.response?.data);
    console.log("🟡 error.response?.status:", error.response?.status);
    console.log("🟢 error.message:", error.message);
    throw new Error(
      error.response?.data.message || "Error al intentar generar recibo"
    );
  }
};
