export const loginWithEmailandPassword = async (formData) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Signup successful!", responseData);
    } else {
      throw new Error(`Signup failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error during signup:", error);
    throw error; // Re-throw the error to propagate it to the calling code
  }
};
