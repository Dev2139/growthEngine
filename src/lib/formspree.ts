/**
 * Formspree Mail Integration Helper
 * 
 * Submits form data to Formspree service.
 * Supports VITE_FORMSPREE_ID or VITE_FORMSPREE_ENDPOINT environment variables.
 */

export const DEFAULT_FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "mqaevepk";

export interface FormspreePayload {
  [key: string]: any;
}

export interface FormspreeResponse {
  success: boolean;
  error?: string;
}

/**
 * Submit form data to Formspree endpoint
 * @param data Data object to submit
 * @param customFormId Optional custom Formspree form ID
 */
export async function submitToFormspree(
  data: FormspreePayload,
  customFormId?: string
): Promise<FormspreeResponse> {
  const formId = customFormId || import.meta.env.VITE_FORMSPREE_ID || DEFAULT_FORMSPREE_ID;
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || `https://formspree.io/f/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    }

    const errorJson = await response.json().catch(() => null);
    const errorMessage =
      errorJson?.errors?.map((e: { message: string }) => e.message).join(", ") ||
      errorJson?.error ||
      "Form submission failed. Please check your inputs and try again.";

    return { success: false, error: errorMessage };
  } catch (err: any) {
    console.error("Formspree submission error:", err);
    return {
      success: false,
      error: err?.message || "Network error. Please check your connection and try again.",
    };
  }
}
