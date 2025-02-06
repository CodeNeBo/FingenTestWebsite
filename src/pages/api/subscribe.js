export async function post({ request }) {
    try {
      const { email } = await request.json();
  
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
      }
  
      const apiKey = import.meta.env.SENDINBLUE_API_KEY;
      const listId = parseInt(import.meta.env.BREVO_LIST_ID);
  
      const payload = {
        email,
        listIds: [listId],
        updateEnabled: true
      };
  
      const response = await fetch("https://api.sendinblue.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return new Response(JSON.stringify({ error: errorData.message || "Failed to subscribe" }), {
          status: response.status,
        });
      }
  
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { status: 500 });
    }
  }
  